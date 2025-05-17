"use client";
import { useState } from "react";
import { Modal, Button, Form, Tabs, Tab } from "react-bootstrap";
import { useRouter } from "next/navigation";
// import { Twilio } from "twilio";

export default function EnhancedContactModal({ show, onHide }) {
  // Use local state to manage form inputs and active tab.
  const [activeTab, setActiveTab] = useState("sms");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [callbackTime, setCallbackTime] = useState("");
  const router = useRouter();
  const [fName, setFName] = useState("");
  const [reason, setReason] = useState("");

  const handleSMSSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/twilio/sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone,
          message: message,
          fName: fName,
          reason: reason,
        }),
      });
      // Check if the response is ok (status code 200-299)
      console.log("Response status:", response.status);
      // if (!response.ok) throw new Error("Failed to send SMS");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to send SMS");
      }
      // Clear form inputs for next time.
      setPhone("");
      setMessage("");
      setCallbackTime("");
      // Optionally, you can show a success message or redirect the user.
      // For example, you can use a toast notification or alert.
      // alert("SMS sent successfully!");
      // Redirect the user to a success page if desired.
      // router.push("/success");
      console.log("SMS sent successfully");
      onHide();
    } catch (error) {
      console.error("Error sending SMS:", error);
      alert("Failed to send SMS: " + error.message);
    }
  };

  const handleVOICESubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/twilio/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone,
          twimUrl: `https://pointeroofingfunctionservice-2251.twil.io/voicemailhandler`,
          callbackTime: callbackTime,
        }),
      });
      // Check if the response is ok (status code 200-299)
      console.log("Response status:", response.status);
      // if (!response.ok) throw new Error("Failed to send voice call");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to send voice call");
      }
      // Clear form inputs for next time.
      setPhone("");
      setMessage("");
      setCallbackTime("");
      // Optionally, you can show a success message or redirect the user.
      // For example, you can use a toast notification or alert.
      // alert("Voice call sent successfully!");
      // Redirect the user to a success page if desired.
      // router.push("/success");
      console.log("Voice call sent successfully");
      onHide();
    } catch (error) {
      console.error("Error sending voice call:", error);
      alert("Failed to send voice call: " + error.message);
    }
  };

  // const handleRedirectToSchedule = () => {
  //   // Dispatch a custom event to collapse the Navbar if it is open.
  //   window.dispatchEvent(new CustomEvent("collapseNavbar"));
  //   handleClose();
  //   router.push("pages/schedule");
  // };
  const handleClose = () => onHide();

  return (
    <Modal show={show} onHide={onHide} centered animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="contact-tabs"
          className="mb-3"
        >
          <Tab eventKey="sms" title="SMS">
            <Form onSubmit={handleSMSSubmit}>
              <Form.Group className="mb-3" controlId="formSMSPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSMSFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSMSReason">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter reason for reaching out"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSMSMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Send SMS
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="voice" title="Voice Call">
            <Form onSubmit={handleVOICESubmit}>
              <Form.Group className="mb-3" controlId="formVoicePhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCallbackTime">
                {/* <Form.Label>Preferred Callback Time (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 2:00 PM"
                  value={callbackTime}
                  onChange={(e) => setCallbackTime(e.target.value)}
                /> */}
              </Form.Group>
              <Button variant="warning" type="submit">
                Request Call
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="schedule" title="Schedule">
            <div className="text-center text-black">
              <p>To schedule an appointment, please click the button below.</p>
              <Button variant="warning">
                <a
                  href="https://calendly.com/pointeroofing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-black"
                >
                  Click here to schedule an appointment
                </a>
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
