// src/app/api/twilio/voice-response/route.js
export async function GET() {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice" language="en-US">
    Thank you for contacting Pointe Roofing Improvements. Please leave your message after the beep.
  </Say>
  <Record maxLength="30" action="/api/twilio/handle-recording" />
  <Say>We did not receive a recording.</Say>
  <Hangup/>
</Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

