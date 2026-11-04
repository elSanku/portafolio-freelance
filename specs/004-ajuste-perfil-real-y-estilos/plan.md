# PLAN-004: Plan de Implementación de Ajustes de Perfil y Estilos

- **Spec:** SPEC-004
- **Guardrails:** Ponytail (concisión) + Anti-UI Slop (paleta IDE sobria)

---

## 1. Modificaciones de Estilos Globales
- Definir variables de color para el tema IDE Dark en `src/index.css`:
  - `--bg-ide`: `#1e1e1e` (fondo base oscuro suave)
  - `--bg-ide-card`: `#252526` (superficies elevadas)
  - `--border-ide`: `#333333` (bordes suaves de separación)

## 2. Ajustes en Componentes
1. **`Navbar.tsx` & `Footer.tsx`:**
   - Aplicar fondo `#1e1e1e` y bordes `#333333`.
2. **`Hero.tsx`:**
   - Reemplazar texto del Hero por el acordado en la entrevista.
   - Badges actualizados (reemplazar foco en Azure por resolución de incidencias, legado y aprendizaje continuo).
   - Fondo con tono IDE suave.
3. **`About.tsx`:**
   - Redefinir la tarjeta de la certificación DP-300: aprendizaje continuo, teoría sólida de base de datos relacional y versatilidad.
   - Destacar capacidad analítica para entender las reglas de negocio en sistemas complejos.
4. **`Experience.tsx`:**
   - En el rol Freelance: detallar la integración de Yuju al ERP con control transaccional e IA con SDD (omitiendo nombre Softland).
   - En Softland: resaltar la migración de VB6 a C# .NET Framework 4.5 en el plugin de DTE.
5. **`Services.tsx`:**
   - Pilares reales:
     1. Depuración, resolución de incidencias y modernización de código legado (VB6 a .NET).
     2. Consultas complejas T-SQL, optimización de queries y procedimientos almacenados asistido por IA.
     3. Servicios Worker & Integraciones Backend (.NET) aplicando entendimiento de negocio e IA generativa (SDD).

## 3. Verificación
- `npm run build` sin errores.
- Despliegue automático a GitHub y Vercel.
