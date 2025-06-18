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
    <section id="certifications" className="certifications-section">
      {/* Cyberpunk background elements */}
      <div className="cyber-grid-cert">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`grid-line-cert ${i < 6 ? 'horizontal-cert' : 'vertical-cert'}`} />
        ))}
      </div>
      
      <div className="cert-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="skills-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <h3 className="certification-title">{cert.title}</h3>
                <span className="certification-date">{cert.date}</span>
              </div>
              <div className="certification-issuer">{cert.issuer}</div>
              
              <div className="certification-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;