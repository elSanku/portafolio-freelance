import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { contactSchema } from '../src/schemas/contactSchema';

//INI SPEC-002 - 02
// Serverless Function para Vercel: Valida con Zod y envía email con Resend
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Restringir solo a método POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Método no permitido. Solo se acepta POST.',
    });
  }

  try {
    // 2. Validar payload con Zod
    const parseResult = contactSchema.safeParse(req.body);
    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return res.status(400).json({
        success: false,
        error: 'Datos del formulario inválidos',
        details: fieldErrors,
      });
    }

    const { nombre, email, telefono, mensaje, website } = parseResult.data;

    // 3. Protección antispam Honeypot: si el bot llenó el campo oculto, simular éxito y descartar
    if (website && website.trim().length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Mensaje recibido exitosamente',
      });
    }

    // 4. Verificar configuración de API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[CRITICAL] Variable de entorno RESEND_API_KEY no configurada');
      return res.status(500).json({
        success: false,
        error: 'El servicio de correo no está disponible en este momento.',
      });
    }

    const resend = new Resend(apiKey);

    // 5. Enviar correo hacia tu bandeja personal
    const emailResult = await resend.emails.send({
      from: 'Portafolio Web <onboarding@resend.dev>',
      to: ['thexsankux007@gmail.com'],
      replyTo: email,
      subject: `Nuevo contacto web de ${nombre}`,
      text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || 'No especificado'}\n\nMensaje:\n${mensaje}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e5e4; border-radius: 12px; background-color: #fafaf9;">
          <h2 style="color: #0c0a09; margin-top: 0;">Nuevo mensaje de contacto web</h2>
          <p style="color: #78716c; font-size: 14px;">Recibido a través de tu portafolio profesional.</p>
          <hr style="border: 0; border-top: 1px solid #e7e5e4; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #1c1917;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Nombre:</td>
              <td style="padding: 8px 0;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
              <td style="padding: 8px 0;">${telefono || 'No especificado'}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e7e5e4; margin: 20px 0;" />
          <h3 style="color: #0c0a09; font-size: 16px; margin-bottom: 8px;">Mensaje:</h3>
          <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e7e5e4; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #292524;">${mensaje}</div>
          <p style="margin-top: 24px; font-size: 12px; color: #a8a29e; text-align: center;">Puedes responder directamente a este correo para escribirle a ${nombre}.</p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error('[Resend Error]', emailResult.error);
      return res.status(500).json({
        success: false,
        error: 'No fue posible despachar el mensaje mediante el proveedor.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente',
      id: emailResult.data?.id,
    });
  } catch (error) {
    console.error('[Server Error]', error);
    return res.status(500).json({
      success: false,
      error: 'Ocurrió un error inesperado al procesar la solicitud.',
    });
  }
}
//FIN SPEC-002 - 02
