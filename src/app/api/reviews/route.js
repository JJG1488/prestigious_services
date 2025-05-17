// app/api/reviews/route.js
// This API route fetches Google Business Profile reviews using the Google API client.
// It requires the Google OAuth2 client to be set up with a refresh token.
// Ensure you have the necessary environment variables set:
// GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN
// GMB_ACCOUNT_ID, GMB_LOCATION_ID
//
// This route is designed to be used server-side in a Next.js application.
// It does not support client-side rendering directly.
// Instead, it should be called from a client component or server action.
// The route is set to always fetch fresh data and not cache responses.
// The reviews are returned in JSON format.
// The API route handles errors gracefully, logging them server-side and returning appropriate status codes.
//     auth: auth, // Pass the authenticated OAuth2 client
//   });
//
//
//   return gmbReviewsService; // Return the initialized service
// }
//       <p>
//         This service enhances your roof's durability and aesthetic appeal,
//         ensuring it looks great and performs well for years to come.
//       </p>
//     </section>
//     </div>
//   );
//   );
// }

import { NextResponse } from "next/server";
import { getGmbReviewsClient } from "../../../lib/googleAuth"; // Adjust path if needed

// Opt out of caching for this route, always fetch fresh data
export const dynamic = "force-dynamic";

export async function GET(request) {
  const accountId = process.env.GMB_ACCOUNT_ID;
  const locationId = process.env.GMB_LOCATION_ID;

  // Basic validation for required environment variables
  if (!accountId || !locationId) {
    console.error(
      "Missing GMB Account ID or Location ID in environment variables."
    );
    return NextResponse.json(
      { error: "Server configuration error: Missing GMB identifiers." },
      { status: 500 }
    );
  }

  // --- IMPORTANT ---
  // Construct the 'parent' resource name. The exact format depends HEAVILY
  // on the specific Google API endpoint you are calling.
  // Format 1: `accounts/{accountId}/locations/{locationId}`
  // Format 2: `locations/{locationId}`
  // Consult the Google Business Profile API documentation for the 'reviews.list' method.
  // Let's *assume* Format 1 for this example:
  const parentResourceName = `${accountId}/${locationId}`;
  // -----------------

  console.log(`Attempting to fetch reviews for: ${parentResourceName}`); // Log attempt

  try {
    // Get the authenticated GMB Reviews API client
    const gmbReviewsClient = await getGmbReviewsClient();

    // Call the Google API to list reviews
    // !!! VERIFY the method path (e.g., .accounts.locations.reviews.list) and parameters ('parent') !!!
    const response = await gmbReviewsClient.accounts.locations.reviews.list({
      parent: parentResourceName, // The resource name for the location's reviews
      pageSize: 20, // Number of reviews per page (adjust as needed)
      // orderBy: 'updateTime desc' // Optional: Sort order
    });

    // Extract reviews from the response data
    const reviews = response.data.reviews || []; // Default to empty array if no reviews field

    // console.log(`Successfully fetched ${reviews.length} reviews.`); // Log success

    // Return the reviews successfully
    return NextResponse.json({ reviews });
  } catch (error) {
    // Log the detailed error (server-side)
    console.error(
      "Error fetching GMB reviews:",
      error.response?.data || error.message
    );

    // Determine appropriate status code and message for the client
    const status = error.response?.status || 500;
    // Try to get a specific error message from Google's response, otherwise provide a generic one
    const message =
      error.response?.data?.error?.message ||
      "Failed to fetch Google reviews due to an internal server error.";

    // Return an error response
    return NextResponse.json({ error: message }, { status: status });
  }
}
