import React from 'react';
import Swal from 'sweetalert2'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2ebf467a-9154-44ae-8383-a1f831a506ea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
  title: "Message Received!",
  text: "Thanks for reaching out. I'll respond shortly!",
  icon: "success"
});

    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
      <form 
  onSubmit={onSubmit}
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
                    <a href="https://www.instagram.com/_anand47_/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Hackerrank">
          <i className="fa-brands fa-instagram"></i>
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