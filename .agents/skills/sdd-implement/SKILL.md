---
name: sdd-implement
description: Implementa UNA sola tarea de una spec respetando el plan y la constitución (uso - /sdd-implement NNN-nombre Tn). Rol ejecutor (build).
---

# Skill: Implementación de Tarea SDD (/sdd-implement)

Usa este procedimiento para ejecutar de forma atómica y enfocada una única tarea del checklist `tasks.md`.

## Contexto de Entrada
- **Uso**: `/sdd-implement NNN-nombre Tn` (ejemplo: `/sdd-implement 001-setup-y-referencias T1`)
- Spec activa: `specs/<NNN-nombre>/`
- Tarea a ejecutar: `Tn`

---

## Procedimiento Obligatorio

### 1. Lectura del Alcance de la Tarea
Antes de editar o crear cualquier archivo, revisa:
- La tarea específica `Tn` en `specs/<NNN-nombre>/tasks.md` y su criterio *"Hecho cuando:"*.
- El diseño correspondiente en `specs/<NNN-nombre>/plan.md`.
- Los principios innegociables en [`docs/constitution.md`](docs/constitution.md) y [`AGENTS.md`](AGENTS.md).

### 2. Implementación Enfocada
1. Implementa **ÚNICA Y EXCLUSIVAMENTE** lo necesario para satisfacer la tarea `Tn`.
2. Si la tarea involucra SQL, crea o edita el script `.sql` en la carpeta correspondiente de `BaseDatos\SQL Server\`.
3. Si la tarea involucra acceso a datos, implementa los métodos en `Repositorio` utilizando `ValkiriaAspNetDataAccessLibrary.SQLServer.DBConector` e invocando Procedimientos Almacenados.
4. Mantén la separación estricta de capas: cero SQL en `Negocio` y nada de dependencias no autorizadas.
5. **Regla de Auditoría Quirúrgica**: En archivos preexistentes, NUNCA sobreescribas las marcas de auditoría de specs anteriores (`SPEC-00X`). Preserva el bloque exterior original y delimita únicamente las líneas modificadas o añadidas con `//INI SPEC-XXX - NN` (o `--INI`), incluyendo obligatoriamente un comentario explicativo conciso en la siguiente línea. En SPs, añade además la línea de modificación en el encabezado institucional.

### 3. Verificación de Compilación y Calidad
1. Ejecuta la compilación con `dotnet build`.
2. Confirma que no existan errores de compilación ni roturas de referencias.
3. Si la tarea incluye pruebas (`dotnet test`), ejecútalas y valida que pasen en verde.
4. Verifica que se cumpla de forma exacta el criterio *"Hecho cuando:"* definido para la tarea `Tn`.

### 4. Actualización del Estado
1. Marca la tarea como completada en `specs/<NNN-nombre>/tasks.md`:
   `- [x] **Tn. ...**`
2. Muestra al usuario:
   - Resumen de los archivos creados o modificados.
   - Resultado de la compilación (`dotnet build`).
   - Los requisitos (RF/RNF) cubiertos por la tarea.

---

## Regla de Parada Innegociable
> **DETENTE INMEDIATAMENTE TRAS COMPLETAR LA TAREA `Tn`**.
> **PROHIBIDO** continuar automáticamente con la tarea siguiente (`Tn+1`) sin la confirmación y revisión explícita del usuario.
