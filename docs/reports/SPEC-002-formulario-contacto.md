# Reporte Técnico: SPEC-002 — Formulario de Contacto Funcional y Servicio de Correo Seguro

**Proyecto:** Portafolio Web Felipe Bustamante (Freelancer)  
**Fecha:** 2026-11-03  
**Estado:** ✅ APROBADO SIN RESERVAS POR QA  

---

## 1. Resumen Ejecutivo
Se implementó exitosamente el flujo completo de contacto mediante una **Serverless Function en Vercel (`api/contact.ts`)**, validación estricta de datos con **Zod** (en cliente y servidor) y despacho transaccional de correo mediante la **API de Resend** hacia la casilla personal del desarrollador (`thexsankux007@gmail.com`).

---

## 2. Puntos Clave de la Arquitectura
1. **Seguridad y Cero Exposición:**
   * La clave `RESEND_API_KEY` se lee exclusivamente desde el entorno de servidor (`process.env`).
   * No existe ninguna referencia ni clave en el bundle JavaScript de cliente (`dist/assets/*.js`).
   * Archivo de plantilla `.env.example` documentado e ignorado en `.gitignore`.
2. **Protección Antispam Honeypot:**
   * Campo oculto para humanos (`website`) con clases `.sr-only`, `aria-hidden="true"` y `tabIndex={-1}`.
   * Si un bot completa este campo, la función serverless descarta la petición de forma silenciosa sin consumir la cuota de la API de Resend.
3. **Accesibilidad WCAG AA y Feedback Visual:**
   * Estados de éxito (`role="status"`, `aria-live="polite"`) y error (`role="alert"`).
   * Errores de validación vinculados semánticamente con `aria-invalid` y `aria-describedby`.
   * Botón interactivo con spinner y deshabilitación para evitar envíos dobles accidentales.
4. **Plantilla de Correo Estructurada:**
   * Correo en formato HTML limpio con datos de contacto organizados y cabecera `reply_to` configurada directamente con el email del cliente para respuesta inmediata.

---

## 3. Matriz de Auditoría QA
- **Compilación TypeScript:** Limpia (0 errores, 0 tipos `any`).
- **Seguridad:** Cero credenciales expuestas en frontend.
- **Trazabilidad:** Marcas formales `//INI SPEC-002` / `//FIN SPEC-002` en todos los archivos afectados.
