import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

//INI SPEC-001 - 02
// Componente Hero con propuesta de valor, ubicación y llamado a la acción
export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative py-20 lg:py-28 bg-stone-900 text-stone-100 overflow-hidden">
      {/* Sutil textura o acento de luz sobrio (anti-ui-slop: sin gradientes púrpuras gigantes) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800/40 via-stone-900 to-stone-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700/80 text-stone-300 text-xs sm:text-sm font-medium mb-8">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Independencia, Santiago de Chile</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Diseño y Desarrollo Web{' '}
          <span className="text-amber-400 underline decoration-amber-400/40 underline-offset-8">
            Freelance
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Creo soluciones digitales sólidas, visualmente atractivas y orientadas a resultados comerciales: desde landing pages de alta conversión hasta aplicaciones a medida.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Iniciar un Proyecto
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-stone-200 bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-xl transition-colors"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-001 - 02
