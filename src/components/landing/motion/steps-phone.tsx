"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import s from "./steps-phone.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "Cómo funciona" con teléfono sticky: los pasos pasan a la izquierda (abajo en móvil)
 * y la pantalla del teléfono cambia ligada al scroll.
 *
 * Orden de pasos = flujo real de la app (validar si cambia). Montos ilustrativos.
 * Con prefers-reduced-motion: misma estructura, la pantalla cambia sin animación.
 */
const STEPS = [
  { title: "Descarga Nufin", desc: "Instala la app desde Google Play en tu celular Samsung." },
  { title: "Identifícate", desc: "Foto de tu INE y una selfie. Sin papeleo ni comprobantes." },
  { title: "Conoce tu oferta", desc: "Ves el monto y tus pagos antes de aceptar." },
  { title: "Activa la protección", desc: "Tu Samsung queda como garantía con Knox. Si pagas a tiempo, lo usas normal." },
  { title: "Recibe tu dinero", desc: "Transferencia SPEI directa a tu cuenta." },
];

function Status({ light }: { light?: boolean }) {
  return (
    <div className={cn(s.status, light && s.statusLight)} aria-hidden="true">
      <span>9:41</span>
      <span>●●●</span>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <div className={cn(s.purple, s.hero)}>
        <Status light />
        <p className={s.hello}>¡Hola, Lorena!</p>
      </div>
      <div className={s.body2}>
        <div className={cn(s.card, s.lift)}>
          <p className={s.kicker}>Tu crédito disponible</p>
          <p className={s.amount} style={{ fontSize: "1.9em" }}>$1,000</p>
          <p className={s.muted}>Pagos quincenales</p>
          <span className={s.btn}>Solicitar crédito</span>
        </div>
      </div>
    </>
  );
}

function IdentityScreen() {
  return (
    <>
      <Status />
      <div className={s.top}>Identifícate</div>
      <div className={s.body2}>
        <div className={s.idCard}>
          <span className={s.idPhoto} />
          <span className={s.idLines}>
            <i /> <i style={{ width: "70%" }} /> <i style={{ width: "50%" }} />
          </span>
        </div>
        <span className={s.selfie} />
        <p className={s.check}><i />INE vigente</p>
        <p className={s.check}><i />Selfie</p>
      </div>
    </>
  );
}

function OfferScreen() {
  return (
    <>
      <Status />
      <div className={s.top}>Tu oferta</div>
      <div className={s.body2}>
        <p className={s.kicker}>Te prestamos</p>
        <p className={s.amount}>$1,000</p>
        <div className={s.card}>
          <p className={s.row}><span>Plazo</span><b>6 quincenas</b></p>
          <p className={s.row}><span>Pagos</span><b>Días 1 y 16</b></p>
          <p className={s.row}><span>Total a pagar</span><b>Lo ves aquí</b></p>
        </div>
        <span className={s.btn}>Aceptar oferta</span>
      </div>
    </>
  );
}

function KnoxScreen() {
  return (
    <div className={cn(s.purple, "flex flex-1 flex-col")}>
      <Status light />
      <div className={s.center}>
        <span className={s.shield}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
            <path d="M8.5 12l2.5 2.5 4.5-5" />
          </svg>
        </span>
        <p className={s.title}>Activando la protección de tu celular</p>
        <p className={cn(s.muted, s.mutedLight)}>Samsung Knox · tu garantía</p>
        <span className={s.bar}><i /></span>
      </div>
    </div>
  );
}

function DepositScreen() {
  return (
    <div className={cn(s.purple, "flex flex-1 flex-col")}>
      <Status light />
      <div className={s.center}>
        <span className={s.ok}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <p className={cn(s.kicker, s.kickerLight)}>Depósito enviado</p>
        <p className={s.amount}>$1,000</p>
        <p className={cn(s.muted, s.mutedLight)}>Transferencia SPEI a tu cuenta</p>
        <div className={s.receipt}>
          <p className={s.row}><span>Estatus</span><b>Liquidado</b></p>
          <p className={s.row}><span>Hora</span><b>9:41 a.m.</b></p>
        </div>
      </div>
    </div>
  );
}

const SCREENS = [HomeScreen, IdentityScreen, OfferScreen, KnoxScreen, DepositScreen];
const LABELS = ["Inicio de la app", "Validación de identidad", "Oferta de crédito", "Activación de protección Knox", "Depósito por SPEI"];

