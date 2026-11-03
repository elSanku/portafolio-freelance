import React from 'react';
import { ArrowUp } from 'lucide-react';

//INI SPEC-001 - 05
// Componente Footer con créditos profesionales y navegación de retorno
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-base tracking-tight">
              Felipe Bustamante <span className="text-amber-400 font-medium text-xs ml-1 uppercase">Freelancer</span>
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Desarrollo de software y diseño web enfocado en la calidad y resultados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-stone-500">
              &copy; {currentYear} Todos los derechos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
//FIN SPEC-001 - 05
