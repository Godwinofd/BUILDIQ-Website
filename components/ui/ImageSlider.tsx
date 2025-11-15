"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-[#1a1a1a] overflow-hidden shadow-lg"
      >
        <Image
          src={images[index]}
          alt="ConversIQ case study image"
          width={600}
          height={400}
          className="w-full object-cover"
        />
      </motion.div>

      {/* Left arrow */}
      <button
        type="button"
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-2 py-1 rounded-full text-xs"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white px-2 py-1 rounded-full text-xs"
      >
        →
      </button>
    </div>
  );
}
