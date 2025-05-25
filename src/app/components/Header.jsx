"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        // backgroundImage: "url(./../../public/assets/banner.jpg)", // Add your mage in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "white",
        position: "relative",
      }}
    >
      <div
        className="hero-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        }}
      />
      <Container
        className="h-100 d-flex align-items-center justify-center"
        style={{
          position: "relative",
          // backgroundImage: "url('../../public/assets/banner.jpg')",
        }}
      >
        <Row>
          <Col className="h-100 text-center">
            <h1>Prestigious Management Company</h1>
            <p>
              Premier Catering, Event Planning, and Rental solutions in Michigan
              – Quality you can trust!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
