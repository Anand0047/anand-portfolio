import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: " Java Full Stack Development  ",
      issuer: "Besant Technologies, Chennai",
      date: "July 2023– April 2024",
      skills: ["Java", "MySQL", "React.js",'JavaScript'],
      link: "https://www.hackerrank.com/certificates/example123"
    },
    {
      title: "Algorithms, Part I",
      issuer: "Coursera",
      date: "Ongoing",
      skills: [ "Java", "Algorithms" ,"Data Structures"],
      link: "https://www.coursera.org/verify/example012"
    }
  ];

  return (
    <section id="certifications" className="cyberpunk-certifications-section">
      {/* Cyberpunk background elements */}
      <div className="cyberpunk-grid-overlay"></div>
      <div className="circuit-overlay"></div>
      
      <h2 className="cyberpunk-section-title glitch" data-text="CERTIFICATIONS">
        <span className="glitch-text">CERTIFICATIONS</span>
      </h2>
      
      <div className="cyberpunk-certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cyberpunk-certification-card">
            <div className="cyberpunk-certification-glow"></div>
            <div className="cyberpunk-certification-header">
              <h3 className="cyberpunk-certification-title">{cert.title}</h3>
              <span className="cyberpunk-certification-date">{cert.date}</span>
            </div>
            <div className="cyberpunk-certification-issuer">{cert.issuer}</div>
            
            <div className="cyberpunk-certification-skills">
              {cert.skills.map((skill, i) => (
                <span key={i} className="cyberpunk-skill-tag">
                  <span className="cyberpunk-skill-tag-text">{skill}</span>
                  <span className="cyberpunk-skill-tag-glow"></span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;