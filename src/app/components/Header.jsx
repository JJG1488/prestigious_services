"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";


export default function Header() {
  return (
    <div
      style={{
        // backgroundImage: "url(./../../public/assets/banner.jpg)", // Add your roofing image in /public
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
            <h1>Elevate Your Home with Pointe Roofing Improvements</h1>
            <p>
              Premier roofing solutions in Grosse Pointe, Michigan – Quality you
              can trust!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
// "use client";
// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";
// import EnhancedContactModal from "./EnhancedContactModal";
// import logo from "../../public/logo.png";

// export default function Header() {
//   const [expanded, setExpanded] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close the navbar (set expanded state to false)
//   const closeNavbar = () => setExpanded(false);

//   return (
//     <>
//       <Navbar
//         expanded={expanded}
//         collapseOnSelect
//         // expand="lg"
//         expand="md"
//         fixed="top"
//         variant="dark"
//         className={isScrolled ? "bg-dark shadow" : "bg-transparent"}
//       >
//         <Container>
//           <Navbar.Brand>
//             <Link href="/" passHref legacyBehavior>
//               <a onClick={closeNavbar}>
//                 <Image
//                   src={logo}
//                   alt="Pointe Roofing Improvements"
//                   width={50}
//                   height={50}
//                 />
//               </a>
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => setExpanded(expanded ? false : true)}
//           />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ms-auto">
//               <Link href="/home" passHref legacyBehavior>
//                 <Nav.Link onClick={closeNavbar}>Home</Nav.Link>
//               </Link>
//               <Link href="/about" passHref legacyBehavior>
//                 <Nav.Link onClick={closeNavbar}>About</Nav.Link>
//               </Link>
//               <Link href="/services" passHref legacyBehavior>
//                 <Nav.Link onClick={closeNavbar}>Services</Nav.Link>
//               </Link>
//               <Link href="/reviews" passHref legacyBehavior>
//                 <Nav.Link onClick={closeNavbar}>Reviews</Nav.Link>
//               </Link>
//               <Link href="/contact" passHref legacyBehavior>
//                 <Nav.Link onClick={closeNavbar}>Contact</Nav.Link>
//               </Link>
//               <Button
//                 variant="outline-warning"
//                 onClick={() => {
//                   setShowModal(true);
//                   closeNavbar();
//                 }}
//                 className="ms-3"
//               >
//                 Contact Us Now
//               </Button>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <EnhancedContactModal
//         show={showModal}
//         handleClose={() => setShowModal(false)}
//       />
//     </>
//   );
// }
