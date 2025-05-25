"use client";
// app/event-planning/page.js
import React from "react";
import Image from "next/image";
import eventPlanningImage from "@public/PMC_Assets/EventPhotos/IMG_4115.jpeg"; // Placeholder image for event planning

// --- Icon Components for Event Planning ---

const ConsultationIcon = () => (
  // Icon for Consultation & Vision
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-amber-600 shrink-0" // Warm gold/amber for ideas
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a12.053 12.053 0 0 1-4.5 0M12 3v2.25m0 0a6.01 6.01 0 0 0 1.5.189m-1.5-.189a6.01 6.01 0 0 1-1.5.189m0 0V3.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v2.25m-3.75 0h3.75M12 18.75h.008v.008H12v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 6.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125h-2.25A1.125 1.125 0 0 0 9.75 3.375v3Z"
    />
  </svg>
);

const BudgetPlanningIcon = () => (
  // Reusing BudgetIcon logic, color adjusted if needed
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-green-700 shrink-0" // Green for finance
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5V4.5m0 13.5h.008v.008H21v-.008Zm0 0H2.25m18.75 0s-1.17.011-1.667-.288c-.295-.176-.502-.472-.638-.782a2.25 2.25 0 0 1-2.094-2.094c-.31-.136-.606-.343-.782-.638-.298-.5-.287-1.667-.287-1.667s.011-1.17.287-1.667c.176-.295.472-.502.782-.638a2.25 2.25 0 0 1 2.094-2.094c.136-.31.343-.606.638-.782.5-.298 1.667-.287 1.667-.287M3 15.75V4.5m16.5 11.25H3.01M21.75 10.5a2.25 2.25 0 0 0-2.25-2.25H3A2.25 2.25 0 0 0 .75 10.5v3A2.25 2.25 0 0 0 3 15.75h16.5A2.25 2.25 0 0 0 21.75 13.5v-3Z"
    />
  </svg>
);

const VenueSelectionIcon = () => (
  // Reusing VenueIcon logic
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-orange-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);

const VendorManagementIcon = () => (
  // Icon for Vendor Coordination (handshake)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-rose-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 15.75l-4.5-4.5m0 0l-4.5 4.5M12 11.25v11.25M4.5 15.75h15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.75H4.5A2.25 2.25 0 0 0 2.25 6v1.5M9.75 3.75V1.5M9.75 3.75h4.5m4.5 0h4.5A2.25 2.25 0 0 1 21.75 6v1.5m0 0V12m0 0V9.75M14.25 3.75V1.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.085 18.323l.006-.005a3.285 3.285 0 0 1 4.316-1.625 3.285 3.285 0 0 1 1.625 4.316l-.005.006a7.437 7.437 0 0 1-5.942.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.915 18.323l-.006-.005a3.285 3.285 0 0 0-4.316-1.625 3.285 3.285 0 0 0-1.625 4.316l.005.006a7.437 7.437 0 0 0 5.942.008Z"
    />
  </svg>
);

const TimelineIcon = () => (
  // Icon for Timeline Creation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-cyan-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9H17.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15H17.25" />
  </svg>
);

const DesignDecorIcon = () => (
  // Icon for Design & Decor (palette/sparkle)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-pink-600 shrink-0" // Pink for creativity
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.39m3.421 3.421a15.995 15.995 0 0 0 1.622-3.39m3.79 3.79a15.995 15.995 0 0 0 3.388-1.62m0-3.025a15.995 15.995 0 0 0-1.622-3.39m-3.421 3.42a15.995 15.995 0 0 0-1.622-3.39m-3.79 3.79a15.995 15.995 0 0 0-3.388-1.62m0 0A15.995 15.995 0 0 1 3.75 6m0 0a15.995 15.995 0 0 1 3.388-1.622M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 4.5-.75.75m0 0-.75-.75m.75.75v1.5m0-1.5h1.5M4.5 19.5l.75-.75m0 0l.75.75m-.75-.75v-1.5m0 1.5H3"
    />
  </svg>
);

const OnDayCoordinationIcon = () => (
  // Icon for On-the-Day Coordination (clipboard/checklist)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-purple-600 shrink-0" // Purple for organization
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.4-1.683 3.058a9.74 9.74 0 0 1-3.058 1.684 9.74 9.74 0 0 1-3.058 1.684A9.74 9.74 0 0 1 12 21c-1.268 0-2.4-.63-3.058-1.683a9.74 9.74 0 0 1-1.684-3.058 9.74 9.74 0 0 1-1.684-3.058A9.74 9.74 0 0 1 3 12c0-1.268.63-2.4 1.683-3.058a9.74 9.74 0 0 1 3.058-1.684 9.74 9.74 0 0 1 3.058-1.684A9.74 9.74 0 0 1 12 3c1.268 0 2.4.63 3.058 1.683a9.74 9.74 0 0 1 1.684 3.058 9.74 9.74 0 0 1 1.684 3.058A9.74 9.74 0 0 1 21 12Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h-9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5h-9" />
  </svg>
);

