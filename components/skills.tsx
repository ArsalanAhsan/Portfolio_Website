"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const categorizedSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "/icons/java.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "Shell", icon: "/icons/shell.png" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", icon: "/icons/react.png" },
      { name: "Spring Boot", icon: "/icons/springboot.png" },
      { name: "FastAPI", icon: "/icons/fastapi.png" },
      { name: "J2EE", icon: "/icons/java.png" },
    ],
  },
  {
    category: "Databases & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgres.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "Kubernetes", icon: "/icons/kubernetes.png" },
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      { name: "JUnit", icon: "/icons/junit.png" },
      { name: "Pytest", icon: "/icons/python.png" },
      { name: "CI/CD", icon: "/icons/devops.png" },
      { name: "Keycloak", icon: "/icons/keycloak.png" },
    ],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      {categorizedSkills.map((category, catIdx) => (
        <div
          key={category.category}
          className="mb-10 pb-6 border-b border-gray-300 dark:border-gray-700 text-left"
        >
          <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
            {category.category}
          </h3>
          <ul className="flex flex-wrap gap-4">
            {category.skills.map((skill, index) => (
              <motion.li
                key={skill.name}
                className="bg-white borderBlack rounded-xl px-4 py-2 flex items-center gap-2 dark:bg-white/10 dark:text-white/80"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={catIdx * 10 + index}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5"
                  />
                )}
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}