// app/gutters/page.js

import React from "react";

// Simple SVG Icon Components (Inline for simplicity)
// You could replace these with an icon library like Heroicons or Lucide React if preferred

const SafetyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-red-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const DebrisIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-green-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c-.269.045-.53.096-.79.153m12.73-1.542a48.36 48.36 0 0 0-4.478-.372M5.571 5.811a48.359 48.359 0 0 1 4.478-.372m0 0c.107.015.214.03.32.046m-3.278 0a48.097 48.097 0 0 1-4.244.372M6.8 4.757c.107.015.214.03.32.046M7.12 4.803a48.097 48.097 0 0 0-4.244.372m5.63 7.175c.406-.02.812-.036 1.218-.048m-.758-.665a4.5 4.5 0 1 0-1.498.964M12 18.75a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
    />
  </svg>
);

const FlushIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-blue-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493 0 3.75 3.75 0 0 0 .495 7.468"
    />
  </svg>
);

const InspectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-purple-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const CleanupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-yellow-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-cyan-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12v-.008ZM15 12h.008v.008H15v-.008ZM15 15h.008v.008H15v-.008ZM9 15h.008v.008H9v-.008Z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-indigo-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-lime-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  </svg>
);

const TreeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-emerald-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-3.75c-.621 0-1.125-.504-1.125-1.125V17.25m5.166-4.499a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m-6.333 0a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m-6.333 0a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75M12 3v13.5m-7.5 0h15"
    />
  </svg>
);

const WrenchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-gray-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.162 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-4.243 4.243l-3.275-3.275a4.5 4.5 0 0 0-6.336 4.486c.048 1.07.11 2.14.11 3.21"
    />
  </svg>
);

