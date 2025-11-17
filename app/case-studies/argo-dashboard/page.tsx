"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function ArgoDashboardCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* Background Grid */}
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
            href="/services/ux-ui"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition-all"
          >
            ← Back to UX/UI Systems
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
            <span className="text-[#C8A86A]">Argo Dashboard</span> — Multi-Layer Insights Platform
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A powerful analytics environment designed for complex data exploration, real-time monitoring, and layered decision support. Argo turns raw operational data into structured clarity.
          </p>
        </motion.div>

        {/* SECTION 1 — OVERVIEW */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider
              images={[
                "/images/argo-dashboard/h1.jpg",
                "/images/argo-dashboard/h2.jpg",
                "/images/argo-dashboard/h3.jpg",
                "/images/argo-dashboard/h4.jpg",
                "/images/argo-dashboard/h5.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Designing a Multi-Layer Intelligence System
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              Argo is built for complex analytical environments where clarity,
              structure, and speed matter. The dashboard merges multiple data
              layers—operations, financials, performance, and predictions—into a
              single cohesive interface.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              The system simplifies previously scattered data flows, giving teams
              a unified place to analyse, compare, and act.
            </p>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "72%", label: "Reduction in Manual Reporting" },
            { stat: "3x", label: "Faster Decision Time" },
            { stat: "50+", label: "Live Data Sources Connected" },
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

        {/* SECTION 2 — INTERACTION */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Layered Navigation & Interaction
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              Complex data doesn’t need to feel complex. Argo uses a multi-layer
              navigational model—zooming between overview, category, and detail
              layers with smooth transitions.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Motion-driven UI feedback guides users through deep datasets without
              overwhelming them, improving comprehension and reducing cognitive load.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <ImageSlider
              images={[
                "/images/argo-dashboard/h8.jpg",
                "/images/argo-dashboard/h6.jpg",
                "/images/argo-dashboard/h7.jpg",
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — RESULTS */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider
              images={[
                "/images/argo-dashboard/h9.jpg",
                "/images/argo-dashboard/h10.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Outcomes & Performance Uplift
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              Teams using Argo reported faster analysis cycles, fewer reporting
              errors, and clearer visibility into operational performance.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              The system became the single source of truth across departments,
              driving more confident decision-making and improving organisation-wide alignment.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · ARGO DASHBOARD
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
