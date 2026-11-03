# PLAN-001: Setup del Proyecto y Migración de Maquetación

## Estrategia Técnica
- Se configurará una aplicación ligera y ultra-rápida con **Vite + React + TypeScript + Tailwind CSS** (o **Next.js**, ideal para serverless actions directas). Para máxima autonomía y facilidad de despliegue con endpoints API de correo en una sola carpeta, **Next.js (App Router)** o **Vite + Express/Serverless** son ideales. Usaremos una base sólida con TypeScript y Tailwind CSS.
- Se organizará la estructura en `src/components/`, `src/styles/`, `src/types/`.

## Fases de Ejecución
1. **Fase 1: Inicialización & Tooling:** Configurar `package.json`, TypeScript, Tailwind CSS y scripts de desarrollo/build.
2. **Fase 2: Creación de Componentes UI:**
   - Navbar / Header
   - Hero Section
   - Services Section (Diseño Web, Aplicaciones Web, E-Commerce)
   - Contact Form (Campos e interactividad visual)
   - Footer
3. **Fase 3: Verificación & Auditoría:**
   - Validación visual y responsive con Chrome DevTools.
   - Verificación de accesibilidad básica (labels en inputs, roles ARIA).
4. **Fase 4: Cierre de Spec:**
   - Generación de informe técnico en `docs/reports/` (`.md` y `.html`).
   - Actualización de `MEMORY.md` y `tasks.md`.
