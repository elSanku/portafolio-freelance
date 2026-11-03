---
name: sdd-validate
description: Valida una spec completa RF por RF contra el código, compilación y criterios de aceptación. Uso - /sdd-validate NNN-nombre.
---

# Skill: Validación de Spec SDD (/sdd-validate)

Usa este procedimiento para auditar y validar una spec completa una vez que todas sus tareas han sido implementadas, contrastando cada requisito contra el código real.

## Contexto de Entrada
- **Uso**: `/sdd-validate NNN-nombre`
- Spec a auditar: `specs/<NNN-nombre>/spec.md`
- Checklist de tareas: `specs/<NNN-nombre>/tasks.md`

---

## Procedimiento Obligatorio

### 1. Auditoría Requisito por Requisito
Recorre `specs/<NNN-nombre>/spec.md` sección por sección y audita cada **Requisito Funcional (RF)** y **Requisito No Funcional (RNF)**:

1. **Evidencia en Código**:
   - Indica qué archivo, clase, método de `Negocio`/`Repositorio` o Procedimiento Almacenado de `BaseDatos` cubre el requisito.
2. **Verificación de Compilación y Ejecución**:
   - Ejecuta `dotnet build` para comprobar compilación limpia y ausencia de errores.
   - Ejecuta pruebas si existen (`dotnet test`) y reporta su resultado.
3. **Casos Límite y Transaccionalidad**:
   - Valida que se respeten los principios de `docs/constitution.md` (idempotencia en `iw_gsaen`, transacción con rollback, aislamiento de fallos).

---

## Regla de Oro
> **SI ALGÚN RF NO ESTÁ CUBIERTO O PRESENTA FALLOS, REVELALO CLARAMENTE**.
> **NO MODIFIQUES NI ARREGLES CÓDIGO** durante este comando: tu rol es exclusivamente auditar y reportar con honestidad técnica.

---

### 2. Evaluación de Criterios de Finalización y Veredicto
Revisa la sección *Criterios de finalización* de `spec.md` y emite un veredicto formal estructurado:

| Requisito | Estado | Evidencia / Archivo | Observación |
| :--- | :---: | :--- | :--- |
| **RF-1** | ✅ Cumplido | `Repositorio/...` / `uSP_...` | Compila y valida correctamente |
| **RF-2** | ⚠️ Parcial | `Negocio/...` | Falta contemplar caso nulo |

**Veredicto Final**:
- ¿La spec está lista para cambiar su estado a `Estado: implementada`?
- Si faltan puntos, entrega la lista exacta de pendientes para resolver antes del cierre.
