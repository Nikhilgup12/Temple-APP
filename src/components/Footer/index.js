import React from "react";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-section">
          <div className="footer-temple-heading-container">
            <h3 className="fotter-temple-heading">Temples of India</h3>
            <img
              src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
              className="nav-logo"
            />
          </div>

          <p>World's Largest Hindu Temples Portal.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Nearby Temples</li>
            <li>Download App</li>
            <li>Donate to Us</li>
          </ul>
        </div>
        <div>
          <p>Search Temples </p>
          <p>Watch Video</p>
          <p>Disclaimer </p>
          <p> Our Blog </p>
          <p>Donate for Dharma </p>
        </div>
        <div className="footer-section">
          <div className="social-icons">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              className="facebook-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              className="facebook-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              className="facebook-image"
            />
          </div>
        </div>
      </div>
      <div className="footer-section-para">
        <p style={{ color: "orange" }}>
          © Temples of India 2020-2023 | Email: contact@templesofindia.org
        </p>
      </div>
    </footer>
  );
};

export default Footer;
