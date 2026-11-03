# AGENTS.md — Modernización Portafolio Web Felipe Bustamante (Freelancer)
Sitio web profesional y responsive para Felipe Bustamante, desarrollado con tecnologías web modernas, diseño responsivo, accesibilidad (a11y) y formulario de contacto funcional con envío seguro de correos.

## Stack y Estructura
- **Frontend / Fullstack:** Next.js (App Router) o Astro con TypeScript.
- **Estilos y UI:** Tailwind CSS, diseño responsivo móvil-primero (Mobile-First) y componentes modulares.
- **Validación y Datos:** Zod para validación de esquemas y sanitización en cliente y servidor.
- **Servicio de Correo:** Resend API (o servicio transaccional seguro) mediante Server Action / Endpoint de API protegido (variables de entorno privadas).
- **Herramientas de Agente & Pruebas:**
  - MCP: `chrome-devtools` (auditorías a11y, pruebas de interacción y red) y `context7` (documentación técnica oficial).
  - Framework SDD: `.agents/` (`agents`, `skills`, `plugins`).

## Arquitectura de Carpetas
- `src/components/`: Componentes UI desacoplados y reutilizables (`Header`, `Hero`, `Services`, `ContactForm`, `Footer`).
- `src/lib/`: Clientes de infraestructura y configuración de servicios (ej. `emailService.ts`).
- `src/schemas/`: Esquemas de validación con Zod (`contactSchema.ts`).
- `specs/`: Ciclo de vida SDD (especificaciones, planes de acción, tareas).
- `docs/`: Constitución, arquitectura y reportes técnicos generados al cerrar cada spec.

## Convenciones y Estándares
- **Tipado estricto:** TypeScript sin uso indiscriminado de `any`.
- **Trazabilidad de Cambios:** Delimitar bloques nuevos o editados con marcas de auditoría formales:
  `//INI SPEC-XXX - NN` y `//FIN SPEC-XXX - NN` (o en JSX/CSS según corresponda).
- **Preservación histórica:** Al modificar archivos preexistentes, NUNCA sobreescribir marcas de specs anteriores.
- **Seguridad:** Ninguna API key o secreto debe exponerse en el cliente (usar `.env.local` y variables privadas en el servidor).
- **Calidad y A11y:** Código semántico (HTML5), etiquetas `label` asociadas a inputs, contraste de color WCAG AA, responsive para viewports móviles, tablets y desktop.

## Forma de Trabajar
- Haz solo lo especificado en la spec activa.
- Al terminar cada bloque o tarea, actualiza `tasks.md` y `MEMORY.md`.
- Antes de cerrar cada spec, validar con lint/typecheck y pruebas con `chrome-devtools`.
- Generar informe técnico didáctico en `docs/reports/` en formatos `.md` y `.html` antes del commit final de cada spec.

## Memoria
- Al comenzar cada sesión, leer `MEMORY.md`.
- Al culminar una tarea o spec, actualizar `MEMORY.md` con el estado actual, decisiones y puntos clave a tener en cuenta.
