import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

//INI SPEC-004 - 06
// Footer actualizado con paleta IDE Dark suave y créditos profesionales
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e1e1e] text-stone-400 py-12 border-t border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-base tracking-tight">
              Felipe Bustamante <span className="text-amber-400 font-medium text-xs ml-1 uppercase">.NET &bull; AI-Assisted Engineer</span>
            </p>
            <p className="text-xs text-stone-400 mt-1">
              Desarrollo de servicios backend resilientes, sistemas ERP transaccionales y flujos con IA.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/felipe-bustamante-alcavil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#252526] hover:bg-[#2d2d2d] text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 border border-[#333333]"
              aria-label="Perfil de LinkedIn de Felipe Bustamante"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/elSanku"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#252526] hover:bg-[#2d2d2d] text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 border border-[#333333]"
              aria-label="Perfil de GitHub de Felipe Bustamante"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:felipebustamantealcavil@gmail.com"
              className="p-2.5 rounded-xl bg-[#252526] hover:bg-[#2d2d2d] text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 border border-[#333333]"
              aria-label="Enviar correo electrónico a Felipe Bustamante"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#252526] hover:bg-[#2d2d2d] text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer ml-2 border border-[#333333]"
              aria-label="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#333333]/80 text-center sm:text-left text-xs text-stone-500">
          <p>&copy; {currentYear} Felipe Bustamante Alcavil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
//FIN SPEC-004 - 06
