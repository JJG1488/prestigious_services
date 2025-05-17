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

// // "use client";
// // import { Modal, Button } from "react-bootstrap";

// // export default function ContactModal({ show, handleClose }) {
// //   const handleCall = () => {
// //     // Placeholder for Twilio call logic
// //     alert("Initiate phone call via Twilio...");
// //   };

// //   const handleSMS = () => {
// //     // Placeholder for Twilio SMS logic
// //     alert("Open SMS form or send SMS via Twilio...");
// //   };

// //   const handleSchedule = () => {
// //     // Placeholder for scheduling widget (e.g., Calendly)
// //     alert("Open scheduling widget or direct to scheduling page...");
// //   };

// //   return (
// //     <Modal show={show} onHide={handleClose} centered>
// //       <Modal.Header closeButton>
// //         <Modal.Title style={{ color: "black" }}>Contact Us</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         <p style={{ color: "black" }}>How would you like to get in touch?</p>
// //         <div className="d-flex flex-column gap-2">
// //           <Button variant="warning" onClick={handleCall}>
// //             Call Us
// //           </Button>
// //           <Button variant="warning" onClick={handleSMS}>
// //             Send an SMS
// //           </Button>
// //           <Button variant="warning" onClick={handleSchedule}>
// //             Schedule an Appointment
// //           </Button>
// //         </div>
// //       </Modal.Body>
// //       <Modal.Footer>
// //         <Button variant="secondary" onClick={handleClose}>
// //           Close
// //         </Button>
// //       </Modal.Footer>
// //     </Modal>
// //   );
// // }
