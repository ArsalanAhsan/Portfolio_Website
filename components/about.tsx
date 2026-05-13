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
        Hello! I'm <span className="font-bold">Arsalan Ahsan</span>, a{" "}
        <span className="font-bold">Full Stack Developer</span> and{" "}
        <span className="font-bold">M.Sc. Computer Science student</span> at{" "}
        <span className="font-bold">Philipps-Universität Marburg, Germany</span>.
        I have over <span className="font-bold">3 years of professional software engineering experience</span>{" "}
        building scalable backend systems, RESTful APIs, and enterprise-grade applications.
      </p>

      <p className="mb-3">
        My primary expertise lies in{" "}
        <span className="font-bold">
          Java, Spring Boot, Python, FastAPI, REST APIs, PostgreSQL, Docker, Kafka, and Microservices
        </span>.
        I enjoy designing clean architectures, solving complex backend challenges,
        and developing reliable software solutions for mission-critical environments.
      </p>

      {showMore && (
        <>
          <p className="mb-3">
            During my professional journey, I have worked on enterprise applications,
            financial systems, telecom platforms, and AI-driven healthcare solutions.
            At <span className="font-bold">Systems Limited</span>, I contributed to{" "}
            <span className="font-bold">Vodafone Qatar</span> by developing Java/Spring Boot backend services,
            asynchronous payment event flows using Kafka and RabbitMQ,
            and frontend-facing APIs for digital payment platforms.
          </p>

          <p className="mb-3">
            Previously at <span className="font-bold">Avanza Solutions</span>,
            I worked on banking and onboarding systems using Spring Boot,
            implemented automated testing solutions, reduced technical debt through refactoring,
            and improved overall system reliability and maintainability.
          </p>

          <p className="mb-3">
            Most recently, I contributed to backend development at{" "}
            <span className="font-bold">Aicendence</span>, where I worked with{" "}
            <span className="font-bold">Python FastAPI, Docker, Keycloak, and GitLab CI/CD</span>.
            My work included REST API development, authentication workflow customization,
            technical documentation, and agile collaboration for AI-powered veterinary diagnostic platforms.
          </p>

          <p className="mb-3">
            Alongside my professional experience, I have also built academic and personal projects,
            including a{" "}
            <span className="font-bold">Semantic Search Application</span> using{" "}
            <span className="font-bold">FastAPI, Elasticsearch, and Sentence-BERT embeddings</span>,
            improving semantic search accuracy compared to traditional keyword-based approaches.
          </p>

          <p className="mb-3">
            I am passionate about backend engineering, scalable distributed systems,
            and continuously learning modern technologies.
            I am fluent in <span className="font-bold">English (C1)</span>,
            currently learning <span className="font-bold">German (A2)</span>,
            and enjoy working in collaborative and fast-paced development environments.
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