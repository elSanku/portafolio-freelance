import React from 'react';
import { Server, Database, Bot, CheckCircle2 } from 'lucide-react';

//INI SPEC-003 - 04
// Sección de Especialidades Técnicas alineadas al perfil real de Felipe Bustamante
export const Services: React.FC = () => {
  const specialties = [
    {
      title: 'Desarrollo Backend & Servicios .NET',
      description: 'Construcción de arquitecturas backend robustas en C# y .NET 10: Worker Services en segundo plano, integración de APIs REST empresariales y procesamiento tolerante a fallos.',
      icon: Server,
      features: [
        'Worker Services con control transaccional por lote',
        'APIs REST seguras, modulares y de alto rendimiento',
        'Migración de sistemas y componentes legados a .NET moderno',
      ],
    },
    {
      title: 'Bases de Datos & SQL Server Transaccional',
      description: 'Gestión y optimización avanzada de bases de datos relacionales empresariales respaldadas por la certificación oficial Azure Database Administrator Associate (DP-300).',
      icon: Database,
      features: [
        'Procedimientos almacenados complejos con commit/rollback atómico',
        'Optimización de consultas T-SQL y afinamiento de índices',
        'Migración y administración de instancias onpremise y Azure SQL',
      ],
    },
    {
      title: 'Desarrollo Asistido por IA & Flujos SDD',
      description: 'Integración de inteligencia artificial en el ciclo de vida del software mediante Spec-Driven Development con Google Antigravity y herramientas generativas.',
      icon: Bot,
      features: [
        'Metodología Spec-Driven Development (SDD) con agentes autónomos',
        'Aceleración de pruebas unitarias y refactorización guiada',
        'Prompt Engineering y diseño de flujos de automatización técnica',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-stone-100/60 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Especialidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pilares Técnicos y Soluciones
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Enfoque en fiabilidad, código limpio sin sobreingeniería y sistemas preparados para operar en entornos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-stone-900 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>

                <ul className="space-y-2.5 pt-6 border-t border-stone-100">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-003 - 04
