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
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <ul className="skill-list">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;