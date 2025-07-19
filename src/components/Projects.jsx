import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'BringMyCart (Ongoing)',
      description: 'Currently building a smart shopping assistant that integrates a browser extension and web application to help users track and manage products from Amazon in one place.',
      tech: 'Technology: Java, Spring Boot, Angular, JavaScript, HTML, CSS, MySQL'
    },
    {
  title: 'MediSense AI - Symptom to Action',
  description: 'AI-powered health assistant that interprets user symptoms and provides possible causes, severity levels, and direct medicine or doctor suggestions, along with ePharmacy integration.',
  tech: 'Technology: React.js, SpringBoot, Node.js, Express.js, OpenAI API, Tesseract.js, Leaflet.js',
  link: 'https://github.com/anand0047/medisense-ai'
},
    {
      title: 'E-Commerce Website',
      description: 'E-Commerce for gaming accessories',
      tech: 'Technology: HTML , CSS , Javascript',
      link:'https://anand-dev-strix-project.netlify.app/'
    },
    
    {
      title: 'Portfolio Website',
      description: 'Created a personal portfolio website using React.js',
      tech: 'Technology: HTML , CSS , Javascript, React.js' 
    },
    {
      title: 'Movieland',
      description: 'Movie searching Platform',
      tech: 'Technology: React.js , API'
    },
    {
      title: 'Bus Booking system',
      description: 'Bus booking Platform',
      tech: 'Technology: Core Java'
    }
  ];

  const testimonials = [
    {
      text: 'HackerRank',
      author: '5 Star in Java, 2 Star in Problem Solving',
      icon: (
        <a 
          href="https://www.hackerrank.com/profile/anandram221003" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon" 
          aria-label="Hackerrank"
        >
          <i className="fa-brands fa-hackerrank"></i>
        </a>
      )
    },
    {
      text: 'Leetcode',
      author: '100+ Algorithms solved',
      icon: (
        <a 
          href="https://leetcode.com/u/_anand47_/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon" 
          aria-label="Hackerrank"
        >
          <i className="fa-solid fa-code"></i>
        </a>
      )
    }
  ];

  return (
    <>
      <section id="work" className="projects-section">
        {/* Cyberpunk background elements */}

        
        <div className="projects-container">
          <h2 className="section-title">My Work</h2>
          <div className="work-grid">
            {projects.map((project, index) => (
              <div key={index} className="work-item">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech">{project.tech}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="coding-profiles-section">
        <div className="profiles-container">
          <h2 className="section-title">Coding Profiles</h2>
          <div className="coding-profiles-responsive">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="coding-profile-card">
                <div className="profile-header">
                  <p>{testimonial.text}</p>
                  {testimonial.icon}
                </div>
                <h4>{testimonial.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;