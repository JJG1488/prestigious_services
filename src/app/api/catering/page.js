"use client";
// app/catering/page.js
import React from "react";
import Image from "next/image";
import cateringFoodSpread from "@public/PMC_Assets/EventPhotos/IMG_3031.jpeg"; // Example image path

// --- Icon Components for Catering ---

const MenuIcon = () => (
  // Icon for Menu Customization / Consultation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-amber-600 shrink-0" // Warm gold/amber
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15.75h6M9 12.75h6M9 9.75h6"
    />
  </svg>
);

const IngredientsIcon = () => (
  // Icon for Quality Ingredients
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-green-700 shrink-0" // Earthy green
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.75A3.75 3.75 0 0 0 15.75 12H8.25A3.75 3.75 0 0 0 12 15.75Z"
    />
  </svg>
);

const ServiceIcon = () => (
  // Icon for Professional Service (e.g., a cloche)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-rose-700 shrink-0" // Elegant rose
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V3.545M3 21h3.75m0 0V3.545M21 8.25H3M21 12H3m18 3.75H3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);

const PresentationIcon = () => (
  // Icon for Beautiful Presentation (e.g., a stylized plate/dish)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-purple-600 shrink-0" // Sophisticated purple
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 10.5a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 10.5v9A2.25 2.25 0 0 0 4.5 21.75h15a2.25 2.25 0 0 0 2.25-2.25v-9Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75V5.25Z"
    />
  </svg>
);

const DietaryIcon = () => (
  // Icon for Dietary Accommodations (e.g., a leaf or apple)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-teal-600 shrink-0" // Fresh teal
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 9.75 3 3m0 0 3-3m-3 3V15m0-8.25a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V6.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 12C7.5 7.75 12.75 6 16.5 6"
    />
  </svg>
);

const CalendarBookingIcon = () => (
  // Icon for Booking in Advance
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.75h.008v.008H12v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.75h.008v.008H12v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.125 12.75h.008v.008h-.008v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.125 15.75h.008v.008h-.008v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.875 12.75h.008v.008h-.008v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.875 15.75h.008v.008h-.008v-.008Z"
    />
  </svg>
);

const BudgetIcon = () => (
  // Icon for Budget
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-lime-700 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5V4.5m0 13.5h.008v.008H21v-.008Zm0 0H2.25m18.75 0s-1.17.011-1.667-.288c-.295-.176-.502-.472-.638-.782a2.25 2.25 0 0 1-2.094-2.094c-.31-.136-.606-.343-.782-.638-.298-.5-.287-1.667-.287-1.667s.011-1.17.287-1.667c.176-.295.472-.502.782-.638a2.25 2.25 0 0 1 2.094-2.094c.136-.31.343-.606.638-.782.5-.298 1.667-.287 1.667-.287M3 15.75V4.5m16.5 11.25H3.01M21.75 10.5a2.25 2.25 0 0 0-2.25-2.25H3A2.25 2.25 0 0 0 .75 10.5v3A2.25 2.25 0 0 0 3 15.75h16.5A2.25 2.25 0 0 0 21.75 13.5v-3Z"
    />
  </svg>
);

const GuestsIcon = () => (
  // Icon for Guest Count
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
      d="M18 18.72a9.094 9.094 0 0 0 3.758-7.743A9.09 9.09 0 0 0 12 3.1875a9.09 9.09 0 0 0-9.758 7.743A9.093 9.093 0 0 0 12 20.779a9.093 9.093 0 0 0 6-2.059Zm0-3.024A5.455 5.455 0 0 0 12 13.5a5.455 5.455 0 0 0-6 2.196m12-2.196V15.75m0-2.196a2.25 2.25 0 0 0-2.25-2.25H8.25A2.25 2.25 0 0 0 6 13.5m6 2.25h.008v.008H12v-.008Zm-.75-6.75h.008v.008H11.25V8.25Zm2.25 0h.008v.008H13.5V8.25Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6.75a5.25 5.25 0 0 1 1.135 10.643M5.115 17.393A5.25 5.25 0 0 1 6.25 6.75M12 20.779V17.25m0 3.529a6.75 6.75 0 0 0 6.701-6.04M5.299 14.739A6.75 6.75 0 0 0 12 17.25"
    />
  </svg>
);

