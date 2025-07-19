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
          Hi! I'm <span className="neon-pink">Anandh Raj R.</span>, a passionate and aspiring software developer currently pursuing my Master of Computer Applications (MCA). With a strong foundation in Full Stack Java, React.js, and Spring Boot, I'm always eager to apply my knowledge to real-world projects and solve meaningful problems.
        </p>
        
        <p className="cyberpunk-text">
          My areas of expertise include <span className="neon-pink">Java, Spring Boot, React.js, JavaScript, HTML5, CSS, and MySQL.</span>
        </p>
        
        <p className="cyberpunk-text">
          I have a growing interest in system design and backend development, and I'm currently working on <span className="neon-pink highlight">BringMyCart</span>, a shopping assistant that integrates browser extension technology with a responsive web platform.
        </p>
        
        <p className="cyberpunk-text">
          I thrive in challenging environments and am always eager to learn, adapt, and push the boundaries of what's possible in software development. I'm actively sharpening my problem-solving skills through platforms like HackerRank, where I regularly take on coding challenges to stay sharp and competitive. Currently, I'm seeking a Software Engineering internship where I can contribute, grow, and gain hands-on experience in a dynamic team setting.
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