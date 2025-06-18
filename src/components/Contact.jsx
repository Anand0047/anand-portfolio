import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkzddlq");

  if (state.succeeded) {
    Swal.fire({
      title: "Success!",
      text: "Thanks for your message! I'll get back to you soon.",
      icon: "success"
    });
  }

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required
          ></textarea>
          <button 
            type="submit" 
            disabled={state.submitting}
          >
            Send Message
          </button>
          {/* <div className="formspree-branding">
            <span>Powered by </span>
            <a 
              href="https://formspree.io" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://formspree.io/static/img/logo.png" 
                alt="Formspree" 
                width="100"
              />
            </a>
          </div> */}
        </form>
        
        <div className="contact-info">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/anandhraj47" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/Anand0047" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/_anand47_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a 
              href="mailto:anandram221003@gmail.com" 
              className="social-icon" 
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .formspree-branding {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.8rem;
          color: #666;
        }
        .formspree-branding img {
          vertical-align: middle;
          margin-left: 5px;
        }
      `}</style>
    </section>
  );
};

export default Contact;