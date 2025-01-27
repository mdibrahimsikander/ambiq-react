import React, { useState } from "react";
import AmbiQLogo from "../assets/AmbiQ-Logo.png";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {

  
  const [subscriber, setSubscriber] = useState({ email: "" });

  const postUserEmail = (event) => {
    const { name, value } = event.target;
    setSubscriber({ ...subscriber, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const email = { email: subscriber.email };

    try {
      const existingEmailsResponse = await fetch('https://ambiq-f1d2a-default-rtdb.firebaseio.com/subscriberRecords.json');
      const existingEmailsData = await existingEmailsResponse.json();

      const existingEmails = existingEmailsData ? Object.values(existingEmailsData).map(record => record.email) : [];
      if (existingEmails.includes(subscriber.email)) {
        setSubscriber({ email: "" });
        showAlert('This email is already subscribed to the newsletter.', 'alert-warning');
        return;
      }

      const res = await fetch('https://ambiq-f1d2a-default-rtdb.firebaseio.com/subscriberRecords.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      if (res.ok) {
        console.log('Success!', res);
        setSubscriber({ email: "" });
        showAlert('Thank you for subscribing to our newsletter!', 'alert-success');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error!', error);
      showAlert('An error occurred. Please try again.', 'alert-danger');
    }
  };

  const showAlert = (message, alertClass) => {
    const alertContainer = document.getElementById('alert-container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass}`;
    alertDiv.role = 'alert';
    alertDiv.innerText = message;

    alertContainer.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 4000);
  };

  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="info_top">
            <div className="info_logo">
              <a href="#">
                <img src={AmbiQLogo} alt="AmbiQ Logo" />
              </a>
            </div>
            <div className="info_form">
              <form method="POST" name="google-sheet" onSubmit={submitData}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={subscriber.email}
                  onChange={postUserEmail}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div id="alert-container" />
          </div>
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row">
              <div className="col-md-6 col-lg-3">
                <h5>Address</h5>
                <div className="info_contact">
                  <a>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Kolkata</span>
                  </a>
                  <a href="tel:+917044542223">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Call +91 70445 42223</span>
                  </a>
                  <a href="mailto:support@ambiq.in">
                    <i className="fa fa-envelope" />
                    <span>support@ambiq.in</span>
                  </a>
                </div>
                <div className="social_box">
                  <a
                    href="https://www.facebook.com/profile.php?id=61556098476254&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/ambiqofficial?igsh=N3A5dWYxdnQ2eWQ4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a
                    href="https://youtube.com/@ambiqambulance?si=cO8_sweGx9GtY7JP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>Useful link</h5>
                  <div className="info_links_menu">
                    <NavLink 
                      exact 
                      to="/" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Home
                    </NavLink>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      About Us
                    </NavLink>
                    <NavLink 
                      to="/keyfeatures" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Key Features
                    </NavLink>
                    <NavLink 
                      to="/services" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Services
                    </NavLink>
                    <NavLink 
                      to="/faq" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      FAQ
                    </NavLink>
                    <NavLink 
                      to="/careers" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Careers
                    </NavLink>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Contact us
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <h5>Location</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.81212011125!2d88.18254112599966!3d22.535343439863773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1719489441109!5m2!1sen!2sin"
                  title="map"
                  width="100%"
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p>
            © <span id="displayYear" /> All Rights Reserved By <a href="https://ambiq.in/">AmbiQ Health Services Pvt. Ltd.</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