const VenueIcon = () => (
  // Icon for Venue/Logistics
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

const ThemeIcon = () => (
  // Icon for Theme/Style
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-pink-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.162 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-4.243 4.243l-3.275-3.275a4.5 4.5 0 0 0-6.336 4.486c.048 1.07.11 2.14.11 3.21"
    />
  </svg>
);

const EnjoyIcon = () => (
  // Icon for Relax & Enjoy
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
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.845a4.5 4.5 0 0 1 1.084-2.858L12 12.019l-1.834-1.666a4.5 4.5 0 0 1-1.084-2.858V4.629a6 6 0 0 1 5.84-7.38C17.064.033 19 1.01 19 2.25v19.5c0 1.24-1.936 2.217-3.41 2.185Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 6.75h.008v.008H9.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V11.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-4.125 4.5h.008v.008H9.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 2.25A2.25 2.25 0 0 1 7.25 0h9.5A2.25 2.25 0 0 1 19 2.25v19.5a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 5 21.75V2.25Z"
    />
  </svg>
);

// Define the CateringPage component
export default function CateringPage() {
  return (
    <div className="bg-rose-800 min-h-screen brand-text-color container-brand-color space container-border-radius">
      {" "}
      {/* Overall page background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 brand-text-color ">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-800 mb-4 tracking-tight">
            Exquisite Catering for Every Occasion
          </h1>
          <p className="text-lg md:text-xl brand-text-color max-w-3xl mx-auto brand-text-color">
            From intimate gatherings to grand celebrations, Prestigious
            Management Company delivers unforgettable culinary experiences,
            crafted with passion and precision.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6 text-center sm:text-left pad">
            Crafting Your Perfect Event
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center pad">
            <div>
              <p className="text-lg brand-text-color mb-4 leading-relaxed">
                At Prestigious Management Company, we believe that exceptional
                food is at the heart of every memorable event. Our dedicated
                team works closely with you to create a bespoke menu that
                reflects your vision, tastes, and dietary preferences.
              </p>
              <p className="text-lg brand-text-color mb-4 leading-relaxed">
                Whether you're planning a wedding, corporate luncheon, birthday
                party, or any special get-together, we offer a diverse range of
                culinary styles and service options to ensure your event is a
                resounding success.
              </p>
              <p className="text-lg brand-text-color font-medium">
                Let us handle the details, so you can relax and enjoy your
                guests.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              {/* Replace with an actual image URL relevant to your catering */}
              <Image
                // src="/path/to/your/image.jpg" // Replace with your actual image path
                src={cateringFoodSpread} // Example image path
                alt="Catering Food Spread"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Catering Excellence Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center space">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 brand-text-color pad">
            {[
              {
                icon: <MenuIcon />,
                title: "Bespoke Menu Creation",
                description:
                  "Collaborate with our chefs to design a unique menu tailored to your event's theme, dietary needs, and preferences.",
              },
              {
                icon: <IngredientsIcon />,
                title: "Premium Quality Ingredients",
                description:
                  "We source the freshest, highest-quality ingredients, prioritizing local and seasonal produce for optimal flavor.",
              },
              {
                icon: <ServiceIcon />,
                title: "Professional & Attentive Service",
                description:
                  "Our experienced chefs, servers, and event staff are dedicated to providing seamless and courteous service.",
              },
              {
                icon: <PresentationIcon />,
                title: "Stunning Food Presentation",
                description:
                  "We believe food should be a feast for the eyes as well as the palate, with artful and appealing displays.",
              },
              {
                icon: <DietaryIcon />,
                title: "Dietary Accommodations",
                description:
                  "Expertly catering to a wide range of dietary requirements, including vegetarian, vegan, gluten-free, and allergies.",
              },
              {
                icon: <VenueIcon /> /* Re-using VenueIcon for this point */,
                title: "Full-Service Coordination",
                description:
                  "From initial planning and setup to service and cleanup, we manage all aspects of your catering needs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex"
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

        {/* Tips for Planning Your Catered Event Section */}
        <section className="py-10 md:py-12 bg-rose-100 rounded-xl shadow-lg space pad">
          <h2 className="text-3xl font-semibold text-rose-800 mb-8 text-center space">
            Planning Your Perfect Catered Event
          </h2>
          <div className="space-y-4 brand-text-color max-w-4xl mx-auto px-4">
            <p className="mb-6 text-lg text-center">
              A little planning goes a long way. Here are some tips to ensure
              your catered event is flawless:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  icon: <CalendarBookingIcon />,
                  title: "Book Well in Advance",
                  description:
                    "Especially for weddings or large events, secure your date early to ensure availability and ample planning time.",
                },
                {
                  icon: <BudgetIcon />,
                  title: "Define Your Budget",
                  description:
                    "Having a clear budget helps us suggest the best menu and service options for your needs.",
                },
                {
                  icon: <GuestsIcon />,
                  title: "Estimate Your Guest Count",
                  description:
                    "An accurate (or close estimate) guest count is crucial for menu planning, staffing, and pricing.",
                },
                {
                  icon: <DietaryIcon />,
                  title: "Communicate Dietary Needs",
                  description:
                    "Inform us of any allergies, intolerances, or special dietary requests (vegetarian, vegan, etc.) beforehand.",
                },
                {
                  icon: <VenueIcon />,
                  title: "Discuss Venue & Logistics",
                  description:
                    "Share details about your venue, kitchen access, setup times, and any specific logistical requirements.",
                },
                {
                  icon: <ThemeIcon />,
                  title: "Share Your Vision & Theme",
                  description:
                    "Let us know if your event has a specific theme or style, so we can align our culinary presentation.",
                },
                {
                  icon: <MenuIcon /> /* Re-using for final consultation */,
                  title: "Finalize Menu & Details",
                  description:
                    "Confirm your menu choices, service style, and event timeline with us well before the event date.",
                },
                {
                  icon: <EnjoyIcon />,
                  title: "Relax and Enjoy!",
                  description:
                    "Trust our team to handle the culinary details, allowing you to fully enjoy your special occasion.",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="border border-rose-200 bg-white p-4 rounded-lg shadow-sm flex items-start hover:border-rose-400 transition-colors"
                >
                  {tip.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-rose-700 mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
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
            Ready to Discuss Your Event?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto brand-text-color">
            We'd love to hear about your plans and how we can make your next
            event delicious and memorable.
          </p>
          {/* <a
            href="/contact" // Replace with your actual contact page URL
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a> */}
        </section>
      </div>
    </div>
  );
}
