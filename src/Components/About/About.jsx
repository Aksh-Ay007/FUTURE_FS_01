import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_placeholder2.jpeg";

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
              <p className="profile-subtitle">Node.js | React | AWS | Microservices</p>
            </div>

            <div className="profile-description">
              <p>
                Results-driven Full-Stack Software Engineer (MERN / Node.js / Next.js) with 2+ years of experience
                designing and deploying SaaS, automation, and data-driven platforms. Proven success in delivering
                end-to-end MVPs, integrating REST APIs, and deploying cloud-native systems on AWS.
              </p>
              <p>
                Skilled in Node.js, React, PostgreSQL, MongoDB, and Docker, with a strong grasp of system architecture,
                Continuous Integration/Continuous Deployment (CI/CD) Pipeline, and microservices. Passionate about
                building internal tools and scalable business platforms that streamline operations and improve efficiency.
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
                <h4>Freelance Full-Stack Developer</h4>
                <span className="company">Remote</span>
                <span className="duration">Mar 2024 - Present</span>
              </div>
              <div className="timeline-description">
                <p>Delivering custom web solutions for small businesses and startups</p>
                <ul>
                  <li>🔹 <strong>Dental Clinic Management System:</strong> Developed appointment booking, patient tracking, and billing modules with role-based access control and automated notifications</li>
                  <li>🔹 <strong>E-Commerce Prototypes:</strong> Built responsive online stores with payment gateway integration (Stripe/Razorpay) and inventory management features</li>
                  <li>🔹 <strong>Portfolio Websites:</strong> Deployed multiple client sites using Next.js, Tailwind CSS, and AWS EC2 with optimized performance and SEO</li>
                  <li>🔹 <strong>Payment Integration:</strong> Implemented secure checkout flows with Stripe and Razorpay APIs, handling transaction processing and error handling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Full-Stack Development Program</h4>
                <span className="company">Brototype, Thiruvananthapuram, India</span>
                <span className="duration">Dec 2023 - Mar 2025</span>
              </div>
              <div className="timeline-description">
                <p>Intensive project-based training with production-grade deliverables and industry mentorship</p>
                <ul>
                  <li>💻 Built and deployed three production-grade platforms (SaaS, real-time social, e-commerce) using Node.js, React, Next.js, and AWS</li>
                  <li>🏗️ Designed scalable architectures with microservices, Docker, and Kafka; automated CI/CD with GitHub Actions, cutting deployment time by 83%</li>
                  <li>🔐 Integrated Stripe, Razorpay, and OAuth authentication, improving platform security and automation</li>
                  <li>☁️ Gained hands-on experience in cloud deployment, database optimization, and real-time communication using Socket.io</li>
                  <li>📚 Strengthened core programming through data structures & algorithms, daily LeetCode practice, and peer code reviews focused on scalable design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Project Expeditor</h4>
                <span className="company">AUM International FZE, Sharjah, UAE</span>
                <span className="duration">Jan 2022 - Nov 2023</span>
              </div>
              <div className="timeline-description">
                <ul>
                  <li>🌍 Coordinated global suppliers (Germany, UK, China, UAE), reducing project timelines by 30% and costs by 20%</li>
                  <li>📊 Presented projects to a major UAE oil & gas firm alongside the company Director</li>
                  <li>👥 Mentored a junior team member, improving handovers and team productivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="achievement-item">
          <h2>2+</h2>
          <p>Years Experience</p>
        </div>
        <div className="achievement-item">
          <h2>8+</h2>
          <p>Microservices Built</p>
        </div>
        <div className="achievement-item">
          <h2>83%</h2>
          <p>Deployment Time Reduced</p>
        </div>
        <div className="achievement-item">
          <h2>99.9%</h2>
          <p>System Uptime</p>
        </div>
      </div>
    </div>
  );
};

export default About;
