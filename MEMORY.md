# MEMORY.md — Memoria Operativa del Portafolio

## Estado Actual
- **Fecha:** 2026-11-03
- **Fase:** SPEC-001, SPEC-002 y SPEC-003 Completadas y Auditadas con éxito.
- **Identidad del Sitio:** Portafolio profesional de **Felipe Bustamante — .NET Backend & AI Engineer**.
- **Control de Versiones:** Git local con autor `Felipe Bustamante` (`thexsankux007@gmail.com`).

## Specs Concluidas
1. `001-setup-y-migracion-arquitectura`: Setup React 19 + TypeScript 5.7 + Vite 6 + Tailwind CSS v4.
2. `002-formulario-contacto-email`: Validación Zod + Vercel Serverless Function (`api/contact.ts`) + Resend API (`thexsankux007@gmail.com`) + Honeypot antispam.
3. `003-contenido-profesional-cv`: Integración de la trayectoria profesional real (Softland, .NET 10 Freelance, certificación Azure DP-300, Antigravity, LinkedIn y GitHub).

## Puntos Clave de Producto
- No se incluye botón de descarga de CV ni WhatsApp por decisión de diseño de Felipe; el contenido se contrasta directamente en la web.
- Accesos a LinkedIn y GitHub presentes en Navbar, About y Footer con seguridad (`rel="noopener noreferrer"`).
- Arquitectura limpia y modular en `src/components/`, auditada bajo estándares WCAG AA, `ponytail` y `anti-ui-slop`.

## Despliegue en Producción (En Vivo y Verificado)
- **URL Pública:** https://portafolio-freelance-theta.vercel.app/
- **Plataforma:** Vercel (CI/CD conectado a `elSanku/portafolio-freelance.git`).
- **Secretos:** `RESEND_API_KEY` configurada en el panel de Vercel.
- **Backend:** Serverless Function `/api/contact` autocontenida y probada con éxito en producción, despachando correos validados hacia `thexsankux007@gmail.com`.
- **Estado:** 100% Funcional y en Producción.
