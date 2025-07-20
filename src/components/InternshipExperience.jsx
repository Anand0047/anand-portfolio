import React from 'react';
import '../styles/cyberpunk-internship.css'; // Separate stylesheet

const InternshipExperience = () => {
  const experiences = [
    {
      company: "Social Outsights",
      role: "Web Developer Intern",
      duration: " May 2025– June 2025",
      description: " • Developed and maintained frontend components using React.js during a one-month web development internship.Collaborated with the team to build UI features while adhering to Agile practices and clean coding standards.Strengthened skills in responsive design, state management, and component-based architecture through hands-onprojects.",
      tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      neonClass: "cp-intern-neon-blue"
    }
  ];

  return (
    <section id="internship" className="cp-intern-section">
      <div className="cp-intern-grid-overlay"></div>
      
      <h2 className="cp-intern-section-title cp-intern-glitch" data-text="INTERNSHIP EXPERIENCE">
        <span className="cp-intern-glitch-text">INTERNSHIP EXPERIENCE</span>
      </h2>
      
      <div className="cp-intern-container">
        {experiences.map((exp, index) => (
          <div key={index} className={`cp-intern-card ${exp.neonClass}`}>
            <div className="cp-intern-header">
              <h3 className="cp-intern-company">{exp.company}</h3>
              <div className="cp-intern-role-badge">{exp.role}</div>
            </div>
            
            <div className="cp-intern-content">
              <p className="cp-intern-duration">{exp.duration}</p>
              <p className="cp-intern-description">{exp.description}</p>
              
              <div className="cp-intern-tech-tags">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="cp-intern-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="cp-intern-glow"></div>
            <div className="cp-intern-corner cp-intern-corner-tl"></div>
            <div className="cp-intern-corner cp-intern-corner-tr"></div>
            <div className="cp-intern-corner cp-intern-corner-bl"></div>
            <div className="cp-intern-corner cp-intern-corner-br"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipExperience;