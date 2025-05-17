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
    <footer className="bg-dark text-white py-4">
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
            style={{ textAlign: "center", fontSize: "2.5rem", color: "#444" }}
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
            <h5>Pointe Roofing Improvements</h5>
            <p>Grosse Pointe, Michigan</p>
            <p>
              Phone:{" "}
              <a href="tel:+15863608447" className="text-warning">
                +1 (586) 360-8447
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:pointeroofing@gmail.com" className="text-warning">
                pointeroofing@gmail.com
              </a>
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              &copy; {currentYear} Pointe Roofing Improvements. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
        {/* <GoogleMapComponent /> */}
      </Container>
    </footer>
  );
}
