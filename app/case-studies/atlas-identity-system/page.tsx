"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function AtlasIdentitySystemPage() {
  return (
    <main className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      {/* <CustomCursor /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/services/brand-design"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition"
          >
            ← Back to Brand Design
          </Link>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            <span className="text-[#C8A86A]">Atlas</span> — Identity System
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A geometric, gold-on-black identity system for an AI consultancy — built around
            structure, clarity, and a calm sense of authority.
          </p>
        </motion.div>

        {/* SECTION 1 — CORE IDENTITY */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/atlas/h1.jpg",
                "/images/atlas/h2.jpg",
               
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Geometry as a Language
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Atlas needed an identity that felt architectural and precise — a visual system
              that communicated intelligence without feeling cold or corporate.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              We built the logomark from simple geometric primitives and golden-ratio spacing,
              creating a symbol that scales from favicons to large-format signage.
            </p>
          </motion.div>
        </section>

        {/* STATS / IMPACT */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "58%", label: "Increase in Brand Recall" },
            { stat: "3×", label: "More Design Consistency" },
            { stat: "12+", label: "Touchpoints Systemised" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10"
            >
              <h3 className="text-4xl font-semibold text-[#C8A86A] mb-2">
                {item.stat}
              </h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — TYPOGRAPHY & SYSTEM */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Type, Rhythm, and Grids
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              We paired an editorial serif for headlines with a clean grotesk for UI and
              documentation — giving Atlas a voice that works both on decks and in product.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              A strict underlying grid governs spacing, alignment, and layout ratios, making
              every slide, landing page, and case study feel part of the same visual system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <ImageSlider
              images={[
                "/images/atlas/h3.jpg",
                "/images/atlas/h6.jpg",
                "/images/atlas/h4.jpg",
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — APPLICATIONS */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/atlas/h5.jpg",
                "/images/atlas/h8.jpg"
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              A System That Scales
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              From pitch decks to social posts, internal tools to public-facing sites — the Atlas
              system is built to flex without breaking.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Clear usage rules, motion suggestions, and layout recipes make it easy for any
              designer or marketer to extend the system without diluting it.
            </p>
          </motion.div>
        </section>

        {/* FOOTER SUMMARY */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · ATLAS IDENTITY SYSTEM
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
