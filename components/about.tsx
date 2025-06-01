"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        Welcome to my portfolio! I'm <span className="font-medium">Arsalan Ahsan</span>, a dedicated software engineer based in <span className="font-medium">Germany</span>, with over 3 years of experience as a Full-Stack developer. I specialize in developing, deploying, and managing applications using a diverse array of tools and technologies.
      </p>
      <p>
        My core expertise includes{" "}
        <span className="font-medium">
          Spring Boot, FastAPI, J2EE, SQL, MongoDB, React.js, DevOps, and Cloud
        </span>
        . I am always eager to learn new tools and technologies, and to work on awesome new projects.
      </p>
    </motion.section>
  );
}
