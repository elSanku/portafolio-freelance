# PLAN-002: Arquitectura Técnica y Estrategia de Implementación

- **Spec Asociada:** SPEC-002
- **Guardrails:** Ponytail (Máxima concisión y simplicidad) + Anti-UI Slop (Diseño con propósito y contraste WCAG AA)

---

## 1. Arquitectura por Capas

```
┌────────────────────────────────────────────────────────┐
│                    Capa de Presentación               │
│  src/components/ContactForm.tsx (React 19 + Tailwind)  │
│  - Estados: idle, submitting, success, error          │
│  - Campo honeypot oculto (sr-only + tabindex -1)       │
│  - Feedback accesible con aria-live y roles de alerta │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼ (safeParse cliente)
┌────────────────────────────────────────────────────────┐
│                   Capa de Validación                   │
│  src/schemas/contactSchema.ts                          │
│  - Esquema Zod único reutilizable                      │
│  - Tipado inferido: ContactFormData                    │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼ (HTTP POST /api/contact)
┌────────────────────────────────────────────────────────┐
│                Capa Backend / Serverless               │
│  api/contact.ts (Vercel Serverless Function)          │
│  - Verificación de método POST y Content-Type          │
│  - Validación Zod del cuerpo de la petición            │
│  - Verificación de Honeypot antispam                   │
│  - Despacho con cliente Resend (process.env)           │
│  - Destino: thexsankux007@gmail.com                    │
└────────────────────────────────────────────────────────┘
```

---

## 2. Decisiones Técnicas y Guardrail Ponytail

1. **Dependencias estrictamente necesarias:**
   - `zod`: Para esquemas de validación sólidos y tipado TypeScript automático.
   - `resend`: SDK oficial de Resend para Node.js, ligero y tipado.
   - *¿Por qué NO React Hook Form ni Formik?* Para un formulario de solo 4 campos, el estado con `useState` nativo de React 19 requiere menos de 30 líneas de código, sin dependencias adicionales ni re-renders innecesarios.
   - *¿Por qué NO librerías de alertas/toasts (sonner, react-hot-toast)?* Las alertas flotantes genéricas violan el principio Anti-UI Slop. Una alerta integrada directamente dentro del contexto visual de la tarjeta de contacto es más sobria, predecible y accesible.

2. **Serverless Function en Vercel (`api/contact.ts`):**
   - Vercel detecta automáticamente cualquier archivo en `/api/*.ts` como función serverless de Node.js sin requerir configurar Express ni servidores adicionales.
   - Compatibilidad total tanto en desarrollo local (`vercel dev` o Vite con proxy) como en producción.

3. **Manejo Seguro de Variables de Entorno:**
   - `.env.example`: Archivo versionado con la plantilla `RESEND_API_KEY=re_tu_api_key_aqui`.
   - `.env.local`: Archivo ignorado en `.gitignore` para pruebas locales.

---

## 3. Estrategia de Estilos y Anti-UI Slop

1. **Feedback Visual Sobrio:**
   - Estado de éxito: Contenedor con borde fino `border-emerald-200`, fondo sutil `bg-emerald-50`, texto oscuro de alto contraste `text-emerald-900` e icono `CheckCircle2` de `lucide-react`.
   - Estado de error: Contenedor con borde `border-rose-200`, fondo `bg-rose-50`, texto `text-rose-900` e icono `AlertCircle`.
2. **Micro-interacciones:**
   - Botón de envío con estado deshabilitado estilizado (`disabled:opacity-60 disabled:cursor-not-allowed`).
   - Spinner de carga SVG limpio y giratorio integrado en el botón durante el estado `submitting`.
3. **Accesibilidad:**
   - Notificaciones con `role="status"` o `role="alert"` y `aria-live="polite"`.
   - Campo honeypot con clase `sr-only` y `tabIndex={-1}`, con `aria-hidden="true"` y `autoComplete="off"` para evitar que sea completado por asistentes humanos o gestores de contraseñas.

---

## 4. Fases de Ejecución

1. **Fase 1: Preparación y Dependencias:** Instalar `zod` y `resend`. Crear `.env.example` y verificar `.gitignore`.
2. **Fase 2: Esquema de Validación:** Crear `src/schemas/contactSchema.ts` con tipado estricto.
3. **Fase 3: Serverless Function:** Implementar `api/contact.ts` con manejo de errores, honeypot y despacho Resend.
4. **Fase 4: Integración UI en ContactForm:** Actualizar `src/components/ContactForm.tsx` con validación, estados reactivos y feedback visual.
5. **Fase 5: Verificación y Auditoría:** Probar compilación (`npm run build`), verificar accesibilidad con Reviewer QA y validar que no haya credenciales filtradas.
6. **Fase 6: Cierre y Reporte:** Generar reporte técnico en `docs/reports/` y actualizar `MEMORY.md`.
