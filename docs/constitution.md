# Constitución Técnica del Proyecto: Portafolio Felipe Bustamante

## 1. Principios de Ingeniería
1. **Spec-First:** Todo cambio nace de una especificación en `specs/` con su `spec.md`, `plan.md` y `tasks.md`.
2. **Cero Secretos Expuestos:** Ninguna clave privada o token de proveedores de email (ej. Resend) puede filtrarse al cliente. Toda llamada externa sensible se procesa en el lado del servidor.
3. **Accesibilidad y Semántica:** Se respetan estándares WCAG AA, navegación por teclado, contraste adecuado y marcado semántico (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
4. **Responsive Mobile-First:** El diseño debe adaptarse fluidamente a dispositivos móviles (>=360px), tablets (>=768px) y escritorios (>=1024px).
5. **Auditoría y Trazabilidad:** Todo cambio de código debe estar encapsulado en marcas `//INI SPEC-XXX - NN` y `//FIN SPEC-XXX - NN`.
6. **Entregables Didácticos:** Al culminar cada spec, se genera un reporte en `docs/reports/` en formato `.md` y `.html`.
