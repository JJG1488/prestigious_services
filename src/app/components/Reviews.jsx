// Example in a React component (e.g., app/reviews-display/page.js)
"use client"; // Mark as Client Component

import React, { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/reviews") // Call your Next.js API route
      .then((res) => {
        if (!res.ok) {
          // Try to parse error json, otherwise use status text
          return res.json().then((errData) => {
            throw new Error(errData.error || `Error: ${res.statusText}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews || []); // Ensure reviews is an array
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // Runs once on component mount

  if (isLoading) return <p>Loading reviews...</p>;
  if (error) return <p>Error loading reviews: {error}</p>;
  if (reviews.length === 0) return <p>No reviews found.</p>;

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li
            key={review.reviewId}
            style={{
              borderBottom: "1px solid #eee",
              marginBottom: "1em",
              paddingBottom: "1em",
            }}
          >
            <p>
              <strong>{review.reviewer?.displayName || "Anonymous"}</strong>
              {" - "}
              <span>{review.starRating?.replace("_", " ")}</span>
            </p>
            {review.comment && <p>"{review.comment}"</p>}
            <small>
              Date: {new Date(review.updateTime).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;