import React from "react";
import "./TechnicalExpertise.css";

const TechIcon = ({ name, size = 24 }) => {
  const iconMap = {
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "HTML": "html5",
    "CSS": "css3",
    "React": "react",
    "Next.js": "nextjs",
    "Tailwind CSS": "tailwindcss",
    "Bootstrap": "bootstrap",
    "Node.js": "nodejs",
    "Express.js": "express",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "Redis": "redis",
    "Prisma": "prisma",
    "Socket.io": "socketio",
    "Kafka": "apachekafka",
    "WebRTC": "webrtc",
    "Microservices": "docker",
    "API Gateway": "amazonwebservices",
    "Git": "git",
    "GitHub": "github",
    "JWT": "jsonwebtokens",
    "TensorFlow.js": "tensorflow",
    "Redux": "redux",
    "TanStack Query": "reactquery",
    "AWS": "amazonwebservices",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "NGINX": "nginx",
    "PM2": "nodejs",
    "Cloudflare": "cloudflare",
    "Firebase": "firebase",
    "CI/CD": "githubactions",
    "Stripe": "stripe",
    "Razorpay": "razorpay",
    "Cloudinary": "cloudinary",
    "Vercel": "vercel",
    "Render": "render",
    "Netlify": "netlify",
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
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "TanStack Query" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Prisma" },
    ],
  },
  {
    title: "Architecture & Communication",
    skills: [
      { name: "Socket.io" },
      { name: "Kafka" },
      { name: "WebRTC" },
      { name: "Microservices" },
      { name: "API Gateway" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "NGINX" },
      { name: "PM2" },
      { name: "Cloudflare" },
      { name: "Firebase" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "JWT" },
      { name: "TensorFlow.js" },
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