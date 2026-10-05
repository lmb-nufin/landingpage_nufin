"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { MOTION_ENABLED } from "./config";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Capa de animación de la landing. No renderiza UI: busca elementos marcados con
 * `data-motion` y les aplica una de cuatro animaciones.
 *
 *   hero-title    Titular del hero: líneas que suben dentro de una máscara.
 *   hero-fade     Hijos directos (subtítulo, CTA) aparecen después del titular.
 *   hero-media    Imagen del hero: zoom muy leve (1 → 1.05) ligado al scroll.
 *   reveal-title  Títulos de sección: misma máscara por líneas al entrar en pantalla (una vez).
 *   cta-tint      Capa de color del CTA final: su opacidad sigue al scroll (negro → morado).
 *
 * Con prefers-reduced-motion no se anima nada y todo queda visible.
 * En móvil (<768px) las distancias y duraciones se reducen ~40%.
 */
export function LandingMotion() {
  const ran = useRef(false);

  useGSAP(() => {
    if (!MOTION_ENABLED) return;
    ran.current = true;

    const root = document.documentElement;
    const mm = gsap.matchMedia();

    // Deep links (#seccion y redirects heredados como /como_funciona.html → /#como-funciona):
    // ScrollTrigger mide la página al cargar y puede dejar el scroll en 0 después de que el
    // navegador ya saltó al ancla. Se re-aplica el salto mientras el usuario no haya movido nada.
    const hash = decodeURIComponent(window.location.hash.slice(1));
    let userMoved = false;
    const markMoved = () => {
      userMoved = true;
    };
    const restoreAnchor = () => {
      if (!hash || userMoved) return;
      const el = document.getElementById(hash);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (Math.abs(top) > 2) window.scrollTo({ top: top + window.scrollY, behavior: "instant" });
    };
    const moveEvents = ["wheel", "touchstart", "keydown"] as const;
    let stopTimer: number | undefined;
    if (hash) {
      moveEvents.forEach((e) => window.addEventListener(e, markMoved, { once: true, passive: true }));
      ScrollTrigger.addEventListener("refresh", restoreAnchor);
      window.addEventListener("load", restoreAnchor);
      requestAnimationFrame(restoreAnchor);
      stopTimer = window.setTimeout(() => ScrollTrigger.removeEventListener("refresh", restoreAnchor), 5000);
    }
    const cleanupAnchor = () => {
      moveEvents.forEach((e) => window.removeEventListener(e, markMoved));
      ScrollTrigger.removeEventListener("refresh", restoreAnchor);
      window.removeEventListener("load", restoreAnchor);
      window.clearTimeout(stopTimer);
    };

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 767px)",
        // Siempre verdadera: GSAP solo ejecuta el callback si alguna condición se cumple.
        always: "all",
      },
      (ctx) => {
        const { motion, mobile } = ctx.conditions as { motion: boolean; mobile: boolean };

        // Sin motion: liberar lo que el CSS ocultó para evitar el destello inicial.
        if (!motion) {
          root.classList.add("motion-done");
          return;
        }

        const k = mobile ? 0.6 : 1; // intensidad
        const splits: SplitText[] = [];

        // ---------- 1 · Hero ----------
        const heroTitle = document.querySelector<HTMLElement>('[data-motion="hero-title"]');
        const heroFade = document.querySelectorAll<HTMLElement>('[data-motion="hero-fade"] > *');

        const intro = gsap.timeline({ delay: 0.15 });
        if (heroTitle) {
          const split = SplitText.create(heroTitle, { type: "lines", mask: "lines", linesClass: "motion-line" });
          splits.push(split);
          gsap.set(heroTitle, { opacity: 1 });
          intro.from(split.lines, {
            yPercent: 110,
            duration: 0.9 * k + 0.2,
            ease: "power3.out",
            stagger: 0.12,
          });
        }
        if (heroFade.length) {
          gsap.set(heroFade, { opacity: 0, y: 14 * k });
          intro.to(
            heroFade,
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1, clearProps: "transform" },
            heroTitle ? "-=0.45" : 0,
          );
        }
        // Una vez montado el timeline, el contenido ya no depende del CSS de arranque.
        intro.eventCallback("onStart", () => root.classList.add("motion-done"));

        const heroMedia = document.querySelector<HTMLElement>('[data-motion="hero-media"]');
        if (heroMedia) {
          gsap.fromTo(
            heroMedia,
            { scale: 1 },
            {
              scale: 1 + 0.05 * k,
              ease: "none",
              scrollTrigger: {
                trigger: heroMedia,
                start: "top top+=80",
                end: "bottom top",
                scrub: mobile ? true : 0.6,
              },
            },
          );
        }

        // ---------- 3 · Títulos de sección ----------
        document.querySelectorAll<HTMLElement>('[data-motion="reveal-title"]').forEach((el) => {
          const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "motion-line" });
          splits.push(split);
          gsap.from(split.lines, {
            yPercent: 110,
            duration: 0.8 * k + 0.15,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        // ---------- 4 · CTA final: negro → morado ----------
        document.querySelectorAll<HTMLElement>('[data-motion="cta-tint"]').forEach((layer) => {
          gsap.fromTo(
            layer,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: layer.parentElement ?? layer,
                start: "top 90%",
                end: mobile ? "top 45%" : "top 35%",
                scrub: mobile ? true : 0.8,
              },
            },
          );
        });

        // Las fuentes web cambian el corte de líneas: recalcular cuando terminen de cargar.
        if (document.fonts?.status !== "loaded") {
          document.fonts?.ready.then(() => ScrollTrigger.refresh());
        }

        return () => splits.forEach((s) => s.revert());
      },
    );

    return () => {
      cleanupAnchor();
      mm.revert();
    };
  });

  return null;
}
