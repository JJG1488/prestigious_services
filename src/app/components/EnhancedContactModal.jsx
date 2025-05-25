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
          {/* <Tab eventKey="sms" title="SMS">
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
          </Tab> */}
          {/* <Tab eventKey="email" title="Email" className="text-center">
            <Form>
              <Form.Group className="mb-3" controlId="formEmailFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmailReason">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter reason for reaching out"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="btn-brand-color">
                Send Email
              </Button>
            </Form>
          </Tab> */}
          <Tab eventKey="voice" title="Voice Call" className="text-center">
            <Form>
              {/* <Form.Group className="mb-3" controlId="formVoicePhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formCallbackTime">
                {/* <Form.Label>Preferred Callback Time (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 2:00 PM"
                  value={callbackTime}
                  onChange={(e) => setCallbackTime(e.target.value)}
                /> */}
              </Form.Group>
              <p>To give us a call right now, please click the button below.</p>
              <Button className="btn-brand-color">
                <a href="tel:+13139839528" className=" text-white">
                  Call Us Now
                </a>
                {/* Request Call */}
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="schedule" title="Schedule">
            <div className="text-center ">
              <p>
                To schedule an appointment to speak at a later time, please
                click the button below.
              </p>
              <Button className="btn-brand-color">
                <a
                  href="https://calendly.com/prestigiousmanagementcompany/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-white"
                >
                  Click here to schedule an appointment
                </a>
              </Button>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className="btn-brand-color">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
