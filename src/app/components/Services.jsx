"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "New Roof Installation",
      description:
        "Transform your home with a durable, stylish new roof built to last.",
      image: "/assets/services/generalRoofingInformation.png",
    },
    {
      title: "Roof Repairs & Maintenance",
      description:
        "Swift, reliable fixes for leaks, storm damage, or wear-and-tear.",
      image: "/assets/services/commercialRoofing.jpeg",
    },
    {
      title: "Gutters Installation, Cleaning, and Repair",
      description:
        "Gutters are unsung heroes of your home's exterior, channeling rainwater away from your roof, siding, and foundation.",
      image: "/assets/services/epdmRubberizedRoofing.jpeg",
    },
    {
      title: "Skylight Installation and Repair",
      description:
        "Skylights are a fantastic way to bring natural light into your home, reducing the need for artificial lighting and enhancing the ambiance of a room.",
      image: "/assets/services/fullReplacement.png",
    },
    {
      title: "Siding Installation and Repair",
      description:
        "Siding is the first line of defense against the elements, protecting your home from wind, rain, and snow.",
      image: "/assets/services/torch.jpeg",
    },
  ];

  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-lg services-card">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                className="services-card-img-top shadow-lg"
              />

              <Card.Body>
                <Card.Title className="services-card-title">
                  {service.title}
                </Card.Title>
                <Card.Text className="services-card-text">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
