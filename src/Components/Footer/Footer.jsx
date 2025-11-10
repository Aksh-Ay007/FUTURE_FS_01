import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Akshay Jyothi P. All Rights Reserved.</p>
          <p className="footer-tagline">Full Stack Developer | Node.js | React | AWS | Microservices</p>
          <p className="footer-location">📍 Sharjah, UAE | Available for Opportunities</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Aksh-Ay007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub Profile">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/akshayjyothip/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn Profile">
            LinkedIn
          </a>
          <a href="mailto:akshayjyothip@gmail.com" aria-label="Email" title="Send Email">
            Email
          </a>
          <a href="tel:+971568840282" aria-label="Phone" title="Call Me">
            +971-568840282
          </a>
        </div>
        <div className="footer-cta">
          <p>Interested in working together? <a href="#contact">Let's connect!</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;