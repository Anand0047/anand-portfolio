import React from 'react';
import '../styles/cyberpunk-timeline.css'; // Make sure this is a separate CSS file

const Experience = () => {
  const timelineItems = [
    {
      "icon": "fas fa-graduation-cap",
      "title": "Master of Computer Applications",
      "subtitle": "SRM University, Chennai",
      "date": "2024 - Present",
      "description": "8/10 CGPA",
      "neonColor": "cp-tl-neon-cyan"
    },
    {
      "icon": "fas fa-graduation-cap",
      "title": "B.Sc in Computer Science",
      "subtitle": "Vels University, Chennai",
      "date": "2021 - 2024",
      "description": "7.2/10 CGPA",
      "neonColor": "cp-tl-neon-pink"
    },
    {
      "icon": "fas fa-school",
      "title": "XII Standard State Board",
      "subtitle": "Assisi Matric Hr. School, Chennai",
      "date": "2020 - 2021",
      "description": "8.2/10 CGPA",
      "neonColor": "cp-tl-neon-purple"
    },
    {
      "icon": "fas fa-school",
      "title": "X Standard State Board",
      "subtitle": "Rajalakshmi Vidyasharam Matric Hr. School, Chennai",
      "date": "2018 - 2019",
      "description": "7.6/10 CGPA",
      "neonColor": "cp-tl-neon-orange"
    }
  ];

  return (
    <section id="experience" className="cp-tl-section-main">
      
      <div className="cp-tl-grid-overlay"></div>
      <div className="cp-tl-circuit-overlay"></div>
      
     <h2 className="cp-edu-section-title cp-edu-glitch-effect" data-text="EDUCATION HISTORY">
  <span className="cp-edu-glitch-text">EDUCATION HISTORY</span>
</h2>
      
      <div className="cp-tl-container">
        {timelineItems.map((item, index) => (
          <div key={index} className={`cp-tl-item ${index % 2 === 0 ? 'cp-tl-left' : 'cp-tl-right'} ${item.neonColor}`}>
            <div className="cp-tl-icon-container">
              <i className={`${item.icon} cp-tl-icon`}></i>
              <div className="cp-tl-icon-glow"></div>
            </div>
            <div className="cp-tl-content-box" data-text={item.title}>
              <h3 className="cp-tl-title">{item.title}</h3>
              <h4 className="cp-tl-subtitle">{item.subtitle}</h4>
              <p className="cp-tl-date">{item.date}</p>
              <p className="cp-tl-description">{item.description}</p>
              <div className="cp-tl-content-glow"></div>
            </div>
          </div>
        ))}
        <div className="cp-tl-center-line"></div>
      </div>
      
    </section>
  );
};

export default Experience;