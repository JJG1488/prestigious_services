// app/api/auth/route.js
/**
 * This route checks if Google OAuth2 is configured correctly.
 * If the configuration is correct, it returns a JSON response indicating success.
 * If the configuration is incorrect, it returns an error response with a 500 status code.
 * @param {Object} request - The incoming request object.
 */

import { NextResponse } from "next/server";
import { getOAuth2Client } from "../../../lib/googleAuth"; // Adjust path if needed

export async function GET(request) {
  // Check if Google OAuth2 is configured correctly
  console.log("Checking Google Auth configuration...");

  try {
    // Get the OAuth2 client (this checks for essential env vars)
    const authClient = getOAuth2Client();

    // Attempt to get an access token using the refresh token
    const tokenResponse = await authClient.getAccessToken();

    if (tokenResponse.token) {
      console.log("Google Auth check successful: Access token obtained.");
      return NextResponse.json({
        message: "Google authentication configured correctly.",
      });
    } else {
      // This case might be unlikely if getAccessToken doesn't throw, but handle defensively
      throw new Error(
        "Failed to obtain access token, but no error was thrown."
      );
    }
  } catch (error) {
    // Log the error server-side
    console.error("Google Auth check failed:", error.message);

    // Return an error response to the client
    return NextResponse.json(
      {
        error: "Failed to verify Google authentication.",
        details: error.message,
      },
      { status: 500 } // Internal Server Error suggests a config problem
    );
  }
}
