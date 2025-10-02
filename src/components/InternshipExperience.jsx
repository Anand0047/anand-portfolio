import React from 'react';
import '../styles/cyberpunk-internship.css'; // Separate stylesheet

const InternshipExperience = () => {
  const experiences = [
    {
      company: " Directorate of Research, SRM University",
      role: "Software Engineer Intern",
      duration: " july 2025 – Present",
      description: "Developed a secure, scalable full-stack MERN application for SRM University, digitizing and managing 5000+ research publication records across 4 colleges for real-time use. Implemented core features including role-based authentication, file uploads, and advanced search to improve accessibility and usability. Built and optimized backend components using , ensuring scalability, modular architecture, and high system reliability. Collaborated with teammates through code reviews and pull requests, ensuring high-quality, maintainable, and clean code delivery.",
      tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS", "GITHUB", "TAILWIND CSS"],
      neonClass: "cp-intern-neon-green"
    }
    ,
    {
      company: "Social Outsights",
      role: "Web Developer Intern",
      duration: " May 2025– June 2025",
      description: "Completed a one-month internship at a digital marketing company, working on website projects for small businesses.Developed and customized responsive React.js UI components for client websites.Contributed to multiple projects by implementing reusable frontend components and improving overall user experience.",
      tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      neonClass: "cp-intern-neon-pink"
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