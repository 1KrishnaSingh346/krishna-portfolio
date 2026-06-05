import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaCode,
  FaServer,
  FaLightbulb,
  FaGraduationCap
 } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiC,
  SiShadcnui,
  SiGsap,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

import { TbApi, TbBinaryTree, TbDeviceMobileCode, TbSettings, TbCpu } from "react-icons/tb";
import { VscTerminal } from "react-icons/vsc";
import { 

} from "react-icons/fa";

// about section data
const journeyMilestones = [
    {
      year: "2025-Present",
      title: "CO-FOUNDER @ SANKALP NOVA LLP",
      description:
        "Co-founded Sankalp Nova LLP with the vision of helping students navigate academics, careers, and personal growth through structured guidance, mentorship, and educational support.",
      tag: "EDUCATION & MENTORSHIP",
    },
    {
      year: "2025",
      title: "COLLEGESECRACY",
      description:
        "Built a full-stack student platform featuring authentication, role-based access, secure payments, productivity tools, and a scalable backend architecture.",
      tag: "FULL-STACK PLATFORM",
    },
    {
      year: "2024-2025",
      title: "GDG ON CAMPUS IIIT KALYANI",
      description:
        "Served as an Ext-Core Team Member, contributing to developer-focused initiatives, technical events, community engagement, and student learning programs.",
      tag: "DEVELOPER COMMUNITY",
    },
    {
      year: "2024",
      title: "FULL-STACK JOURNEY",
      description:
        "Started builiding modern web applications with React, Node.js, MongoDB, and Javascript while strengthening problem-solving, algorithms, and software development fundamentals.",
      tag: "FOUNDATION",
    },
  ];

  // SKILLS section Data
  const skillRegistry = [
    {
      category: "Languages",
      icon: TbCpu,
      skills: [
        { name: "C", icon: SiC },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },
    {
      category: "Frontend",
      icon: FaReact,
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn UI", icon: SiShadcnui },
        { name: "GSAP", icon: SiGsap },
      ],
    },
    {
      category: "Backend",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "REST APIs", icon: TbApi },
      ],
    },
    {
      category: "Tools & Deployment",
      icon: TbSettings,
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
      ],
    },
    {
      category: "Computer Science",
      icon: TbBinaryTree,
      skills: [
        { name: "Data Structures", icon: TbBinaryTree },
        { name: "Algorithms", icon: TbBinaryTree },
        { name: "Operating Systems", icon: VscTerminal },
        { name: "Computer Networks", icon: TbApi },
        { name: "OOP", icon: TbCpu },
      ],
    },
    {
      category: "Engineering",
      icon: TbDeviceMobileCode,
      skills: [
        { name: "System Design", icon: TbDeviceMobileCode },
        { name: "PWA Development", icon: TbDeviceMobileCode },
        { name: "Responsive Design", icon: FaReact },
        { name: "Authentication", icon: TbSettings },
        { name: "Performance Opt.", icon: TbSettings },
      ],
    },
  ];

  //Project Section data
    const projectLedger = [
    {
      title: "CollegeSecracy Platform",
      category: "FULL-STACK STUDENT PLATFORM",
      description:
        "Built a student-focused platform featuring secure authentication, role-based access control, payment integration, and productivity tools. Designed to streamline access to educational services through a scalable full-stack architecture.",
      tech: ["Next.js", "TypeScript", "MongoDB", "JWT", "Razorpay"],
      meta: "Featured Project",
      liveUrl: "https://collegesecracy.in",
      repoUrl: null,
    },
    {
      title: "MailForge Delivery Engine",
      category: "BULK EMAIL INFRASTRUCTURE",
      description:
        "Developed a high-throughput bulk email delivery system using Redis caching and BullMQ queue management. Engineered for reliable processing, scheduling, and distribution of large-scale email workloads.",
      tech: ["Node.js", "Express.js", "Redis", "BullMQ"],
      meta: "Backend Systems",
      liveUrl: null,
      repoUrl: "https://github.com/1KrishnaSingh346/MailForge",
    },
    {
      title: "LinkVerse",
      category: "SOCIAL LINK PLATFORM",
      description:
        "Developed a modern link-in-bio platform that enables users to consolidate social media profiles, portfolios, websites, and personal resources into a single customizable and shareable page.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      meta: "Web Platform",
      liveUrl: "https://linkverse-dev.vercel.app",
      repoUrl: "https://github.com/1KrishnaSingh346/LinkVerse",
    },
    {
      title: "SAR Radar Imaging Engine",
      category: "RADAR IMAGE PROCESSING",
      description:
        "Implemented Synthetic Aperture Radar (SAR) image reconstruction algorithms, including 2D FFT processing, Range Migration Algorithm (RMA), and Matched Filter Backprojection techniques.",
      tech: ["Python", "NumPy", "Signal Processing", "Algorithms"],
      meta: "Research Project",
      liveUrl: null,
      repoUrl: "https://github.com/1KrishnaSingh346/sar-imaging",
    },
  ];

  // services section data
  const serviceMatrix = [
    {
      title: "Full-Stack Development",
      subtitle: "MODERN WEB APPLICATIONS",
      description:
        "Building scalable web applications from frontend interfaces to backend systems with a focus on performance, security, and production-ready architecture.",
      deliverables: [
        "Next.js & React Applications",
        "Authentication & Payments",
        "Database Design & APIs",
      ],
      icon: FaCode,
    },
    {
      title: "Progressive Web Apps",
      subtitle: "PWA ENGINEERING",
      description:
        "Developing installable, responsive, and offline-capable web applications that deliver seamless app-like experiences across devices.",
      deliverables: [
        "Offline Functionality",
        "Responsive Experiences",
        "Performance Optimization",
      ],
      icon: TbDeviceMobileCode,
    },
    {
      title: "Backend & API Development",
      subtitle: "SCALABLE INFRASTRUCTURE",
      description:
        "Designing secure backend systems, REST APIs, database architectures, and queue-driven services for scalable applications.",
      deliverables: [
        "REST API Engineering",
        "Redis & BullMQ Queues",
        "MongoDB Architecture",
      ],
      icon: FaServer,
    },
    {
      title: "UI Implementation",
      subtitle: "FRONTEND ENGINEERING",
      description:
        "Transforming designs into responsive, accessible, and high-performance user interfaces using modern frontend technologies.",
      deliverables: [
        "React & Next.js UI",
        "Tailwind CSS",
        "Interactive Animations",
      ],
      icon: FaReact,
    },
    {
      title: "Technical Consulting",
      subtitle: "PROJECT STRATEGY",
      description:
        "Helping startups, teams, and students choose the right technologies, solid structures, and deployment approaches for their products.",
      deliverables: [
        "Architecture Planning",
        "Technology Selection",
        "Development Roadmaps",
      ],
      icon: FaLightbulb,
    },
    {
      title: "Student Mentorship",
      subtitle: "GUIDANCE & GROWTH",
      description:
        "Providing structured guidance in web development, portfolio architecture, technical growth, and core engineering workflows.",
      deliverables: [
        "Project Guidance",
        "Career Mentorship",
        "Learning Roadmaps",
      ],
      icon: FaGraduationCap,
    },
  ];

export {
    journeyMilestones,
    skillRegistry,
    projectLedger,
    serviceMatrix
}