export function StepsPhone() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  useGSAP(
    () => {
      const list = root.current?.querySelector<HTMLElement>("[data-steps]");
      const screens = gsap.utils.toArray<HTMLElement>("[data-screen]", root.current);
      const fill = root.current?.querySelector<HTMLElement>("[data-fill]");
      if (!list || screens.length === 0) return;

      const n = screens.length;
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px)",
          // Siempre verdadera: GSAP solo ejecuta el callback si alguna condición se cumple.
          always: "all",
        },
        (ctx) => {
          const { motion, mobile } = ctx.conditions as { motion: boolean; mobile: boolean };
          setIsStatic(!motion);

          const items = () => list.querySelectorAll<HTMLElement>("li");
          const half = () => (items()[0]?.offsetHeight ?? 0) / 2;
          const lastCenter = () => {
            const li = items()[items().length - 1];
            return li ? li.offsetTop + li.offsetHeight / 2 : list.offsetHeight;
          };
          // En móvil el teléfono ocupa la parte de arriba: el paso activo se lee más abajo.
          const ref = mobile ? "72%" : "center";
          let last = -1;
          const track = (p: number) => {
            const i = Math.min(n - 1, Math.max(0, Math.round(p * (n - 1))));
            if (i !== last) {
              last = i;
              setActive(i);
            }
          };

          if (!motion) {
            ScrollTrigger.create({
              trigger: list,
              start: () => `top+=${half()} ${ref}`,
              end: () => `top+=${lastCenter()} ${ref}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => track(self.progress),
            });
            return;
          }

          gsap.set(screens.slice(1), { opacity: 0, yPercent: 6, scale: 0.97 });
          if (fill) gsap.set(fill, { scaleY: 0, transformOrigin: "top center" });

          const blur = mobile ? 0 : 3;
          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 0.5 },
            scrollTrigger: {
              trigger: list,
              // Paso i queda centrado en pantalla cuando progress = i / (n - 1)
              start: () => `top+=${half()} ${ref}`,
              end: () => `top+=${lastCenter()} ${ref}`,
              invalidateOnRefresh: true,
              scrub: mobile ? 0.3 : 0.7,
              onUpdate: (self) => track(self.progress),
            },
          });

          for (let i = 0; i < n - 1; i++) {
            const at = i + 0.25;
            tl.to(
              screens[i],
              { opacity: 0, scale: 0.94, yPercent: -3, filter: blur ? `blur(${blur}px)` : "none" },
              at,
            ).fromTo(
              screens[i + 1],
              { opacity: 0, scale: 0.97, yPercent: 6, filter: blur ? `blur(${blur}px)` : "none" },
              { opacity: 1, scale: 1, yPercent: 0, filter: "blur(0px)" },
              at,
            );
          }
          if (fill) tl.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: "none", duration: n - 1 }, 0);
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={cn("relative md:grid md:grid-cols-2 md:gap-12", isStatic && s.static)}>
      {/* Teléfono: sticky arriba en móvil, centrado a la derecha en desktop */}
      <div className="sticky top-16 z-20 -mx-8 flex justify-center bg-background/95 px-8 pb-4 pt-3 md:order-2 md:mx-0 md:h-[calc(100vh-4rem)] md:items-center md:bg-transparent md:p-0">
        <div className={s.phone} role="img" aria-label={`App de Nufin: ${LABELS[active]}`}>
          <div className={s.body}>
            <div className={s.screenArea}>
              {SCREENS.map((Screen, i) => (
                <div key={i} data-screen className={s.screen} data-active={active === i} aria-hidden="true">
                  <Screen />
                </div>
              ))}
            </div>
            <span className={s.camera} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Pasos */}
      <ol data-steps className="relative md:order-1 md:pb-[25vh]">
        <span aria-hidden="true" className="absolute bottom-[22.5vh] left-[1.1875rem] top-[22.5vh] w-0.5 rounded-full bg-gray-200 md:bottom-[50vh] md:top-[25vh]" />
        <span data-fill aria-hidden="true" className="absolute bottom-[22.5vh] left-[1.1875rem] top-[22.5vh] w-0.5 rounded-full bg-deeppurple md:bottom-[50vh] md:top-[25vh]" />
        {STEPS.map((step, i) => {
          const state = i === active ? "on" : i < active ? "done" : "next";
          return (
            <li key={step.title} className="relative flex min-h-[45vh] items-center gap-5 md:min-h-[50vh]">
              <span
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-base font-black transition-colors duration-300",
                  state === "on" && "border-deeppurple bg-deeppurple text-white",
                  state === "done" && "border-deeppurple bg-white text-deeppurple",
                  state === "next" && "border-gray-200 bg-white text-gray-400",
                )}
              >
                {i + 1}
              </span>
              <div className={cn("transition-opacity duration-300", state === "on" ? "opacity-100" : "opacity-40")}>
                <h4 className="font-display text-xl font-black text-gray-900 md:text-3xl">{step.title}</h4>
                <p className="mt-1 max-w-sm text-sm font-medium text-gray-600 md:text-base">{step.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
