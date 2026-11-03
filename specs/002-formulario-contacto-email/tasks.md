# TASKS-002: Desglose de Tareas de Implementación

- **Spec:** SPEC-002 (Formulario de Contacto y Servicio de Correo)
- **Estado:** Pendiente de inicio

---

## Checklist de Tareas Atómicas

- [ ] **T-002.1: Instalación de dependencias y configuración de entorno**
  - Instalar `zod` y `resend` en `package.json`.
  - Crear archivo `.env.example` con la variable `RESEND_API_KEY`.
  - Asegurar que `.env` y `.env.local` estén incluidos en `.gitignore`.
  - *Hecho cuando:* `npm list zod resend` confirma la instalación y el `.gitignore` protege las variables locales.

- [ ] **T-002.2: Creación del esquema Zod de validación**
  - Crear archivo `src/schemas/contactSchema.ts`.
  - Definir validaciones para `nombre` (2-80 chars), `email` (email válido), `telefono` (opcional, regex básico o longitud 8-20), `mensaje` (10-2000 chars) y `honeypot` (string opcional).
  - Exportar tipo TypeScript `ContactFormData = z.infer<typeof contactSchema>`.
  - Incluir marcas `//INI SPEC-002 - 01` y `//FIN SPEC-002 - 01`.
  - *Hecho cuando:* El archivo compila sin errores de tipos y exporta el esquema y el tipo TypeScript.

- [ ] **T-002.3: Implementación de la Serverless Function en `api/contact.ts`**
  - Crear `api/contact.ts`.
  - Validar método HTTP POST (retornar 405 si es otro método).
  - Validar payload con `contactSchema.safeParse`. Si falla, responder 400 con los errores.
  - Verificar honeypot: Si `honeypot` tiene contenido, responder 200 OK inmediatamente sin llamar a Resend.
  - Instanciar cliente Resend con `process.env.RESEND_API_KEY`.
  - Enviar email a `thexsankux007@gmail.com` con `reply_to: data.email`, asunto descriptivo y template HTML profesional.
  - Manejo seguro de excepciones con respuesta HTTP 500 sin exponer secrets.
  - Incluir marcas `//INI SPEC-002 - 02` y `//FIN SPEC-002 - 02`.
  - *Hecho cuando:* La función compila limpiamente en TypeScript y maneja todos los códigos de estado requeridos.

- [ ] **T-002.4: Integración interactiva y accesible en `src/components/ContactForm.tsx`**
  - Reemplazar el `alert()` simulado por la llamada `fetch('/api/contact', ...)`.
  - Añadir estados: `status: 'idle' | 'submitting' | 'success' | 'error'`, y `fieldErrors: Record<string, string>`.
  - Agregar campo oculto honeypot (`name="website"`, `tabIndex={-1}`, `aria-hidden="true"`, clase `sr-only`).
  - Mostrar feedback visual accesible para éxito y error con iconos de `lucide-react` y atributos `aria-live="polite"`.
  - Mostrar spinner de carga dentro del botón durante el estado `submitting`.
  - Deshabilitar inputs y botón durante el envío.
  - Limpiar el formulario al recibir confirmación de éxito y permitir enviar otro mensaje.
  - Incluir marcas `//INI SPEC-002 - 03` y `//FIN SPEC-002 - 03`.
  - *Hecho cuando:* El formulario gestiona los 4 estados, valida los campos en vivo/submit y provee feedback accesible.

- [ ] **T-002.5: Verificación de compilación y tipado TypeScript estricto**
  - Ejecutar `npm run build` (`tsc -b && vite build`).
  - Verificar que no existan errores de compilación ni uso de tipo `any`.
  - *Hecho cuando:* El build finaliza con código de salida 0 sin advertencias de tipado.

- [ ] **T-002.6: Auditoría de seguridad y accesibilidad con Reviewer Subagent**
  - Auditar que `RESEND_API_KEY` no esté empaquetada en el bundle de cliente de `dist/`.
  - Auditar contraste de color en mensajes de éxito/error (WCAG AA) y roles ARIA.
  - *Hecho cuando:* Reviewer emite visto bueno formal sin observaciones bloqueantes.

- [ ] **T-002.7: Generación de informe técnico y actualización de memoria operativa**
  - Crear informe técnico didáctico en `docs/reports/SPEC-002-reporte.md` y `docs/reports/SPEC-002-reporte.html`.
  - Actualizar `MEMORY.md` reflejando la culminación de la SPEC-002 y el estado del backend de correos.
  - *Hecho cuando:* Los informes existen y `MEMORY.md` está actualizado.
