---
name: sdd-clarify
description: Audita y revisa una spec como QA profesional para detectar ambigüedades, contradicciones y casos límite sin resolverlos. Uso - /sdd-clarify NNN-nombre.
---

# Skill: Clarificación y Auditoría QA (/sdd-clarify)

Usa este procedimiento para auditar críticamente un archivo `specs/NNN-nombre/spec.md` con mentalidad de QA riguroso antes de avanzar a la planificación técnica.

## Contexto de Entrada
- **Uso**: `/sdd-clarify NNN-nombre`
- Archivo a revisar: `specs/<NNN-nombre>/spec.md`

---

## Procedimiento Obligatorio

### 1. Lectura de Contexto
- Lee exhaustivamente:
  - `specs/<NNN-nombre>/spec.md` (La spec bajo revisión).
  - [`docs/constitution.md`](docs/constitution.md) (Principios innegociables).
  - [`AGENTS.md`](AGENTS.md) (Límites y convenciones).

### 2. Auditoría Crítica de QA
Evalúa la spec buscando debilidades funcionales. Presenta tu análisis en una **lista numerada** organizada en 4 categorías:

1. **Ambigüedades restantes**:
   - Requisitos que no se pueden verificar o medir de forma objetiva.
   - Textos vagos (ej. "manejo adecuado de errores", "tiempo prudente").
2. **Contradicciones entre requisitos**:
   - Requisitos que chocan entre sí o con el alcance definido.
3. **Casos límite no cubiertos**:
   - Escenarios de borde (ej. caídas de conexión a mitad de ciclo, respuestas HTTP anómalas, datos nulos, folios duplicados no previstos, cortes de luz/reinicio del servidor).
4. **Conflictos con `docs/constitution.md`**:
   - Cualquier punto de la spec que vulnere o roce alguno de los principios innegociables (atomicidad, aislamiento de fallos, subordinación de OdinDTE, arquitectura Valkiria).

---

## Regla de Oro
> **NO PROPONGAS SOLUCIONES NI MODIFIQUES LA SPEC TODAVÍA**.
> Tu único rol en este comando es **detectar e iluminar problemas potenciales**, dejando los hallazgos expuestos con total claridad para que el usuario tome las decisiones.
