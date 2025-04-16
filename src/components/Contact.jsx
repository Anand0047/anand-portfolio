import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
      <form 
  action="https://formsubmit.co/your-email@example.com" 
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html" />
  <button type="submit">Send Message</button>
</form>
        
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
    </section>
  );
};

export default Contact;