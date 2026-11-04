import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

//INI SPEC-004 - 01
// Navbar con paleta IDE Dark suave y navegación actualizada
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Trayectoria', href: '#experiencia' },
    { name: 'Especialidades', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1e1e1e]/85 backdrop-blur-md border-b border-[#333333]/70 text-stone-100 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
            Felipe Bustamante <span className="text-amber-400 font-semibold text-xs sm:text-sm ml-1 uppercase tracking-wider">.NET &bull; AI</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              >
                {link.name}
              </a>
            ))}

            <div className="h-5 w-px bg-stone-700/60 mx-2" aria-hidden="true" />

            {/* Iconos Sociales */}
            <div className="flex items-center space-x-3">
              <a
                href="https://linkedin.com/in/felipe-bustamante-alcavil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-ide-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Perfil de LinkedIn de Felipe Bustamante"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/elSanku"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-ide-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Perfil de GitHub de Felipe Bustamante"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-lg shadow-sm"
            >
              Hablemos
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-ide-surface focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#333333] bg-[#1e1e1e] px-4 pt-2 pb-6 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-[#252526] rounded-md"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-[#333333] flex items-center justify-around">
            <a
              href="https://linkedin.com/in/felipe-bustamante-alcavil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white"
            >
              <LinkedinIcon className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/elSanku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white"
            >
              <GithubIcon className="w-4 h-4 text-amber-400" />
              <span>GitHub</span>
            </a>
          </div>

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-4 py-2.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm mt-4"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
};
//FIN SPEC-004 - 01
