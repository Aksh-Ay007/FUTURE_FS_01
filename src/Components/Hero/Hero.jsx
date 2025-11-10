import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_placeholder1.jpeg'

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
    link.href = "/Akshay-Jyothi-Full-Stack-Developer.pdf"; // File should be in public folder
    link.download = "Akshay-Jyothi-Full-Stack-Developer.pdf";
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
    <div id="home" className="hero">
      <div className="hero-availability-badge">
        <span className="availability-dot"></span>
        <span>Available for Opportunities in UAE</span>
      </div>
      <img src={profile_img} alt="Akshay Jyothi P" />
      <h1>Hi, I'm <span>Akshay Jyothi P</span></h1>
      <p className="hero-location">📍 Based in Sharjah, UAE | Open to Remote & On-site Opportunities</p>
      <p>
        Results-driven Full-Stack Software Engineer (MERN / Node.js / Next.js) with 2+ years of experience
        designing and deploying SaaS, automation, and data-driven platforms. Proven success in delivering
        end-to-end MVPs, integrating REST APIs, and deploying cloud-native systems on AWS. Passionate about
        building scalable business platforms that streamline operations and improve efficiency.
      </p>
      <div className="hero-action">
        <button
          className="hero-connect"
          onClick={handleConnectClick}
        >
          Let's Work Together
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
