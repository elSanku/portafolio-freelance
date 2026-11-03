# SPEC-001: Setup del Proyecto, Arquitectura Base y Migración de Maquetación

## 1. Contexto y Objetivos
- **Contexto:** El proyecto original en `miSitio` consta de un `index.html` y archivos CSS antiguos sin componentes ni interactividad funcional.
- **Objetivo:** 
  1. Inicializar la arquitectura base con Node.js, TypeScript y Tailwind CSS.
  2. Migrar la estructura visual actual (Header, Navegación, Hero con ubicación en Independencia Santiago, Sección de Servicios con diseño y desarrollo web/apps/e-commerce, y Formulario de Contacto).
  3. Dejar el terreno listo con componentes limpios y desacoplados para la integración del backend de correos (SPEC-002).

## 2. Requerimientos
- **REQ-001:** Configuración inicial del entorno moderno con TypeScript y Tailwind CSS para máxima productividad y compacidad.
- **REQ-002:** Componentización de la página:
  - `Header` y `Navbar` responsivo.
  - `Hero` con título "Felipe Bustamante Freelancer" y ubicación con pin interactivo.
  - `ServicesList` y `ServiceCard` con íconos vectoriales SVG limpios.
  - `ContactForm` preparado con campos: Nombre, Teléfono, Correo y Mensaje.
  - `Footer` con derechos reservados.
- **REQ-003:** Conservación del look & feel mejorado: tipografía limpia, paleta de colores coherente y mobile-first responsivo.
- **REQ-004:** Marcado riguroso de auditoría `//INI SPEC-001` y `//FIN SPEC-001`.

## 3. Criterios de Aceptación
1. El proyecto compila y se ejecuta en servidor de desarrollo local sin errores de TypeScript.
2. La maquetación replica e incrementa la calidad visual del sitio anterior.
3. El formulario renderiza todos los campos requeridos con accesibilidad y diseño responsive comprobado.
