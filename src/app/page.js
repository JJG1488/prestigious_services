"use client";
// app/page.js
// import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import Head from "next/head";
// import AppNav from "@components/Nav";
import Header from "@components/Header";
import Services from "@components/Services";
// import Reviews from "@components/Reviews";
import Badges from "@components/Badges";
// import Footer from "@components/Footer";
import ContactModal from "@components/EnhancedContactModal";
import GoogleBusinessProfile from "@components/GoogleBusinessProfile";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
require("dotenv");

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBottomButton(true), 5000); // 5-second delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      {/* <Hero /> */}
      <Head>
        <title>
          Prestigious Managemnet Company Events & Catering | Premier Catering,
          Event Planning & Rentals in Michigan
        </title>
        <meta
          name="description"
          content="Discover top-tier catering, event planning, and rental services in Michigan. From weddings to corporate events, we bring your vision to life with gourmet menus and stunning setups."
        />
        <meta
          name="keywords"
          content="catering Grosse Pointe, event planning Michigan, rental services, wedding catering, corporate events, party rentals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Outlet />
      </Container>
      {/* <AppNav onContactClick={() => setShowModal(true)} /> */}
      <Header />
      <Services />
      {/* <Reviews /> */}
      <GoogleBusinessProfile />
      <Badges />
      {showBottomButton && (
        <div
        // style={{
        //   position: "fixed",
        //   bottom: "20px",
        //   right: "20px",
        //   zIndex: 1000,
        // }}
        >
          {/* <button
            // className="btn btn-warning"
            className="gold-btn"
            onClick={() => setShowModal(true)}
          >
            Contact Us Now                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          </button> */}
        </div>
      )}
      {/* <Footer /> */}
      {/* <ContactModal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="btn-brand-color"
      /> */}
      {/* Other homepage sections can go here */}
    </main>
  );
}
