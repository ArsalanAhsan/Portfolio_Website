"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Hello! I'm <span className="font-bold">Arsalan Ahsan</span>, a passionate and results-driven software engineer
        based in <span className="font-bold">Munich, Germany</span>, with over <span className="font-bold">3 years of full-stack development experience</span>.
        I specialize in building scalable, backend-heavy applications and delivering reliable software solutions across multiple domains.
      </p>

      <p className="mb-3">
        My core skills include{" "}
        <span className="font-bold">
          Java, Spring Boot, FastAPI, J2EE, PostgreSQL, Docker, Kubernetes, and React.js
        </span>
        . I'm adept at integrating backend services with CI/CD pipelines and cloud infrastructure, and I enjoy solving complex technical problems using clean, scalable architecture.
      </p>

      {showMore && (
        <>
          <p className="mb-3">
            My journey started at <span className="font-bold">Avanza Solutions</span>, where I built a{" "}
            <span className="font-bold">microservice-based KYC backend</span> for Al Khaleeji Bank,
            reducing verification time by <span className="font-bold">40%</span> and improving overall system performance.
            At <span className="font-bold">Systems Limited</span>,
            I contributed to <span className="font-bold">Vodafone Qatar's payment systems</span>, engineering secure APIs and implementing transaction enhancements that significantly increased conversion and engagement rates.
          </p>
          <p className="mb-3">
            Most recently, as a <span className="font-bold">Working Student at Aicendence</span>, I developed a{" "}
            <span className="font-bold">FastAPI backend for digital pathology workflows</span>,
            integrating PostgreSQL, Docker, and Alembic migrations. My work included designing scalable architecture and writing{" "}
            <span className="font-bold">20+ unit tests</span> to ensure production readiness.
          </p>
          <p className="mb-3">
            Academically, I hold a <span className="font-bold">Bachelor’s in Software Engineering</span> and am currently pursuing a{" "}
            <span className="font-bold">Master’s degree in Computer Science</span> at{" "}
            <span className="font-bold">Philipps-Universität Marburg</span>.
            I've also earned certifications in{" "}
            <span className="font-bold">Microservices with gRPC</span>,{" "}
            <span className="font-bold">Kubernetes</span>,{" "}
            <span className="font-bold">AWS Cloud-Native Development</span>, and{" "}
            <span className="font-bold">Full-Stack Web Development</span> with React and Node.js.
          </p>
          <p className="mb-3">
            I am fluent in <span className="font-bold">English (C1)</span> and currently learning <span className="font-bold">German (A2)</span>.
            My approach blends strong academic foundations, hands-on experience, and a commitment to continuous learning
            to build meaningful and maintainable software solutions.
          </p>
        </>
      )}

      <button
        onClick={toggleShowMore}
        className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
      >
        {showMore ? "Read less" : "Read more"}
      </button>
    </motion.section>
  );
}
