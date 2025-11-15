"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function SplineSpaceCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      {/* <CustomCursor /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/services/web-architecture"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
          >
            ← Back to Web Architecture
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
            <span className="text-[#C8A86A]">SplineSpace</span> — 3D Interactive
            Architecture Platform
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A motion-first 3D web experience where users explore architecture,
            light, and materiality directly in the browser — powered by Spline
            and modern web performance.
          </p>
        </motion.div>

        {/* SECTION 1 — Spatial Web Overview */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/splinespace/hero-1.jpg",
                "/images/splinespace/hero-2.jpg",
                "/images/splinespace/hero-3.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Turning Space into an Interface
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              SplineSpace was designed as a spatial interface, not just a flat
              website. Users orbit, zoom, and move through rooms, viewing
              lighting, material studies, and architectural details in real
              time.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              The core idea: the “page” becomes a scene. Instead of scrolling
              through static sections, visitors explore a navigable, living
              model where content is embedded into the 3D environment.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "+55%", label: "Increase in User Engagement" },
            { stat: "+38%", label: "Longer Session Duration" },
            { stat: "3D", label: "Real-Time Spatial Interactions" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10 shadow-lg"
            >
              <h3 className="text-4xl font-semibold text-[#C8A86A] mb-2">
                {item.stat}
              </h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — Interaction & Motion */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Motion as Architecture, Not Decoration
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Every motion decision — from camera paths to hover states — was
              treated as an architectural move. Transitions are slow, deliberate,
              and spatially coherent rather than flashy.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              The experience uses layered easing curves, parallax, and
              material-aware lighting shifts to create a feeling of moving
              through a thoughtfully lit gallery.
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
                "/images/splinespace/motion-1.jpg",
                "/images/splinespace/motion-2.jpg",
                "/images/splinespace/motion-3.jpg",
                "/images/splinespace/motion-4.jpg",
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — Performance & Delivery */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/splinespace/performance-1.jpg",
                "/images/splinespace/performance-2.jpg",
                "/images/splinespace/performance-3.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              3D Without Sacrificing Speed
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Spline scenes were optimized with lazy-loading, reduced polygon
              counts, and curated lighting configs. The result: a cinematic 3D
              experience that still ships with fast initial load and responsive
              interaction.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              The stack combines Next.js, Spline, and performance budgets tuned
              for high-end visuals without overwhelming devices.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · SPLINESPACE
          </p>
        </div>
      </div>
    </main>
  );
}
