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
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Working Student – Software Developer",
    location: "Aicendence, Munich, Germany",
    description:
      "Built FastAPI backend for veterinary pathology tools using PostgreSQL, Alembic, and Docker; designed scalable architecture and 20+ unit tests to support future production readiness.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2025 – Present",
  },
  {
    title: "Junior Consultant – Systems Limited",
    location: "Karachi, Pakistan (Vodafone Qatar)",
    description:
      "Engineered secure payment APIs (Java 8, Spring Boot, J2EE, Oracle WCS, PostgreSQL), increasing Google Pay 3D Secure success by 15%.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – May 2024",
  },
  {
    title: "Software Engineer – Avanza Solutions",
    location: "Karachi, Pakistan (Al Khaleeji Bank)",
    description:
      "Built KYC microservices with Spring Boot. Reduced verification time by 40% and maintained 95% uptime with strong collaboration across teams.",
    icon: React.createElement(CgWorkAlt),
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
    imageUrl: "/images/vodafone.png", // make sure this image exists
  },
  {
    title: "KYC Backend System – Al Khaleeji Bank",
    description:
      "KYC microservices for digital onboarding and verification. Built with Spring Boot and PostgreSQL. Reduced manual checks and improved onboarding efficiency.",
    tags: ["Spring Boot", "Microservices", "PostgreSQL", "Docker"],
    url: "https://al-khaleejbank.com/alkhaleej/",
    imageUrl: "/images/khaleejbank.png", // make sure this image exists
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

export const educationData = [
  {
    title: "Masters in Computer Science",
    location: "Philipps University of Marburg, Germany",
    description:
      "Currently pursuing a Master's degree with a focus on backend systems, distributed architectures, and AI-driven services.",
    date: "Apr 2024 – Mar 2026",
  },
  {
    title: "Bachelors in Software Engineering",
    location: "University of Karachi, Pakistan",
    description:
      "Graduated with a solid foundation in programming, system design, and software lifecycle management.",
    date: "Jan 2017 – Dec 2020",
  },
] as const;
