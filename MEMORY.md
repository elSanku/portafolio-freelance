# MEMORY.md — Memoria Operativa del Portafolio

## Estado Actual
- **Fecha:** 2026-11-03
- **Fase:** Definición de Arquitectura, MCPs y Guardrails de Calidad.
- **Spec Activa:** `001-setup-y-migracion-arquitectura` (Lista para inicio de implementación).
- **Control de Versiones:** Repositorio en GitHub `elSanku/portafolio-freelance.git` vinculado al usuario personal `Felipe Bustamante` (`thexsankux007@gmail.com`).

## MCPs Establecidos para el Proyecto
1. **`chrome-devtools` (MCP Nativo):**
   - **Propósito:** Pruebas visuales en vivo, auditoría de accesibilidad (a11y), responsive design (mobile/tablet/desktop), verificación de formularios y captura de snapshots.
2. **`context7` (MCP Nativo):**
   - **Propósito:** Consulta de documentación oficial y actualizada de librerías modernas (Tailwind CSS, React 19, Zod, Resend).

## Guardrails de Calidad y Diseño Instalados
- **`ponytail` oficial (Dietrich Gebert):**
  - Módulos: `ponytail`, `ponytail-review`, `ponytail-audit`, `ponytail-debt`, `ponytail-gain` y regla en `.agents/rules/ponytail.md`.
  - Propósito: Forzar código conciso ("20 líneas en vez de 100"), sin sobreingeniería ni dependencias redundantes.
- **`anti-ui-slop`:**
  - Propósito: Erradicar estética genérica de IA (gradientes púrpura cliché, cards genéricas) y aplicar diseño profesional con identidad, tipografía y balance visual auténtico.

## Limpieza Completa
- Se eliminaron el 100% de las referencias del proyecto anterior (`valkiria`, `odindte`, `softland`, `.NET 10`). Todo el framework SDD, agentes y skills quedaron adaptados exclusivamente al portafolio web de Felipe Bustamante.

## Próximo Paso
- Iniciar `T-001.1`: Inicialización del proyecto React + TypeScript + Tailwind CSS bajo la arquitectura SDD limpia.
