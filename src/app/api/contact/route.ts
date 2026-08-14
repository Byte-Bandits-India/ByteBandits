import nodemailer from "nodemailer";
import { contactFormSchema, sanitizeInput } from "@/lib/validations/contact";

export async function POST(req: Request): Promise<Response> {
  try {
    const rawBody = (await req.json()) as Record<string, unknown>;

    // 1. Check for bot submission via honeypot field
    if (rawBody._gotcha && typeof rawBody._gotcha === "string" && rawBody._gotcha.trim() !== "") {
      // Reject bot submissions silently
      return Response.json({ success: true, message: "Message processed" }, { status: 200 });
    }

    // 2. Validate input schema with Zod
    const parseResult = contactFormSchema.safeParse(rawBody);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid input data";
      return Response.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const { name: rawName, email: rawEmail, phone: rawPhone, website: rawWebsite, message: rawMessage, source: rawSource } = parseResult.data;

    // 3. Sanitize all fields to protect against XSS and injection attacks
    const name = sanitizeInput(rawName);
    const email = sanitizeInput(rawEmail);
    const cleanPhone = sanitizeInput(rawPhone);
    const finalPhone = cleanPhone ? (cleanPhone.startsWith("+") ? cleanPhone : `+91 ${cleanPhone}`) : "Not provided";
    const finalWebsite = sanitizeInput(rawWebsite) || "Not provided";
    const finalSource = sanitizeInput(rawSource) || "Not specified";
    const message = sanitizeInput(rawMessage);

    // Configure Nodemailer transporter using SMTP details from env variables
    const smtpHost = process.env.SMTP_HOST || "smtpout.secureserver.net";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "support@thebytebandits.com";
    const ownerEmail = process.env.OWNER_EMAIL || "support@thebytebandits.com";

    // 1. Email to the Owner (Lead Notification)
    const ownerMailOptions = {
      from: `"Byte Bandits" <${senderEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `New Inquiry: ${name}`,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${finalPhone}\nWebsite: ${finalWebsite}\nSource: ${finalSource}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #222222; line-height: 1.6; max-width: 600px;">
          <p style="font-weight: bold; font-size: 16px; margin-bottom: 16px;">New Contact Form Submission</p>
          <ul style="list-style: none; padding: 0; margin: 0 0 20px 0;">
            <li style="margin-bottom: 6px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 6px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></li>
            <li style="margin-bottom: 6px;"><strong>Phone:</strong> ${finalPhone}</li>
            <li style="margin-bottom: 6px;"><strong>Website:</strong> ${finalWebsite}</li>
            <li style="margin-bottom: 6px;"><strong>Referral Source:</strong> ${finalSource}</li>
          </ul>
          <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
          <p style="background: #f8f9fa; padding: 12px; border-left: 3px solid #666; margin: 0 0 20px 0; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 2. Email to the User (Professional Confirmation Receipt)
    const userMailOptions = {
      from: `"Byte Bandits" <${senderEmail}>`,
      to: email,
      replyTo: senderEmail,
      subject: "We received your message – Byte Bandits",
      text: `Hello ${name},\n\nThank you for reaching out to Byte Bandits. We have received your message:\n\n"${message}"\n\nOur team will review your inquiry and get back to you shortly.\n\nIf you have any urgent questions, feel free to reply directly to this email.\n\nBest regards,\nByte Bandits Team\nsupport@thebytebandits.com\nhttps://www.thebytebandits.com\n`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #222222; line-height: 1.6; max-width: 600px;">
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to Byte Bandits. We have received your inquiry:</p>
          <p style="background: #f8f9fa; padding: 12px; border-left: 3px solid #BF3A3B; margin: 16px 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
          <p>Our team is reviewing your message and will get back to you as soon as possible.</p>
          <p>If you have any additional details to share, feel free to reply directly to this email.</p>
          <p style="margin-top: 24px; border-top: 1px solid #eeeeee; padding-top: 16px; color: #555555; font-size: 14px;">
            Best regards,<br />
            <strong>Byte Bandits Team</strong><br />
            <a href="mailto:support@thebytebandits.com" style="color: #0066cc;">support@thebytebandits.com</a><br />
            <a href="https://www.thebytebandits.com" style="color: #0066cc;">www.thebytebandits.com</a>
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    // Send data to the Express backend database
    const backendUrl = `${process.env.BACKEND_API_URL || "http://localhost:4000/api"}/contacts`;
    try {
      const backendRes = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: finalPhone === "Not provided" ? "" : finalPhone,
          website: finalWebsite === "Not provided" ? "" : finalWebsite,
          message,
          consent: parseResult.data.consent ?? true,
          source: finalSource === "Not specified" ? "Others" : finalSource,
        }),
      });

      const backendData = await backendRes.json();
      if (!backendRes.ok || !backendData.success) {
        throw new Error(backendData.error || "Failed to store contact in backend database");
      }
    } catch (backendErr) {
      const error = backendErr instanceof Error ? backendErr : new Error(String(backendErr));
      console.error("Backend DB Save Error:", error);
      return Response.json(
        { success: false, error: error.message || "Failed to save message in database" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Emails sent and data stored successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; response?: string; stack?: string };
    console.error("❌ [MAIL DISPATCH FAILED]:", {
      errorMessage: err.message,
      errorCode: err.code,
      smtpResponse: err.response,
      configuredHost: process.env.SMTP_HOST || "smtp.titan.email",
      configuredPort: process.env.SMTP_PORT || "465",
      configuredUser: process.env.SMTP_USER || "Not provided",
      hasPassword: Boolean(process.env.SMTP_PASS),
    });
    if (err.stack) {
      console.error(err.stack);
    }
    return Response.json(
      { 
        success: false, 
        error: err.message ? `Mail Error: ${err.message}` : "Failed to send emails or process request" 
      },
      { status: 500 }
    );
  }
}
