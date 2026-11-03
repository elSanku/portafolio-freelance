# SPEC-002: Formulario de Contacto Funcional y Servicio de Correo Seguro

- **Estado:** Listo para Implementación
- **Fecha:** 2026-11-03
- **Autor:** Planificador SDD (Planner)
- **Área:** Frontend & Serverless Backend

---

## 1. Contexto y Objetivos

- **Contexto:** En la SPEC-001 se construyó la interfaz moderna del portafolio en React 19 + TypeScript + Tailwind CSS v4, dejando el componente `ContactForm.tsx` maquetado con datos en estado simulado (`alert()`).
- **Objetivo de Negocio:** Permitir que los clientes potenciales interesados en los servicios de desarrollo web y freelancer de Felipe Bustamante puedan contactarlo directamente a través del formulario web de manera rápida, confiable, accesible y sin fricción.
- **Objetivo Técnico:** Despachar los mensajes enviados hacia el correo personal del freelancer (`thexsankux007@gmail.com`) mediante la API de Resend a través de una función de servidor segura (Serverless Function en Vercel), implementando validación estricta con Zod en cliente y servidor, protección antispam con honeypot y cero exposición de credenciales secretas.

---

## 2. Historias de Usuario

- **HU-01 (Cliente potencial):** Como visitante interesado en contratar servicios freelance, quiero completar un formulario con mi nombre, correo, teléfono y descripción de mi necesidad, para recibir una respuesta y cotización clara sin salir de la página.
- **HU-02 (Freelancer / Receptor):** Como Felipe Bustamante, quiero recibir los mensajes de clientes directamente en mi bandeja de correo (`thexsankux007@gmail.com`) con datos validados, formato legible y con la opción de responder directamente con un solo clic (`reply_to`), libre de spam automatizado.
- **HU-03 (Seguridad / Operaciones):** Como mantenedor del sitio, quiero garantizar que la API Key de Resend jamás quede visible en el navegador ni en repositorios públicos, y que las peticiones maliciosas o malformadas sean rechazadas limpiamente.

---

## 3. Requerimientos Funcionales (Formato EARS)

### 3.1 Validación de Datos
- **EL SISTEMA** validará los datos del formulario tanto en el frontend antes del envío como en el backend antes de procesar el correo, utilizando un esquema de validación común con Zod.
- **CUANDO** el usuario ingrese su información:
  - **Nombre:** Cadena de texto obligatoria, entre 2 y 80 caracteres.
  - **Email:** Cadena de texto obligatoria con formato de correo electrónico válido (RFC 5322).
  - **Teléfono:** Cadena de texto opcional; si se proporciona, debe tener entre 8 y 20 caracteres con formato telefónico razonable (números, espacios, guiones o prefijo internacional `+`).
  - **Mensaje:** Cadena de texto obligatoria, entre 10 y 2000 caracteres.
  - **Honeypot:** Campo oculto no visible para humanos.
- **SI** cualquiera de los campos obligatorios falta o no cumple el esquema de validación, **ENTONCES EL SISTEMA** cancelará el envío, mantendrá los datos ingresados y mostrará mensajes de error descriptivos y asociados a los campos correspondientes.
- **SI** el campo trampa honeypot contiene cualquier valor al momento de recibir la solicitud, **ENTONCES EL SISTEMA** descartará silenciosamente el envío sin llamar a la API de Resend y responderá con éxito simulado (200 OK) para evitar alertar al bot.

### 3.2 Despacho de Correo Electrónico
- **CUANDO** el formulario es enviado con datos válidos, **EL SISTEMA** invocará una Serverless Function (`api/contact.ts`) mediante una petición HTTP POST.
- **EL SISTEMA** enviará el correo mediante la API de Resend hacia `thexsankux007@gmail.com` con:
  - Asunto descriptivo: `Nuevo contacto web: [Nombre del Remitente]`.
  - Encabezado `reply_to` configurado con la dirección de correo del visitante para permitir respuesta inmediata.
  - Contenido en formato HTML limpio y legible (nombre, email, teléfono, mensaje y fecha de recepción), además de versión en texto plano alternativa.

### 3.3 Seguridad y Manejo de Errores
- **EL SISTEMA** utilizará la variable de entorno `RESEND_API_KEY` exclusivamente en el entorno de ejecución del servidor. Ninguna clave de API debe ser inyectada en el bundle de cliente (sin prefijo `VITE_`).
- **SI** se recibe una petición HTTP con un método distinto a POST (ej. GET, PUT, DELETE), **ENTONCES EL SISTEMA** responderá con código HTTP 405 (Method Not Allowed).
- **SI** el servicio de Resend responde con error o la variable de entorno no está configurada, **ENTONCES EL SISTEMA** responderá con código HTTP 500 (Internal Server Error) y un mensaje genérico seguro, registrando el error en logs del servidor sin exponer secretos ni trazas internas al cliente.

### 3.4 Estados de Interfaz y Retroalimentación al Usuario
- **MIENTRAS** el formulario no ha sido enviado (`idle`), **EL SISTEMA** mantendrá los campos habilitados y el botón "Enviar Mensaje" activo.
- **MIENTRAS** la petición de envío esté en tránsito (`submitting`), **EL SISTEMA** deshabilitará los campos del formulario y el botón de envío, mostrando un indicador de carga (spinner minimalista SVG) y el texto "Enviando...".
- **CUANDO** el servidor responda con éxito (`success`), **EL SISTEMA** mostrará un banner de confirmación accesible e informativo ("¡Mensaje enviado con éxito! Te responderé a la brevedad."), reseteará los campos del formulario y habilitará un botón para enviar otro mensaje si el usuario lo requiere.
- **SI** ocurre un error de red o de servidor (`error`), **ENTONCES EL SISTEMA** mostrará un mensaje de alerta accesible ("Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente a thexsankux007@gmail.com"), manteniendo el contenido del formulario intacto para no hacer perder el texto al usuario.

---

## 4. Requisitos No Funcionales

1. **Accesibilidad (WCAG AA):**
   - Inputs con `aria-invalid="true"` cuando haya error de validación.
   - Mensajes de error y estado vinculados mediante `aria-describedby` y áreas dinámicas con `aria-live="polite"`.
   - Contraste superior a 4.5:1 en todos los textos y estados de alerta.
2. **Rendimiento y Ligereza:**
   - Cero librerías de formularios pesadas; uso de estados nativos React + Zod.
   - Payload mínimo en la Serverless Function (< 50 KB).
3. **Mantenibilidad:**
   - Esquema Zod único exportable y tipado con TypeScript estricto (cero `any`).

---

## 5. Criterios de Aceptación Objetivos

1. **CA-01 (Validación Zod):** Envío bloqueado con mensajes de error si `nombre` está vacío, `email` es incorrecto o `mensaje` tiene menos de 10 caracteres.
2. **CA-02 (Antispam Honeypot):** Si se envía el campo honeypot poblado, no se consume la API de Resend ni se envía ningún correo.
3. **CA-03 (Despacho Exitoso):** Envío legítimo despacha el email a `thexsankux007@gmail.com` con `reply_to` apuntando al remitente.
4. **CA-04 (Cero Fuga de Secretos):** La clave `RESEND_API_KEY` reside únicamente en variables de servidor y no existe en el código empaquetado del cliente.
5. **CA-05 (Feedback UI Accesible):** Los 4 estados (`idle`, `submitting`, `success`, `error`) son visualmente claros, con contraste WCAG AA y comprensibles para lectores de pantalla.
