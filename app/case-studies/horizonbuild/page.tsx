"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function HorizonBuildPage() {
  return (
    <main className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      {/* <CustomCursor /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/services/web-architecture"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white"
          >
            ← Back to Web Architecture
          </Link>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            <span className="text-[#C8A86A]">HorizonBuild</span> — Construction Portfolio Platform
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A high-performance portfolio platform designed for a modern construction firm —
            showcasing large-scale projects with immersive visuals, fast navigation, and a
            systemised layout framework.
          </p>
        </motion.div>

        {/* SECTION 1 — HERO */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/horizonbuild/h4.jpg",
                "/images/horizonbuild/hero-2.jpg",
                "/images/horizonbuild/h5.jpg"
          
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Designed for Clarity & Impact
            </h2>

            <p className="text-neutral-300 mb-4 leading-relaxed">
              HorizonBuild needed a digital home for their multi-million-pound construction
              projects — clean, authoritative, and visually strong.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              The platform uses strong geometry, bold typography, and an image-forward layout to
              highlight their craftsmanship without overwhelming the user.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "2.1×", label: "More Portfolio Engagement" },
            { stat: "38%", label: "Faster Page Navigation" },
            { stat: "0.9s", label: "Average Load Time" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10"
            >
              <h3 className="text-4xl font-semibold text-[#C8A86A]">{item.stat}</h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — PROJECT GALLERY */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              A Scalable Project System
            </h2>

            <p className="text-neutral-300 mb-4 leading-relaxed">
              Project pages are modular and data-driven — allowing HorizonBuild to publish new
              builds without developer involvement.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Every layout is optimised for large image sets, blueprint scans, and
              before–after comparisons.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/horizonbuild/h3.jpg",
               
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — PERFORMANCE */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
               "/images/horizonbuild/h6.jpg"
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Performance Engineered
            </h2>

            <p className="text-neutral-300 mb-4 leading-relaxed">
              Even with image-heavy content, the platform maintains sub-second load times through
              smart caching, image compression, and static generation.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              This ensures every visitor — from investors to clients — experiences
              uninterrupted browsing across all devices.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm tracking-[0.2em]">
            BUILDIQ CASE STUDY · HORIZONBUILD 
            <motion.a
  href="https://calendly.com/enquiry-buildiqs/30min"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
  className="mt-10 inline-flex items-center justify-center px-14 py-4 border border-white text-sm tracking-[0.18em] uppercase hover:bg-white hover:text-black transition"
>
  Book Demo
</motion.a>
          </p>
        </div>
      </div>
    </main>
  );
}
