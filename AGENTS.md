# AGENTS.md — Modernización Portafolio Web Felipe Bustamante (Freelancer)
Guía y manual de trabajo operativo para el equipo de agentes de Antigravity en la modernización del sitio web de Felipe Bustamante.

## Stack Tecnológico
- **Frontend / Fullstack:** React 19 + TypeScript + Vite / Next.js (App Router).
- **Estilos:** Tailwind CSS con diseño responsive Mobile-First y estética profesional.
- **Validación:** Zod para esquemas de datos del formulario de contacto.
- **Servicio de Correo:** Resend API mediante función de servidor segura.
- **Guardrails de Calidad:**
  - `ponytail`: Prevención de código redundante y sobreingeniería ("20 líneas en lugar de 100").
  - `anti-ui-slop`: Prevención de plantillas genéricas de IA y diseño plano.

## Roles del Equipo (.agents/agents/)
- **`coordinator`**: Orquesta el flujo global y la transición entre fases SDD.
- **`planner`**: Diseña la especificación técnica (`spec.md`), arquitectura (`plan.md`) y desglose (`tasks.md`).
- **`implementer`**: Ejecuta tareas individuales garantizando que el build compile limpiamente.
- **`reviewer`**: Audita diseño, contraste WCAG AA, accesibilidad y que no existan fugas de API keys.

## Normas de Código y Auditoría
- **Delimitación Obligatoria:**
  ```typescript
  //INI SPEC-XXX - NN
  // descripción breve del cambio
  ... código ...
  //FIN SPEC-XXX - NN
  ```
- **Sin `any`:** Tipado estricto en TypeScript.

## Memoria
- Al empezar cada sesión, lee `MEMORY.md` para conocer el estado actual y decisiones tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes y errores a evitar.
- Mantenlo breve (máximo ~50-80 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en regla permanente, propón moverlo a `docs/constitution.md` o a `AGENTS.md`.
- No guardes nunca contraseñas reales ni datos productivos de clientes.

## Regla
- Lee `docs/constitution.md` antes de tocar código.

## Límites
-✅ Siempre: actualizar `MEMORY.md` al terminar cada tarea.
- ❌ Nunca: eliminar o modificar especificaciones sin aprobación explícita del usuario.

## Verificación
- Compilación limpia (npm run build)
- Tests funcionales (jest, playwright)
- Linter y formatters OK
- End-to-end del flujo de contacto