import React from 'react';
import '../styles/style.css';

const About = () => {
  return (
    <section id="about" className="cyberpunk-about-section">
      <div className="cyberpunk-grid-overlay"></div>
      
      <h2 className="cyberpunk-title glitch" data-text="About Me">
        About Me
      </h2>
      
<div className="cyberpunk-content">
  <p className="cyberpunk-text">
    Hi! I'm <span className="neon-pink">Anandh Raj R.</span>, an aspiring software developer pursuing MCA with strong skills in <span class="neon-pink">Java, Spring Boot, React.js, and MySQL</span>.
  </p>
  
  <p className="cyberpunk-text">
    I enjoy building scalable applications, exploring system design , and working on  project  <span className="neon-pink highlight">BringMyCart</span>, a smart shopping assistant.
  </p>
  
  <p className="cyberpunk-text">
    Passionate about problem-solving, I actively practice coding challenges and aim to grow through impactful Software Engineering internships.
  </p>
</div>

      
      <div className="cyberpunk-corner cyberpunk-corner-tl"></div>
      <div className="cyberpunk-corner cyberpunk-corner-tr"></div>
      <div className="cyberpunk-corner cyberpunk-corner-bl"></div>
      <div className="cyberpunk-corner cyberpunk-corner-br"></div>
    </section>
  );
};

export default About;