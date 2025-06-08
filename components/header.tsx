"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-50">
      <motion.nav
        className="fixed top-4 inset-x-0 mx-auto z-50
        w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
        px-3 sm:px-6 py-2 bg-white/80 dark:bg-gray-900/75
        border border-white/40 dark:border-black/40
        backdrop-blur-md shadow-lg rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative h-10 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "relative z-10 px-4 py-2 transition hover:text-gray-900 dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white": activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 z-[-1] rounded-full bg-gray-100 dark:bg-gray-800"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
