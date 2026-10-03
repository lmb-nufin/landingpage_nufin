---
description: Typecheck + build de producción y reporte pass/fail
---
Corre `npm run typecheck` y luego `npm run build`.

Reporta en español:
- Errores de tipos, separando los de archivos que se usan de los de archivos sin uso.
- Si el build pasó y la tabla de rutas generadas.
- Confirma que siguen existiendo las rutas legales (`/aviso-de-privacidad`, `/terminos-y-condiciones`, `/derechos-arco` y sus alias `.html`).

Recuerda que `next.config.ts` ignora errores de tipos y lint en el build, así que un build verde no implica código sin errores.
