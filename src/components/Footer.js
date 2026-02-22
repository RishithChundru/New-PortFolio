import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <a href="#hero" className="logo">
            <img src="/assets/images/image.png" alt="Logo" style={{ height: "90px" }} />
          </a>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>
              <span className="contact-label">Email:</span>
              <a href="mailto:rishithrishith1@gmail.com">rishithrishith1@gmail.com</a>
            </p>
            <p>
              <span className="contact-label">Phone:</span>
              <a href="tel:+918317579171">+91 8317579171</a>
            </p>
            <div className="footer-social">
              <a href="https://github.com/RishithChundru" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/rishith23/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/rishith__chowdary/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Chundru Rishith Sai Chowdary. All rights reserved.</p>
          <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;