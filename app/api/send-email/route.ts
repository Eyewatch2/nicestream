// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { from, name, body, phone } = await request.json();
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

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

  console.log('Sending email:', { from, name, body, phone });
  

  try {
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: "pcarvalho@eyewatch.me",
      subject: `Mensaje de ${name} por la web de Nicestream`,
      html: `<h1>Nuevo mensaje de ${from}</h1> </hr> </br> <p style="display: block">${body}</p> </br> </br> Teléfono: ${phone}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
