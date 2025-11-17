"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function NeuralFormsCaseStudy() {
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
            <span className="text-[#C8A86A]">NeuralForms UI</span> — Intelligent Form System
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            An adaptive and predictive form engine that transforms rigid form flows into intelligent, responsive experiences.
          </p>
        </motion.div>

        {/* SECTION 1 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider
              images={[
                "/images/neuralforms-ui/h1.jpg",
                "/images/neuralforms-ui/h2.jpg",
                "/images/neuralforms-ui/h4.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Predictive & Intelligent Form Flow
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              NeuralForms UI adapts each field based on context, user intent, and previous entries — reducing friction and increasing completion rates.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Predictive suggestions and smart field expansion create a dynamic flow that feels natural rather than forced.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Motion-Driven Interaction
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              Smooth micro-animations guide the user subtly through each step, drawing attention without overwhelming the experience.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Animated placeholders, validation feedback, and real-time correction all contribute to a fluid and intuitive feeling.
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
                "/images/neuralforms-ui/h5.jpg",
                "/images/neuralforms-ui/h6.jpg",
                
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider
              images={[
                "/images/neuralforms-ui/h8.jpg",
                "/images/neuralforms-ui/h7.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Adaptive Layout Engine
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              The form system intelligently restructures itself based on screen size, user pace, accessibility needs, and complexity.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              NeuralForms reshapes itself to always deliver the clearest, most efficient path forward.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · NEURALFORMS UI
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
