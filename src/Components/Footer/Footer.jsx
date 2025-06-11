import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Akshay Jyothip. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Aksh-Ay007" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/akshayjyothip/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:akshayjyothip@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;