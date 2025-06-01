import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Masters in Computer Science",
    location: "Philipps University of Marburg, Germany",
    description:
      "Currently pursuing a Master's degree in Computer Science. Focused on backend systems, distributed architectures, and AI-driven services.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "Working Student – Software Developer",
    location: "Aicendence, Munich, Germany",
    description:
      "Built a clinical lab management backend using FastAPI, PostgreSQL & Docker. Delivered 25+ APIs, integrated Keycloak, and enhanced system security and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Present",
  },
  {
    title: "Java Developer – Systems Limited",
    location: "Karachi, Pakistan (Vodafone Qatar)",
    description:
      "Developed payment APIs using Java and PostgreSQL. Improved Google Pay 3D Secure success rate and reduced user drop-off significantly.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – May 2024",
  },
  {
    title: "Software Engineer – Avanza Solutions",
    location: "Karachi, Pakistan (Al Khaleeji Bank)",
    description:
      "Built KYC microservices with Spring Boot. Reduced verification time by 40% and maintained 95% uptime with strong collaboration across teams.",
    icon: React.createElement(FaReact),
    date: "Jun 2021 – Dec 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Vodafone Qatar Payment Gateway",
    description:
      "Payment backend for postpaid and prepaid services. Enabled 3D Secure Google Pay and improved transaction success rate.",
    tags: ["Java", "J2EE", "PostgreSQL", "Oracle WCS", "Agile"],
    url: "https://www.vodafone.qa",
    imageUrl: "/lab-management-system.jpeg",
  },
  {
    title: "KYC Backend System – Al Khaleeji Bank",
    description:
      "KYC microservices for digital onboarding and verification. Built with Spring Boot and PostgreSQL. Reduced manual checks and improved onboarding efficiency.",
    tags: ["Spring Boot", "Microservices", "PostgreSQL", "Docker"],
    url: "https://www.alkhaleejibank.com.bh",
    imageUrl: "/lab-management-system.jpeg",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Spring Boot",
  "FastAPI",
  "J2EE",
  "Microservices",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Docker",
  "Kubernetes",
  "Git",
  "Keycloak",
  "JUnit",
  "Pytest",
  "CI/CD",
  "Agile",
  "React.js",
] as const;
