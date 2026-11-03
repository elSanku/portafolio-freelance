# PLAN-003: Arquitectura y Componentes para el Perfil Profesional

- **Spec:** SPEC-003
- **Guardrails:** Ponytail (concisión, componentes reutilizables sin dependencias infladas) + Anti-UI Slop (timeline sobrio sin clichés)

---

## 1. Desglose de Componentes

1. **`src/components/Navbar.tsx`**:
   - Enlaces actualizados: `Inicio`, `Sobre mí`, `Experiencia`, `Servicios`, `Contacto`.
   - Accesos a LinkedIn y GitHub con iconos SVG de `lucide-react` en la barra superior.
2. **`src/components/Hero.tsx`**:
   - Propuesta de valor de Ingeniero Backend .NET & AI Developer.
   - Credenciales clave (Certificación DP-300, Antigravity, .NET 10).
3. **`src/components/About.tsx` (Nuevo)**:
   - Resumen profesional narrativo con visión de ingeniería de software e IA.
   - Enlaces directos a redes profesionales (LinkedIn y GitHub).
4. **`src/components/Experience.tsx` (Nuevo)**:
   - Timeline elegante y limpio con tus 4 roles clave desde Softland hasta tu labor freelance actual.
5. **`src/components/Services.tsx`**:
   - Actualización de los 3 servicios a tus especialidades reales (.NET, SQL Server transaccional, IA con Antigravity).
6. **`src/components/Footer.tsx`**:
   - Inclusión de los enlaces a LinkedIn y GitHub.

---

## 2. Fases de Ejecución

1. **Fase 1:** Crear `src/components/About.tsx` y `src/components/Experience.tsx`.
2. **Fase 2:** Actualizar `Navbar.tsx`, `Hero.tsx`, `Services.tsx` y `Footer.tsx` con la nueva narrativa.
3. **Fase 3:** Integrar los nuevos componentes en `src/App.tsx`.
4. **Fase 4:** Verificación de compilación (`npm run build`) y auditoría con Reviewer QA.
5. **Fase 5:** Generación de reporte técnico y actualización de `MEMORY.md`.
