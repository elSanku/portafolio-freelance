import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

//INI SPEC-003 - 02
// Componente de Experiencia Profesional con línea de tiempo estructurada
export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Desarrollador Backend .NET Freelance',
      company: 'Independiente',
      period: 'Ago 2026 – Presente',
      description:
        'Diseño y desarrollo de servicios en segundo plano tolerantes a fallos con C# y .NET 10, consumiendo APIs REST e integrando transaccionalmente ventas masivas con bases de datos SQL Server.',
      highlights: [
        'Construcción de Worker Service con control transaccional estricto (commit/rollback) por lote.',
        'Implementación de base intermedia para gestión de empresas y aislamiento de fallos.',
        'Desarrollo bajo metodología Spec-Driven Development (SDD) asistido por Google Antigravity.',
      ],
      skills: ['.NET 10', 'C#', 'SQL Server', 'Worker Services', 'Google Antigravity', 'SDD'],
    },
    {
      role: 'Desarrollador de Software',
      company: 'Softland Ltda.',
      period: 'Dic 2024 – Jul 2026',
      description:
        'Diseño, desarrollo y mantenimiento de módulos core del ERP Softland en C# y .NET, migración de componentes legados y optimización en SQL Server.',
      highlights: [
        'Migración a .NET de componentes legados en VB6 del plugin de Documentos Tributarios Electrónicos (DTE).',
        'Resolución de casos críticos reportados por soporte técnico garantizando continuidad operativa.',
        'Desarrollo de consultas complejas en T-SQL e integración eficiente con bases de datos.',
        'Uso diario de GitHub Copilot e IA generativa para generación de tests y aceleración de entregas.',
      ],
      skills: ['.NET Core', 'C#', 'T-SQL', 'SQL Server', 'GitHub Copilot', 'DTE'],
    },
    {
      role: 'Analista de Soporte Técnico ERP Onpremise / Cloud',
      company: 'Softland Ltda.',
      period: 'Mar 2019 – Dic 2024',
      description:
        'Administración y mantenimiento de bases de datos críticas SQL Server, diagnóstico de arquitectura y soporte avanzado a la plataforma Cloud Softland Azure.',
      highlights: [
        'Instalación, configuración y migración de instancias de bases de datos mediante SSMS.',
        'Optimización de queries, índices y procedimientos almacenados para clientes empresariales.',
        'Despliegue y administración de aplicaciones web en servidores IIS y Windows Server.',
        'Diagnóstico y resolución de incidencias en plugins de DTE y Tienda Online Softland (TOL).',
      ],
      skills: ['SQL Server', 'SSMS', 'Microsoft Azure', 'IIS', 'Windows Server', 'ERP'],
    },
    {
      role: 'Analista de Datos',
      company: 'ECR Group',
      period: 'Nov 2017 – Feb 2019',
      description:
        'Análisis, procesamiento y validación de datos para sistemas transaccionales masivos de nóminas y remuneraciones.',
      highlights: [
        'Diseño y ejecución de consultas en SQL Server y MS Access para validación masiva.',
        'Automatización de reportes analíticos y modelado de datos para toma de decisiones.',
      ],
      skills: ['SQL Server', 'T-SQL', 'Modelado de Datos', 'Automatización'],
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Experiencia Laboral Comprobada
          </h2>
          <p className="mt-3 text-base text-stone-600">
            7 años resolviendo desafíos reales en sistemas transaccionales, infraestructura y desarrollo de software.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-700 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                {exp.description}
              </p>

              <div className="space-y-2 mb-6">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-003 - 02
