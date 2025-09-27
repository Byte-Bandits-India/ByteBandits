export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json() as {
      name: string;
      email: string;
      message: string;
    };

    const { name, email, message } = body;

    // Define payload type
    interface TemplateData {
      name: string;
      phone: string;
      message: string;
    }

    interface Payload {
      from: string;
      to: string;
      template: string;
      templateData: TemplateData;
    }

    const payload: Payload = {
      from: "hr", // or fixed sender
      to: email,  // recipient
      template: "form-reply",
      templateData: {
        name,
        phone: email,
        message,
      },
    };

    const response = await fetch("http://api.bytebandits.in/v1/message/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send via ByteBandits API");
    }

    const result = await response.json();

    return Response.json(
      { message: "Message sent successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
