# TASKS-002: Desglose de Tareas de Implementación

- **Spec:** SPEC-002 (Formulario de Contacto y Servicio de Correo)
- **Estado:** ✅ Completado al 100%

---

## Checklist de Tareas Atómicas

- [x] **T-002.1: Instalación de dependencias y configuración de entorno**
  - Instalar `zod`, `resend` y `@vercel/node`.
  - Crear archivo `.env.example` con la variable `RESEND_API_KEY`.
  - Asegurar que `.env` y `.env.local` estén incluidos en `.gitignore`.

- [x] **T-002.2: Creación del esquema Zod de validación**
  - Crear archivo `src/schemas/contactSchema.ts`.
  - Definir validaciones para `nombre`, `email`, `telefono`, `mensaje` y honeypot `website`.
  - Exportar tipo TypeScript `ContactFormData`.
  - Incluir marcas `//INI SPEC-002 - 01` y `//FIN SPEC-002 - 01`.

- [x] **T-002.3: Implementación de la Serverless Function en `api/contact.ts`**
  - Crear `api/contact.ts`.
  - Validar método HTTP POST (retornar 405 si es otro método).
  - Validar payload con `contactSchema.safeParse`.
  - Verificar honeypot antispam con respuesta silenciosa 200 OK.
  - Instanciar cliente Resend con `process.env.RESEND_API_KEY`.
  - Enviar email a `thexsankux007@gmail.com` con `reply_to: data.email` y plantilla HTML estructurada.
  - Incluir marcas `//INI SPEC-002 - 02` y `//FIN SPEC-002 - 02`.

- [x] **T-002.4: Integración interactiva y accesible en `src/components/ContactForm.tsx`**
  - Reemplazar el `alert()` simulado por la llamada `fetch('/api/contact', ...)`.
  - Añadir estados reactivos: `status: 'idle' | 'submitting' | 'success' | 'error'`.
  - Agregar campo oculto honeypot (`name="website"`).
  - Feedback visual accesible para éxito y error con iconos y atributos `aria-live`.
  - Spinner de carga `Loader2` y deshabilitación durante el envío.
  - Incluir marcas `//INI SPEC-002 - 03` y `//FIN SPEC-002 - 03`.

- [x] **T-002.5: Verificación de compilación y tipado TypeScript estricto**
  - `npm run build` ejecutado exitosamente sin errores de TypeScript ni tipos `any`.

- [x] **T-002.6: Auditoría de seguridad y accesibilidad con Reviewer Subagent**
  - Auditoría de QA aprobada sin observaciones bloqueantes (0 fugas de secretos, WCAG AA conforme).

- [x] **T-002.7: Generación de informe técnico y actualización de memoria operativa**
  - Informes técnicos generados en `docs/reports/SPEC-002-formulario-contacto.md` y `.html`.
  - Actualización de `MEMORY.md`.
