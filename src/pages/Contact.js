import React from 'react';
import '../App.css';


function Contact({data}) {
  console.log(data)
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +123 456 7890</p>
        <p>Email: contact@example.com</p>
       
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="map-section">
        <h2>Location</h2>
        
      </div>
      <div className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
        
      </div>
      <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>



    </div>
  );
}

export default Contact;
