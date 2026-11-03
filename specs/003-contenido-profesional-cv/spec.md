# SPEC-003: Contenido Profesional Real, Experiencia y Perfil .NET + AI Engineer

- **Estado:** Listo para Implementación
- **Fecha:** 2026-11-03
- **Autor:** Planificador SDD (Planner) & Usuario (Felipe Bustamante)
- **Área:** Frontend & Experiencia de Usuario (UX)

---

## 1. Contexto y Objetivos

- **Contexto:** Las especificaciones anteriores establecieron la arquitectura moderna (SPEC-001) y el backend de correos (SPEC-002), pero conservaban textos temporales heredados del sitio original de diseño.
- **Objetivo:** Reflejar la identidad y trayectoria real de **Felipe Bustamante**:
  - Ingeniero en Informática con +7 años en desarrollo backend (.NET / C# / SQL Server / ERPs).
  - Especialización activa y transición hacia **AI Engineer** (Google Antigravity, Spec-Driven Development, IA Generativa).
  - Incorporar secciones ricas y estructuradas de **Sobre mí**, **Trayectoria Profesional** y **Habilidades / Especialidades Técnicas Reales**.
  - Accesos directos a **LinkedIn** y **GitHub** (sin botón de descarga de CV ni WhatsApp por decisión de producto).

---

## 2. Requerimientos Funcionales (Formato EARS)

### 2.1 Hero & Propuesta de Valor
- **EL SISTEMA** presentará a Felipe Bustamante como **.NET Backend & AI Developer** en el Hero.
- **EL SISTEMA** destacará credenciales clave: Certificación Azure DP-300, +7 años en ecosistemas ERP y desarrollo asistido por IA (Antigravity).
- **EL SISTEMA** incluirá botones de acción directa a "Ver Experiencia" y "Contactar".

### 2.2 Sección Sobre Mí (`#sobre-mi`)
- **EL SISTEMA** narrará la trayectoria técnica de Felipe: evolución desde soporte crítico ERP y optimización SQL en Softland hasta desarrollo backend y automatización con agentes de IA.
- **EL SISTEMA** mostrará enlaces directos a sus perfiles públicos de:
  - **LinkedIn:** `https://linkedin.com/in/felipe-bustamante-alcavil`
  - **GitHub:** `https://github.com/elSanku`

### 2.3 Sección de Experiencia & Trayectoria (`#experiencia`)
- **EL SISTEMA** presentará una cronología profesional detallada:
  1. **Desarrollador Backend .NET Freelance (2026 - Presente):** Worker Service en .NET 10 tolerante a fallos con arquitectura transaccional SQL y SDD con Google Antigravity.
  2. **Desarrollador de Software en Softland Ltda. (2024 - 2026):** Módulos core ERP, migración de componentes legacy de DTE a .NET y optimización de consultas SQL Server.
  3. **Analista de Soporte Técnico ERP Onpremise / Cloud en Softland (2019 - 2024):** Infraestructura crítica SQL, IIS y Azure Cloud.
  4. **Analista de Datos en ECR Group (2017 - 2019):** Procesamiento transaccional de datos y SQL.

### 2.4 Servicios & Especialidades (`#servicios`)
- **EL SISTEMA** estructurará los 3 pilares técnicos de especialización:
  1. **Backend & Worker Services (.NET 10 / C#):** APIs REST, servicios tolerantes a fallos y microservicios.
  2. **Bases de Datos & SQL Server (Certificación DP-300):** Procedimientos almacenados atómicos, optimización y Azure SQL.
  3. **Desarrollo con IA & Flujos SDD:** Google Antigravity, agentes autónomos y desarrollo spec-driven.

---

## 3. Criterios de Aceptación

1. **CA-01:** La página refleja fielmente el CV de Felipe Bustamante (.NET + AI Engineer) sin textos placeholder (`Lorem Ipsum`).
2. **CA-02:** Los enlaces a LinkedIn y GitHub están presentes, abren en pestaña nueva segura (`rel="noopener noreferrer"`) y tienen accesibilidad validada.
3. **CA-03:** La línea de tiempo de experiencia es responsive y legible en resoluciones móviles y de escritorio.
4. **CA-04:** Compilación sin errores (`npm run build`) y marcas de auditoría formales `//INI SPEC-003` / `//FIN SPEC-003`.
