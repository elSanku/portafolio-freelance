# SPEC-004: Ajuste Fidedigno de Perfil Profesional, Proyectos Clave y Paleta Dark IDE

- **Estado:** En Implementación
- **Fecha:** 2026-11-04
- **Autor:** Planificador SDD (Planner) & Felipe Bustamante
- **Área:** Contenido (Copywriting Técnico), Arquitectura de Información y Estilos UI

---

## 1. Contexto y Objetivos

- **Contexto:** La versión anterior asumía experiencia práctica en Azure cloud por la certificación DP-300, y no reflejaba con precisión el verdadero fuerte de Felipe: resolución de incidencias en sistemas core, modernización de código legado (VB6 a .NET), optimización SQL y comprensión profunda del negocio ERP combinada con desarrollo asistido por IA (SDD).
- **Objetivos de Negocio y Producto:**
  1. **Honestidad Técnica Total:** Dejar la certificación DP-300 en su lugar correspondiente (Educación/Certificaciones con foco en aprendizaje continuo y versatilidad), sin vender falsas expectativas de cloud.
  2. **Propuesta de Valor Fidedigna en Hero:** Definir a Felipe textualmente con su declaración de valor real.
  3. **Reflejo de los 4 Pilares Reales:** Depuración/incidencias en código, modernización de legado, consultas complejas T-SQL / optimización de SPs asistida por IA, y desarrollo de Worker Services con entendimiento del negocio e IA generativa.
  4. **Proyectos Clave con Orgullo:** Detallar el caso del *Worker Service de integración E-commerce (Yuju) hacia ERP de cliente* (omitiendo marca Softland aquí) y la *Modernización del Plugin DTE en Softland* (migración VB6 a C# .NET Framework 4.5).
  5. **Estética Visual Dark IDE:** Sustituir los fondos oscuros puros (`stone-900`/`stone-950`) por el tono gris grafito/antracita suave (`#1e1e1e` / `#252526`) característico de los editores de código (VS Code / Visual Studio) proporcionado en la muestra visual.

---

## 2. Requerimientos Funcionales (EARS)

- **REQ-001 (Hero):**
  - Titular: *Felipe Bustamante | Desarrollador Backend .NET & AI-Assisted Developer*.
  - Bajada textual: *"Ingeniero en Informática con más de 7 años de experiencia en sistemas Softland ERP, transacciones críticas en SQL Server y servicios backend en C# / .NET. Especializado en el desarrollo de software asistido por agentes de IA."*
  - Badges: `+7 Años en Sistemas ERP & SQL`, `Resolución de Incidencias & Código Legado`, `Aprendizaje Continuo & Versatilidad`.

- **REQ-002 (Sobre Mí & Certificaciones):**
  - Narrativa centrada en comprensión del negocio, resiliencia y modernización de código.
  - Tarjeta de certificación DP-300 orientada a *compromiso con el aprendizaje continuo y rigor teórico en bases de datos relacionales*.

- **REQ-003 (Proyectos Destacados & Especialidades):**
  - **Proyecto 1:** *Worker Service de Sincronización E-commerce (Yuju) a ERP*. Destacar entendimiento del negocio, control transaccional estricto (commit/rollback) y desarrollo asistido por IA mediante metodología SDD con Google Antigravity.
  - **Proyecto 2:** *Modernización del Plugin DTE (Softland)*. Migración arquitectónica de componentes legados de VB6 a C# .NET Framework 4.5, eliminando dependencias obsoletas.

- **REQ-004 (Paleta Visual Dark IDE):**
  - Actualizar la paleta en Navbar, Hero y Footer para utilizar el fondo grafito suave `#1e1e1e` / `#252526` y bordes sutiles `#333333`.

---

## 3. Criterios de Aceptación

1. **CA-01:** El Hero presenta la descripción exacta y badges solicitados por Felipe.
2. **CA-02:** Los proyectos destacan el Worker Service (con enfoque de negocio + IA + SDD) y el Plugin DTE de Softland (migración VB6 a C# .NET 4.5).
3. **CA-03:** La paleta visual oscura adopta el tono grafito de IDE de la imagen de muestra.
4. **CA-04:** Compilación limpia (`npm run build`) y marcas `//INI SPEC-004` / `//FIN SPEC-004`.
