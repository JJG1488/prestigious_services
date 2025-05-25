import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "@public/logo/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppNav({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      // bg="dark"
      // variant="dark"
      expand="lg"
      sticky="top"
      className={
        isScrolled
          ? "navbar-brand-color shadow-lg transition-shadow duration-300 ease-in-out"
          : "navbar-brand-color shadow-lg transition-shadow duration-300 ease-in-out"
      }
    >
      <Navbar.Brand
        className=""
        style={{ padding: "2% 4%", borderRadius: "12px" }}
        href="/"
      >
        <Link href="/" passHref={true} legacyBehavior={true}>
          <Image
            src={logo}
            alt="Prestigious Management Company"
            width={70}
            height={70}
            style={{ padding: "2% 4%", borderRadius: "12%" }}
            onClick={closeNavbar}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav navbar-brand-color"
        className="visible"
        style={{ margin: "1rem" }}
      >
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            onClick={() =>
              document
                .getElementById("badges")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </Nav.Link>
          <NavDropdown
            title="Services"
            id="servicesDropdown"
            className="navbar-brand-color"
          >
            <NavDropdown.Item
              href="/api/catering"
              onClick={() => router.push("/api/catering")}
            >
              Catering
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/api/event-planning"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Event Planning
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/api/rentals"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Rentals
            </NavDropdown.Item>
            {/* <NavDropdown.Item
              href="/api/skylight"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Skylight
            </NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link
            href="/api/privacy-policy"
            onClick={() => router.push("/api/privacy-policy")}
          >
            Privacy Policy
          </Nav.Link> */}
        </Nav>
        <Button className="btn-brand-color" onClick={onContactClick}>
          Contact Us Now
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
