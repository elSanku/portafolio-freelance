# MEMORY.md — Estado y Memoria Operativa

## Estado Actual
- **Fecha:** 2026-11-03
- **Fase:** Inicialización de Arquitectura y Gobernanza SDD.
- **Spec Activa:** `001-setup-y-migracion-arquitectura` (en preparación).
- **Entorno:** Windows, framework `.agents` incorporado, estructura de carpetas creada.

## Decisiones Técnicas Tomadas
- Se adoptó la metodología Spec-Driven Development (SDD) replicando la disciplina de ingeniería de `valkiria-svc-odindte`.
- Stack definido: TypeScript + Framework Web Moderno + Tailwind CSS + Validación Zod + Resend (email backend).
- Gobernanza con marcas de auditoría formales (`//INI SPEC-XXX` / `//FIN SPEC-XXX`) para trazabilidad de código.
- Validación funcional y de accesibilidad asistida mediante MCP `chrome-devtools`.

## Errores y Puntos a Evitar
- No exponer credenciales de correo en el frontend.
- No sobreescribir marcas de specs anteriores al refactorizar.
- Evitar CSS gigante sin estructurar; favorecer utilidades semánticas y componentes reutilizables.
