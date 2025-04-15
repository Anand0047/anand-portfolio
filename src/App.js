import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorten the loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 3000ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <HomeSection />
            <About />
            <Skills />
            <Certifications />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

function HomeSection() {
  const handleDownload = (e) => {
    e.preventDefault();
    
    // Correct path - file should be in public folder
    const resumeUrl = process.env.PUBLIC_URL + '/Anandhraj_resume.pdf';
    
    // Alternative if the above doesn't work:
    // const resumeUrl = '/Anandhraj_resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AnandhRaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Initialize particles.js with reduced settings for smoother performance
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } }, // Reduced particle count
          color: { value: "#00fffc" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 5, random: true }, // Smaller particles
          line_linked: {
            enable: true,
            distance: 100, // Reduced link distance for smoother movement
            color: "#00fffc",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1, // Slower speed for less intensive animation
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }

    // Initialize Typed.js with just "Software Developer"
    if (window.Typed) {
      new window.Typed('#typed', {
        strings: ["ㅤSoftware Developerㅤ", "ㅤJava Developerㅤ", "ㅤWeb Developerㅤ"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }, []);

  return (
    <section id="home">
      <div className="cyber-grid">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`grid-line ${i < 3 ? 'horizontal' : 'vertical'}`}
          />
        ))}
      </div>
      <div id="particles-js"></div>
      <div className="content-wrapper">
        <div className="glitch-container">
          <h1 className="glitch" data-text="Anandh Raj">Anandh Raj</h1>
        </div>
        <div className="cyber-subtitle">
          <span className="bracket">[</span>
          <span id="typed"></span> {/* This will now only show "Software Developer" */}
          <span className="bracket">]</span>
        </div>
        <div className="button-group">
          <a href="#work" className="cyber-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            View My Work
          </a>
          <a 
            href="/AnandhRaj_Resume.pdf" 
            className="cyber-button"
            onClick={handleDownload}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download Resume
          </a>
        </div>
      </div>
      <div className="cyber-circuits">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
        </svg>
      </div>
      <div className="floating-icons">
        <i className="icon icon-code"></i>
        <i className="icon icon-database"></i>
        <i className="icon icon-cloud"></i>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/anandhraj47" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Anand0047" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.hackerrank.com/profile/anandram221003" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Hackerrank">
          <i className="fa-brands fa-hackerrank"></i>
        </a>
        <a href="mailto:anandram221003@gmail.com" className="social-icon" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default App;
