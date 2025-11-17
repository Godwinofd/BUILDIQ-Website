"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function NovaCommerceCaseStudy() {
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
            href="/services/web-architecture"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition"
          >
            ← Back to Web Architecture
          </Link>
        </motion.div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            <span className="text-[#C8A86A]">NovaCommerce</span> — High-Performance Storefront
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A blazing-fast eCommerce experience engineered for conversion — combining performance,
            visual storytelling, and a modular architecture ready for scale.
          </p>
        </motion.div>

        {/* SECTION 1 — HERO SLIDER */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/novacommerce/hero-1.jpg",
                "/images/novacommerce/hero-2.jpg",
                
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Built for Speed & Conversion
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              NovaCommerce needed a storefront that felt premium, modern, and effortless. We built
              a fully optimised architecture focusing on micro-interactions, responsive product
              modules, and frictionless checkout flows.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              With server-side rendering, image optimisation, and smart caching, customers
              experience instant loading — even on mobile.
            </p>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "52%", label: "Higher Conversion Rate" },
            { stat: "1.1s", label: "Average Load Time" },
            { stat: "34%", label: "Increase in Returning Users" },
          ].map((item, index) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10"
            >
              <h3 className="text-4xl font-semibold text-[#C8A86A] mb-2">
                {item.stat}
              </h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — PRODUCT EXPERIENCE */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Intelligent Product Experience
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              We designed a modular product system that adapts to different catalogue types —
              digital products, bundles, variants, and subscription models.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Real-time inventory, dynamic pricing, personalised suggestions, and user-aware UI
              make shopping feel intuitive and human.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/novacommerce/hero-3.jpg",
                "/images/novacommerce/hero-4.jpg",
                
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — CHECKOUT & PERFORMANCE */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <ImageSlider
              images={[
                "/images/novacommerce/hero-5.jpg",
                "/images/novacommerce/hero-6.jpg",
                "/images/novacommerce/hero-7.jpg",
                "/images/novacommerce/hero-8.jpg",
                "/images/novacommerce/hero-9.jpg"
              ]}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Checkout Designed for Speed
            </h2>

            <p className="text-neutral-300 leading-relaxed mb-4">
              We redesigned checkout into a one-flow system — reducing friction, form length, and
              cognitive load.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              With secure payment integration, address autofill, guest checkout, and mobile-first
              optimisation, users complete purchases in seconds.
            </p>
          </motion.div>
        </section>

        {/* FOOTER SUMMARY */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · NOVACOMMERCE
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
