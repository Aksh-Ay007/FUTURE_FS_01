// src/components/About/skillsData.js
import { 
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiBootstrap,
    SiNodeDotJs, SiExpress, SiMongodb, SiPostgresql, SiSocketDotIo, SiGit, SiGithub,
    SiAmazonaws, SiGooglecloud, SiVercel, SiRender, SiNetlify, SiFirebase,
    SiRedux, SiJsonwebtokens, SiNodemailer, SiCloudinary, SiStripe, SiRazorpay 
  } from "react-icons/si";
  
  export const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodeDotJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Libraries & DevTools",
      skills: [
        { name: "Socket.io", icon: <SiSocketDotIo /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "S3 Bucket", icon: <SiAmazonaws /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Nodemailer", icon: <SiNodemailer /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      title: "Cloud Deployment",
      skills: [
        { name: "AWS", icon: <SiAmazonaws /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Netlify", icon: <SiNetlify /> },
      ],
    },
    {
      title: "Payment Gateway",
      skills: [
        { name: "Stripe", icon: <SiStripe /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
      ],
    },
  ];
  