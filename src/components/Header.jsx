import React, { useState, useEffect } from 'react';
import '../styles/style.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
        <header>
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="cyberpunk-logo" data-text="ANANDH RAJ">
      <span className="cyberpunk-logo-text">ANANDH RAJ</span>
      <span className="cyberpunk-logo-glitch"></span>
      <span className="cyberpunk-logo-scanline"></span>
    </div>

    <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
      <li><a href="#home" className="nav-link" onClick={closeMenu}>
        <span className="link-text">HOME</span>
        <span className="link-hover"></span>
      </a></li>
      <li><a href="#skills" className="nav-link" onClick={closeMenu}>
        <span className="link-text">SKILLS</span>
        <span className="link-hover"></span>
      </a></li>
      <li><a href="#certifications" className="nav-link" onClick={closeMenu}>
        <span className="link-text">CERTIFICATIONS</span>
        <span className="link-hover"></span>
      </a></li>
      <li><a href="#experience" className="nav-link" onClick={closeMenu}>
        <span className="link-text">TIMELINE</span>
        <span className="link-hover"></span>
      </a></li>
      <li><a href="#work" className="nav-link" onClick={closeMenu}>
        <span className="link-text">PROJECTS</span>
        <span className="link-hover"></span>
      </a></li>
      <li><a href="#contact" className="nav-link" onClick={closeMenu}>
        <span className="link-text">CONTACT</span>
        <span className="link-hover"></span>
      </a></li>
    </ul>

    {/* ✅ Fixed: 4 bars + pulse effect for animation */}
    <div className={`cyberpunk-hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      <span className="cyberpunk-bar"></span>
      <span className="cyberpunk-bar"></span>
      <span className="cyberpunk-bar"></span>
      <span className="cyberpunk-bar"></span>
      <div className="cyberpunk-pulse"></div>
    </div>
  </nav>
</header>

  );
};

export default Header;