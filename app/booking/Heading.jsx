"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const Heading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto mb-16 max-w-5xl text-center"
    >
      <SectionTitle title="Booking Your Luxury Chauffeur..!" />
    </motion.div>
  );
};

export default Heading;
