---
name: feature
description: Planifica una nueva funcionalidad o especificación antes de tocar código. Analiza impacto arquitectónico, define la spec, casos límite y genera el plan de tareas para aprobación.
---

# Skill: Planificación de Funcionalidad (Feature / SDD)

Usa este procedimiento cada vez que el usuario solicite añadir una nueva funcionalidad, componente o cambio funcional antes de escribir cualquier línea de código.

## Contexto de Entrada
El usuario describirá la funcionalidad deseada. Antes de tocar cualquier archivo del proyecto, debes generar una propuesta formal de planificación.

---

## Procedimiento Obligatorio

### 1. Revisión de Fundamentos
Antes de formular la respuesta, debes leer y alinear tu propuesta con:
- [`docs/constitution.md`](docs/constitution.md) (Principios innegociables: *La spec manda*, atomicidad, SPs con `DBConector`, aislamiento de fallos).
- [`AGENTS.md`](AGENTS.md) (Límites, convenciones y arquitectura).
- [`MEMORY.md`](MEMORY.md) (Estado actual y decisiones tomadas).

### 2. Estructura del Plan de Trabajo (Salida para el Usuario)
Presenta al usuario un plan estructurado que incluya:

1. **Objetivo y Alcance**:
   - Qué hace y qué NO hace esta funcionalidad.
   - Si corresponde crear una nueva spec (`specs/NNN-<nombre>/spec.md` y `tasks.md`).

2. **Diseño Técnico por Capas (Estándar Valkiria)**:
   - **`BaseDatos`**: Scripts `.sql` a crear en `SQL Server\Tablas\` o `SQL Server\Procedimientos Almacenados\` (`uSP_...`).
   - **`Modelos`**: DTOs y entidades requeridas.
   - **`Repositorio`**: Métodos a implementar usando `DBConector` / clientes HTTP.
   - **`Negocio`**: Lógica de orquestación y validaciones (sin SQL).
   - **`Parametros` / `Svc`**: Configuraciones en `appsettings.json` si aplican.

3. **Archivos a Crear / Modificar**:
   - Lista detallada de rutas relativas y el cambio concreto en cada uno.

4. **Casos Borde, Transaccionalidad y Preguntas Abiertas**:
   - ¿Cómo se garantiza la idempotencia (evitar duplicados)?
   - ¿Qué ocurre si falla la inserción en Softland (rollback)?
   - ¿Qué decisiones o datos ambiguos debe definir el usuario antes de empezar?

5. **Actualizaciones de Seguimiento**:
   - Qué se actualizará en `specs/` y en `MEMORY.md`.

---

## Regla de Oro Innegociable
> **PROHIBIDO MODIFICAR O CREAR CÓDIGO** hasta que el usuario revise y apruebe explícitamente el plan propuesto.
