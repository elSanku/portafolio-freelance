import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

//INI SPEC-004 - 04
// Componente de Experiencia Profesional con proyectos destacados reales (Worker Yuju y Migración DTE)
export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Desarrollador Backend .NET Freelance',
      company: 'Independiente / Cliente Empresarial',
      period: 'Ago 2026 – Presente',
      description:
        'Diseño y desarrollo en C# y .NET 10 de un Worker Service que consulta la API REST de Valkiria cada 15 minutos, procesa ventas de un E-commerce (Yuju) y las inserta automáticamente en la base de datos del ERP del cliente.',
      highlights: [
        'Comprensión profunda de las reglas de negocio del ERP para estructurar el modelo de datos e inserción.',
        'Implementación de control transaccional estricto (commit/rollback) por lote: si una venta falla, se aísla el error y el servicio continúa procesando sin detenerse.',
        'Base intermedia de configuración para habilitar empresas activas y trazabilidad exhaustiva de logs.',
        'Garantizar la inserción de datos a traves de procedimientos almacenados evitando inyección de código SQL embebido.',
        'Desarrollo integral bajo metodología Spec-Driven Development (SDD) asistido por Google Antigravity e IA Generativa.',
      ],
      skills: ['.NET 10', 'C#', 'SQL Server Transaccional', 'Worker Services', 'Google Antigravity', 'Gemini', 'SDD'],
    },
    {
      role: 'Desarrollador de Software',
      company: 'Softland Ltda.',
      period: 'Dic 2024 – Jul 2026',
      description:
        'Diseño, desarrollo y mantenimiento de módulos core del ERP Softland en C# y .NET, con especial foco en la modernización de componentes legados y depuración de incidencias complejas.',
      highlights: [
        'Misión clave: migración a C# y .NET Framework 4.5 de los componentes legados en Visual Basic 6 (VB6) del "Plugin DTE" (Documentos Tributarios Electrónicos), eliminando dependencias obsoletas.',
        'Participación activa en proyectos estrategicos para mantener la competitividad del ERP Softland en el mercado.',
        'Corrección de anomalías reportadas por el area de soporte garantizando la continuidad operativa.',
        'Desarrollo y optimización de consultas complejas en T-SQL e integración eficiente con bases de datos SQL Server.',
        'Uso activo de GitHub Copilot e IA Generativa para agilizar la migración de código legado y generación de pruebas unitarias.',
      ],
      skills: ['.NET Framework 4.5', 'C#', 'Migración VB6 a .NET', 'T-SQL', 'SQL Server', 'GitHub Copilot', 'DTE'],
    },
    {
      role: 'Analista de Soporte Técnico ERP Onpremise / Cloud',
      company: 'Softland Ltda.',
      period: 'Mar 2019 – Dic 2024',
      description:
        'Mantenimiento y diagnóstico de bases de datos críticas SQL Server, servidores IIS y soporte a la plataforma Cloud (Softland Azure) para clientes corporativos.',
      highlights: [
        'Instalación, configuración y migración de instancias de bases de datos mediante SSMS.',
        'Afinamiento y optimización de queries, índices y procedimientos almacenados en entornos productivos de alta concurrencia.',
        'Despliegue y administración de aplicaciones web en servidores IIS y Windows Server.',
        'Diagnóstico profundo de anomalías en plugins de DTE y Tienda Online Softland (TOL).',
      ],
      skills: ['SQL Server', 'SSMS', 'Optimización T-SQL', 'IIS', 'Windows Server', 'Softland ERP'],
    },
    {
      role: 'Analista de Datos',
      company: 'ECR Group',
      period: 'Nov 2017 – Feb 2019',
      description:
        'Análisis, procesamiento y validación masiva de datos en sistemas transaccionales para nóminas y cálculo de remuneraciones.',
      highlights: [
        'Diseño y ejecución de consultas en SQL Server y MS Access para validación masiva y cruce de datos.',
        'Automatización de reportes analíticos y modelado de datos para soporte a la toma de decisiones.',
      ],
      skills: ['MS Access', 'SQL Server', 'T-SQL', 'Modelado de Datos', 'Automatización'],
    },
  ];

  return (
    <section id="experiencia" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Trayectoria & Proyectos Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Experiencia Laboral Comprobada
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Más de 7 años resolviendo incidencias reales, migrando código legado y construyendo integraciones tolerantes a fallos.
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

              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100/80">
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
//FIN SPEC-004 - 04
