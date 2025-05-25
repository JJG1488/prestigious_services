"use client";
// This component allows users to schedule an appointment
// use router.push("/schedule"); to navigate to the schedule page
import { useState } from "react";
import { Container, Form, Button, Fade, Alert } from "react-bootstrap";

export default function SchedulePage() {
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWidget, setShowWidget] = useState(false); // Toggle between custom form and widget placeholder

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate an API call for scheduling
    // In a real-world scenario, you would send the email and dateTime to your backend
    console.log("Scheduling appointment for:", email, dateTime);
    // Simulate a successful submission
    setSubmitted(true);
    setShowWidget(false);
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const toggleSchedulingMode = () => {
    setShowWidget((prev) => !prev);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Schedule an Appointment</h2>
      <div className="text-center mb-3">
        <Button variant="outline-secondary" onClick={toggleSchedulingMode}>
          {showWidget
            ? "Use Custom Scheduling Form"
            : "Try Embedded Scheduling Widget"}
        </Button>
      </div>
      <Fade in={!showWidget} appear>
        <div>
          {!showWidget && (
            <>
              {submitted ? (
                <Alert variant="success">
                  Thank you! Your appointment request has been submitted. We
                  will get in touch shortly.
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formScheduleEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll use this email to confirm your appointment.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formScheduleDateTime">
                    <Form.Label>Preferred Date and Time</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Schedule Appointment
                  </Button>
                </Form>
              )}
            </>
          )}
        </div>
      </Fade>
      <Fade in={showWidget} appear>
        <div>
          {showWidget && (
            <Alert variant="info">
              {/* Link to an embedded scheduling widget here. */}
              <a
                href="https://calendly.com/prestigiousmanagementcompany/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to schedule an appointment using our embedded
                scheduling widget.
              </a>
              {/* <p>
                This is a placeholder for an embedded scheduling widget.
                <br />
                In a real-world scenario, you could integrate a service like
                Calendly or another scheduling tool here.
              </p>
              <p>
                Until then, please use the custom scheduling form by toggling
                the button above.
              </p> */}
            </Alert>
          )}
        </div>
      </Fade>
    </Container>
  );
}
