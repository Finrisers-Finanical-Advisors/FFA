import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, subject, message } = await req.json()
    const recipient = process.env.CONTACT_FORM_TO || process.env.EMAIL_USER

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Finrisers Website" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Subject: ${subject}
Message: ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email",
      },
      { status: 500 }
    )
  }
}
