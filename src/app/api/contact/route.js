// app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: "mail.trenddinglife.com",
        port: 587,
        secure: false,
      auth: {
        user: 'maruf@trenddinglife.com', 
        pass: 'BanglaDesh_321', 
        // user: process.env.EMAIL_USER, 
        // pass: process.env.EMAIL_PASS, 
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: 'maruf@trenddinglife.com',
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
