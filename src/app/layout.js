// app/layout.js
"use client";
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import "../styles/globals.css"; // Tailwind + global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactModal from "./components/EnhancedContactModal";
import Button from "react-bootstrap/Button";

const metadata = {
  title: "Prestigious Management Company",
  description: "Top Catering, Event Planning, & Rentals in Michigan",
  openGraph: {
    title: "Prestigious Management Company",
    description:
      "Discover top-tier catering, event planning, and rental services in Michigan. From weddings to corporate events, we bring your vision to life with gourmet menus and stunning setups.",
    url: "https://prestigiousmanagementcompany.com",
    siteName: "Prestigious Management Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Prestigious Management Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBottomButton(true), 5000); // 5-second delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" metadata={metadata}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Discover top-tier catering, event planning, and rental services in Michigan. From weddings to corporate events, we bring your vision to life with gourmet menus and stunning setups."
        />
        <meta
          name="keywords"
          content="catering, Detroit, event planning Michigan, rental services, wedding catering, corporate events, party rentals"
        />
        <meta name="author" content="Prestigious Management Company" />
        <meta property="og:title" content="Prestigious Management Company" />
        <meta
          property="og:description"
          content="Top Catering, Event Planning, & Rentals in Michigan"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          property="og:url"
          content="https://prestigiousmanagementcompany.com"
        />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/og-image.jpg" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/your-api-key.js"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
      </Head>
      <body>
        <Nav onContactClick={() => setShowModal(true)} />
        <main className="container mx-auto">{children}</main>
        <Footer />
        {showBottomButton && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <Button
              className="btn-brand-color"
              onClick={() => setShowModal(true)}
            >
              Contact Us Now
            </Button>
          </div>
        )}
        <ContactModal show={showModal} onHide={() => setShowModal(false)} />
      </body>
    </html>
  );
}
