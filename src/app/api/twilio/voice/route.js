// src/app/api/twilio/voice/route.js
import twilio from "twilio";

export async function POST(request) {
  try {
    const twimlUrl =
      "https://pointeroofingfunctionservice-2251.twil.io/voicemailhandler";
    // Parse the incoming request body (assuming JSON payload)
    const { phone } = await request.json();
    console.log("Received data:", { phone, twimlUrl });
    // Log the environment variables for debugging
    console.log(
      "Twilio Account SID:",
      process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID
    );
    console.log(
      "Twilio Auth Token:",
      process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN
    );
    console.log(
      "Twilio Phone Number:",
      process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER
    );

    // Validate input
    if (!phone || !twimlUrl) {
      return new Response(
        JSON.stringify({ error: "Missing 'to' or 'twimlUrl'" }),
        {
          status: 400,
        }
      );
    }

    const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
    const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER;
    const contactPhoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER;

    const client = twilio(accountSid, authToken);

    // Initiate a call using Twilio's API. The call fetches TwiML from the provided URL.
    const response = await client.calls.create({
      url: twimlUrl,
      from: fromNumber,
      to: contactPhoneNumber,
    });

    console.log("Voice call initiated:", response.sid);
    // Return a 200 OK response with the call SID. This can be used by the front-end to track the call status.
    // Note: The call SID is a unique identifier for the call, and can be used to check the status of the call later.
    console.log(response.to);
    console.log(response.from);
    console.log(response.url);

    return new Response(JSON.stringify({ success: true, sid: response.sid }), {
      status: 200,
    });
  } catch (error) {
    console.error("Voice API error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
