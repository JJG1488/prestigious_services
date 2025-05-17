"use client";
// app/roofing/page.js
import React from "react";

// --- Icon Components (Reusing/Adding as needed) ---

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

const TearOffIcon = () => (
  // Tear-off / Removal
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-red-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c-.269.045-.53.096-.79.153m12.73-1.542a48.36 48.36 0 0 0-4.478-.372M5.571 5.811a48.359 48.359 0 0 1 4.478-.372m0 0c.107.015.214.03.32.046m-3.278 0a48.097 48.097 0 0 1-4.244.372M6.8 4.757c.107.015.214.03.32.046M7.12 4.803a48.097 48.097 0 0 0-4.244.372m5.63 7.175c.406-.02.812-.036 1.218-.048m-.758-.665a4.5 4.5 0 1 0-1.498.964M12 18.75a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
    />
  </svg>
);

const WoodIcon = () => (
  // Deck Repair
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-yellow-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    />
  </svg>
);

const UnderlaymentIcon = () => (
  // Underlayment
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-blue-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.683 3.058a9.74 9.74 0 0 1-3.058 1.684 9.74 9.74 0 0 1-3.058 1.684A9.74 9.74 0 0 1 12 21c-1.268 0-2.4-.63-3.058-1.683a9.74 9.74 0 0 1-1.684-3.058 9.74 9.74 0 0 1-1.684-3.058A9.74 9.74 0 0 1 3 12c0-1.268.63-2.4 1.683-3.058a9.74 9.74 0 0 1 3.058-1.684 9.74 9.74 0 0 1 3.058-1.684A9.74 9.74 0 0 1 12 3c1.268 0 2.4.63 3.058 1.683a9.74 9.74 0 0 1 1.684 3.058 9.74 9.74 0 0 1 1.684 3.058A9.74 9.74 0 0 1 21 12Z"
    />
  </svg>
);

const ShingleIcon = () => (
  // Shingle Installation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-gray-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const FlashingIcon = () => (
  // Flashing
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-orange-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);

const VentIcon = () => (
  // Ventilation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-cyan-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    />
  </svg>
);

