import React from 'react';
import { Award, Terminal, Cpu } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

//INI SPEC-003 - 01
// Componente Sobre Mí con perfil profesional real, visión de ingeniería e IA y enlaces sociales
export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Introducción & Enfoque */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <span>Sobre Mí</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Ingeniero en Informática con foco en arquitecturas backend e IA generativa
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Cuento con más de 7 años de experiencia inmerso en sistemas empresariales de alta exigencia, bases de datos SQL Server y plataformas ERP (Softland). Mi especialidad es construir servicios desacoplados, tolerantes a fallos y con estricto control transaccional.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Actualmente estoy transformando activamente mi perfil hacia <strong>AI Engineer</strong>, aprovechando herramientas como <strong>Google Antigravity</strong> y la metodología <strong>Spec-Driven Development (SDD)</strong> para orquestar agentes autónomos que aceleran el desarrollo sin sacrificar rigor ni calidad de software.
            </p>

            {/* Enlaces Sociales Profesionales */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://linkedin.com/in/felipe-bustamante-alcavil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-400" />
                <span>Perfil en LinkedIn</span>
              </a>

              <a
                href="https://github.com/elSanku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <GithubIcon className="w-4 h-4 text-stone-800" />
                <span>GitHub @elSanku</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Habilidades & Certificación */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Certificación Microsoft Azure</h3>
              </div>
              <p className="text-sm font-semibold text-stone-800">
                Azure Database Administrator Associate (DP-300)
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Especialista en administración, seguridad y optimización de bases de datos relacionales en la nube de Microsoft.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Terminal className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Backend & Datos</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                C#, .NET 10, ASP.NET, Worker Services, T-SQL, SQL Server (transacciones ACID, procedimientos almacenados, migración de instancias), IIS, Git.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Cpu className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">IA Generativa & Agentes</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Google Antigravity, Spec-Driven Development (SDD), Agent Skills, GitHub Copilot, Prompt Engineering avanzado e integración con modelos de lenguaje.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
//FIN SPEC-003 - 01