// Define the GuttersPage component
export default function GuttersPage() {
  return (
    // Main container with padding and max-width for content centering
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b pb-3">
        Gutter Cleaning & Homeowner Maintenance
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Gutters are unsung heroes of your home's exterior, channeling
          rainwater away from your roof, siding, and foundation. However, they
          can only do their job effectively when they are clean and clear of
          debris. Clogged gutters can lead to serious problems, including roof
          leaks, water damage to fascia and soffits, foundation issues, and pest
          infestations. Here’s a look at the gutter cleaning process and how
          homeowners can manage them.
        </p>
      </section>

      {/* Gutter Cleaning Process Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Gutter Cleaning Process
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Professional gutter cleaning ensures thoroughness and safety. The
            typical process involves:
          </p>
          {/* Using flexbox for alignment of icon and text */}
          <ul className="space-y-3">
            <li className="flex items-start">
              <SafetyIcon />
              <span>
                <strong>Safety First:</strong> Setting up ladders securely on
                stable ground is paramount. Professionals use appropriate ladder
                types, stabilizers, and safety harnesses when necessary,
                especially for high or steep roofs.
              </span>
            </li>
            <li className="flex items-start">
              <DebrisIcon />
              <span>
                <strong>Debris Removal:</strong> Leaves, twigs, shingle grit,
                dirt, and other debris are removed from the gutter channels.
                This is often done using specialized scoops, trowels, or
                sometimes high-powered blowers. Debris is typically collected in
                buckets or onto tarps to keep the surrounding area clean.
              </span>
            </li>
            <li className="flex items-start">
              <FlushIcon />
              <span>
                <strong>Downspout Flushing:</strong> Once the main channels are
                clear, downspouts are checked for blockages. Water is flushed
                through them (using a hose) to ensure it flows freely from the
                bottom opening. Stubborn clogs might require disassembly or
                using a plumber's snake.
              </span>
            </li>
            <li className="flex items-start">
              <InspectIcon />
              <span>
                <strong>Inspection:</strong> While cleaning, gutters and
                downspouts are inspected for damage, such as leaks, holes, rust,
                sagging sections, loose fasteners, or improper slope. Minor
                issues might be fixable during the cleaning visit.
              </span>
            </li>
            <li className="flex items-start">
              <CleanupIcon />
              <span>
                <strong>Clean-up:</strong> All removed debris is cleaned up and
                disposed of properly.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tips for Homeowner Management Section - Using Card-like divs */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How Homeowners Can Manage Gutters
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="mb-4">
            Regular attention from homeowners can significantly reduce problems
            and complement professional cleanings:
          </p>
          {/* Grid layout for tips might look better on wider screens */}
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            {/* Tip 1 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CalendarIcon />
              <span>
                <strong>Clean Regularly:</strong> The most crucial tip! Clean
                gutters at least twice a year – typically in late spring and
                late fall. Homes with many surrounding trees may need more
                frequent cleaning.
              </span>
            </div>
            {/* Tip 2 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <SafetyIcon />
              <span>
                <strong>Prioritize Safety:</strong> If cleaning yourself, always
                use a sturdy ladder, have someone spot you, wear gloves, and
                avoid overreaching. If uncomfortable, hire a professional.
              </span>
            </div>
            {/* Tip 3 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <EyeIcon />
              <span>
                <strong>Inspect Visually:</strong> Regularly look for
                overflowing water, sagging, or dripping during rain. Ensure
                downspouts drain away from the foundation.
              </span>
            </div>
            {/* Tip 4 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <ShieldIcon />
              <span>
                <strong>Consider Gutter Guards:</strong> They reduce debris but
                aren't maintenance-free. Research types suitable for your home
                and tree coverage. Periodic checks are still needed.
              </span>
            </div>
            {/* Tip 5 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <TreeIcon />
              <span>
                <strong>Trim Overhanging Branches:</strong> Proactively reduce
                leaves and twigs falling into gutters by keeping branches
                trimmed back from the roofline.
              </span>
            </div>
            {/* Tip 6 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <WrenchIcon />
              <span>
                <strong>Check Fasteners:</strong> Ensure gutters are securely
                attached. Tighten loose fasteners or replace damaged ones
                promptly to prevent sagging or detachment.
              </span>
            </div>
          </div>
          <p className="mt-6 font-medium text-center italic text-gray-600">
            Keeping your gutters clean is vital preventative maintenance for
            your home's protection.
          </p>
        </div>
      </section>
    </div>
  );
}

// // app/gutters/page.js
// "use client";

// import React from "react";

// // Define the GuttersPage component
// export default function GuttersPage() {
//   return (
//     // Main container with padding and max-width for content centering
//     <div className="container mx-auto px-4 py-8 md:py-12">
//       {/* Page Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b pb-3">
//         Gutter Cleaning & Homeowner Maintenance
//       </h1>

//       {/* Introduction Section */}
//       <section className="mb-8">
//         <p className="text-lg text-gray-700 mb-4">
//           Gutters are unsung heroes of your home's exterior, channeling
//           rainwater away from your roof, siding, and foundation. However, they
//           can only do their job effectively when they are clean and clear of
//           debris. Clogged gutters can lead to serious problems, including roof
//           leaks, water damage to fascia and soffits, foundation issues, and pest
//           infestations. Here’s a look at the gutter cleaning process and how
//           homeowners can manage them.
//         </p>
//       </section>

//       {/* Gutter Cleaning Process Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           The Gutter Cleaning Process
//         </h2>
//         <div className="space-y-4 text-gray-700">
//           <p>
//             Professional gutter cleaning ensures thoroughness and safety. The
//             typical process involves:
//           </p>
//           <ul className="list-disc list-inside ml-4 space-y-2">
//             <li>
//               <strong>Safety First:</strong> Setting up ladders securely on
//               stable ground is paramount. Professionals use appropriate ladder
//               types, stabilizers, and safety harnesses when necessary,
//               especially for high or steep roofs.
//             </li>
//             <li>
//               <strong>Debris Removal:</strong> Leaves, twigs, shingle grit,
//               dirt, and other debris are removed from the gutter channels. This
//               is often done using specialized scoops, trowels, or sometimes
//               high-powered blowers. Debris is typically collected in buckets or
//               onto tarps to keep the surrounding area clean.
//             </li>
//             <li>
//               <strong>Downspout Flushing:</strong> Once the main channels are
//               clear, downspouts are checked for blockages. Water is flushed
//               through them (using a hose) to ensure it flows freely from the
//               bottom opening. Stubborn clogs might require disassembly or using
//               a plumber's snake.
//             </li>
//             <li>
//               <strong>Inspection:</strong> While cleaning, gutters and
//               downspouts are inspected for damage, such as leaks, holes, rust,
//               sagging sections, loose fasteners, or improper slope. Minor issues
//               might be fixable during the cleaning visit.
//             </li>
//             <li>
//               <strong>Clean-up:</strong> All removed debris is cleaned up and
//               disposed of properly.
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Tips for Homeowner Management Section */}
//       <section className="mt-10 pt-6 border-t border-gray-300">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           How Homeowners Can Manage Gutters
//         </h2>
//         <div className="space-y-4 text-gray-700">
//           <p>
//             Regular attention from homeowners can significantly reduce problems
//             and complement professional cleanings:
//           </p>
//           <ul className="list-disc list-inside ml-4 space-y-2">
//             <li>
//               <strong>Clean Regularly:</strong> The most crucial tip! Clean
//               gutters at least twice a year – typically in late spring (after
//               trees bud) and late fall (after leaves have fallen). Homes with
//               many surrounding trees may need more frequent cleaning.
//             </li>
//             <li>
//               <strong>Prioritize Safety:</strong> If cleaning yourself, always
//               use a sturdy ladder, have someone spot you if possible, wear
//               gloves, and avoid leaning too far. If you're uncomfortable with
//               heights or lack proper equipment, hire a professional.
//             </li>
//             <li>
//               <strong>Inspect Visually:</strong> Regularly look up at your
//               gutters, especially during rain. Check for overflowing water,
//               sagging sections, or water dripping where it shouldn't be. Check
//               that downspouts are directing water several feet away from your
//               foundation.
//             </li>
//             <li>
//               <strong>Consider Gutter Guards:</strong> Gutter guards or screens
//               can significantly reduce the amount of debris entering gutters,
//               extending time between cleanings. However, they aren't
//               maintenance-free; they still need periodic checks and cleaning,
//               and some types can be less effective than others. Research the
//               best type for your home and tree coverage.
//             </li>
//             <li>
//               <strong>Trim Overhanging Branches:</strong> Reducing the number of
//               leaves and twigs that can fall into gutters is a proactive step.
//               Keep tree branches trimmed back from your roofline.
//             </li>
//             <li>
//               <strong>Check Fasteners:</strong> Ensure gutters are securely
//               attached to the fascia board. Tighten loose fasteners or replace
//               damaged ones as needed.
//             </li>
//           </ul>
//           <p className="mt-4 font-medium">
//             Keeping your gutters clean is one of the most effective preventative
//             maintenance tasks you can perform to protect your home's value and
//             structural integrity.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
