"use client";
import { useState } from "react";
import { motion } from "framer-motion";
const images = [
  "/assets/services/details/Special Events and Conferences.jpg",
  "/assets/services/details/Wedding Chauffeurs.jpg",
  "/assets/services/details/Corporate Transfers.jpg",
  "/assets/services/details/Tourist Attraction Hire.jpg",
  "/assets/services/details/Chauffeured Winery Tours.jpg",
  "/assets/services/details/complaints.pdf-image-010.jpg",
  "/assets/services/details/complaints.pdf-image-011.jpg",
  "/assets/services/details/complaints.pdf-image-009.jpg",
  "/assets/services/details/complaints.pdf-image-008.jpg",
  "/assets/services/details/complaints.pdf-image-006.png",
  "/assets/fleets/luxury sedan.pdf-image-000.jpg",
  "/assets/fleets/luxury sedan.pdf-image-001.jpg",
  "/assets/fleets/luxury sedan.pdf-image-002.jpg",
  "/assets/fleets/luxury sedan.pdf-image-003.jpg",
  "/assets/fleets/luxury SUV.pdf-image-000.jpg",
  "/assets/fleets/luxury SUV.pdf-image-001.jpg",
  "/assets/services/others service.png",
  "/assets/services/Airport Transfers.png",
  "/assets/services/Corporate Transfers.jpeg",
  "/assets/services/Special Events and Conferences.png",
];
export default function MasonryGallery() {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="min-h-screen px-4 py-20 md:px-6">
      <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out">
            <motion.img
              src={src}
              alt={`Random ${index}`}
              className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out ${
                hovered === null
                  ? "blur-0 scale-100"
                  : hovered === index
                    ? "blur-0 scale-105"
                    : "blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}