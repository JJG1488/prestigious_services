"use client";
// app/rentals/page.js
import React from "react";
import Image from "next/image";
import assortmentImage from "@public/PMC_Assets/EventPhotos/IMG_3345.jpeg"; // Placeholder image for rentals

// --- Icon Components for Rentals Page ---

// Category Icons
const SeatingIcon = () => (
  // Icon for Chairs
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-teal-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5h15M4.5 19.5a2.25 2.25 0 0 1-2.25-2.25V9A2.25 2.25 0 0 1 4.5 6.75h15A2.25 2.25 0 0 1 21.75 9v8.25a2.25 2.25 0 0 1-2.25 2.25M4.5 19.5V15M19.5 19.5V15M4.5 12H12m0 0V6.75M12 12h7.5"
    />
  </svg>
);

const TablesIcon = () => (
  // Icon for Tables
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-amber-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M3.75 12h16.5m-16.5 0V5.625c0-1.036.84-1.875 1.875-1.875h12.75c1.035 0 1.875.84 1.875 1.875V12m-16.5 0v6.375c0 .621.504 1.125 1.125 1.125h14.25c.621 0 1.125-.504 1.125-1.125V12"
    />
  </svg>
);

const MovieScreenIcon = () => (
  // Icon for Movie Screens & Projectors
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-indigo-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 0 1-.375 1.438AUX6.001 6.001 0 0 0 12 21c3.468 0 6.469-1.64 8.366-4.062a3 3 0 0 1-.375-1.438v-1.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 6.75h.008v.008H12v-.008Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 9h19.5M2.25 12h19.5m-19.5 3h19.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 2.25h9v4.5h-9z"
    />
  </svg>
);

const BounceHouseIcon = () => (
  // Icon for Bounce Houses
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-pink-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V3.545M3 21h3.75m0 0V3.545M3.75 18H20.25M3.75 15H20.25m-16.5-3H20.25m-16.5-3H20.25M3.75 6H20.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3.75h19.5M2.25 20.25h19.5"
    />
  </svg>
);

const PopcornIcon = () => (
  // Icon for Popcorn Machines
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 7.5a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3m5.25 0a3 3 0 0 1-5.25 0m5.25 0V3.75m-5.25 0V7.5m0-3.75h5.25"
    />
    <circle cx="9" cy="5.25" r="0.75" fill="currentColor" />
    <circle cx="12" cy="4.5" r="0.75" fill="currentColor" />
    <circle cx="15" cy="5.25" r="0.75" fill="currentColor" />
  </svg>
);

const OutdoorFurnitureIcon = () => (
  // Icon for Outdoor Movie Air Furniture
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-lime-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 11.25V12c0 2.497-1.006 4.743-2.635 6.365C15.237 19.991 12.763 21 10.125 21S4.913 19.891 3.365 18.365C1.736 16.743 .75 14.497.75 12V11.25M19.5 11.25a8.25 8.25 0 0 0-16.5 0M19.5 11.25c0-1.996-.783-3.804-2.074-5.148A7.45 7.45 0 0 0 12.75 3H11.25a7.45 7.45 0 0 0-4.676 3.102C5.283 7.446 4.5 9.254 4.5 11.25"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75h9" />
  </svg>
);

const PartyEssentialsIcon = () => (
  // Icon for "And More"
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mb-3 text-purple-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.375 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.625 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.375a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);

