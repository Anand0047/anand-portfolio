import React, { useState } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const [activeHover, setActiveHover] = useState(null);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const projects = [
    {
      title: 'BringMyCart',
      description: 'Currently building a smart shopping assistant that integrates a browser extension and web application to help users track and manage products from Amazon in one place.',
      tech: ['JAVA', 'SPRING BOOT', 'REACT.JS', 'MYSQL'],
      pulse: true
    },
    {
      title: 'MediSense AI',
      subtitle: 'Symptom to Action',
      description: 'AI-powered health assistant that interprets user symptoms and provides possible causes, severity levels, and direct medicine or doctor suggestions, with ePharmacy integration.',
      tech: ['REACT', 'NODE.JS', 'OPENAI API', 'TESSERACT.JS'],
      link: 'https://github.com/anand0047/medisense-ai',
      neon: 'pink'
    },
    {
      title: 'E-Commerce Portal',
      subtitle: 'Gaming Accessories',
      description: 'Full-featured online store specializing in high-performance gaming gear and peripherals.',
      tech: ['HTML5', 'CSS3', 'JAVASCRIPT'],
      link: 'https://anand-dev-strix-project.netlify.app/',
      neon: 'blue'
    },
    {
      title: 'Portfolio',
      description: 'Advanced personal portfolio website with interactive 3D elements',
      tech: ['REACT'],
      neon: 'purple'
    },
    {
      title: 'Movieland',
      subtitle: 'Cinematic Universe',
      description: 'Next-gen movie discovery platform with AI recommendations and social features.',
      tech: ['REACT', 'IMDB API'],
      neon: 'orange'
    },
    {
      title: 'TransitLink',
      subtitle: 'Bus Booking System',
      description: 'Enterprise-grade transportation management system with real-time tracking.',
      tech: ['JAVA'],
      neon: 'green'
    }
  ];

  const testimonials = [
    {
      platform: 'HACKERRANK',
      achievement: 'ELITE STATUS - JAVA',
      details: '5★ Gold Badge | Algorithm Expert',
      icon: 'fa-hackerrank',
      link: 'https://www.hackerrank.com/profile/anandram221003',
      glow: 'cyan'
    },
    {
      platform: 'LEETCODE',
      achievement: 'CODING GLADIATOR',
      details: '150+ Algorithms Solved | Daily Streak',
      icon: 'fa-code',
      link: 'https://leetcode.com/u/_anand47_/',
      glow: 'yellow'
    }
  ];

  const triggerGlitch = () => {
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 500);
  };

  return (
    <div className="cyberpunk-container">
      {/* Floating UI elements */}
      <div className="floating-orbs">
        <div className="orb pink"></div>
        <div className="orb blue"></div>
        <div className="orb green"></div>
      </div>
      
      {/* Main content with glass effect */}
      <div className="cyberpunk-glass">
        <section id="work" className={`projects-section ${glitchEffect ? 'glitch' : ''}`}>
          <div className="cyberpunk-header" onClick={triggerGlitch}>
            <h2 className="section-title">
              <span className="title-text">PROJECT</span>
              <span className="title-shadow">PROJECT</span>
              <span className="title-accent">//</span>
            </h2>
            <div className="scanline"></div>
          </div>
          
          <div className="cyberpunk-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`cyber-card neon-${project.neon || 'purple'} ${activeHover === index ? 'active' : ''} ${project.pulse ? 'pulse' : ''}`}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <div className="card-header">
                  <h3 className="card-title">
                    {project.title.split('').map((letter, i) => (
                      <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>{letter}</span>
                    ))}
                  </h3>
                  {project.subtitle && (
                    <h4 className="card-subtitle">{project.subtitle}</h4>
                  )}
                  {project.status && (
                    <div className="status-badge">{project.status}</div>
                  )}
                </div>
                
                <div className="card-body">
                  <p className="card-description">{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="simple-cyber-button"
                    >
                      ACCESS_PROJECT
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

       <section id="testimonials" className="coding-profiles-section">
        <div className="cyberpunk-header">
          <h2 className="section-title">
            <span className="title-text">CODING PROFILE</span>
            <span className="title-shadow">CODING PROFILE</span>
            <span className="title-accent">//</span>
          </h2>
          <div className="scanline"></div>
        </div>
        
        <div className="profile-cards-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`profile-card glow-${testimonial.glow}`}
              onMouseEnter={() => setActiveHover(index + 100)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className="card-corner top-left"></div>
              <div className="card-corner top-right"></div>
              <div className="card-corner bottom-left"></div>
              <div className="card-corner bottom-right"></div>
              
              <div className="profile-content">
                <div className="profile-header">
                  <h3 className="platform">{testimonial.platform}</h3>
                  <a 
                    href={testimonial.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-icon"
                  >
                    <i className={`fa ${testimonial.icon}`}></i>
                  </a>
                </div>
                
                <h4 className="achievement">{testimonial.achievement}</h4>
                <p className="details">{testimonial.details}</p>
                
                <div className="progress-bars">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '100%' }}></div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Added Link Button */}
                <div className="profile-link-container">
                  <a 
                    href={testimonial.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-link-button"
                  >
                    VISIT PROFILE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>
{`
  /* Grid for Projects Section */
  .cyberpunk-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 600px) {
    .cyberpunk-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .cyberpunk-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .cyber-card {
    background: rgba(0, 0, 0, 0.7);
    padding: 1.2rem;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    word-wrap: break-word;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }

  .tech-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.75rem;
    color: #fff;
  }

  .simple-cyber-button {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border: 1px solid cyan;
    color: cyan;
    border-radius: 6px;
    text-decoration: none;
  }

  /* Coding Profiles Section */
  .profile-cards-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .profile-cards-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .profile-card {
    background: rgba(0, 0, 0, 0.7);
    padding: 1.5rem;
    border-radius: 12px;
    position: relative;
    text-align: center;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile-icon i {
    font-size: 1.4rem;
    color: cyan;
  }

  .achievement {
    margin-top: 0.75rem;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .details {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .progress-bars {
    margin-top: 1rem;
  }

  .progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
    margin: 0.5rem 0;
  }

  .progress-fill {
    height: 100%;
    background: cyan;
    border-radius: 4px;
  }

  .profile-link-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid cyan;
    color: cyan;
    font-size: 0.85rem;
    border-radius: 6px;
    text-decoration: none;
  }

  /* Prevent overflow on mobile */
  .cyberpunk-container {
    max-width: 100%;
    overflow-x: hidden;
  }
`}
</style>

      </section>
    </div>
        </div>

  );
};

export default Projects;