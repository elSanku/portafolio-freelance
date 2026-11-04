import React from 'react';
import { Wrench, Database, Bot, CheckCircle2 } from 'lucide-react';

//INI SPEC-004 - 05
// Sección de Especialidades Técnicas alineadas al perfil real y fortalezas de Felipe Bustamante
export const Services: React.FC = () => {
  const specialties = [
    {
      title: 'Depuración & Modernización de Código Legado',
      description: 'Diagnóstico quirúrgico y resolución de anomalías complejas en sistemas en producción. Especialista en modernizar sistemas legados (migración de VB6 a C# .NET) eliminando dependencias obsoletas sin interrumpir la operación.',
      icon: Wrench,
      features: [
        'Migración de código legado VB6 a arquitecturas modernas en C# .NET',
        'Resolución y depuración de incidencias críticas en sistemas en caliente',
        'Refactorización limpia reduciendo deuda técnica y mejorando estabilidad',
      ],
    },
    {
      title: 'Consultas Complejas & SQL Server Transaccional',
      description: 'Diseño, optimización y mantenimiento de bases de datos relacionales empresariales. Creación de procedimientos almacenados T-SQL robustos asistidos por IA y afinamiento de queries.',
      icon: Database,
      features: [
        'Procedimientos almacenados complejos con control transaccional atómico (commit/rollback)',
        'Optimización y análisis de planes de ejecución en consultas T-SQL críticas',
        'Conocimiento sólido de administración respaldado por certificación Azure DP-300',
      ],
    },
    {
      title: 'Worker Services & Desarrollo Asistido por IA (SDD)',
      description: 'Construcción de servicios en segundo plano tolerantes a fallos (ej. sincronización de ventas de E-commerce al ERP), aprovechando el entendimiento del negocio y flujos estructurados con Google Antigravity.',
      icon: Bot,
      features: [
        'Worker Services en .NET 10 para sincronización de APIs hacia bases de datos ERP',
        'Aislamiento de fallos por lote: el proceso continúa aun si un registro falla',
        'Metodología Spec-Driven Development (SDD) con agentes de IA para software riguroso',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-stone-100/60 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Especialidades & Fortalezas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pilares Técnicos y Soluciones Reales
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Enfoque en resiliencia, comprensión de las reglas del negocio y desarrollo eficiente asistido por IA.
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
//FIN SPEC-004 - 05
