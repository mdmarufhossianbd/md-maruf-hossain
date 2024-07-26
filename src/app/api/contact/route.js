// app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "mail.geniusdevsolutions.com",
        port: 587,
        secure: false,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
        
      },
      
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `${subject} by ${name}`,
      text: message, // plain text body
    //   html: `<p>${message}</p>`, // html body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
