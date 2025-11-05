"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const TextReveal = ({
  text, // <--- CHANGED: Accept 'text' prop instead of 'children' for safety
  className,
  blur = 10,
  delay = 0.1,
  duration = 1,
  from = "bottom",
  split = "word",
  startIndex = 0,
}) => {
  // Ensure text is a string before splitting
  const safeText = typeof text === 'string' ? text : String(text || "");
  
  const segments =
    split === "word" ? safeText.split(" ") : safeText.split(/(?=.)/);

  return (
    <span className="inline-block">
      {segments.map((c, index) => (
        <motion.h1
          key={`${c}-${index}`}
          initial={{
            opacity: 0,
            y: from === "bottom" ? "50%" : "-50%",
            filter: `blur(${blur}px)`,
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: (startIndex + index) * delay,
            duration,
            ease: [0.18, 0.89, 0.82, 1.04],
          }}
          className={cn(
            "inline-flex leading-none",
            split === "word" ? "mr-[0.2em]" : "",
            className,
          )}
        >
          {c === " " ? "\u00A0" : c}
        </motion.h1>
      ))}
      {/* Screen reader only text */}
      <span className="sr-only">{safeText}</span>
    </span>
  );
};