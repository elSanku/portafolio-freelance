import React from 'react';
import { Palette, Layers, ShoppingBag, CheckCircle2 } from 'lucide-react';

//INI SPEC-001 - 03
// Sección de Servicios profesionales: Diseño Web, Aplicaciones Web y E-Commerce
export const Services: React.FC = () => {
  const services = [
    {
      title: 'Diseño Web Profesional',
      description: 'Interfaces modernas, limpias y accesibles diseñadas específicamente para transmitir autoridad y convertir visitantes en clientes.',
      icon: Palette,
      features: ['Diseño responsive mobile-first', 'Optimización de velocidad y SEO', 'Estándares de accesibilidad WCAG'],
    },
    {
      title: 'Aplicaciones Web a Medida',
      description: 'Sistemas y plataformas dinámicas desarrolladas con arquitecturas modernas, garantizando escalabilidad, estabilidad y alta reactividad.',
      icon: Layers,
      features: ['TypeScript y arquitecturas robustas', 'Integración de APIs y bases de datos', 'Autenticación y paneles de gestión'],
    },
    {
      title: 'Soluciones E-Commerce',
      description: 'Tiendas online preparadas para vender: pasarelas de pago integradas, catálogos fluidos y procesos de checkout sin fricción.',
      icon: ShoppingBag,
      features: ['Pasarelas de pago seguras', 'Gestión de inventario y pedidos', 'Experiencia de compra optimizada'],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-stone-100/60 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-amber-700 mb-2">Servicios & Especialidades</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Soluciones integrales para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-stone-900 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>

                <ul className="space-y-2.5 pt-6 border-t border-stone-100">
                  {service.features.map((feature) => (
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
//FIN SPEC-001 - 03
