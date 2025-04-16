import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: 'BringMyCart ( Ongoing )',
      description: 'Currently building a smart shopping assistant that integrates a browser extension and web application to help users track and manage products from Amazon in one place.',
      tech: 'Technology: Java, Spring Boot, Angular, JavaScript, HTML, CSS, MySQL'
    },
    {
      title: 'E-Commerce Website',
      description: 'e-commerce for gaming accessories',
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
      author: '5 in Java, 4 in Problem Solving',
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
      text: 'Codechef',
      author: '',
      icon: (
        <a 
          href="https://www.hackerrank.com/profile/anandram221003" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon" 
          aria-label="Hackerrank"
        >
          <i class="fa-solid fa-hat-chef"></i>
        </a>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <section id="work">
        <h2 className="section-title">My Work</h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div key={index} className="work-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tech}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials">
        <h2 className="section-title">Coding profile</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-header">
                <p>{testimonial.text}</p>
                {testimonial.icon && testimonial.icon}
              </div>
              <h4>{testimonial.author}</h4>
            </div>
          ))}
          <div className="carousel-controls">
            <button className="prev" onClick={prevTestimonial}>&lt;</button>
            <button className="next" onClick={nextTestimonial}>&gt;</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;