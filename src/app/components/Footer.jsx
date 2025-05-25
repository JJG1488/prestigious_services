"use client";
import { Container, Row, Col, Card } from "react-bootstrap";

import GoogleMapComponent from "./GoogleMapComponent";
import Spinner from "./Spinner";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const renderMapStatus = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <GoogleMapComponent />;
    default:
      return <GoogleMapComponent />;
  }
};

const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY;
export default function Footer(status) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 navbar-brand-color brand-text-color">
      <Container>
        {/* Service Area with Map */}
        <Card
          className="map-section"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            padding: "30px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            style={{ textAlign: "center", fontSize: "2.5rem" }}
            className="text-center mb-4 brand-text-color"
          >
            Our Service Area
          </h2>
          <Row>
            <Col>
              <Wrapper apiKey={apiKey} render={renderMapStatus}>
                <GoogleMapComponent />
              </Wrapper>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col md={6}>
            <h5>Prestigious Management Company</h5>
            <p>Location: Michigan</p>
            <p>
              Phone:{" "}
              <a href="tel:+13139839528" className="">
                +1 (313) 983-9528
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:prestigiousmanagementcompany@gmail.com
"
                className=""
              >
                prestigiousmanagementcompany@gmail.com
              </a>
            </p>
          </Col>
          <Col md={6} className="">
            <p>
              &copy; {currentYear} Prestigious Management Company. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
        {/* <GoogleMapComponent /> */}
      </Container>
    </footer>
  );
}
