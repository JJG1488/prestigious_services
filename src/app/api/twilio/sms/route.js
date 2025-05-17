import twilio from "twilio";

export async function POST(request) {
  try {
    // Parse the incoming request body (JSON payload from front end)
    const { phone, message, fName, reason } = await request.json();
    console.log("Received SMS request:", { phone, message, fName, reason });

    // Validate input
    if (!phone || !message || !fName || !reason) {
      console.error("Missing required fields");
      // Log the request body for debugging
      console.error("Request body:", request.body);
      // Return a 400 Bad Request response with an error message
      return new Response(
        JSON.stringify({ error: 'Missing "userPhone" or "message"' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Read credentials from environment variables (server-side only)
    const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
    const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER;
    const contactPhoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER;

    // Validate environment variables
    if (
      !accountSid ||
      !authToken ||
      !twilioPhoneNumber ||
      !contactPhoneNumber
    ) {
      console.error("Missing Twilio environment variables");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    // Ensure that the To and From numbers are different
    if (twilioPhoneNumber === contactPhoneNumber) {
      console.error("To and From numbers cannot be the same");
      return new Response(
        JSON.stringify({
          error:
            "Invalid configuration: To and From numbers cannot be identical",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize the Twilio client
    const client = twilio(accountSid, authToken);

    // Construct the message with the user's phone number included
    const fullMessage = `
    Hello Jonah! We have received a message from ${fName} via your website.
    Phone Number: ${phone}
    Reason For Reaching Out:${reason}: 
    Message: ${message}
    `;

    // Send the SMS to your Twilio phone number
    const twilioResponse = await client.messages.create({
      body: fullMessage,
      from: twilioPhoneNumber, // Sender is your Twilio number
      to: contactPhoneNumber, // Recipient is your Twilio number
    });

    console.log("SMS sent successfully:", twilioResponse.sid);
    return new Response(
      JSON.stringify({ success: true, sid: twilioResponse.sid }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("SMS API error:", error.message, error.stack);
    return new Response(
      JSON.stringify({ error: "Failed to send SMS", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
