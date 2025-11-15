"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function QuantumEdgePage() {
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            <span className="text-[#C8A86A]">QuantumEdge</span> — Future-Tech Landing Experience
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A motion-first digital presence designed for a modern technology brand — delivering depth, kinetic layouts, and measurable conversion uplift.
          </p>
        </motion.div>

        {/* SECTION 1 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/quantumedge/hero-1.jpg",
                "/images/quantumedge/hero-2.jpg",
            
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              High-Impact First Impressions
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The QuantumEdge website was engineered to make an instant impression through cinematic motion, responsive depth effects, and seamless loading.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Our architecture prioritised fast interaction, intuitive motion cues, and high accessibility — all wrapped in a futuristic design language.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "+42%", label: "Higher Conversions" },
            { stat: "+36%", label: "Avg. Session Time" },
            { stat: "1.1s", label: "Initial Load Time" },
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

        {/* SECTION 2 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">Motion as Architecture</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Every animation reinforces structure. Motion guides the user into product sections, communicates hierarchy, and visually explains complex concepts.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Built with GSAP and Framer Motion, the experience remains smooth across devices while maintaining cinematic flair.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/quantumedge/hero-4.jpg",
                
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/quantumedge/hero-3.jpg",
                
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">Performance That Converts</h2>
            <p className="text-neutral-300 mb-4">
              The site maintains its cinematic motion without sacrificing speed — essential for user retention and conversion-focused design.
            </p>
            <p className="text-neutral-300">
              With 1.1s load times and optimised assets, QuantumEdge delivers future-tech visuals with best-in-class performance.
            </p>
          </motion.div>
        </section>

        {/* FOOTER */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm tracking-[0.2em]">
            BUILDIQ CASE STUDY · QUANTUMEDGE             
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
