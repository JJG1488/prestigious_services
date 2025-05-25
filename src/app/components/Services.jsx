"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { Router } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Catering Services",
      description:
        "Delicious, customized menus for every occasion, from weddings to corporate events.",
      image: "/PMC_Assets/EventPhotos/IMG_3871.jpeg",
    },
    {
      title: "Event Planning",
      description:
        "Comprehensive event planning services to ensure your event runs smoothly.",
      image: "/PMC_Assets/EventPhotos/IMG_4115.jpeg",
      Link: "/api/eventPlanning",
    },
    {
      title: "Rental Services",
      description:
        "High-quality rental items, including tents, tables, chairs, and more.",
      image: "/PMC_Assets/EventPhotos/IMG_3345.jpeg",
    },
    {
      title: "Corporate Events",
      description:
        "Tailored solutions for corporate events, ensuring professionalism and excellence.",
      image: "/PMC_Assets/EventPhotos/IMG_3874.jpeg",
    },
    {
      title: "Weddings",
      description:
        "Creating unforgettable wedding experiences with personalized touches.",
      image: "/PMC_Assets/EventPhotos/IMG_4118.jpeg",
    },
    {
      title: "Private Parties",
      description:
        "Making your private parties memorable with our exceptional services.",
      image: "/PMC_Assets/EventPhotos/IMG_4119.jpeg",
    },
    {
      title: "Birthday Parties",
      description:
        "Specialized birthday party planning and catering to make your day special.",
      image: "/PMC_Assets/EventPhotos/IMG_5143.jpeg",
    },
    {
      title: "Anniversaries",
      description:
        "Celebrating milestones with elegant event planning and catering.",
      image: "/PMC_Assets/EventPhotos/IMG_5384.jpeg",
    },
    {
      title: "Fundraisers",
      description:
        "Helping you organize successful fundraisers with our expert services.",
      image: "/PMC_Assets/EventPhotos/IMG_3877.jpeg",
    },
  ];

  return (
    <Container id="services" className="my-5 brand-text-color">
      <h2 className="text-center mb-4">What We Offer</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-lg services-card brand-text-color">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                className="services-card-img-top shadow-lg brand-text-color"
              />

              <Card.Body>
                <Card.Title className="services-card-title brand-text-color">
                  {service.title}
                </Card.Title>
                <Card.Text className="services-card-text brand-text-color">
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

// "use client";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "next/image";
// import { Router } from "react-router-dom";

// export default function Services() {
//   const services = [
//     {
//       title: "New Roof Installation",
//       description:
//         "Transform your home with a durable, stylish new roof built to last.",
//       image: "/assets/services/generalRoofingInformation.png",
//       link: "/api/roofing",
//     },
//     {
//       title: "Roof Repairs & Maintenance",
//       description:
//         "Swift, reliable fixes for leaks, storm damage, or wear-and-tear.",
//       image: "/assets/services/commercialRoofing.jpeg",
//       link: "/api/roofing",
//     },
//     {
//       title: "Gutters Installation, Cleaning, and Repair",
//       description:
//         "Gutters are unsung heroes of your home's exterior, channeling rainwater away from your roof, siding, and foundation.",
//       image: "/assets/services/epdmRubberizedRoofing.jpeg",
//       link: "/api/gutters",
//     },
//     {
//       title: "Skylight Installation and Repair",
//       description:
//         "Skylights are a fantastic way to bring natural light into your home, reducing the need for artificial lighting and enhancing the ambiance of a room.",
//       image: "/assets/services/fullReplacement.png",
//       link: "/api/skylight",
//     },
//     {
//       title: "Siding Installation and Repair",
//       description:
//         "Siding is the first line of defense against the elements, protecting your home from wind, rain, and snow.",
//       image: "/assets/services/torch.jpeg",
//       link: "/api/siding",
//     },
//   ];

//   const handleCardClick = (link) => {
//     window.location.href = link;
//     // Add tracking code here if needed (e.g., Google Analytics)
//     // e.g., window.gtag('event', 'click', { 'event_category':'services', 'event_action': link });
//   };
//   const handleCardHover = (e) => {
//     e.currentTarget.classList.add("shadow-lg");
//   };

//   return (
//     <Container id="services" className="my-5">
//       <h2 className="text-center mb-4">Why Choose Us?</h2>
//       <Row>
//         {services.map((service, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card
//               className="h-100 shadow-lg services-card"
//               onClick={() => handleCardClick(service.link)}
//               onMouseEnter={handleCardHover}
//             >
//               {/* Add a hover effect to the card */}
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={500}
//                 height={500}
//                 style={{ objectFit: "cover" }}
//                 className="services-card-img-top shadow-lg"
//               />

//               <Card.Body>
//                 <Card.Title className="services-card-title">
//                   {service.title}
//                 </Card.Title>
//                 <Card.Text className="services-card-text">
//                   {service.description}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
