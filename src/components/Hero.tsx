import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Database, Bot } from 'lucide-react';

//INI SPEC-003 - 03
// Hero actualizado con la identidad real de Felipe Bustamante (.NET Backend & AI Developer)
export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative py-20 lg:py-28 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800/40 via-stone-900 to-stone-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ubicación y estado */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700/80 text-stone-300 text-xs sm:text-sm font-medium mb-8">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Santiago, Chile &bull; Disponible para nuevos desafíos</span>
        </div>

        {/* Titular Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Desarrollador Backend .NET &{' '}
          <span className="text-amber-400 underline decoration-amber-400/40 underline-offset-8">
            AI Engineer
          </span>
        </h1>

        {/* Subtítulo con propuesta de valor del CV */}
        <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Ingeniero en Informática con más de 7 años de experiencia en sistemas ERP, transacciones críticas en SQL Server y servicios backend en C# / .NET 10. Especializado en el desarrollo de software asistido por agentes de IA con Google Antigravity.
        </p>

        {/* Insignias de Credibilidad Reales (Anti-UI Slop) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium">
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>Azure DP-300 Certified</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>+7 Años en ERP & SQL</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>Google Antigravity & SDD</span>
          </div>
        </div>

        {/* Llamados a la acción */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Iniciar Conversación
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#experiencia"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-stone-200 bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-xl transition-colors"
          >
            Ver Trayectoria
          </a>
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-003 - 03
