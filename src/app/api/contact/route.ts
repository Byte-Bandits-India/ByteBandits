export async function POST(req: Request): Promise<Response> {
  try {
    // Parse the incoming JSON body
    const body = await req.json() as {
      name: string;
      email: string;
      number: string;
      message: string;
    };

    const { name, email, number, message } = body;

    // Build payload for external API
    const payload = {
      to: "dk.bbtech@gmail.com", // fixed recipient
      from: "noreply",
      template: "form-reply",
      templateData: {
        name,
        phone: number,
        message: `From: ${email}\n\n${message}`,
      },
    };

    // Send request to your external EC2 API endpoint
    const response = await fetch(
      "http://ec2-3-6-37-194.ap-south-1.compute.amazonaws.com:3035/v1/message/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // Handle response
    if (!response.ok) {
      console.error("External API Error:", await response.text());
      throw new Error("Failed to send message to EC2 API");
    }

    const result = await response.json();

    return Response.json(
      { success: true, message: "Message sent successfully!", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
