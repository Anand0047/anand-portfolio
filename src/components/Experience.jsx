import React from 'react';
import '../styles/style.css';

const Experience = () => {
  const timelineItems = [
    {
      "icon": "fas fa-graduation-cap",
      "title": "Master of Computer Applications",
      "subtitle": "SRM University, Chennai",
      "date": "2024 - Present",
      "description": "8/10 CGPA"
    },
    {
      "icon": "fas fa-graduation-cap",
      "title": "B.Sc in Computer Science",
      "subtitle": "Vels University, Chennai",
      "date": "2021 - 2024",
      "description": "7.2/10 CGPA"
    },
    {
      "icon": "fas fa-school",
      "title": "XII Standard State Board",
      "subtitle": "Assisi Matric Hr. School, Chennai",
      "date": "2020 - 2021",
      "description": "8.2/10 CGPA"
    },
    {
      "icon": "fas fa-school",
      "title": "X Standard State Board",
      "subtitle": "Rajalakshmi Vidyasharam Matric Hr. School, Chennai",
      "date": "2018 - 2019",
      "description": "7.6/10 CGPA"
    }
  ];

  return (
    <section id="experience" className="cyberpunk-timeline-section">
      <div className="cyberpunk-grid-overlay"></div>
      <div className="circuit-overlay"></div>
      
      <h2 className="cyberpunk-section-title glitch" data-text="TIMELINE">
        <span className="glitch-text">TIMELINE</span>
      </h2>
      
      <div className="cyberpunk-timeline">
        {timelineItems.map((item, index) => (
          <div key={index} className={`cyberpunk-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="cyberpunk-timeline-icon">
              <i className={`${item.icon} cyberpunk-icon`}></i>
              <div className="cyberpunk-icon-glow"></div>
            </div>
            <div className="cyberpunk-timeline-content" data-text={item.title}>
              <h3 className="cyberpunk-timeline-title">{item.title}</h3>
              <h4 className="cyberpunk-timeline-subtitle">{item.subtitle}</h4>
              <p className="cyberpunk-timeline-date">{item.date}</p>
              <p className="cyberpunk-timeline-description">{item.description}</p>
              <div className="cyberpunk-timeline-glow"></div>
            </div>
          </div>
        ))}
        <div className="cyberpunk-timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;