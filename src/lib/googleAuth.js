// lib/googleAuth.js

import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

// Retrieve credentials from environment variables
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
// const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI; // Optional here if just using refresh token

/**
 * Creates and configures an OAuth2 client with the refresh token.
 * @returns {OAuth2Client} Configured OAuth2 client instance.
 * @throws {Error} If essential environment variables are missing.
 */
export function getOAuth2Client() {
  if (!clientId || !clientSecret || !refreshToken) {
    console.error("Missing Google OAuth credentials in environment variables");
    throw new Error("Server configuration error: Missing Google credentials.");
    // In a real app, you might want to avoid throwing an error directly
    // that could expose internal details, maybe return null or a specific status.
  }

  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret
    // redirectUri // Only needed if you're performing the redirect flow
  );

  // Set the refresh token obtained after user consent
  oAuth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  return oAuth2Client;
}

/**
 * Creates an authenticated Google Business Profile Reviews API client.
 * IMPORTANT: Verify the service name ('mybusinessreviews') and version ('v1')
 * against the latest Google API documentation.
 * @returns {Promise<object>} Authenticated GMB Reviews API client instance.
 * @throws {Error} If authentication fails.
 */
export async function getGmbReviewsClient() {
  const auth = getOAuth2Client(); // Get the OAuth2 client

  try {
    // Ensure the access token is fresh before making API calls
    // The library often handles this automatically, but explicit refresh can help debugging.
    const tokenResponse = await auth.getAccessToken();
    if (!tokenResponse.token) {
      throw new Error("Failed to retrieve access token.");
    }
    // console.log('Access Token obtained/refreshed.'); // Optional debug log
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw new Error("Could not authenticate with Google.");
  }

  // Initialize the Reviews API service
  // !!! CHECK Google Docs for the correct service name and version !!!
  // It might be 'mybusinessbusinessinformation', 'mybusinessreviews', etc.
  const gmbReviewsService = google.mybusinessreviews({
    version: "v1", // Use the appropriate API version
    auth: auth, // Use the authenticated OAuth2 client
  });

  return gmbReviewsService;
}
