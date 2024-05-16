// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const { from, name, body, phone } = await request.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  


  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND API key not configured' }, { status: 500 });
  }
  const resend = new Resend(RESEND_API_KEY);

  const destinationEmail = ["pcarvalho@eyewatch.me"];
  try {
    await resend.emails.send({
      from: `${name} <nicestream@resend.dev>`,
      to: destinationEmail,
      subject: `Mensaje de ${name} por la web de Nicestream`,
      html: `<h1>Nuevo mensaje de ${from} por la web de nicestream</h1><hr><br><p style="display: block">${body}</p><br><br>Teléfono: ${phone || "n/a"}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
