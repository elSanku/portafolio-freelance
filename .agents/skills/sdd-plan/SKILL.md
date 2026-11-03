---
name: sdd-plan
description: Diseña y genera el plan técnico (arquitectura web, componentes, esquemas y servicios) en specs/NNN-nombre/plan.md.
---

# Skill: SDD-Plan

Define el diseño técnico detallado de una especificación para el portafolio web:

## Estructura del Plan Técnico
1. **Arquitectura por Capas**:
   - `Presentación / UI`: Componentes modulares (`src/components/`).
   - `Validación / Lógica`: Esquemas Zod (`src/schemas/`) y hooks.
   - `Servicios / API`: Clientes de integración (`src/lib/` o Server Actions).
2. **Estrategia de Estilos y Diseño**:
   - Clases Tailwind semánticas respetando `anti-ui-slop`.
3. **Fases de Implementación**:
   - Paso a paso verificable y ordenado.
