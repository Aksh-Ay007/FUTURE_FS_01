import React from "react";
import "./About.css";
import profile_img from "../../assets/about_profile1.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        <div className="theme-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Profile Section */}
        <div className="about-profile">
          <div className="profile-image">
            <img src={profile_img} alt="Profile" />
          </div>
          
          <div className="profile-info">
            <div className="profile-header">
              <h2>Full Stack Developer</h2>
              <p className="profile-subtitle">MERN Stack Specialist | Self-Taught Developer</p>
            </div>
            
            <div className="profile-description">
              <p>
                Passionate Full Stack Developer with expertise in the MERN stack, successfully transitioned from mechanical engineering to create impactful digital solutions. My journey began with self-taught programming, evolving into professional development through intensive training at Brototype.
              </p>
              <p>
                I specialize in building scalable web applications, real-time platforms, and e-commerce solutions. My engineering background provides a unique analytical approach to problem-solving, ensuring robust and efficient code architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          <h3>Professional Journey</h3>
          
          <div className="timeline-item current">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Full Stack Web Development Intern</h4>
                <span className="company">Future Interns</span>
                <span className="duration">May 2025 - June 2025 · 1 month</span>
              </div>
              <div className="timeline-description">
                <p>Selected for intensive Full Stack Web Development Internship Program, focusing on modern web technologies and real-world project development.</p>
                <ul>
                  <li>🔹 <strong>Portfolio Website:</strong> Created personal portfolio showcasing skills and projects using React.js, Node.js, and MongoDB with interactive resume section and SEO optimization</li>
                  <li>🔹 <strong>Weather Dashboard:</strong> Built dynamic weather application with React.js and Node.js, integrated OpenWeather API for real-time data and favorite cities feature</li>
                  <li>🔹 <strong>Brand Redesign Project:</strong> Redesigned famous brand website using Next.js, Tailwind CSS, AI-powered design tools including Adobe Firefly for modern UI/UX</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Software Engineer</h4>
                <span className="company">Brototype · Internship</span>
                <span className="duration">Dec 2023 - Mar 2025 · 1 yr 4 mos</span>
              </div>
              <div className="timeline-description">
                <ul>
                  <li>💻 Designed & built "Connectia" – a real-time platform using React, Node.js, Socket.io, Redux, and Tailwind CSS</li>
                  <li>🛒 Developed complete eCommerce application with authentication, payment integration, and admin dashboards</li>
                  <li>🎬 Created Netflix and OLX platform clones to master frontend and backend integration</li>
                  <li>🔐 Built comprehensive MERN authentication system with JWT-based security</li>
                  <li>🚀 Deployed applications using AWS EC2, NGINX, Netlify, Vercel, and Render</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Project Expeditor</h4>
                <span className="company">AUM International FZE</span>
                <span className="duration">Jan 2022 - Oct 2023 · 1 yr 10 mos</span>
              </div>
              <div className="timeline-description">
                <p>Managed strategic oil field supply projects, developing strong project management and analytical skills that now enhance my software development approach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="achievement-item">
          <h2>15+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="achievement-item">
          <h2>1+ Year</h2>
          <p>Full Stack Development</p>
        </div>
        <div className="achievement-item">
          <h2>5+</h2>
          <p>Major Applications Built</p>
        </div>
        <div className="achievement-item">
          <h2>100%</h2>
          <p>Self-Taught Journey</p>
        </div>
      </div>
    </div>
  );
};

export default About;