---
name: feature
description: Planifica una nueva funcionalidad o especificación antes de tocar código en el portafolio.
---

# Skill: Feature (SDD)

Esta skill guía la planificación de una nueva funcionalidad en el **Portafolio Web Felipe Bustamante**.

## Pasos
1. **Entrevista y Alcance**:
   - Comprender la necesidad (ej. nueva sección de proyectos, testimonios, integración de analytics, etc.).
   - Evaluar impacto en la arquitectura web y en el diseño.
2. **Diseño Técnico**:
   - Determinar componentes UI (`src/components/`), esquemas de validación Zod (`src/schemas/`) o servicios de backend (`src/lib/`).
   - Aplicar la disciplina **Ponytail** (código conciso, evitar librerías pesadas) y **Anti-UI Slop** (diseño auténtico).
3. **Generación de Spec**:
   - Crear carpeta en `specs/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`.
