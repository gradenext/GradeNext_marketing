import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Parse form data
    const formData: { [key: string]: string } = await request.json();
    const { firstName, lastName, email, phone, inquiry, message }: { [key: string]: string } = formData;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.SITE_MAIL_SENDER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SITE_MAIL_SENDER,
      to: email,
      subject: "Thank You for Contacting NextGrade",
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Dear ${firstName},</p>
        <p>We have successfully received your message. Our team will get back to you within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br>The NextGrade Team</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}