import nodemailer from "nodemailer";

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      phone?: string;
      number?: string;
      website?: string;
      message: string;
      source?: string;
    };

    const { name, email, phone, number, website, message, source } = body;
    const finalPhone = phone || number || "Not provided";
    const finalWebsite = website || "Not provided";
    const finalSource = source || "Not specified";

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using SMTP details from env variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "support@bytebandits.in";
    const ownerEmail = process.env.OWNER_EMAIL || "support@bytebandits.in";

    // 1. Email to the Owner (Lead Notification)
    const ownerMailOptions = {
      from: `"Byte Bandits Form" <${senderEmail}>`,
      to: ownerEmail,
      subject: `New Lead: ${name} from Contact Form`,
      text: `New message from contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${finalPhone}\nWebsite: ${finalWebsite}\nSource: ${finalSource}\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px; background-color: #f4f4f4; padding: 10px; border-radius: 4px;">
            <h2 style="color: #333; margin: 0;">New Contact Form Lead</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${finalPhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Website:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${finalWebsite}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Source:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${finalSource}</td>
            </tr>
          </table>
          <h4 style="margin-top: 20px; color: #333;">Message:</h4>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #ddd; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    };

    // 2. Email to the User (Receipt Confirmation)
    const userMailOptions = {
      from: `"Byte Bandits Support" <${senderEmail}>`,
      to: email,
      subject: "Thank you for contacting Byte Bandits!",
      text: `Hi ${name},\n\nThanks for reaching out to Byte Bandits! We’ve received your message:\n\n"${message}"\n\nOur team will get back to you soon.\n\n– The Byte Bandits Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #BF3A3B; margin: 0;">Byte Bandits</h2>
          </div>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thanks for reaching out to Byte Bandits! We’ve received your message:</p>
          <blockquote style="background-color: #f9f9f9; border-left: 4px solid #BF3A3B; margin: 20px 0; padding: 15px; font-style: italic;">
            "${message}"
          </blockquote>
          <p>Our team will review your inquiry and get back to you as soon as possible.</p>
          <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; color: #888; font-size: 14px;">
            Best regards,<br/>
            <strong>The Byte Bandits Team</strong>
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return Response.json(
      { success: true, message: "Emails sent successfully to owner and user" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);
    return Response.json(
      { success: false, error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