// "Why Rent From Us" Icons
const WideSelectionIcon = () => (
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
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    />
  </svg>
);
const QualityCleanIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-green-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const EasyBookingIcon = () => (
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
      d="M15.042 21.672L13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
    />
  </svg>
);
const DeliverySetupIcon = () => (
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
      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.988-1.132a48.534 48.534 0 0 0-10.026 0 1.132 1.132 0 0 0-.988 1.132v.958m12 0H9M4.5 12H20.25"
    />
  </svg>
);
const AffordableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 inline-block text-rose-600 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-7.5 0h7.5m-12-3h12M3 10.5h12M3 7.5h12M3 4.5h12M3 18h5.25m2.25-1.5H21M16.5 3.75h.008v.008H16.5V3.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 4.5h.008v.008H19.5V4.5Zm0 3.75h.008v.008H19.5v-.008Zm0 3.75h.008v.008H19.5V12Zm0 3.75h.008v.008h-.008v-.008Z"
    />
  </svg>
);
const SupportIcon = () => (
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
      d="M7.5 8.25h9m-9 3H12m-6.75 3h9M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

// Rental Item Categories Data
const rentalCategories = [
  {
    icon: <SeatingIcon />,
    name: "Comfortable Seating",
    description:
      "Chairs for every occasion: elegant wedding setups, casual party seating, and practical solutions for any gathering.",
    examples: "Folding chairs, banquet chairs, kids' chairs, lounge seating.",
  },
  {
    icon: <TablesIcon />,
    name: "Versatile Tables",
    description:
      "A variety of tables to suit your event layout, from dining and buffets to display and guest registration.",
    examples:
      "Round tables, rectangular tables, cocktail tables, serving tables.",
  },
  {
    icon: <MovieScreenIcon />,
    name: "Outdoor Cinema & AV",
    description:
      "Create an unforgettable movie night or presentation with our large inflatable screens and high-quality projectors.",
    examples:
      "Inflatable movie screens (various sizes), HD projectors, sound systems.",
  },
  {
    icon: <BounceHouseIcon />,
    name: "Fun & Games",
    description:
      "Add excitement for all ages with our selection of bounce houses and interactive games, perfect for parties and festivals.",
    examples: "Themed bounce houses, obstacle courses, giant games.",
  },
  {
    icon: <PopcornIcon />,
    name: "Concession Favorites",
    description:
      "Delight your guests with classic event treats! Our easy-to-use machines make serving fresh snacks a breeze.",
    examples: "Popcorn machines, cotton candy machines, snow cone machines.",
  },
  {
    icon: <OutdoorFurnitureIcon />,
    name: "Outdoor Movie Comfort",
    description:
      "Enhance your outdoor movie experience with specialized air furniture designed for comfort and style under the stars.",
    examples: "Inflatable sofas, air loungers, cozy seating options.",
  },
  {
    icon: <PartyEssentialsIcon />,
    name: "And Much More!",
    description:
      "Beyond these categories, we offer a wide range of party essentials to complete your event setup.",
    examples:
      "Tents, lighting, generators, decor items, and more upon request.",
  },
];

// Define the RentalsPage component
export default function RentalsPage() {
  return (
    <div className="bg-rose-800 min-h-screen brand-text-color container-brand-color space container-border-radius">
      {" "}
      {/* Overall page background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 brand-text-color ">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 mb-4 tracking-tight">
            Your Premier Event Rentals
          </h1>
          <p className="text-lg md:text-xl  brand-text-color max-w-3xl mx-auto">
            Equip your event with high-quality rentals from Prestigious
            Management Company. From seating and tables to entertainment and
            concessions, we have everything you need.
          </p>
        </header>

        {/* Introduction / Image Section */}
        <section className="mb-12 md:mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-amber-700 mb-6 text-center pad">
            Everything You Need, All in One Place
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center pad">
            <div>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Planning an event involves many details, and securing the right
                equipment is crucial. At Prestigious Management Company, we
                offer a comprehensive inventory of rental items to ensure your
                event is comfortable, functional, and fun.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Browse our categories to find everything from essential
                furniture like chairs and tables to exciting additions like
                movie screens, bounce houses, and popcorn machines. We are
                committed to providing clean, well-maintained, and reliable
                rentals for any occasion.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              {/* Replace with an actual image URL relevant to your rentals */}
              <Image
                src={assortmentImage} // Placeholder image URL
                alt="Assortment of event rental items"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Rental Categories Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center space">
            Explore Our Rental Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 brand-text-color pad">
            {rentalCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center pad"
              >
                {category.icon}
                <h3 className="text-xl font-semibold brand-text-color mb-2">
                  {category.name}
                </h3>
                <p className="brand-text-color leading-relaxed text-sm mb-2">
                  {category.description}
                </p>
                <p className="text-xs brand-text-color italic">
                  {category.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Rent From Us? Section */}
        <section className="py-10 md:py-12 bg-teal-50 rounded-xl shadow-lg pad space">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            Why Choose Prestigious Management Company for Rentals?
          </h2>
          <div className="space-y-4 text-slate-700 max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  icon: <WideSelectionIcon />,
                  title: "Extensive Inventory",
                  description:
                    "A wide variety of items to suit any event type, theme, or size.",
                },
                {
                  icon: <QualityCleanIcon />,
                  title: "Quality & Cleanliness",
                  description:
                    "All our rental items are regularly inspected, cleaned, and maintained to the highest standards.",
                },
                {
                  icon: <EasyBookingIcon />,
                  title: "Simple Booking Process",
                  description:
                    "Browse our catalog online and reserve your items with ease. Our team is here to help!",
                },
                {
                  icon: <DeliverySetupIcon />,
                  title: "Reliable Delivery & Setup",
                  description:
                    "Optional delivery, setup, and takedown services to make your event day smoother.",
                },
                {
                  icon: <AffordableIcon />,
                  title: "Competitive Pricing",
                  description:
                    "Get great value with our transparent pricing and package options to fit your budget.",
                },
                {
                  icon: <SupportIcon />,
                  title: "Friendly & Knowledgeable Support",
                  description:
                    "Our team is dedicated to helping you find the perfect rentals and answering all your questions.",
                },
              ].map((perk, index) => (
                <div
                  key={index}
                  className="border border-teal-200 bg-white p-3 rounded-lg shadow-sm flex items-start hover:border-teal-400 transition-colors"
                >
                  {perk.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {perk.description}
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
            Ready to Gear Up for Your Event?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Explore our rental catalog or get in touch for a personalized quote.
            We're excited to help make your event a success!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* <a
              href="/rentals-catalog" // Replace with your actual catalog page URL
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Browse Full Catalog
            </a> */}
            {/* <a
              href="/contact" // Replace with your actual contact page URL
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Request a Quote
            </a> */}
          </div>
        </section>
      </div>
    </div>
  );
}
