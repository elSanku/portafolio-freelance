---
name: sdd-constitution
description: Propone o revisa la constitución del proyecto (principios innegociables en docs/constitution.md). Usa la metodología SDD.
---

# Skill: Constitución SDD (/sdd-constitution)

Usa este procedimiento para crear o revisar `docs/constitution.md` definiendo los principios innegociables del proyecto.

## Contexto de Entrada
El usuario puede solicitar crear una nueva constitución o ajustar la existente, aportando contexto adicional en sus argumentos.

---

## Procedimiento Obligatorio

### 1. Lectura Previa
Antes de proponer o modificar cualquier principio, lee:
- [`AGENTS.md`](AGENTS.md) (Stack, capas Valkiria, convenciones y límites).
- [`MEMORY.md`](MEMORY.md) (Estado actual del proyecto).
- [`docs/constitution.md`](docs/constitution.md) (Si ya existe, para evaluar cambios).
- Estructura y código actual del proyecto.

### 2. Principios a Evaluar y Proponer
Formula principios innegociables, concisos y medibles que cubran:
1. **La spec manda**: Nada se programa sin estar en una spec aprobada.
2. **Atomicidad e idempotencia**: Manejo transaccional estricto en Softland (`iw_gsaen` + `iw_gmovi`) y validación previa de duplicados.
3. **Aislamiento de fallos**: Continuidad del ciclo ante errores puntuales de documentos o empresas.
4. **Confirmación subordinada**: Actualización en OdinDTE solo tras confirmación de Softland.
5. **Estándar Valkiria y base de datos**: Arquitectura en capas .NET 10, uso exclusivo de Procedimientos Almacenados en `Repositorio` vía `DBConector`. Prohibido SQL en `Negocio` y ORMs externos.
6. **Seguridad de credenciales**: Cero claves en texto plano; uso de `EncriptaAPP`.
7. **Trazabilidad total**: Registro obligatorio en `LogIntegracion`.
8. **Alcance y modularidad**: Inicio con Boletas (`TipoDTE = 39`) con arquitectura extensible a otros DTE.
9. **Idioma**: Logs, mensajes, correos y documentación en español.

### 3. Regla de Oro
> **NO MODIFIQUES NI CREES EL ARCHIVO `docs/constitution.md`** hasta que el usuario revise y dé su aprobación explícita.

### 4. Tras la Aprobación
1. Guarda los principios acordados en `docs/constitution.md`.
2. Actualiza brevemente `MEMORY.md` indicando la versión o estado de la constitución.
