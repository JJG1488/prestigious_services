// app/siding/page.js
"use client";

import React from "react";

// --- Reusable Icon Components (or import from a shared file) ---
// Using icons defined previously where applicable, adding new ones

const InspectIcon = () => (
  // Magnifying glass
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

const PaletteIcon = () => (
  // Material Matching
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-blue-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527c.47-.336 1.06-.336 1.53 0l.772.772c.47.47.47 1.23 0 1.7l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.47.47.47 1.23 0 1.7l-.772.772c-.47.47-1.06.47-1.53 0l-.737-.527c-.35-.25-.806-.272-1.205-.107-.397.165-.71.505-.78.93l-.15.893c-.09.543-.56.94-1.11.94h-1.094c-.55 0-1.02-.397-1.11-.94l-.149-.893c-.07-.425-.383-.765-.78-.93-.398-.165-.854-.143-1.204.107l-.738.527c-.47.47-1.06.47-1.53 0l-.772-.772c-.47-.47-.47-1.23 0-1.7l.527-.738c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738c-.47-.47-.47-1.23 0-1.7l.772-.772c.47-.47 1.06-.47 1.53 0l.738.527c.35.25.806.272 1.205.107.397-.165.71-.505.78-.93l.15-.893Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const HammerIcon = () => (
  // Damage Removal / Installation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-orange-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.162 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-4.243 4.243l-3.275-3.275a4.5 4.5 0 0 0-6.336 4.486c.048 1.07.11 2.14.11 3.21"
    />
  </svg>
);

const LayersIcon = () => (
  // Substrate Check
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-teal-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
    />
  </svg>
);

const CaulkIcon = () => (
  // Caulking & Sealing
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
      d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6v-.75c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5"
    />
  </svg>
);

const CalendarIcon = () => (
  // Regular Inspections
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

const CleanIcon = () => (
  // Keep it Clean
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

const TreeIcon = () => (
  // Trim Landscaping
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

const BugIcon = () => (
  // Watch for Pests
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-red-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3l3.5 3.5M21 3l-3.5 3.5M3 21l3.5-3.5M21 21l-3.5-3.5"
    />
  </svg>
);

const WrenchIcon = () => (
  // Address Repairs Promptly
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

// Define the SidingPage component
export default function SidingPage() {
  return (
    // Main container with padding and max-width for content centering
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b pb-3">
        Siding Repair & Maintenance: A Roofer's Perspective
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          While we specialize in roofs, at Pointe Roofing Improvements, we
          understand that your home's exterior protection system works together.
          Siding is a critical component, shielding your home from weather,
          pests, and moisture, much like your roof. Often, siding issues can be
          related to or discovered during roofing work, especially near the
          roofline, eaves, and soffits. Here's how we approach siding repair and
          what you should know.
        </p>
      </section>

      {/* How Siding is Repaired Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How We Handle Siding Repairs
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Repairing siding correctly is crucial to prevent underlying damage
            to your home's structure. Our process typically involves:
          </p>
          {/* Using flexbox for alignment of icon and text */}
          <ul className="space-y-3">
            <li className="flex items-start">
              <InspectIcon />
              <span>
                <strong>Assessment:</strong> We first thoroughly inspect the
                damaged area to understand the extent and cause. This includes
                checking for cracks, holes, warping, rot, loose panels, or signs
                of moisture intrusion behind the siding. We also check the
                underlying house wrap.
              </span>
            </li>
            <li className="flex items-start">
              <PaletteIcon />
              <span>
                <strong>Material Matching:</strong> Finding siding that matches
                your existing material in color, texture, and profile is key for
                a seamless repair. This can sometimes be challenging with older
                siding.
              </span>
            </li>
            <li className="flex items-start">
              <HammerIcon />
              <span>
                <strong>Damage Removal:</strong> The damaged sections are
                carefully removed, taking care not to harm adjacent panels or
                the structure underneath.
              </span>
            </li>
            <li className="flex items-start">
              <LayersIcon />
              <span>
                <strong>Substrate Check & Repair:</strong> We inspect the
                sheathing and house wrap underneath. Any rot or moisture damage
                found here must be addressed before new siding is installed.
              </span>
            </li>
            <li className="flex items-start">
              <HammerIcon /> {/* Re-using hammer icon for installation */}
              <span>
                <strong>Installation:</strong> New siding panels are cut and
                installed according to manufacturer specifications, ensuring
                proper overlap and secure fastening, especially around windows,
                doors, and rooflines.
              </span>
            </li>
            <li className="flex items-start">
              <CaulkIcon />
              <span>
                <strong>Caulking & Sealing:</strong> Joints, edges, and
                penetrations are properly caulked and sealed to prevent water
                infiltration.
              </span>
            </li>
          </ul>
          <p className="mt-4 font-medium">
            Coordination with roofing work is common, as flashing issues or roof
            leaks can often lead to siding damage near the top of walls.
            Addressing both simultaneously ensures comprehensive protection.
          </p>
        </div>
      </section>

      {/* Tips for Management Section - Using Card-like divs */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tips for Managing Your Siding
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="mb-4">
            Proactive maintenance can extend the life of your siding and prevent
            costly repairs:
          </p>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            {/* Tip 1 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CalendarIcon />
              <span>
                <strong>Regular Inspections:</strong> Walk around your home
                twice a year (spring/fall) and after storms. Look for damage,
                warping, or loose panels, especially near ground and eaves.
              </span>
            </div>
            {/* Tip 2 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CleanIcon />
              <span>
                <strong>Keep it Clean:</strong> Clean siding periodically per
                manufacturer instructions (mild detergent, soft brush, or gentle
                pressure wash) to remove dirt, mold, and mildew.
              </span>
            </div>
            {/* Tip 3 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CaulkIcon />
              <span>
                <strong>Check Caulking:</strong> Inspect caulk around windows,
                doors, and trim. Re-caulk cracks or gaps to maintain a
                watertight seal.
              </span>
            </div>
            {/* Tip 4 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <TreeIcon />
              <span>
                <strong>Trim Landscaping:</strong> Keep trees and shrubs trimmed
                back from siding to prevent scratches, moisture retention, and
                pest access.
              </span>
            </div>
            {/* Tip 5 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <BugIcon />
              <span>
                <strong>Watch for Pests:</strong> Look for signs of termites,
                carpenter ants, or other pests that might damage or nest behind
                siding.
              </span>
            </div>
            {/* Tip 6 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <WrenchIcon />
              <span>
                <strong>Address Repairs Promptly:</strong> Fix small issues like
                minor cracks or loose panels quickly to avoid more extensive and
                costly damage later.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
