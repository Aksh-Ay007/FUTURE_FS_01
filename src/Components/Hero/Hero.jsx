import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile1.jpg'

const Hero = () => {
  // Function to handle resume viewing
  const handleResumeView = () => {
    // Open resume in new tab for viewing
    window.open('/Akshay_Jyothi_Resume.pdf', '_blank');
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Create a link element for download
    const link = document.createElement('a');
    link.href = '/Akshay_Jyothi_Resume.pdf'; // File should be in public folder
    link.download = 'Akshay_Jyothi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to contact section
  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero">
      <img src={profile_img} alt="Akshay Jyothi" />
      <h1>Hai, I'm <span>Akshay Jyothi</span></h1>
      <p>
        Full-stack web developer specialized in JavaScript, TypeScript, Node.js, 
        MongoDB, React, and Next.js. I build modern, scalable web applications 
        with focus on clean code, optimal performance, and exceptional user experiences
      </p>
      <div className="hero-action">
        <button 
          className="hero-connect"
          onClick={handleConnectClick}
        >
          Connect With Me
        </button>
        <div className="resume-buttons">
          <button 
            className="hero-resume"
            onClick={handleResumeView}
          >
            View Resume
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="view-icon"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <button 
            className="hero-download"
            onClick={handleResumeDownload}
            title="Download Resume"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="download-icon"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero