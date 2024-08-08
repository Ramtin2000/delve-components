"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CtaButton() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "100%"],
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <button
      className="flex flex-row items-center p-0.5 bg-[#212631] rounded-[4px] px-4 pl-12 gap-3 relative h-[40px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <motion.div
        className="p-2 bg-[#D2ff00] items-center flex justify-center rounded-[4px] absolute left-0.5 min-w-[34px] overflow-hidden"
        initial={{ width: "34px" }}
        animate={{ width: isHovered ? "calc(100% - 4px)" : "34px" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative animate-pulse"
            style={{ animationDelay: `${(index * 2) / 10}s` }}
          >
            <Image
              src="https://assets.codepen.io/165585/arrow-dots.svg"
              alt="Arrow right"
              width={24}
              height={24}
              className="min-w-[24px] relative z-10"
            />
          </div>
        ))}
      </motion.div>
      <span className="text-white">Book a demo</span>
    </button>
  );
}
