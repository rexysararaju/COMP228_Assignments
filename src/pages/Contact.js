// File: Contact.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  // Hook to navigate to another page after form submission
  const navigate = useNavigate();

  // Handle changes in input fields and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission: show alert and redirect to Home page
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Redirecting to Home...");
    navigate("/");
  };

  return (
    <div className="page contact-page">
      {/* Contact Information section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: sararajurexy@gmail.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>LinkedIn: linkedin.com/in/sararajurexy</p>
        <p>GitHub: github.com/rexysararaju</p>
      </div>

      {/* Interactive Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields to capture user's basic details */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {/* Submit button triggers form submission */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
