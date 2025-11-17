"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function FormaStudioCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* Grid background */}
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
            <span className="text-[#C8A86A]">Forma Studio</span> — Architectural Identity
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A balanced identity system inspired by symmetry, materiality, and structural rhythm —
            designed for an architecture studio focused on timeless, minimal, spatial design.
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
                "/images/forma-studio/h7.jpg",
                "/images/forma-studio/h3.jpg",
                
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Designing with Symmetry & Space
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Forma Studio’s identity needed to reflect its architectural philosophy — precision,
              calmness, and spatial awareness. The logotype and mark were constructed from a strict
              ratio grid, bringing mathematical clarity to the brand.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              The system takes inspiration from architectural floor plans and elevation drawings,
              combining geometric strength with minimal refinement.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "CSSDA Nominee", label: "Interaction Design" },
            { stat: "43%", label: "Increase in Lead Quality" },
            { stat: "2× Faster", label: "Asset Production Workflow" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10"
            >
              <h3 className="text-3xl md:text-4xl font-semibold text-[#C8A86A] mb-2">
                {item.stat}
              </h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — TYPOGRAPHY / MATERIALITY */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Materiality as a Visual Language
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Inspired by stone, steel, and warm concrete — the identity embraces muted tones and
              tactile textures, giving Forma a grounded yet premium presence.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Typography leans into editorial elegance with a tall, narrow serif paired with a
              precise sans-serif that mirrors architectural labeling systems.
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
                "/images/forma-studio/h4.jpg",
                "/images/forma-studio/h5.jpg",
                "/images/forma-studio/h6.jpg",
                
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
                "/images/forma-studio/h8.jpg",
                "/images/forma-studio/h9.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Architecture Applied Everywhere
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The system was extended across pitch decks, stationery, signage, social templates,
              and project documentation — creating a cohesive identity across all touchpoints.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Every application follows a spatial grid, ensuring consistency whether used by
              designers or partners outside the studio.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · FORMA STUDIO
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
