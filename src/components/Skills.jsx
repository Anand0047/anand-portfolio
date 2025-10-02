import React from 'react';

const Skills = () => {
const skillCategories = [
  {
    name: 'Languages & Web',
    items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS']
  },
  {
    name: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring Security', 'Spring JPA', 'JDBC', 'React.js']
  },
  {
    name: 'Developer Tools',
    items: ['Git', 'GitHub', 'Postman', 'Maven', 'Docker']
  },
  {
    name: 'Practices',
    items: ['RESTful API Design', 'JWT Authentication', 'OAuth 2.0']
  },
  {
    name: 'Software Engineering',
    items: ['SOLID Principles', 'Design Patterns', 'DSA', 'OOP', 'System Design', 'Problem Solving']
  },
  {
    name: 'CS Fundamentals',
    items: ['DBMS', 'Operating Systems']
  }
];


  return (
    <section id="skills" className="cyberpunk-skills-section">
      <style>
{`
  .cyberpunk-skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 600px) {
    .cyberpunk-skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .cyberpunk-skills-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .cyberpunk-skill-category {
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
  }

  .cyberpunk-skill-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
  }
`}
</style>

      <div className="cyberpunk-grid-overlay"></div>
      <div className="circuit-overlay"></div>
      
      <h2 className="cyberpunk-section-title glitch" data-text="SKILLS">
        <span className="glitch-text">SKILLS</span>
      </h2>
      
      <div className="cyberpunk-skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="cyberpunk-skill-category">
            <div className="cyberpunk-category-glow"></div>
            <h3 className="cyberpunk-category-title">{category.name}</h3>
            <ul className="cyberpunk-skill-list">
              {category.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="cyberpunk-skill-item">
                  <span className="cyberpunk-skill-bullet">▹</span>
                  <span className="cyberpunk-skill-text">{skill}</span>
                  <span className="cyberpunk-skill-glow"></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;