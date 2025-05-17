"use client";
import { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import ContactModal from "./ContactModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import EnhancedContactModal from "./EnhancedContactModal";

export default function Hero({ onContactClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center">
      <Container className="hero-container w-full">
        <Col className="hero-column">
          {/* The text for the hero */}
          <Row className="hero-top-row">
            <div className=" w-full  ">
              <h1 className="text-4xl font-bold mb-4 text-center text-white">
                Top Roofing Services in Grosse Pointe, MI
              </h1>
              <p className="text-xl mb-6 text-center text-white">
                Quality, Reliability, and Excellence in Roofing
              </p>
              <Row className="hero-bottom-row">
                <div className="flex gap-4 justify-center mt-6">
                  <span className="bg-yellow-500 text-gray-800 py-1 px-3 square-full text-sm font-semibold">
                    Licensed
                  </span>
                  <span className="bg-yellow-500 text-gray-800 py-1 px-3 square-full text-sm font-semibold">
                    Insured
                  </span>
                  <span className="bg-yellow-500 text-gray-800 py-1 px-3 square-full text-sm font-semibold">
                    5-Star Reviews
                  </span>
                </div>
              </Row>
            </div>
          </Row>
          <Row>
            <h1 className="text-5xl font-bold mb-4 text-center text-white">
              Pointe Roofing Improvements
            </h1>
            <p className="text-xl mb-6 text-center text-white">
              We're Here to Help
            </p>
            <div className="flex justify-center">
              <Button
                className="ml-3 bg-yellow-500 text-gray-800 border-0 hover:bg-yellow-600"
                onClick={handleModalOpen}
              >
                Contact Us Now
              </Button>
            </div>
          </Row>
        </Col>
      </Container>
      {/* The modal for Twilio calls, SMS, scheduling */}
      <ContactModal show={showModal} handleClose={handleModalClose} />
      <EnhancedContactModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}
