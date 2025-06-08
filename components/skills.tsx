"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const categorizedSkills = [
  {
    category: "Programming",
    skills: [
      { name: "Java", icon: "/images/java.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "JavaScript", icon: "/images/javascript.png" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "Spring Boot", icon: "/images/spring-boot.png" },
      { name: "FastAPI", icon: "/images/fastapi.png" },
      { name: "HTML", icon: "/images/html.png" },
      { name: "CSS", icon: "/images/css.png" },
      { name: "React.js", icon: "/images/react.png" },
    ],
  },
  {
    category: "DevOps and Cloud",
    skills: [
      { name: "Jenkins", icon: "/images/jenkins.png" },
      { name: "CICD", icon: "/images/cicd.png" },
      { name: "Prometheus", icon: "/images/prometheus.png" },
      { name: "Grafana", icon: "/images/grafana.png" },
      { name: "Github", icon: "/images/github.png" },
      { name: "Bitbucket", icon: "/images/bitbucket.png" },
      { name: "Gitlab", icon: "/images/gitlab.png" },
      { name: "Shell Scripts", icon: "/images/shell.png" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "Kubernetes", icon: "/images/kubernetes.png" },
      { name: "Bash", icon: "/images/bash.png" },
      { name: "Shell", icon: "/images/shell.png" },
    ],
  },
  {
    category: "Application Deployment",
    skills: [
      { name: "Nginx", icon: "/images/nginx.png" },
      { name: "Apache", icon: "/images/apache.png" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "Kubernetes", icon: "/images/kubernetes.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "PostgreSQL", icon: "/images/postgres.png" },
      { name: "MongoDB", icon: "/images/mongodb.png" },
      { name: "Redis", icon: "/images/redis.png" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Linux", icon: "/images/linux.png" },
      { name: "Windows", icon: "/images/windows.png" },
      { name: "MacOS", icon: "/images/macos.png" },
    ],
  },
  {
    category: "Microsoft Office",
    skills: [
      { name: "Word", icon: "/images/word.png" },
      { name: "Excel", icon: "/images/excel.png" },
      { name: "PowerPoint", icon: "/images/powerpoint.png" },
    ],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full max-w-5xl mx-auto mb-28 sm:mb-40 scroll-mt-28 text-center px-6 sm:px-8"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="flex flex-col gap-12 mt-10">
        {categorizedSkills.map((category, catIdx) => (
          <motion.div
            key={category.category}
            className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-x-10 gap-y-4 items-start text-left border-b border-gray-300 dark:border-gray-700 pb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            custom={catIdx}
          >
            {/* category name remains in place */}
            <h3 className="text-lg font-semibold text-black dark:text-white pt-1">
              {category.category}
            </h3>

            {/* skills go slightly to the right and are larger */}
            <ul className="flex flex-wrap gap-5 ml-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  title={skill.name}
                  className="flex items-center gap-3 px-5 py-3 text-base font-semibold rounded-xl bg-white dark:bg-white/10 dark:text-white/80 border border-gray-300 dark:border-gray-600 shadow-sm"
                >
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
