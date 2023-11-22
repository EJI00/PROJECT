import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About Us</a>
        </div>
        <div className="social-icons">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="" alt="Google" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;