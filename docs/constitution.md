# docs/constitution.md — Constitución del Portafolio Web Felipe Bustamante

## 1. Misión del Proyecto
Construir y modernizar el sitio web profesional de **Felipe Bustamante (Freelancer)**, transformando una maquetación estática antigua en un portafolio web de alto impacto, moderno, accesible y con un formulario de contacto funcional con despacho seguro de correos.

## 2. Principios Innegociables

### I. Spec-Driven Development (SDD)
- Ninguna línea de código de producción se escribe sin una spec aprobada en `specs/NNN-nombre/` (`spec.md`, `plan.md`, `tasks.md`).
- Flujo estricto: **Especificar ➔ Planificar ➔ Revisar ➔ Implementar ➔ Validar**.

### II. Pragmatismo y Concisión (Guardrail Ponytail)
- Escribir siempre el mínimo código necesario para resolver el problema (regla de "20 líneas en lugar de 100").
- Preferir APIs nativas de la plataforma (HTML5 semántico, CSS moderno) antes de instalar paquetes pesados.
- Aprovechar Tailwind CSS y dependencias existentes; no crear abstracciones prematuras ni capas envolventes innecesarias.

### III. Diseño con Propósito (Guardrail Anti-UI Slop)
- Prohibidos los clichés de IA: nada de gradientes de fondo púrpuras aleatorios, badges genéricos flotantes o layouts de 3 tarjetas clonadas.
- Priorizar tipografía intencional, espaciado con propósito (`whitespace`), jerarquía visual clara y contraste accesible WCAG AA.
- El diseño debe transmitir seriedad técnica y confianza comercial para captación de clientes.

### IV. Seguridad y Privacidad Estricta
- Ninguna API Key (Resend, SMTP, etc.) puede quedar expuesta en el frontend o código cliente.
- Todo procesamiento sensible o despacho de correo debe realizarse del lado del servidor (Server Actions o API Routes privadas).

### V. Trazabilidad y Calidad de Auditoría
- Todo bloque de código nuevo o editado debe estar rigurosamente delimitado por marcas formales:
  `//INI SPEC-XXX - NN` y `//FIN SPEC-XXX - NN`.
- En refactorizaciones, nunca destruir marcas históricas de specs previas.
- Antes de cerrar cada spec, generar un informe técnico didáctico en `docs/reports/` en formatos `.md` y `.html`.
