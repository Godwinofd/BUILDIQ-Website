"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function FlowBridgeCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* Background grid */}
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
            href="/services/ai-automation"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
          >
            ← Back to AI Automation
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
            <span className="text-[#C8A86A]">FlowBridge</span> — Workflow Automation Suite
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A unified automation system that connects CRM, analytics, and marketing tools — reducing manual work by 72% and creating a seamless operational pipeline.
          </p>
        </motion.div>

        {/* SECTION 1 — System Overview */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/flowbridge/flow-1.jpg",
                "/images/flowbridge/flow-2.jpg",
                "/images/flowbridge/flow-3.jpg",
                "/images/flowbridge/flow-4.jpg"
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              A Unified Automation Layer
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              FlowBridge was created to automate repetitive operational tasks across multiple tools. 
              It links CRM events, analytics platforms, marketing systems, and internal workflows into a single automated engine.
            </p>

            <p className="text-neutral-300 leading-relaxed">
              Instead of teams jumping between systems, FlowBridge handles routing, syncing, and decision logic with full transparency.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "−72%", label: "Manual Workload Reduction" },
            { stat: "4.8×", label: "Faster Cross-System Syncing" },
            { stat: "3 Min", label: "Avg Time Saved Per Task" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-b from-[#0B0B0B] to-[#050505] border border-[#1a1a1a] rounded-2xl py-10 shadow-lg"
            >
              <h3 className="text-4xl font-semibold text-[#C8A86A] mb-2">{item.stat}</h3>
              <p className="text-neutral-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2 — Automation Logic */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Intelligent Workflow Orchestration
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The system monitors triggers across multiple platforms — CRM updates, form submissions, campaign signals, and analytics events.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Using layered logic, FlowBridge decides what to sync, where to send data, when to notify teams, and how to adapt workflows dynamically.
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
                "/images/flowbridge/flow-5.jpg",
                "/images/flowbridge/flow-6.jpg",
                "/images/flowbridge/flow-7.jpg",
                
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — Results */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/flowbridge/flow-8.jpg",
                "/images/flowbridge/flow-9.jpg",
                "/images/flowbridge/flow-10.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Tangible Operational Outcomes
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Teams that previously spent hours jumping across tools now rely on a unified automation engine.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              FlowBridge turned fragmented processes into a seamless, intelligent system — improving accuracy, increasing output, and reducing overall workload dramatically.
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · FLOWBRIDGE
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
