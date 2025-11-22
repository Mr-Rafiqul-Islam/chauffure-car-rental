"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have this utility

// A high-quality, dark, and luxurious background image
const LUXURY_BACKGROUND_URL =
  "/pageHedar_Image.png";

// Fade-in-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function PageHeader({
  pageName = "About Us",
  subheading = "Melbourne's Trusted Name in Chauffeur Services",
  className,
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat", // UPDATE 1: Reduced height
        "md:min-h-[50vh]", // UPDATE 1: Reduced height on desktop
        className
      )}
      style={{
        backgroundImage: `url(${LUXURY_BACKGROUND_URL})`,
      }}
    >
      {/* This is the gradient overlay.
        It starts transparent at the top, darkens the middle,
        and fades into your specific color #1F1F1F at the bottom
        to create a seamless transition.
      */}
      <div
        className="absolute inset-0 z-10 h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(31,31,31,0.7) 70%, #1F1F1F 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        {/* pageName */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="
            font-serif text-4xl font-bold tracking-tight 
            text-white 
            sm:text-5xl md:text-6xl mid:text-7xl
          "
        >
          {pageName}
        </motion.h1>

        {/* subheading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.2 } } }}
          className="
            mt-6 max-w-5xl mx-auto text-3xl 
            font-light leading-8 text-gray-200 
            md:text-5xl
          "
        >
          {subheading}
        </motion.h2>
      </div>
    </section>
  );
}