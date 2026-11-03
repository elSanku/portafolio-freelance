---
name: sdd-tasks
description: Desglosa el plan técnico en una lista de tareas verificables y ordenadas en specs/NNN-nombre/tasks.md. Usa la metodología SDD.
---

# Skill: Desglose de Tareas SDD (/sdd-tasks)

Usa este procedimiento para convertir el plan técnico (`plan.md`) de una spec en una lista de tareas atómicas, ordenadas por dependencia y verificables en `tasks.md`.

## Contexto de Entrada
- **Uso**: `/sdd-tasks NNN-nombre`
- Insumos de lectura: `specs/<NNN-nombre>/spec.md` y `specs/<NNN-nombre>/plan.md`
- Archivo de salida: `specs/<NNN-nombre>/tasks.md`

---

## Procedimiento Obligatorio

### 1. Validación Previa
- Verifica que `specs/<NNN-nombre>/plan.md` exista y esté aprobado por el usuario.
- **PROHIBIDO escribir código** durante la ejecución de este skill.

### 2. Reglas de Desglose
1. **Orden de Dependencia Técnica**:
   - Ordena las tareas siguiendo el flujo natural de abajo hacia arriba:
     1. `BaseDatos` (scripts SQL de tablas o SPs).
     2. `Modelos` (DTOs y entidades).
     3. `Repositorio` (implementación de llamadas con `DBConector` / HTTP).
     4. `Negocio` (servicios de lógica y validaciones).
     5. `Parametros` / `SvcConsultaAPIOdinDTE` (configuración y wiring en Worker).
2. **Atomicidad**:
   - Cada tarea debe ser pequeña e invertible (tiempo estimado: 20-30 minutos).
3. **Límite de Tareas**:
   - Máximo 8 a 10 tareas por spec. Si el alcance requiere más de 10 tareas, **propón dividir la spec** en dos fases más pequeñas antes de generar el archivo.

### 3. Formato del Archivo `specs/<NNN-nombre>/tasks.md`
Cada tarea debe tener su checkbox, su identificador (`Tn`), su descripción, los requisitos que cubre y su comprobación verificable:

```markdown
# Tareas — <Nombre de la Spec>

- [ ] **T1. <Descripción clara y enfocada de la tarea>.** (RF-x, RF-y)
  - Hecho cuando: <Criterio de verificación exacto, ej. "Se compila sin errores con dotnet build y la clase X implementa el método Y">.

- [ ] **T2. <Siguiente tarea en orden de dependencia>.** (RF-z)
  - Hecho cuando: <Criterio de verificación exacto>.
```

### 4. Cierre del Paso
Una vez generado `tasks.md`, presenta el resumen de las tareas al usuario para su aprobación y deja el proyecto listo para iniciar la fase de implementación con `/sdd-implement`.
