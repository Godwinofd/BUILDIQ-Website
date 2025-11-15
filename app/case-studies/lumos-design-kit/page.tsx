"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function LumosDesignKitCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      {/* Custom Cursor */}
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
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
          >
            ← Back to UX/UI Systems
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            <span className="text-[#C8A86A]">Lumos</span> Design Kit
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A modular design ecosystem built for rapid UX execution — scalable,
            consistent, and crafted for high-performance product teams.
          </p>
        </motion.div>

        {/* SECTION 1 — Foundations */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/lumos/h1.jpg",
                 "/images/lumos/h2.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              A Unified Visual Language
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Lumos was built to eliminate inconsistency across fast-moving
              teams. With strict spacing rules, typography scales, and semantic
              color tokens, the system ensures every component feels balanced and
              intentional.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              We architected Lumos with atomic design principles — spacing,
              grids, type, and motion all operate as a predictable system, not
              isolated styles.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2 — Component System */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              200+ Modular Components
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Each component in Lumos is designed as part of a larger
              ecosystem — cards, overlays, forms, navigation, tooltips,
              dashboards, and more. Everything follows a strict logic,
              enabling teams to build screens in minutes, not hours.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Motion principles give life to interactions: friction-based easing,
              micro-transitions, and subtle shadows make the system feel human
              without breaking simplicity.
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
                "/images/lumos/h3.jpg",
                "/images/lumos/h4.jpg",
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — Scaling */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/lumos/h5.jpg",
                "/images/lumos/h6.jpg",
                "/images/lumos/h7.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Built for Teams & Scale
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Lumos accelerates production by standardizing design logic. Teams
              can prototype, iterate, and ship features rapidly without
              re-inventing interface foundations on each project.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              With documentation, templates, and token libraries, the system is
              designed to scale across brands, platforms, and product teams.
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · LUMOS DESIGN KIT
            <motion.a
  href="https://calendly.com/contact-buildiqs/new-meeting"
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
