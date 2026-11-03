import React, { useState } from 'react';
import { Send, Mail, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '../schemas/contactSchema';

//INI SPEC-002 - 03
// Formulario de contacto con validación Zod, estados interactivos y feedback accesible
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
    website: '', // Honeypot antispam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // 1. Validación en cliente con Zod
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0].toString()] = issue.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus('submitting');

    try {
      // 2. Llamada a la Serverless Function de Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ nombre: '', telefono: '', email: '', mensaje: '', website: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Ocurrió un error al procesar el mensaje.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('No pudimos conectar con el servidor. Revisa tu conexión o escríbeme directamente.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFieldErrors({});
    setErrorMessage('');
  };

  return (
    <section id="contacto" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-xs uppercase font-bold tracking-widest text-amber-700 mb-2">Contacto Directo</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="mt-3 text-base text-stone-600">
            Cuéntame sobre tu idea o negocio y te responderé a la brevedad con una propuesta clara.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          {/* Mensaje de Éxito */}
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="p-8 text-center bg-emerald-50/80 border border-emerald-200 rounded-2xl"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-2">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-emerald-800 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Gracias por comunicarte. He recibido tus detalles en mi correo y me pondré en contacto contigo a la brevedad.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-emerald-950 bg-emerald-300 hover:bg-emerald-400 rounded-xl transition-colors cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Alerta de Error General */}
              {status === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-4 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="text-xs text-rose-700 mt-1">
                      Si el problema persiste, puedes escribirme directamente a:{' '}
                      <a href="mailto:thexsankux007@gmail.com" className="underline font-medium">
                        thexsankux007@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Campo Trampa Honeypot para Bots (oculto a humanos) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Website (dejar en blanco)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

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
                      autoComplete="name"
                      disabled={status === 'submitting'}
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      aria-invalid={!!fieldErrors.nombre}
                      aria-describedby={fieldErrors.nombre ? 'nombre-error' : undefined}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                        fieldErrors.nombre ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200 bg-stone-50/50'
                      } text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all disabled:opacity-50`}
                    />
                  </div>
                  {fieldErrors.nombre && (
                    <p id="nombre-error" className="text-xs text-rose-600 mt-1.5 font-medium">
                      {fieldErrors.nombre}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-stone-700 mb-2">
                    Teléfono de Contacto <span className="text-xs font-normal text-stone-500">(Opcional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      autoComplete="tel"
                      disabled={status === 'submitting'}
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      aria-invalid={!!fieldErrors.telefono}
                      aria-describedby={fieldErrors.telefono ? 'telefono-error' : undefined}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                        fieldErrors.telefono ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200 bg-stone-50/50'
                      } text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all disabled:opacity-50`}
                    />
                  </div>
                  {fieldErrors.telefono && (
                    <p id="telefono-error" className="text-xs text-rose-600 mt-1.5 font-medium">
                      {fieldErrors.telefono}
                    </p>
                  )}
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
                    autoComplete="email"
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      fieldErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200 bg-stone-50/50'
                    } text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                </div>
                {fieldErrors.email && (
                  <p id="email-error" className="text-xs text-rose-600 mt-1.5 font-medium">
                    {fieldErrors.email}
                  </p>
                )}
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
                    disabled={status === 'submitting'}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame brevemente qué necesitas desarrollar o mejorar..."
                    aria-invalid={!!fieldErrors.mensaje}
                    aria-describedby={fieldErrors.mensaje ? 'mensaje-error' : undefined}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${
                      fieldErrors.mensaje ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200 bg-stone-50/50'
                    } text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-y disabled:opacity-50`}
                  ></textarea>
                </div>
                {fieldErrors.mensaje && (
                  <p id="mensaje-error" className="text-xs text-rose-600 mt-1.5 font-medium">
                    {fieldErrors.mensaje}
                  </p>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
//FIN SPEC-002 - 03
