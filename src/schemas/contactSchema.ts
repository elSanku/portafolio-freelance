import { z } from 'zod';

//INI SPEC-002 - 01
// Esquema de validación para los datos del formulario de contacto
export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(80, { message: 'El nombre no puede exceder 80 caracteres' }),
  
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Ingresa un correo electrónico válido' })
    .max(100, { message: 'El correo no puede exceder 100 caracteres' }),
  
  telefono: z
    .string()
    .trim()
    .max(20, { message: 'El teléfono no puede exceder 20 caracteres' })
    .optional()
    .or(z.literal('')),

  mensaje: z
    .string()
    .trim()
    .min(10, { message: 'Cuéntame un poco más (mínimo 10 caracteres)' })
    .max(2000, { message: 'El mensaje no puede exceder 2000 caracteres' }),

  // Campo trampa Honeypot (debe ser ignorado o venir vacío)
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
//FIN SPEC-002 - 01
