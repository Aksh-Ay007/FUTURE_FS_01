import React from "react";
import "./TechnicalExpertise.css";

const TechIcon = ({ name, size = 24 }) => {
  const iconMap = {
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "HTML": "html5",
    "CSS": "css3",
    "React": "react",
    "Tailwind CSS": "tailwindcss",
    "Bootstrap": "bootstrap",
    "Node.js": "nodejs",
    "Express.js": "express",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "Socket.io": "socketio",
    "Git": "git",
    "GitHub": "github",
    "S3 Bucket": "amazonwebservices",
    "Cloudinary": "cloudinary",
    "JWT": "jsonwebtokens",
    "Nodemailer": "nodemailer",
    "Redux": "redux",
    "Firebase": "firebase",
    "AWS": "amazonwebservices",
    "Google Cloud": "googlecloud",
    "Vercel": "vercel",
    "Render": "render",
    "Netlify": "netlify",
    "Stripe": "stripe",
    "Razorpay": "razorpay",
  };

  const iconName = iconMap[name] || "code";

  return (
    <div className="skill-item">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`}
        alt={name}
        width={size}
        height={size}
        onError={(e) => {
          e.target.src = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`;
        }}
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          transition: "transform 0.2s ease",
        }}
      />
      <span className="label">{name}</span>
    </div>
  );
};

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Socket.io" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "JWT" },
      { name: "Redux" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Netlify" },
      { name: "Cloudinary" },
    ],
  },
  {
    title: "Payment Integration",
    skills: [
      { name: "Stripe" },
      { name: "Razorpay" },
    ],
  },
];

const TechnicalExpertise = () => {
  return (
    <div id="skills" className="technical-expertise">
      <h2>Skills</h2>
      <div className="skill-categories-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => (
                <TechIcon key={skillIndex} name={skill.name} size={24} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalExpertise;