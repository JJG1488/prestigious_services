"use client";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

// Sample reviews inspired by positive feedback
const reviews = [
  {
    rating: 5,
    text: "Prestigious Management Company has consistently provided excellent service and exceeded my expectations. Their workmanship and attention to detail are unparalleled.",
    reviewer: "John D.",
  },
  {
    rating: 4,
    text: "Great service and timely completion. There was a minor issue with the cleanup, but they addressed it promptly. Overall, very satisfied.",
    reviewer: "Sarah M.",
  },
  {
    rating: 5,
    text: "I am thrilled with the work done by Prestigious Management Company. They met my expectations and exceeded my expectations. I highly recommend them to anyone looking for a professional and efficient event management company.",
    reviewer: "Mike R.",
  },
];

export default function GoogleBusinessProfile() {
  return (
    <Container id="google-profile" className="my-5 brand-text-color">
      {/* <h2 className="text-center mb-4">Prestigious Management Company</h2> */}
      <Row>
        {/* Business Information */}
        <Col md={4}>
          <h3>Prestigious Management Company</h3>
          <p>Michigan based</p>
          <p>
            Phone:{" "}
            <a href="tel:+13139839528" className="navbar-brand-color">
              +1 (313) 983-9528
            </a>
          </p>
          <p className="flex">
            Rating: 4.8{" "}
            {[...Array(5)].map((_, i) => (
              <StarFill key={i} className="navbar-brand-color" />
            ))}{" "}
            (10 reviews)
          </p>
          {/* <p>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-brand-color"
            >
              Our Reviews on Google!
            </a>
          </p> */}
        </Col>
        {/* Reviews Carousel */}
        <Col md={8}>
          <Carousel>
            {reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <div className="text-center py-4">
                  <p>"{review.text}"</p>

                  <Col className="">
                    <Row className="">
                      <strong>- {review.reviewer}</strong>
                    </Row>
                    <Row className="">
                      <div className="flex text-center justify-center brand-text-color">
                        {[...Array(5)].map((_, i) => (
                          <StarFill
                            key={i}
                            className={
                              i < review.rating
                                ? "brand-text-color"
                                : "text-muted"
                            }
                          />
                        ))}
                      </div>
                    </Row>
                  </Col>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
