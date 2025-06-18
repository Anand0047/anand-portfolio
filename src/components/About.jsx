import React from 'react';

const About = () => {
  return (
    <section

      id="about"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '3rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px #00fffc, 0 0 40px #ff00fc',
        fontFamily: "'Orbitron', sans-serif",
        color: '#00fffc',
        maxWidth: '1100px',
        margin: '3rem auto',
        textAlign: 'center',
        letterSpacing: '1px',
        lineHeight: '1.3',
        position: 'relative',
        overflow: 'hidden',
        // Responsive width for mobile
        width: '90%',
        boxSizing: 'border-box',
      }}
    >
      {/* <br /> */}
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          textShadow: '0 0 15px #00fffc, 0 0 30px #ff00fc',
          animation: 'glitch 1.5s linear infinite alternate',
        }}
      >
        About Me
      </h2>
      <p style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>
        Hi! I'm{' '}
        <span style={{ color: '#ff00fc', fontWeight: 'bold' }}>
          Anandh Raj R.
        </span>
        , a passionate and aspiring software developer currently pursuing my
        Master of Computer Applications (MCA). With a strong foundation in Full
        Stack Java, React.js, and Spring Boot, I'm always eager to apply my
        knowledge to real-world projects and solve meaningful problems.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#00fffc' }}>
        My areas of expertise include{' '}
        <span style={{ color: '#ff00fc' }}>
          Java, Spring Boot, React.js, JavaScript, HTML5, CSS, and MySQL.
        </span>
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        I have a growing interest in system design and backend development, and
        I’m currently working on{' '}
        <span style={{ color: '#ff00fc', fontWeight: 'bold' }}>
          BringMyCart
        </span>
        , a shopping assistant that integrates browser extension technology with
        a responsive web platform.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        I thrive in challenging environments and am always eager to learn,
        adapt, and push the boundaries of what’s possible in software
        development. I'm actively sharpening my problem-solving skills through
        platforms like HackerRank, where I regularly take on coding challenges
        to stay sharp and competitive. Currently, I’m seeking a Software
        Engineering internship where I can contribute, grow, and gain hands-on
        experience in a dynamic team setting.
      </p>

      {/* Neon glitch animation keyframes */}
      <style>{`
        @keyframes glitch {
          0% {
            text-shadow: 2px 0 #ff00fc, -2px 0 #00fffc;
          }
          25% {
            text-shadow: -2px 0 #ff00fc, 2px 0 #00fffc;
          }
          50% {
            text-shadow: 2px 0 #00fffc, -2px 0 #ff00fc;
          }
          75% {
            text-shadow: -2px 0 #00fffc, 2px 0 #ff00fc;
          }
          100% {
            text-shadow: 2px 0 #ff00fc, -2px 0 #00fffc;
          }
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          #about {
            padding: 2rem 1rem !important;
            width: 95% !important;
          }
          #about h2 {
            font-size: 2.2rem !important;
            margin-bottom: 1.5rem !important;
          }
          #about p {
            font-size: 1rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.4 !important;
          }
        }

        @media (max-width: 480px) {
          #about {
            padding: 1.5rem 1rem !important;
            width: 98% !important;
          }
          #about h2 {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
          }
          #about p {
            font-size: 0.9rem !important;
            margin-bottom: 0.8rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
