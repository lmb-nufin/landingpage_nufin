# Landing page Nufin

Landing pública de Nufin (préstamos de $500 a $9,000 MXN sin buró, con el celular Samsung como garantía vía Knox). Sitio estático en Next.js, desplegado en Firebase App Hosting.

## Stack
- Next.js 15 (App Router, Turbopack en dev), React 19, TypeScript
- Tailwind 3 + shadcn/ui (`src/components/ui`, estilo `default`, iconos `lucide-react`)
- Node 20 (ver `.idx/dev.nix`)
- Deploy: Firebase App Hosting (`apphosting.yaml`, `maxInstances: 1`)

## Comandos
- `npm run dev` — servidor local
- `npm run typecheck` — `tsc --noEmit`
- `npm run build` — build de producción
- `npm run lint` — `next lint`

Antes de dar un cambio por terminado: correr `npm run typecheck` y `npm run build`. `next.config.ts` tiene `ignoreBuildErrors: true` e `ignoreDuringBuilds: true`, así que el build NO falla por errores de tipos o lint: hay que revisarlos explícitamente.

## Estructura
- `src/app/page.tsx` — home; compone las secciones de `src/components/landing/*` en orden (Navbar, Hero, TrustBar, Mission, Steps, CustomerService, Testimonials, Footer)
- `src/app/aviso-de-privacidad`, `terminos-y-condiciones`, `derechos-arco` — páginas legales canónicas
- `src/app/*.html/page.tsx` — alias de URLs heredadas del sitio anterior; solo re-exportan la página canónica. No duplicar contenido ahí.
- `src/components/landing/legal-modals.tsx` — modales legales del footer
- `src/lib/placeholder-images.json` — URLs de imágenes remotas (hero, etc.)
- `public/images` — assets locales (logo, botón Google Play)
- `next.config.ts` — `redirects()` de URLs heredadas (`/modelos/*` → lista de equipos soportados de Samsung Knox, PDFs de ARCO, anclas de secciones). Cualquier dominio nuevo de imágenes remotas va en `images.remotePatterns`.

## Diseño
Seguir el sistema de diseño: @docs/DESIGN_SYSTEM.md
Colores siempre vía variables CSS de `src/app/globals.css` / tokens de Tailwind, nunca hex sueltos. Tipografías: Plus Jakarta Sans (títulos, `font-display`) e Inter (cuerpo).

## Reglas
- Todo el copy es en español de México. Montos en MXN con formato `$9,000`.
- Textos legales (aviso de privacidad, términos, ARCO) y montos/condiciones del crédito: no modificarlos sin instrucción explícita; son contenido regulatorio.
- Razón social en textos legales: Nufin México, S.A.P.I. de C.V.
- No romper redirects existentes: hay links impresos y en la app que apuntan a URLs viejas.
- El repo es público: nunca commitear llaves ni datos de clientes.
- Usar componentes de `src/components/ui` antes de crear nuevos.

## Pendientes conocidos
- Ninguno por ahora.
