import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Anandh Raj R</h3>
          <p>Software Developer</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="fles">
            <ul className="set-link">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Timeline</a></li>
            </ul>
            <ul className="set-link-1">
              <li><a href="#work">Work</a></li>
              <li><a href="#testimonials">Coding Profile</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="contact-info">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/anandhraj47" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Anand0047" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:anandram221003@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anandh raj. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
