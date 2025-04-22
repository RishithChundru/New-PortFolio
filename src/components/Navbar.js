import React, { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['about', 'education', 'skills', 'certificates', 'projects', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <img src="/assets/images/image.png" alt="Logo" style={{ height: "90px" }} />
        </a>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={toggleMenu} className={activeSection === '' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#education" onClick={toggleMenu} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#skills" onClick={toggleMenu} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#certificates" onClick={toggleMenu} className={activeSection === 'certificates' ? 'active' : ''}>Certificates</a></li>
          <li><a href="#projects" onClick={toggleMenu} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;