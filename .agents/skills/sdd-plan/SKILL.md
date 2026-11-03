---
name: sdd-plan
description: Diseña y genera el plan técnico (arquitectura por capas, SPs, DTOs y lógica) de una spec aprobada en specs/NNN-nombre/plan.md. Usa la metodología SDD.
---

# Skill: Planificación Técnica SDD (/sdd-plan)

Usa este procedimiento para diseñar la arquitectura técnica detallada de una spec antes de generar las tareas o tocar código.

## Contexto de Entrada
- **Uso**: `/sdd-plan NNN-nombre`
- Spec de entrada: `specs/<NNN-nombre>/spec.md`
- Archivo de salida: `specs/<NNN-nombre>/plan.md`

---

## Procedimiento Obligatorio

### 1. Validación Previa y Regla de No-Código
- **PROHIBIDO escribir o modificar código** en este paso.
- Lee:
  - [`docs/constitution.md`](docs/constitution.md)
  - [`AGENTS.md`](AGENTS.md)
  - `specs/<NNN-nombre>/spec.md`
- **Condición de parada**: Si la spec aún está en `Estado: borrador` o contiene marcas `[NECESITA ACLARACIÓN]`, **DETÉN EL PROCESO** e informa al usuario qué dudas deben resolverse antes de poder diseñar el plan.

### 2. Generación de `specs/<NNN-nombre>/plan.md`
El documento de planificación debe estructurarse obligatoriamente con las siguientes secciones:

1. **Arquitectura por Capas y Responsabilidades (Estándar Valkiria)**:
   - **`BaseDatos`**: Scripts `.sql` a crear en `SQL Server\Tablas\`, `Procedimientos Almacenados\` (`uSP_...`) o `Tipos\`.
   - **`Modelos`**: DTOs de API y entidades para mapeo de SPs.
   - **`Repositorio`**: Métodos de acceso a datos usando `DBConector` y clientes HTTP.
   - **`Negocio`**: Lógica de sincronización y validaciones (cero SQL).
   - **`Parametros` / `Svc`**: Secciones de `appsettings.json` y ajustes en `Worker.cs`.
2. **Algoritmos y Flujo de Ejecución**:
   - Pseudocódigo o diagrama de flujo del proceso.
   - Manejo de transacciones SQL (`SqlTransaction`) y control de idempotencia (validación previa de folios en `iw_gsaen`).
3. **Decisiones Técnicas Justificadas**:
   - Cada decisión relevante acompañada de la alternativa que fue descartada y el porqué.
4. **Matriz de Cobertura de Requisitos**:
   - Mapeo explícito indicando qué archivo o método cubre cada **RF** y **RNF** de la spec.
5. **Estrategia de Verificación**:
   - Pasos de compilación (`dotnet build`) y pruebas específicas para validar el cumplimiento.

---

### 3. Cierre del Paso
Presenta un resumen al usuario de los componentes planificados y solicita su aprobación antes de avanzar a la generación de tareas (`/sdd-tasks`).
