---
name: sdd-implement
description: Implementa UNA sola tarea de una spec del portafolio respetando el plan y la constitución.
---

# Skill: SDD-Implement

Guía al agente implementador en la ejecución atómica de una tarea.

## Reglas
1. Ejecutar **solo** la tarea asignada en `specs/NNN-nombre/tasks.md`.
2. Seguir las directrices de Ponytail (sin código redundante).
3. Respetar las marcas de auditoría formales:
   `//INI SPEC-XXX - NN`
   `//FIN SPEC-XXX - NN`
4. Verificar que el código compila limpiamente (`npm run build` o `npx tsc`).
5. Marcar la tarea en `tasks.md` y detenerse.
