import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      items: ['Java ', 'JavaScript',' SQL', 'Python' ,'HTML','CSS']
    },
    {
      name: 'Web Frameworks',
      items: ['Spring boot', 'React.js', 'Bootstrap']
    },
    {
      name: 'Developer Tools',
      items: ['GitHub', 'MySQl', 'VS Code']
    },
    {
      name: 'Operating Systems:',
      items: ['Windows', 'linux']
    }
  ];

  return (
    <section id="skills" className="cyberpunk-skills-section">
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