const CleanupIcon = () => (
  // Cleanup
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

const BinocularsIcon = () => (
  // Regular Inspections
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
      d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const DebrisIcon = () => (
  // Keep Gutters Clean
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

const TreeIcon = () => (
  // Trim Trees
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

const AtticIcon = () => (
  // Check Attic
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-pink-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M3 13.5h18M3.75 15h16.5M4.5 16.5h15M5.25 18h13.5M6 19.5h12M6.75 21h10.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
    />
  </svg>
);

const WrenchIcon = () => (
  // Address Damage Quickly
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

const CalendarIcon = () => (
  // Know Roof's Age
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    />{" "}
    {/* Added question mark part */}
  </svg>
);

// Define the RoofingPage component
export default function RoofingPage() {
  return (
    // Main container with padding and max-width for content centering
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b pb-3">
        Roofing Repair, Replacement & Maintenance
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Your roof is arguably the most critical component protecting your home
          from the elements. Understanding common issues, the repair or
          replacement process, and proper maintenance can save you significant
          money and stress down the line. At Pointe Roofing Improvements, we
          ensure every roof we work on provides maximum protection and
          longevity.
        </p>
        <p className="text-lg text-gray-700">
          Common problems include leaks, missing or damaged shingles (from wind,
          hail, or age), deteriorated flashing around chimneys or vents, and
          general wear and tear that compromises the roof's integrity.
        </p>
      </section>

      {/* Roofing Process Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Roofing Process (Repair/Replacement)
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Whether a minor repair or a full replacement, a professional roofing
            job follows key steps:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <InspectIcon />
              <span>
                <strong>Thorough Inspection:</strong> We start with a detailed
                assessment of the roof's condition, identifying damage,
                potential leak sources, flashing integrity, deck condition, and
                ventilation adequacy.
              </span>
            </li>
            <li className="flex items-start">
              <TearOffIcon />
              <span>
                <strong>Preparation & Tear-Off (if replacement):</strong>{" "}
                Protecting your property (landscaping, siding) is key. For
                replacements, the old roofing material is removed down to the
                roof deck.
              </span>
            </li>
            <li className="flex items-start">
              <WoodIcon />
              <span>
                <strong>Deck Repair/Replacement:</strong> The underlying wood
                deck is inspected. Any rotted, soft, or damaged sections are
                repaired or replaced to ensure a solid foundation for the new
                roof.
              </span>
            </li>
            <li className="flex items-start">
              <UnderlaymentIcon />
              <span>
                <strong>Underlayment Installation:</strong> A water-resistant
                barrier (synthetic underlayment or felt paper) is installed over
                the roof deck. Ice and water shield is typically applied at
                eaves, valleys, and penetrations for extra protection.
              </span>
            </li>
            <li className="flex items-start">
              <ShingleIcon />
              <span>
                <strong>New Roofing Material Installation:</strong> Shingles,
                tiles, or metal panels are installed according to manufacturer
                specifications, ensuring proper alignment, nailing patterns, and
                overlap.
              </span>
            </li>
            <li className="flex items-start">
              <FlashingIcon />
              <span>
                <strong>Flashing Installation/Replacement:</strong> New flashing
                is installed around chimneys, vents, skylights, and in valleys
                to prevent water intrusion at these critical points.
              </span>
            </li>
            <li className="flex items-start">
              <VentIcon />
              <span>
                <strong>Ventilation Check/Installation:</strong> Proper attic
                ventilation (soffit vents, ridge vents, etc.) is crucial for
                roof longevity and energy efficiency. We ensure it's adequate or
                install necessary components.
              </span>
            </li>
            <li className="flex items-start">
              <CleanupIcon />
              <span>
                <strong>Site Cleanup:</strong> The job site is thoroughly
                cleaned, removing old materials and stray nails (often using
                magnetic sweepers).
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tips for Homeowner Management Section - Using Card-like divs */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tips for Managing Your Roof
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="mb-4">
            Extend your roof's life and prevent major issues with these
            homeowner tips:
          </p>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            {/* Tip 1 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <BinocularsIcon />
              <span>
                <strong>Regular Inspections (from ground):</strong> Visually
                inspect your roof twice a year and after storms. Look for
                missing, cracked, or curling shingles, damaged flashing, or
                excessive granule loss in gutters.
              </span>
            </div>
            {/* Tip 2 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <DebrisIcon />
              <span>
                <strong>Keep Gutters Clean:</strong> Clogged gutters cause water
                backup, which can damage shingles, fascia, and soffits, and lead
                to ice dams in winter. Ensure gutters are clear.
              </span>
            </div>
            {/* Tip 3 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <TreeIcon />
              <span>
                <strong>Trim Overhanging Trees:</strong> Branches rubbing on
                shingles wear them down. Falling limbs cause impact damage. Keep
                branches trimmed well away from the roof surface.
              </span>
            </div>
            {/* Tip 4 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <AtticIcon />
              <span>
                <strong>Check Attic/Ceilings:</strong> Look for signs of water
                stains, moisture, or daylight coming through the roof deck
                inside your attic. Stains on ceilings below are also red flags.
              </span>
            </div>
            {/* Tip 5 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <WrenchIcon />
              <span>
                <strong>Address Damage Quickly:</strong> Don't ignore small
                problems like a few missing shingles. Prompt repairs prevent
                water from infiltrating and causing much larger, more expensive
                issues.
              </span>
            </div>
            {/* Tip 6 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CalendarIcon />
              <span>
                <strong>Know Your Roof's Age:</strong> Most asphalt shingle
                roofs last 15-30 years depending on material quality and
                conditions. Knowing the age helps anticipate replacement needs.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
