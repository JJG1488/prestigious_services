// app/skylights/page.js

import React from "react";

// --- Icon Components (Reusing/Adding as needed) ---

const SkylightIcon = () => (
  // Basic skylight shape
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
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6ZM16.5 7.5l-4.5 3-4.5-3"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6.75" />
  </svg>
);

const WrenchIcon = () => (
  // Mechanical Failures / Address Repairs
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

const SunIcon = () => (
  // Placement / Light
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-yellow-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

const FrameIcon = () => (
  // Framing
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-orange-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125Z"
    />
  </svg>
);

const FlashingIcon = () => (
  // Flashing (Reused)
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

const SealIcon = () => (
  // Sealing
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
      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
);

const LeakIcon = () => (
  // Leaks
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
      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493 0 3.75 3.75 0 0 0 .495 7.468"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15" />{" "}
    {/* Added line through */}
  </svg>
);

const CondensationIcon = () => (
  // Condensation
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
      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493 0 3.75 3.75 0 0 0 .495 7.468"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z"
    />{" "}
    {/* Small circle inside */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.875 13.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.125 13.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z"
    />
  </svg>
);

const CrackIcon = () => (
  // Cracks / Damage
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
      d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 7.511l.106-.106A1.5 1.5 0 0 1 10.97 7.5h1.061a1.5 1.5 0 0 1 1.06.44l.107.106M12 21.75l-2.14-6.115M12 2.25 9.86 8.365m2.14.001L14.14 8.365"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8.365l1.586-1.587a1.5 1.5 0 0 1 2.121 0l1.587 1.587m-6.875 0L6.865 6.778a1.5 1.5 0 0 1 0-2.121l1.587-1.587"
    />
  </svg>
);

const CleanIcon = () => (
  // Keep it Clean (Reused)
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
  // Inspect Seals/Flashing (Reused)
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

const DebrisIcon = () => (
  // Clear Debris (Reused)
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

const OperateIcon = () => (
  // Operate Venting Skylights
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block text-indigo-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.091 1.21-.138 2.43-.138 3.662 0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.091-1.21.138-2.43.138-3.662Zm-2.176 4.126a4.006 4.006 0 0 0-3.7-3.7 48.677 48.677 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.091 1.21-.138 2.43-.138 3.662 0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.657 48.657 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.091-1.21.138-2.43.138-3.662Z"
    />
  </svg>
);

// Define the SkylightPage component
export default function SkylightPage() {
  return (
    // Main container with padding and max-width for content centering
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b pb-3">
        Skylight Installation, Repair & Maintenance
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Skylights are a fantastic way to bring natural light into your home,
          reducing the need for artificial lighting and enhancing the ambiance
          of a room. However, proper installation and maintenance are crucial to
          prevent issues like leaks or energy loss. As roofing experts, we
          frequently work with skylights and understand the importance of
          integrating them correctly with your roofing system.
        </p>
      </section>

      {/* Installation Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Skylight Installation Essentials
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            A successful skylight installation requires careful planning and
            execution:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <SkylightIcon />
              <span>
                <strong>Choosing the Right Skylight:</strong> Consider types
                like fixed (non-opening), venting (manual or electric), or
                tubular skylights based on your needs for light, ventilation,
                and budget. Material (glass vs. acrylic) and glazing options
                (e.g., Low-E coatings) are also important.
              </span>
            </li>
            <li className="flex items-start">
              <SunIcon />
              <span>
                <strong>Proper Placement:</strong> Placement affects light
                quality and heat gain. Consider the roof's slope, orientation
                (north-facing offers softer light, south-facing offers more
                light/heat), and potential obstructions (trees, chimneys).
                Structural considerations (avoiding rafters if possible) are
                key.
              </span>
            </li>
            <li className="flex items-start">
              <FrameIcon />
              <span>
                <strong>Creating & Framing the Opening:</strong> The roof deck
                and sometimes underlying roof structure (rafters) need to be cut
                precisely. The opening must be properly framed to support the
                skylight and maintain roof integrity.
              </span>
            </li>
            <li className="flex items-start">
              <FlashingIcon />
              <span>
                <strong>Flashing - The Most Critical Step:</strong> This is
                where most skylight leaks originate if done improperly. A
                dedicated flashing kit designed for the specific skylight model
                and roofing material must be used. It involves layers of metal
                integrated with the roofing material and underlayment to channel
                water away.
              </span>
            </li>
            <li className="flex items-start">
              <SealIcon />
              <span>
                <strong>Sealing & Insulation:</strong> Proper sealing around the
                skylight frame and flashing is essential. Insulation should be
                placed around the framed opening in the attic to prevent
                condensation and heat loss.
              </span>
            </li>
            <li className="flex items-start">
              <SkylightIcon /> {/* Simple icon for interior */}
              <span>
                <strong>Interior Finishing:</strong> Once installed and
                weatherproofed, the interior light shaft (if needed) is framed,
                drywalled, and finished to match your ceiling.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Repair Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Common Skylight Repairs
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>Even well-installed skylights can develop issues over time:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <LeakIcon />
              <span>
                <strong>Leaks:</strong> The most common problem, usually caused
                by failing flashing, degraded sealants, or damage around the
                skylight perimeter. Identifying the exact entry point is key to
                a successful repair, which often involves replacing flashing and
                resealing.
              </span>
            </li>
            <li className="flex items-start">
              <CondensationIcon />
              <span>
                <strong>Condensation:</strong> Moisture forming on the interior
                pane often indicates issues with insulation around the skylight
                well, high indoor humidity, or sometimes a failing seal in
                double-paned units. Improving insulation and ventilation can
                help.
              </span>
            </li>
            <li className="flex items-start">
              <CrackIcon />
              <span>
                <strong>Cracked Glazing:</strong> Hail, falling branches, or
                stress can crack the glass or acrylic. Depending on the type and
                severity, the glazing unit or the entire skylight might need
                replacement.
              </span>
            </li>
            <li className="flex items-start">
              <WrenchIcon /> {/* Reusing wrench for mechanical */}
              <span>
                <strong>Mechanical Failures:</strong> For venting skylights,
                issues can arise with cranks, motors, or sensors. These often
                require replacement parts specific to the model.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tips for Homeowner Management Section - Using Card-like divs */}
      <section className="mt-10 pt-6 border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tips for Managing Your Skylights
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="mb-4">
            Keep your skylights performing well and looking great with regular
            care:
          </p>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            {/* Tip 1 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CleanIcon />
              <span>
                <strong>Regular Cleaning:</strong> Clean the interior and
                exterior glass/acrylic periodically (following manufacturer
                guidelines) to maximize light transmission and spot potential
                issues early.
              </span>
            </div>
            {/* Tip 2 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <InspectIcon />
              <span>
                <strong>Inspect Seals & Flashing:</strong> At least annually (or
                after severe weather), visually inspect the flashing and seals
                around the skylight from the roof (if safe) and the interior for
                any signs of cracking, gaps, or water staining.
              </span>
            </div>
            {/* Tip 3 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <CondensationIcon />
              <span>
                <strong>Monitor for Condensation:</strong> Excessive or
                persistent condensation can indicate underlying issues. Check
                attic insulation and ventilation around the skylight shaft.
              </span>
            </div>
            {/* Tip 4 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <DebrisIcon />
              <span>
                <strong>Keep Roof Area Clear:</strong> Ensure the roof area
                around the skylight is free of leaves, branches, and debris that
                could impede water drainage or damage the unit.
              </span>
            </div>
            {/* Tip 5 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <OperateIcon />
              <span>
                <strong>Operate Venting Skylights:</strong> If you have venting
                skylights, operate them occasionally to ensure mechanisms are
                working smoothly. Lubricate moving parts if recommended by the
                manufacturer.
              </span>
            </div>
            {/* Tip 6 */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex items-start bg-white">
              <LeakIcon />
              <span>
                <strong>Address Leaks Immediately:</strong> At the first sign of
                a leak or water stain near a skylight, contact a professional
                roofer. Prompt action prevents minor issues from causing major
                structural damage.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
