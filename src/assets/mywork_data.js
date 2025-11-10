import connectia_img from '../assets/project_1a.png';
import shoeskampany_img from '../assets/project_2.png';
import todo_img from '../assets/project_3.png';
import netflix_clone_img from '../assets/project_4.png';
import olx_clone_img from '../assets/project_5.png';
import mern_auth_img from '../assets/project_6.png';

// E-Commerce SaaS Platform Images - User will upload these
// TODO: Replace these imports with your actual images
// Place your images in: src/assets/ecom_saas/
// Files needed: ecom_banner.png, ecom_img1.png, ecom_img2.png, ecom_img3.png, ecom_img4.png, ecom_img5.png

// Temporary fallback - replace with your actual images
import ecom_banner from '../assets/ecom_banner.jpeg'; // TODO: Replace with ecom_banner.png
import ecom_img1 from "../assets/ecom_img1.jpeg";   // TODO: Replace with ecom_img1.png
import ecom_img2 from "../assets/ecom_img2.jpeg";   // TODO: Replace with ecom_img2.png
import ecom_img3 from "../assets/ecom_img3.jpeg";   // TODO: Replace with ecom_img3.png
import ecom_img4 from "../assets/ecom_img4.jpeg";   // TODO: Replace with ecom_img4.png
import ecom_img5 from "../assets/ecom_img5.jpeg";   // TODO: Replace with ecom_img5.png

const mywork_data = [
  {
    P_Name: "Multi-Vendor E-Commerce SaaS Platform",
    p_img: ecom_banner, // Main banner image
    p_images: [
      ecom_banner, // Banner/main image (index 0)
      ecom_img1, // Image 1
      ecom_img2, // Image 2
      ecom_img3, // Image 3
      ecom_img4, // Image 4
      ecom_img5, // Image 5
    ],
    p_desc:
      "Enterprise-level SaaS ecosystem featuring User, Seller, and Admin applications built on microservices architecture. Architected 8+ microservices with Node.js, Prisma ORM, Redis, and Kafka. Automated CI/CD pipelines via NX Monorepo + GitHub Actions, reducing deployment time by 83%. Integrated Stripe Connect, OTP-based authentication, real-time analytics pipeline (Kafka → DB → ML), and deployed containerized services on AWS EC2 + Docker achieving 99.9% uptime.",
    github: "https://github.com/Aksh-Ay007/Microservice-E-commerce-",
    demo: "https://www.linkedin.com/posts/akshayjyothip_ecommerceplatform-saas-uxdesign-activity-7390349850514669568-QSyK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfxGeIBYMjt_vRFFOxaxebXh776n3pCho8",
    techStack:
      "Next.js | TypeScript | Express.js | MongoDB | Prisma | Kafka | Redis | TensorFlow.js | WebSockets | Firebase Cloud Messaging | ImageKit | Stripe | AWS | Docker | GitHub Actions",
    features: [
      "Three Independent Interfaces: Customer Portal, Seller Dashboard, Admin Panel",
      "Microservices Architecture (8+ services) with Event-Driven Architecture",
      "ML-powered recommendations with TensorFlowJS (Kafka-powered user behavior tracking)",
      "Stripe Connect integration for secure seller payouts with 10% admin commission",
      "Real-time WebSocket communication and Firebase Cloud Messaging",
      "ImageKit CDN with AI enhancements (upscaling, background removal)",
      "Advanced Security: JWT tokens, OTP verification, spam protection, role-based access",
      "CI/CD automation with GitHub Actions and Docker containerization",
      "Seller Features: Guided onboarding, custom domain, low-stock alerts, shop deletion delay",
      "Product Management: Custom specifications, flexible discount codes, time-limited events",
    ],
  },
  {
    P_Name: "Connectia - Real-Time Social Connection Platform",
    p_img: connectia_img,
    p_desc:
      "Full-stack real-time communication platform enabling secure social interactions and live chat. Developed JWT + Google OAuth authentication, Razorpay premium chat payments, and Socket.io real-time messaging. Optimized backend APIs and MongoDB queries, reducing server latency by 30%. Deployed front-end (React + NGINX) and back-end (PM2 + WebSocket) on AWS EC2.",
    github: "https://github.com/Aksh-Ay007/tinder-application-backend",
    demo: "https://connectia.live/",
    techStack:
      "React | Node.js | Express.js | MongoDB | Socket.io | Razorpay | AWS EC2 | NGINX | PM2 | Cloudflare DNS",
  },
  {
    P_Name: "ShoesKampany E-commerce",
    p_img: shoeskampany_img,
    p_desc:
      "Full-stack e-commerce featuring Google login, advanced filters, wishlist, coupons, wallet, and PDF invoices. Admin panel manages products, users, orders, and reports. Node.js, Express, EJS, MongoDB; hosted on AWS EC2.",
    github: "https://github.com/Aksh-Ay007/shoesKampany",
  },
  {
    P_Name: "Netflix Clone",
    p_img: netflix_clone_img,
    p_desc:
      "Streaming UI clone using React Context for auth and video data. Profiles, watch-lists, and responsive playback.",
    github: "https://github.com/Aksh-Ay007/netflix-clone",
  },
  {
    P_Name: "OLX Clone",
    p_img: olx_clone_img,
    p_desc:
      "Marketplace app with listing CRUD, chat, and notifications. Context-driven state for seamless browsing and management.",
    github: "https://github.com/Aksh-Ay007/olx-clone",
  },
  {
    P_Name: "MERN Auth Project",
    p_img: mern_auth_img,
    p_desc:
      "MERN boilerplate with Redux, JWT auth, profile image upload, and admin user CRUD & search.",
    github: "https://github.com/Aksh-Ay007/mern-auth",
  },
];

export default mywork_data;
