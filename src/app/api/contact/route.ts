export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      number: string;
      message: string;
    };

    const { name, email, number, message } = body;

    // Construct payload to send to the user's email
    const payload = {
      to: email, // send reply directly to user's email
      from: "noreply",
      template: "form-reply",
      templateData: {
        name,
        phone: number,
        message: `Hi ${name},\n\nThanks for reaching out to Byte Bandits! We’ve received your message:\n\n"${message}"\n\nOur team will get back to you soon.\n\n– The Byte Bandits Team`,
      },
    };

    // Send API request
    const response = await fetch(
      "http://ec2-3-6-37-194.ap-south-1.compute.amazonaws.com:3035/v1/message/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error("External API Error:", await response.text());
      throw new Error("Failed to send message to EC2 API");
    }

    const result = await response.json();

    return Response.json(
      { success: true, message: "Reply email sent to user successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, error: "Failed to send reply email" },
      { status: 500 }
    );
  }
}
