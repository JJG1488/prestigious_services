// src/app/api/twilio/handle-recording/route.js
export async function POST(request) {
  try {
    const formData = await request.formData();
    // Twilio sends data as form-encoded data
    const recordingUrl = formData.get("RecordingUrl");
    const recordingSid = formData.get("RecordingSid");
    const recordingDuration = formData.get("RecordingDuration");
    const caller = formData.get("From");

    // For now, we'll simply log the recording data.
    console.log("Recording received:", {
      recordingUrl,
      recordingSid,
      recordingDuration,
      caller,
    });

    // Optionally, you could store this data in your database or process it further.

    // Return a simple XML response to Twilio
    const responseXml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Thank you. Your recording has been received.</Say>
</Response>`;

    return new Response(responseXml, {
      status: 200,
      headers: { "Content-Type": "text/xml" },
    });
  } catch (error) {
    console.error("Error handling recording:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
