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
    // {
    //   title: "Problem Solving (Intermediate)",
    //   issuer: "HackerRank",
    //   date: "2023",
    //   skills: ["Algorithms", "Data Structures", "Problem Solving"],
    //   link: "https://www.hackerrank.com/certificates/example456"
    // },
    // {
    //   title: "React Fundamentals",
    //   issuer: "Udemy",
    //   date: "2023",
    //   skills: ["React", "JavaScript", "Frontend Development"],
    //   link: "https://www.udemy.com/certificate/example789"
    // },
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
      <h2 className="section-title">Certifications</h2>
      
      <div className="certifications-grid">
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
            
            {/* <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-link"
            >
              View Certificate
              <i className="fas fa-external-link-alt link-icon"></i>
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;