const GuestManagementIcon = () => (
  // Icon for Guest Management (envelope/group)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-teal-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.814-8.516A2.25 2.25 0 0 0 16.5 3.75h-9a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 7.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25V9.366c0-.597-.237-1.17-.659-1.591l-4.5-4.5a2.25 2.25 0 0 0-3.182 0l-4.5 4.5A2.25 2.25 0 0 0 2.25 9.366V12m8.25-8.25h3.375a3 3 0 0 1 3 3v3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
    />
  </svg>
);

// --- Icons for "Tips" section ---
const VisionIcon = () => (
  // Binoculars
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-indigo-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const TrustIcon = () => (
  // Thumbs up
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-lime-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H5.904M5.904 18.75c.058.087.121.168.191.245.032.035.066.068.101.1M5.904 18.75A2.25 2.25 0 0 1 3.654 16.5v-3.842c0-.245.044-.486.129-.713.043-.115.093-.226.15-.335A5.25 5.25 0 0 1 6.633 10.25m10.598-9.75h-3.842c-.327 0-.647.043-.952.128a4.5 4.5 0 0 0-3.481 2.003c-.04.075-.073.153-.102.232A5.25 5.25 0 0 0 5.904 10.25"
    />
  </svg>
);
const CommunicationIcon = () => (
  // Speech bubbles
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-sky-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 9.75A.375.375 0 0 1 9 9.375h6.75c.207 0 .375.168.375.375V12a?.375.375 0 0 1-.375.375H9.375A.375.375 0 0 1 9 12V9.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.375c4.186 0 7.875-2.029 7.875-4.5S16.186 6.375 12 6.375 4.125 8.404 4.125 10.875c0 .407.082.798.236 1.169M12 15.375V21L8.25 18.375M12 15.375c-4.186 0-7.875-2.029-7.875-4.5S7.814 6.375 12 6.375s7.875 2.029 7.875 4.5c0 .407-.082.798-.236 1.169m0 0A11.205 11.205 0 0 0 12 15.375m0 0v5.625L15.75 18.375m0 0A11.212 11.212 0 0 1 12 15.375"
    />
  </svg>
);

const FlexibilityIcon = () => (
  // Intertwined arrows
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-fuchsia-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25M3.75 4.5V12m0 0V5.25m0 0H2.25m15.75 0H18m3.75 0h.008v.008h-.008v-.008Zm-3.75 0h.008v.008h-.008v-.008Zm-3.75 0h.008v.008h-.008v-.008Zm-3.75 0h.008v.008h-.008v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.875 14.604 3.181-3.183a8.25 8.25 0 0 1 11.667 0l3.181 3.183m-4.991 2.691V21M20.25 21.75V15m0 0V21.75m0 0H21.75m-15.75 0H6m-3.75 0h-.008v-.008h.008v.008Zm3.75 0h-.008v-.008h.008v.008Zm3.75 0h-.008v-.008h.008v.008Zm3.75 0h-.008v-.008h.008v.008Z"
    />
  </svg>
);

const EnjoyPlanningIcon = () => (
  // Party popper
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-yellow-500 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 7.5l.813 2.846a2.25 2.25 0 0 1 1.545 1.545L23.75 12l-2.846.813a2.25 2.25 0 0 1-1.545 1.545L18.25 16.5l-.813-2.846a2.25 2.25 0 0 1-1.545-1.545L13.25 12l2.846-.813a2.25 2.25 0 0 1 1.545-1.545L18.25 7.5ZM12 1.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm7.5 12a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM1.5 12a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 1.5 12Z"
    />
  </svg>
);

// Define the EventPlanningPage component
export default function EventPlanningPage() {
  return (
    <div className="bg-cream-50 min-h-screen brand-text-color container-brand-color space container-border-radius">
      {" "}
      {/* Overall page background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 brand-text-color">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 mb-4 tracking-tight">
            Seamless Event Planning & Design
          </h1>
          <p className="text-lg md:text-xl brand-text-color max-w-3xl mx-auto">
            From concept to execution, Prestigious Management Company
            orchestrates unforgettable events, tailored to your unique vision
            and meticulously managed.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg pad space">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6 text-center sm:text-left pad space">
            Bringing Your Dream Event to Life
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center pad">
            <div>
              <p className="text-lg brand-text-color mb-4 leading-relaxed">
                At Prestigious Management Company, we specialize in crafting
                exceptional events that leave a lasting impression. Our
                experienced planners are passionate about creating personalized
                experiences, whether it's an intimate gathering, a lavish
                wedding, or a large-scale corporate function.
              </p>
              <p className="text-lg brand-text-color mb-4 leading-relaxed">
                We understand that every detail matters. Our comprehensive
                approach covers everything from initial brainstorming and budget
                management to vendor selection, design, and flawless on-the-day
                coordination.
              </p>
              <p className="text-lg text-slate-600 font-medium">
                Let us take the stress out of planning, so you can celebrate
                with confidence.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              {/* Replace with an actual image URL relevant to event planning */}
              <Image
                src={eventPlanningImage}
                alt="Well-planned event setting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Event Planning Expertise Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center pad space">
            Our Comprehensive Planning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 brand-text-color pad">
            {[
              {
                icon: <ConsultationIcon />,
                title: "Initial Consultation & Vision Development",
                description:
                  "We begin by understanding your goals, ideas, and preferences to craft a cohesive event concept.",
              },
              {
                icon: <BudgetPlanningIcon />,
                title: "Budget Management & Tracking",
                description:
                  "Transparent and meticulous budget planning to maximize your resources and avoid surprises.",
              },
              {
                icon: <VenueSelectionIcon />,
                title: "Venue Sourcing & Management",
                description:
                  "Finding the perfect backdrop for your event, negotiating contracts, and managing venue logistics.",
              },
              {
                icon: <VendorManagementIcon />,
                title: "Vendor Curation & Coordination",
                description:
                  "Connecting you with our trusted network of suppliers (florists, caterers, entertainment, etc.) and managing all communications.",
              },
              {
                icon: <TimelineIcon />,
                title: "Detailed Timeline Creation",
                description:
                  "Developing a comprehensive timeline for all pre-event tasks and the event day schedule itself.",
              },
              {
                icon: <DesignDecorIcon />,
                title: "Event Design & Ambiance",
                description:
                  "Conceptualizing and executing stunning decor, lighting, and thematic elements to create the desired atmosphere.",
              },
              {
                icon: <GuestManagementIcon />,
                title: "Guest List & RSVP Management",
                description:
                  "Assistance with guest list organization, invitation etiquette, and tracking responses.",
              },
              {
                icon: <OnDayCoordinationIcon />,
                title: "Flawless On-The-Day Execution",
                description:
                  "Overseeing all aspects of your event on the day, ensuring everything runs smoothly from start to finish.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex pad"
              >
                {item.icon}
                <div>
                  <h3 className="text-xl font-semibold brand-text-color mb-2">
                    {item.title}
                  </h3>
                  <p className="brand-text-color leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for a Stress-Free Event Planning Experience Section */}
        <section className="py-10 md:py-12 bg-indigo-50 rounded-xl shadow-lg space pad">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center space">
            Tips for a Smooth Planning Journey
          </h2>
          <div className="space-y-4 brand-text-color max-w-4xl mx-auto px-4">
            <p className="mb-6 text-lg text-center">
              Partnering with us means a smoother planning process. Here are a
              few tips for our collaboration:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  icon: <VisionIcon />,
                  title: "Define Your Vision Early",
                  description:
                    "The clearer your initial ideas (even broad strokes), the better we can tailor our services to match.",
                },
                {
                  icon: <BudgetPlanningIcon />, // Re-using
                  title: "Establish a Realistic Budget Range",
                  description:
                    "Knowing your comfort zone with spending allows us to propose suitable options from the start.",
                },
                {
                  icon: <CommunicationIcon />,
                  title: "Open Communication is Key",
                  description:
                    "Share your thoughts, concerns, and excitement openly. We're your partners in this process!",
                },
                {
                  icon: <TrustIcon />,
                  title: "Trust Your Planner's Expertise",
                  description:
                    "We have the experience and connections to guide you. Trust our recommendations and process.",
                },
                {
                  icon: <TimelineIcon />, // Re-using
                  title: "Respect Planning Timelines",
                  description:
                    "Prompt decisions and feedback help keep everything on track for a stress-free lead-up.",
                },
                {
                  icon: <FlexibilityIcon />,
                  title: "Embrace a Little Flexibility",
                  description:
                    "Sometimes the best solutions arise from adapting to unforeseen circumstances. We'll navigate these together.",
                },
                {
                  icon: <VendorManagementIcon />, // Re-using for decisions on vendors
                  title: "Make Timely Vendor Decisions",
                  description:
                    "Popular vendors book up quickly. Prompt decisions ensure you secure your top choices.",
                },
                {
                  icon: <EnjoyPlanningIcon />,
                  title: "Enjoy the Creative Process!",
                  description:
                    "Event planning should be exciting. We'll handle the complexities so you can focus on the fun parts.",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="border border-rose-200 bg-white p-3 rounded-lg shadow-sm flex items-start hover:border-rose-400 transition-colors pad space"
                >
                  {tip.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-rose-700 mb-1">
                      {tip.title}
                    </h3>
                    <p className="brand-text-color text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16 py-12">
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">
            Ready to Plan Your Extraordinary Event?
          </h2>
          <p className="text-lg brand-text-color mb-8 max-w-xl mx-auto">
            Let's discuss your vision and how we can transform it into an
            unforgettable reality.
          </p>
          {/* <a
            href="/contact" // Replace with your actual contact page URL
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Book a Consultation
          </a> */}
        </section>
      </div>
    </div>
  );
}
