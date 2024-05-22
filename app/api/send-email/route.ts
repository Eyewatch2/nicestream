import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const { from, subject, name, body, phone } = await request.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND API keys not configured' }, { status: 500 });
  }


  const resend = new Resend(RESEND_API_KEY);


  const emailToSend = {
    from: `${name} <website@nicestream.com>`,
    to: ["pcarvalho@eyewatch.me" , "eugenia.d@nslab.me", "florencia@nsgcorp.me"],
    subject: `${subject}`,
    html: `<h1>Mensaje de ${name} por la web de nicestream.com</h1>
    <h2>Asunto: ${subject}</h2>
    <h2>De: ${name} (${from})</h2>
    <hr><br>
    <p style="display: block; font-size: 18px">
    ${body}
    </p><br><br>
    
    Teléfono: ${phone || "n/a"}`,
  }

  /* PCARVALHO */
  try {
    await resend.emails.send(emailToSend);


    console.log('Email sent successfully');
    
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

}
