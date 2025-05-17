"use client";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

// Sample reviews inspired by positive feedback
const reviews = [
  {
    rating: 5,
    text: "Pointe Roofing Improvements exceeded my expectations! The team was professional, and the quality of work is outstanding. My new roof looks fantastic!",
    reviewer: "John D.",
  },
  {
    rating: 4,
    text: "Great service and timely completion. There was a minor issue with the cleanup, but they addressed it promptly. Overall, very satisfied.",
    reviewer: "Sarah M.",
  },
  {
    rating: 5,
    text: "I highly recommend Pointe Roofing Improvements. They provided a detailed estimate, answered all my questions, and the installation was flawless.",
    reviewer: "Mike R.",
  },
];

export default function GoogleBusinessProfile() {
  return (
    <Container id="google-profile" className="my-5">
      <h2 className="text-center mb-4">Pointe Roofing Improvements</h2>
      <Row>
        {/* Business Information */}
        <Col md={4}>
          <h3>Pointe Roofing Improvements</h3>
          <p>Grosse Pointe, Michigan</p>
          <p>
            Phone:{" "}
            <a href="tel:+15863608447" className="text-warning">
              +1 (586) 360-8447
            </a>
          </p>
          <p className="flex">
            Rating: 4.8{" "}
            {[...Array(5)].map((_, i) => (
              <StarFill key={i} className="text-warning" />
            ))}{" "}
            (10 reviews)
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/Pointe+Roofing+Improvements/@42.4857609,-83.0486404,10z/data=!3m1!4b1!4m6!3m5!1s0x2eb57a36cf0b25cd:0xbb0cc1e7f419c7b3!8m2!3d42.485761!4d-83.0486404!16s%2Fg%2F11x11hcds4?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning"
            >
              Our Reviews on Google!
            </a>
          </p>
        </Col>
        {/* Reviews Carousel */}
        <Col md={8}>
          <Carousel>
            {reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <div className="text-center py-4">
                  <p>"{review.text}"</p>

                  <Col className="">
                    <Row className="">
                      <strong>- {review.reviewer}</strong>
                    </Row>
                    <Row className="">
                      <div className="flex text-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <StarFill
                            key={i}
                            className={
                              i < review.rating ? "text-warning" : "text-muted"
                            }
                          />
                        ))}
                      </div>
                    </Row>
                  </Col>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}


// // Assuming this component is placed appropriately, e.g., app/components/GoogleBusinessProfile.js
// // Or directly within a page, e.g., app/reviews/page.js

// 'use client'; // Mark as a Client Component

// import React from 'react'; // React is implicitly available in Next.js App Router

// // Inline SVG Star Icon Component
// const StarIcon = ({ filled }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     // Apply yellow if filled, otherwise light gray
//     className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
//   >
//     <path
//       fillRule="evenodd"
//       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.168.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.543 2.862c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.419-2.212.749-2.305l5.404-.434L10.788 3.21Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// // Sample reviews inspired by positive feedback (kept from original)
// const reviews = [
//   {
//     rating: 5,
//     text: 'Pointe Roofing Improvements exceeded my expectations! The team was professional, and the quality of work is outstanding. My new roof looks fantastic!',
//     reviewer: 'John D.',
//   },
//   {
//     rating: 4,
//     text: 'Great service and timely completion. There was a minor issue with the cleanup, but they addressed it promptly. Overall, very satisfied.',
//     reviewer: 'Sarah M.',
//   },
//   {
//     rating: 5,
//     text: 'I highly recommend Pointe Roofing Improvements. They provided a detailed estimate, answered all my questions, and the installation was flawless.',
//     reviewer: 'Mike R.',
//   },
//    { // Adding one more for better grid display potentially
//     rating: 5,
//     text: 'Very professional crew, excellent communication throughout the project. Fair pricing too!',
//     reviewer: 'David L.',
//   },
// ];

// // Define the GoogleBusinessProfile component using Tailwind CSS
// export default function GoogleBusinessProfile() {
//   // Hardcoded rating info for display (replace with dynamic data if needed)
//   const overallRating = 4.8;
//   const reviewCount = 10; // Example count

//   return (
//     // Main container matching other pages
//     <div id="google-profile" className="container mx-auto px-4 py-8 md:py-12">
//       {/* Section Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
//         Hear From Our Customers
//       </h2>

//       {/* Grid layout: Business Info on left (1/3), Reviews on right (2/3) on medium screens+ */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* Business Information Column */}
//         <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//             Pointe Roofing Improvements
//           </h3>
//           <p className="text-gray-600 mb-2">Grosse Pointe, Michigan</p>
//           <p className="text-gray-600 mb-4">
//             Phone:{' '}
//             <a
//               href="tel:+15863608447"
//               className="text-blue-600 hover:text-blue-800 hover:underline"
//             >
//               +1 (586) 360-8447
//             </a>
//           </p>
//           {/* Rating Display */}
//           <div className="flex items-center mb-4">
//             <span className="text-lg font-medium text-gray-700 mr-2">{overallRating}</span>
//             <div className="flex mr-2">
//               {[...Array(5)].map((_, i) => (
//                 // Render stars based on overall rating
//                 <StarIcon key={i} filled={i < Math.round(overallRating)} />
//               ))}
//             </div>
//             <span className="text-gray-600">({reviewCount} reviews)</span>
//           </div>
//           {/* Link to Google Reviews */}
//           <p>
//             <a
//               href="https://www.google.com/search?q=Pointe+Roofing+Improvements+reviews" // Example search link - replace with actual GMB link if available
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out text-sm"
//             >
//               See Our Reviews on Google
//             </a>
//           </p>
//         </div>

//         {/* Reviews Column */}
//         <div className="md:col-span-2">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Feedback</h3>
//           {/* Displaying reviews statically - could be a grid or simple list */}
//           <div className="space-y-4">
//             {reviews.map((review, index) => (
//               // Individual Review Card
//               <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
//                 {/* Star Rating */}
//                 <div className="flex mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon key={i} filled={i < review.rating} />
//                   ))}
//                 </div>
//                 {/* Review Text */}
//                 <p className="text-gray-700 italic mb-2">"{review.text}"</p>
//                 {/* Reviewer Name */}
//                 <p className="text-right text-gray-600 font-medium text-sm">
//                   - {review.reviewer}
//                 </p>
//               </div>
//             ))}
//           </div>
//            {/* Optional: Add a note if reviews are samples */}
//            <p className="text-center text-gray-500 text-sm mt-6">
//              Sample reviews shown. See all our reviews on Google.
//            </p>
//         </div>

//       </div> {/* End Grid */}
//     </div> // End Container
//   );
// }
