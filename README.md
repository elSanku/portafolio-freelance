# Portafolio Profesional — Felipe Bustamante

> **Desarrollador Backend .NET & AI Engineer**  
> *Ingeniero en Informática especializado en arquitecturas transaccionales (.NET / C# / SQL Server / ERPs) y desarrollo de software moderno asistido por agentes de Inteligencia Artificial mediante metodología Spec-Driven Development (SDD).*

---

## 🌟 Acerca del Proyecto

Este repositorio contiene el código fuente del sitio web profesional y portafolio de **Felipe Bustamante**, modernizado desde una arquitectura estática tradicional hacia una aplicación fullstack modular de alto rendimiento, accesible (WCAG AA) y con un sistema transaccional de despacho de correos en la nube.

El desarrollo fue ejecutado íntegramente bajo la metodología **Spec-Driven Development (SDD)** con agentes autónomos en **Google Antigravity**, aplicando guardrails de ingeniería:
- **Ponytail:** Prevención de código redundante y sobreingeniería ("20 líneas en lugar de 100", máxima concisión).
- **Anti-UI Slop:** Diseño intencional, tipografía con carácter (*Plus Jakarta Sans*), micro-interacciones sobrias y eliminación de clichés visuales de IA.

---

## 🚀 Stack Tecnológico

### Frontend
- **Framework:** [React 19](https://react.dev/) + [TypeScript 5.7](https://www.typescriptlang.org/) (Tipado 100% estricto sin `any`).
- **Bundler:** [Vite 6](https://vite.dev/) (Builds ultrarrápidos y HMR instantáneo).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) vía plugin nativo `@tailwindcss/vite`.
- **Iconografía:** [Lucide React](https://lucide.dev/) (Vectores SVG ligeros y limpios).

### Backend & Serverless
- **Serverless Runtime:** [Vercel Serverless Functions](https://vercel.com/docs/functions) (`api/contact.ts`).
- **Validación de Datos:** [Zod](https://zod.dev/) (Doble capa de sanitización y validación estricta en cliente y servidor).
- **Servicio de Correo:** [Resend API](https://resend.com/) con plantillas estructuradas en HTML y cabecera dinámica `reply_to`.
- **Seguridad:** Cero exposición de API keys; protección antispam mediante campo trampa **Honeypot** silencioso.

---

## 📂 Estructura del Repositorio

```text
miSitio/
├── .agents/                      # Framework de Agentes y Skills SDD
│   ├── agents/                   # Roles de agentes (coordinator, planner, implementer, reviewer)
│   ├── rules/                    # Reglas de desarrollo (ponytail.md)
│   └── skills/                   # Habilidades autónomas (sdd-*, ponytail-*, anti-ui-slop)
├── .gemini/
│   └── mcp/                      # Servidores MCP locales (chrome-devtools, context7, github)
├── api/                          # Backend Serverless en Vercel
│   └── contact.ts                # Endpoint POST /api/contact con Zod y Resend
├── docs/
│   ├── constitution.md           # Principios técnicos innegociables del proyecto
│   └── reports/                  # Reportes de auditoría QA por especificación (.md y .html)
├── specs/                        # Ciclo de vida SDD (Spec-Driven Development)
│   ├── 001-setup-y-migracion-arquitectura/
│   ├── 002-formulario-contacto-email/
│   └── 003-contenido-profesional-cv/
├── src/
│   ├── components/               # Componentes UI modulares (Navbar, Hero, About, Experience, Services, ContactForm, Footer)
│   ├── schemas/                  # Esquemas de validación Zod (contactSchema.ts)
│   ├── App.tsx                   # Ensamblado principal de la aplicación
│   └── main.tsx                  # Punto de entrada de React 19
├── AGENTS.md                     # Manual operativo de los agentes de Antigravity
├── MEMORY.md                     # Memoria técnica persistente del proyecto
└── vite.config.ts                # Configuración de Vite y Tailwind v4
```

---

## 📋 Especificaciones SDD Implementadas

| Especificación | Nombre | Alcance / Entregable | Estado |
| :---: | :--- | :--- | :---: |
| **SPEC-001** | *Setup y Migración de Maquetación* | Configuración base React 19 + TypeScript + Tailwind v4 y componentización accesible. | ✅ Aprobado QA |
| **SPEC-002** | *Formulario de Contacto y Resend API* | Endpoint `/api/contact`, validación Zod, honeypot y despacho seguro de correo. | ✅ Aprobado QA |
| **SPEC-003** | *Perfil Profesional y Experiencia Real* | Integración de trayectoria (.NET, Softland, Azure DP-300, Antigravity) y enlaces sociales. | ✅ Aprobado QA |

---

## 🛠️ Instalación y Desarrollo Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/elSanku/portafolio-freelance.git
   cd portafolio-freelance
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de Entorno (Opcional para pruebas locales del backend):**
   Copia el archivo de plantilla:
   ```bash
   cp .env.example .env.local
   ```
   Configura tu clave de Resend en `.env.local`:
   ```env
   RESEND_API_KEY=re_tu_clave_aqui
   ```

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Despliegue en Producción (Vercel)

El proyecto está diseñado para desplegarse con **cero configuración** en Vercel:
1. Conecta el repositorio de GitHub en [vercel.com](https://vercel.com).
2. En la sección **Environment Variables**, añade:
   - **Nombre:** `RESEND_API_KEY`
   - **Valor:** Tu API Key de Resend.
3. Despliega con un clic. Vercel aprovisionará el frontend y la función serverless `/api/contact` con HTTPS automático.

---

## 👤 Autor

**Felipe Bustamante Alcavil**  
- **LinkedIn:** [felipe-bustamante-alcavil](https://linkedin.com/in/felipe-bustamante-alcavil)  
- **GitHub:** [@elSanku](https://github.com/elSanku)  
- **Email:** [thexsankux007@gmail.com](mailto:thexsankux007@gmail.com)  
- **Certificación:** *Microsoft Certified: Azure Database Administrator Associate (DP-300)*
