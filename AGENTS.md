# AGENTS.md — Modernización Portafolio Web Felipe Bustamante (Freelancer)
Guía y manual de trabajo operativo para el equipo de agentes de Antigravity en la modernización del sitio web de Felipe Bustamante.

## 1. Stack Tecnológico
- **Frontend / Fullstack:** React 19 + TypeScript + Vite / Next.js (App Router).
- **Estilos:** Tailwind CSS con diseño responsive Mobile-First y estética profesional.
- **Validación:** Zod para esquemas de datos del formulario de contacto.
- **Servicio de Correo:** Resend API mediante función de servidor segura.
- **Guardrails de Calidad:**
  - `ponytail`: Prevención de código redundante y sobreingeniería ("20 líneas en lugar de 100").
  - `anti-ui-slop`: Prevención de plantillas genéricas de IA y diseño plano.

## 2. Roles del Equipo (.agents/agents/)
- **`coordinator`**: Orquesta el flujo global y la transición entre fases SDD.
- **`planner`**: Diseña la especificación técnica (`spec.md`), arquitectura (`plan.md`) y desglose (`tasks.md`).
- **`implementer`**: Ejecuta tareas individuales garantizando que el build compile limpiamente.
- **`reviewer`**: Audita diseño, contraste WCAG AA, accesibilidad y que no existan fugas de API keys.

## 3. Normas de Código y Auditoría
- **Delimitación Obligatoria:**
  ```typescript
  //INI SPEC-XXX - NN
  // descripción breve del cambio
  ... código ...
  //FIN SPEC-XXX - NN
  ```
- **Sin `any`:** Tipado estricto en TypeScript.
- **Memoria:** Leer `MEMORY.md` al iniciar cada sesión y actualizarlo al finalizar cada tarea.
