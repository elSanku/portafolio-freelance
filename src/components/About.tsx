import React from 'react';
import { Award, Bot, Wrench } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

//INI SPEC-004 - 03
// Componente Sobre Mí enfocado en resolución de problemas reales, negocio y versatilidad
export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Introducción & Enfoque Humano */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <span>Sobre Mí</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Ingeniero en Informática: resolución de problemas complejos, negocio y desarrollo con IA
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Durante más de 7 años me he especializado en comprender a fondo el funcionamiento interno y las reglas operativas de los sistemas ERP (Softland) y bases de datos transaccionales. Mi fuerte radica en la capacidad analítica para diagnosticar incidencias críticas, depurar código complejo y modernizar sistemas legados garantizando continuidad operativa.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Ese entendimiento profundo del negocio me permite diseñar soluciones resilientes —como servicios en segundo plano con control transaccional estricto (commit/rollback)— utilizando el potencial de la <strong>IA Generativa</strong> y la metodología <strong>Spec-Driven Development (SDD)</strong> con Google Antigravity para construir software robusto y libre de sobreingeniería.
            </p>

            {/* Enlaces Sociales Profesionales */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://linkedin.com/in/felipe-bustamante-alcavil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-ide-bg hover:bg-ide-surface text-white text-sm font-semibold transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 border border-ide"
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

          {/* Columna Derecha: Tarjetas de Habilidades Reales */}
          <div className="lg:col-span-5 space-y-4">
            {/* Certificación contextualizada con honestidad: aprendizaje continuo */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Educación & Certificaciones</h3>
                  <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">Aprendizaje Continuo</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-stone-800">
                Microsoft Certified: Azure Database Administrator Associate (DP-300)
              </p>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Rigor teórico en diseño y administración de bases de datos relacionales en la nube de Microsoft, reflejando compromiso constante con la actualización técnica y versatilidad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Wrench className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Depuración & Código Legado</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Especialista en resolver anomalías complejas, migración de componentes legados (VB6 a C# .NET) y optimización de procedimientos almacenados T-SQL en entornos productivos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-400/20 text-amber-800">
                  <Bot className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-stone-900 text-base">Desarrollo Asistido por IA (SDD)</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Construcción de software aplicando Spec-Driven Development, Google Antigravity y GitHub Copilot para acelerar la entrega de software con documentación y pruebas formales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
//FIN SPEC-004 - 03
