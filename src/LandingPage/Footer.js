// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>MediDrop</h2>
          <p>
            Remote healthcare and medicine delivery platform that connects patients, doctors,
            and pharmacies for a seamless healthcare experience.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/medicines">Medicines</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section legal">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><strong>Email:</strong> support@medidrop.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Healthcare Ave, Medical City, MC 12345</p>
        </div>
      </div>

      <div className="footer-social">
        <span>Follow us:</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon twitter" />
        </a>
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MediDrop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
