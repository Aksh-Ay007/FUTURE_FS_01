import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section visibility for active states
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <p onClick={() => scrollToSection('home')}>Home</p>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <p onClick={() => scrollToSection('about')}>About Me</p>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <p onClick={() => scrollToSection('skills')}>Skills</p>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <p onClick={() => scrollToSection('projects')}>Projects</p>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <p onClick={() => scrollToSection('contact')}>Contact</p>
          </li>
        </ul>

        {/* Connect Button */}
        <div className="nav-connect" onClick={() => scrollToSection('contact')}>
          <p>Connect With Me</p>
        </div>

        {/* Mobile Toggle */}
        <div className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`nav-menu mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <p onClick={() => scrollToSection('home')}>Home</p>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <p onClick={() => scrollToSection('about')}>About Me</p>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <p onClick={() => scrollToSection('skills')}>Skills</p>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <p onClick={() => scrollToSection('projects')}>Projects</p>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <p onClick={() => scrollToSection('contact')}>Contact</p>
        </li>
        <div className="nav-connect mobile" onClick={() => scrollToSection('contact')}>
          <p>Connect With Me</p>
        </div>
      </ul>
    </>
  );
};

export default Navbar;