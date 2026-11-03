import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

//INI SPEC-001 - 01
// Componente de encabezado y navegación principal responsive con accesibilidad
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
            Felipe Bustamante <span className="text-amber-400 font-semibold text-sm sm:text-base ml-1 uppercase tracking-wider">Freelancer</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              >
                {link.name}
              </a>
            ))}
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
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
        <div className="md:hidden border-b border-stone-800 bg-stone-900 px-4 pt-2 pb-6 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-md"
            >
              {link.name}
            </a>
          ))}
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
//FIN SPEC-001 - 01
