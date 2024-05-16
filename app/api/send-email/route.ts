// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { from, name, body, phone } = await request.json();

  const SMTP_EMAIL = process.env.SMTP_EMAIL;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

  return NextResponse.json({ success: `${SMTP_EMAIL}` }, { status: 200 });

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    return NextResponse.json({ error: 'SMTP credentials not configured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  /* const destinationEmail = ["eugenia.d@nslab.me", "florencia@nsgcorp.me"] */
  const destinationEmail = ["pcarvalho@eyewatch.me"]
  try {
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: destinationEmail.join(', '),
      subject: `Mensaje de ${name} por la web de Nicestream`,
      html: `<h1>Nuevo mensaje de ${from}</h1> </hr> </br> <p style="display: block">${body}</p> </br> </br> Teléfono: ${phone}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
