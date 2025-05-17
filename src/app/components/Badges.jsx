"use client";
import { Container, Row, Col } from "react-bootstrap";
import { ShieldFill, AwardFill, Tools, PatchCheckFill  } from "react-bootstrap-icons";

export default function Badges() {
  return (
    <Container id="badges" className="my-5 text-center">
      <h2 className="mb-5">Our Commitment to You</h2>
      <Row className=" text-center justify-content-center badge-row">
        <Col md={4} className="mb-3">
          <ShieldFill size={50} color="#ffc107" />
          <p>Fully Insured</p>
        </Col>
        <Col md={4} className="mb-3">
          <AwardFill size={50} color="#ffc107" />
          <p>Trusted & Certified</p>
        </Col>
      </Row>
      <Row className="text-center justify-content-center badge-row">
        <Col md={4} className="mb-3">
          <Tools size={50} color="#ffc107" />
          <p>Superior Quality</p>
        </Col>
        <Col md={4} className="mb-3">
          <PatchCheckFill size={50} color="#ffc107" />
          <p>Satisfaction Guaranteed</p>
        </Col>
      </Row>
    </Container>
  );
}
