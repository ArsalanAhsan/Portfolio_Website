"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Alternate layout direction based on even/odd index
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-black/10 bg-gray-100 dark:bg-white/10 transition-all duration-300"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center w-full h-full ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Side */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative w-full h-full aspect-video md:aspect-[4/3] transition-all duration-500 group-hover:col-span-2`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
          />
        </a>

        {/* Text Side */}
        <div
          className={`p-6 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none ${
            isEven ? "md:order-first" : ""
          }`}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-white/80 mb-4">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full dark:text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
