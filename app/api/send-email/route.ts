import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, subject, message } = await req.json()
    const recipient = process.env.CONTACT_FORM_TO || process.env.EMAIL_USER

    console.log(`📩 Contact form submitted by ${name} <${email}> to ${recipient}`)

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false, // Optional: remove if using proper SSL
      // },
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

    // Only return success flag, no sensitive info
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("❌ Contact form email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    )
  }
}

//--------------------------TESTING VERSION OF CODE---------------//
// import nodemailer from "nodemailer"
// import { NextResponse } from "next/server"

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, company, subject, message } = await req.json()
//     const recipient = process.env.CONTACT_FORM_TO || process.env.EMAIL_USER

//     console.log("📩 Contact form submission received:")
//     console.log({ name, email, phone, company, subject, message })
//     console.log("Recipient email:", recipient)

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false, // ✅ bypass SSL issue (dev only)
//       },
//     })

//     const mailOptions = {
//       from: `"Finrisers Website" <${process.env.EMAIL_USER}>`,
//       to: recipient,
//       replyTo: email,
//       subject: subject || "New Contact Form Submission",
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Company: ${company}
// Subject: ${subject}
// Message: ${message}
//       `,
//     }

//     console.log("Sending email with options:", mailOptions)

//     const info = await transporter.sendMail(mailOptions)

//     console.log("✅ Email sent successfully!")
//     console.log("Message ID:", info.messageId)
//     console.log("Accepted recipients:", info.accepted)
//     console.log("Rejected recipients:", info.rejected)
//     console.log("Pending:", info.pending)
//     console.log("Response from server:", info.response)

//     return NextResponse.json({ success: true, info })
//   } catch (error: any) {
//     console.error("❌ Failed to send email:", error)
//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message || "Failed to send email",
//       },
//       { status: 500 }
//     )
//   }
// }