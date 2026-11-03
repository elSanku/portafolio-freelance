import React, { useState } from 'react';
import { Send, Mail, Phone, User, MessageSquare } from 'lucide-react';

//INI SPEC-001 - 04
// Componente de formulario de contacto con maquetación moderna, estados visuales y accesibilidad
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En SPEC-002 conectaremos el endpoint API / Serverless con Resend
    alert('Mensaje preparado para el backend de envío (SPEC-002)');
  };

  return (
    <section id="contacto" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-xs uppercase font-bold tracking-widest text-amber-600 mb-2">Contacto Directo</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="mt-3 text-base text-stone-600">
            Cuéntame sobre tu idea o negocio y te responderé a la brevedad con una propuesta clara.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-stone-700 mb-2">
                  Tu Nombre <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-stone-700 mb-2">
                  Teléfono de Contacto
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-stone-700 mb-2">
                Mensaje o Descripción del Proyecto <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-stone-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame brevemente qué necesitas desarrollar o mejorar..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-y"
                ></textarea>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-001 - 04
