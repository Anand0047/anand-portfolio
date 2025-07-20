import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '@formspree/react';
import '../styles/cyberpunk-contact.css'; // Separate stylesheet


const Contact = () => {
  const [state, handleSubmit] = useForm("mdkzddlq");

  if (state.succeeded) {
    Swal.fire({
      title: "TRANSMISSION SUCCESSFUL!",
      text: "Message received. Response sequence initiated.",
      icon: "success",
      background: '#0a0a12',
      color: '#00ffff',
      confirmButtonColor: '#ff00ff'
    });
  }

  return (
    <section id="contact" className="cp-contact-section">
      <div className="cp-contact-grid-overlay"></div>
      <div className="cp-contact-scanline"></div>
      
      <h2 className="cp-contact-title cp-contact-glitch" data-text="CONTACT TERMINAL">
        <span className="cp-contact-glitch-text">CONTACT TERMINAL</span>
      </h2>
      
      <div className="cp-contact-container">
        <form onSubmit={handleSubmit} className="cp-contact-form">
          <div className="cp-input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="IDENTITY INPUT (NAME)" 
              required 
              className="cp-contact-input"
            />
            <span className="cp-input-highlight"></span>
          </div>
          
          <div className="cp-input-group">
            <input 
              type="email" 
              name="email" 
              placeholder="DATA TRANSMISSION NODE (E-MAIL)" 
              required 
              className="cp-contact-input"
            />
            <span className="cp-input-highlight"></span>
          </div>
          
          <div className="cp-input-group">
            <textarea 
              name="message" 
              placeholder="MESSAGE PAYLOAD (MESSAGE)" 
              required
              className="cp-contact-textarea"
            ></textarea>
            <span className="cp-input-highlight"></span>
          </div>
          
          <button 
            type="submit" 
            disabled={state.submitting}
            className="cp-contact-submit"
          >
            {state.submitting ? (
              <span>INITIATING TRANSMISSION...</span>
            ) : (
              <span>EXECUTE TRANSMISSION</span>
            )}
            <span className="cp-button-glow"></span>
            <span className="cp-button-border"></span>
          </button>
        </form>
        
        <div className="cp-contact-info">
          <h3 className="cp-comms-title">DIRECT COMMS CHANNELS</h3>
          <div className="cp-social-grid">
            <a 
              href="https://www.linkedin.com/in/anandhraj47" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cp-social-link cp-social-linkedin"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
              <span>LINKEDIN NODE</span>
              <div className="cp-social-glow"></div>
            </a>
            
            <a 
              href="https://github.com/Anand0047" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cp-social-link cp-social-github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
              <span>GITHUB REPOSITORY</span>
              <div className="cp-social-glow"></div>
            </a>
            
            <a 
              href="https://www.instagram.com/_anand47_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cp-social-link cp-social-instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span>INSTAGRAM FEED</span>
              <div className="cp-social-glow"></div>
            </a>
            
            {/* <a 
              href="mailto:anandram221003@gmail.com" 
              className="cp-social-link cp-social-email"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
              <span>DIRECT MESSAGE</span>
              <div className="cp-social-glow"></div>
            </a> */}
          </div>
        </div>
      </div>
      <style>
{`
  /* Prevents horizontal scroll on small screens */
  .cp-contact-section {
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }

  .cp-contact-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;
  }

  .cp-contact-form {
    width: 100%;
    max-width: 650px; /* KEEPING your original size */
    box-sizing: border-box;
  }

  .cp-contact-info {
    width: 100%;
    max-width: 650px;
    box-sizing: border-box;
  }

  /* Responsive layout: stack on smaller screens */
  @media (min-width: 992px) {
    .cp-contact-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .cp-contact-form,
    .cp-contact-info {
      width: 48%;
    }
  }

  /* Ensure inputs scale and wrap inside their container */
  .cp-contact-input,
  .cp-contact-textarea {
    width: 100%;
    box-sizing: border-box;
  }

  .cp-contact-submit {
    width: 100%;
    box-sizing: border-box;
  }
`}
</style>

    </section>
  );
};

export default Contact;