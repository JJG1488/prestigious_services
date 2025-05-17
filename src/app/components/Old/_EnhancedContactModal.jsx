// "use client";
// import { useState } from "react";
// import { Modal, Button, Form, Tab, Tabs } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function ContactModal({ show, onHide }) {
//   const [key, setKey] = useState("sms");
//   const [smsPhone, setSmsPhone] = useState("");
//   const [smsMessage, setSmsMessage] = useState("");
//   const [apptDate, setApptDate] = useState(new Date());
//   const [apptEmail, setApptEmail] = useState("");
//   const [apptMessage, setApptMessage] = useState("");

//   const handleSmsSubmit = (e) => {
//     e.preventDefault();
//     console.log(`SMS to ${smsPhone}: ${smsMessage}`);
//     onHide(); // Replace with actual SMS logic later
//   };

//   const handleApptSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       `Appointment: ${apptDate}, Email: ${apptEmail}, Message: ${apptMessage}`
//     );
//     onHide(); // Replace with backend logic later
//   };

//   return (
//     <Modal show={show} onHide={onHide} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Contact Pointe Roofing Improvements</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
//           <Tab eventKey="sms" title="Text Us">
//             <Form onSubmit={handleSmsSubmit} className="mt-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>Your Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   value={smsPhone}
//                   onChange={(e) => setSmsPhone(e.target.value)}
//                   placeholder="Enter your phone number"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={smsMessage}
//                   onChange={(e) => setSmsMessage(e.target.value)}
//                   placeholder="Tell us about your roofing needs"
//                   required
//                 />
//               </Form.Group>
//               <Button variant="warning" type="submit">
//                 Send Text
//               </Button>
//             </Form>
//           </Tab>
//           <Tab eventKey="call" title="Call Us">
//             <p className="mt-3">
//               Reach us directly at:{" "}
//               <a href="tel:+1234567890" className="text-warning">
//                 +1 (234) 567-890
//               </a>
//             </p>
//           </Tab>
//           <Tab eventKey="appointment" title="Book Appointment">
//             <Form onSubmit={handleApptSubmit} className="mt-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>Date & Time</Form.Label>
//                 <DatePicker
//                   selected={apptDate}
//                   onChange={(date) => setApptDate(date)}
//                   showTimeSelect
//                   dateFormat="MMMM d, yyyy h:mm aa"
//                   className="form-control"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   value={apptEmail}
//                   onChange={(e) => setApptEmail(e.target.value)}
//                   placeholder="your@email.com"
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={apptMessage}
//                   onChange={(e) => setApptMessage(e.target.value)}
//                   placeholder="What can we help you with?"
//                 />
//               </Form.Group>
//               <Button variant="warning" type="submit">
//                 Schedule Now
//               </Button>
//             </Form>
//           </Tab>
//         </Tabs>
//       </Modal.Body>
//     </Modal>
//   );
// }

// "use client";
// import { useState } from "react";
// import { Modal, Button, Form, Tabs, Tab } from "react-bootstrap";
// import { useRouter } from "next/navigation";

// export default function EnhancedContactModal({ show, handleClose }) {
//   const [activeTab, setActiveTab] = useState("sms");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [callbackTime, setCallbackTime] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (activeTab === "sms") {
//       // Replace with an actual API call to your SMS endpoint when ready
//       alert(`Sending SMS to ${phone} with message: ${message}`);
//     } else if (activeTab === "voice") {
//       // Replace with an actual API call to your Voice endpoint when ready
//       alert(
//         `Requesting voice call to ${phone}${
//           callbackTime ? `, preferred callback at ${callbackTime}` : ""
//         }`
//       );
//     }
//     handleClose();
//   };

//   const handleRedirectToSchedule = () => {
//     // Dispatch a custom event to collapse the Navbar if it is open.
//     window.dispatchEvent(new CustomEvent("collapseNavbar"));
//     handleClose();
//     router.push("/schedule");
//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered animation={true}>
//       <Modal.Header closeButton>
//         <Modal.Title>Contact Us</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Tabs
//           activeKey={activeTab}
//           onSelect={(k) => setActiveTab(k)}
//           id="contact-tabs"
//           className="mb-3"
//         >
//           <Tab eventKey="sms" title="SMS">
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="formSMSPhone">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formSMSMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Enter your message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Send SMS
//               </Button>
//             </Form>
//           </Tab>
//           <Tab eventKey="voice" title="Voice Call">
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="formVoicePhone">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formCallbackTime">
//                 <Form.Label>Preferred Callback Time (optional)</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="e.g., 2:00 PM"
//                   value={callbackTime}
//                   onChange={(e) => setCallbackTime(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Request Call
//               </Button>
//             </Form>
//           </Tab>
//           <Tab eventKey="schedule" title="Schedule">
//             <div className="text-center">
//               <p>To schedule an appointment, please click the button below.</p>
//               <Button variant="primary" onClick={handleRedirectToSchedule}>
//                 Go to Scheduling Page
//               </Button>
//             </div>
//           </Tab>
//         </Tabs>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
