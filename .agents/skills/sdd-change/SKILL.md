---
name: sdd-change
description: Gestiona cambios o nuevos requisitos en una spec activa aplicando la disciplina SDD (primero la spec, luego el plan y las tareas, nunca el código directo). Uso - /sdd-change NNN-nombre requisito...
---

# Skill: Gestión de Cambios SDD (/sdd-change)

Usa este procedimiento cada vez que surja un cambio de alcance, nueva regla de negocio o ajuste en una spec que ya estaba planificada o en implementación.

## Contexto de Entrada
- **Uso**: `/sdd-change NNN-nombre detalle del nuevo requisito o cambio`
- Spec a modificar: `specs/<NNN-nombre>/`
- Argumentos: Descripción de la modificación requerida.

---

## Procedimiento Obligatorio

### 1. Regla de Oro SDD
> **PROHIBIDO TOCAR CÓDIGO DIRECTAMENTE**.
> Todo cambio debe fluir en orden estricto: **Spec → Plan → Tareas → Código**.

### 2. Actualización de `specs/<NNN-nombre>/spec.md`
1. Revisa la spec existente y añade el nuevo requisito funcional (o actualiza el existente) redactándolo en sintaxis **EARS** en español:
   - *CUANDO <evento>, EL SISTEMA <respuesta>.*
   - *SI <condición no deseada>, ENTONCES EL SISTEMA <respuesta>.*
2. Actualiza los **Casos Límite**, supuestos y la sección **Fuera de alcance** si el nuevo requisito modifica las fronteras de la funcionalidad.
3. Si el cambio requiere aclaraciones de Softland o de la API de OdinDTE, regístralas como `[NECESITA ACLARACIÓN]`.

### 3. Análisis de Impacto Técnico
Presenta un análisis de impacto claro:
1. **Impacto en `plan.md`**: Qué capas de Valkiria (`BaseDatos`, `Modelos`, `Repositorio`, `Negocio`) o qué Procedimientos Almacenados deberán modificarse o crearse.
2. **Impacto en `tasks.md`**: Qué tareas deberán agregarse (ej. `T_nueva`), modificarse o reordenarse.
3. **Impacto en `docs/constitution.md` / `AGENTS.md`**: Si el cambio altera algún principio o regla permanente.

### 4. Presentación y Espera de Aprobación
1. Muestra al usuario el diff o resumen de los cambios aplicados en `spec.md`.
2. Solicita aprobación explícita antes de proceder a actualizar `plan.md` y `tasks.md`.
