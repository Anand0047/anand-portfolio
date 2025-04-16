import React from 'react';

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
  ]
  ;

  return (
    <section id="experience">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <i className={item.icon}></i>
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p className="timeline-date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;