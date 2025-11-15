"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor"; // ✅ Import your custom cursor
import ImageSlider from "@/components/ui/ImageSlider";


export default function ConversIQCaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      {/* ✅ Add the custom glowing cursor */}
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
            href="/services/ai-automation"
            className="inline-flex items-center text-[#C8A86A] text-sm uppercase tracking-[0.15em] hover:text-white transition-all duration-300"
          >
            ← Back to AI Automation
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
            <span className="text-[#C8A86A]">ConversIQ</span> — AI Chatbot System
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            An intelligent conversational agent that transforms website interactions
            into real-time customer engagement, powered by GPT automation and
            natural tone detection.
          </p>
        </motion.div>

        {/* SECTION 1 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           <ImageSlider
  images={[
    "/images/conversiq/chat--1.jpg",
    "/images/conversiq/chat--2.jpg",
    "/images/conversiq/chat--3.jpg",
  ]}
/>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Building Conversational Intelligence
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              ConversIQ was built to bridge the gap between automation and
              authentic human dialogue. Using GPT-based fine-tuning, the chatbot
              detects tone, context, and urgency — ensuring customers always feel
              understood.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              We integrated ConversIQ directly into CRM systems and Make
              automations to trigger live handoffs when human input was needed.
            </p>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "65%", label: "Faster First Response" },
            { stat: "40%", label: "Increase in Conversions" },
            { stat: "90%", label: "Customer Satisfaction Rate" },
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

        {/* SECTION 2 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Intelligent Context Awareness
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              ConversIQ doesn’t just reply — it learns. The model adapts to
              previous conversation threads, user emotions, and product-specific
              terminology, ensuring a more natural experience.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              The system integrates with client CRM and Google Sheets APIs to
              dynamically log and track interactions for sales analysis.
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
    "/images/conversiq/dash-1.jpg",
    "/images/conversiq/dash-2.jpg",
    "/images/conversiq/dash-3.jpg",
    "/images/conversiq/dash-4.jpg",
    "/images/conversiq/dash-5.jpg"
  ]}
/>

          </motion.div>
        </section>

        {/* SECTION 3 */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
  images={[
    "/images/conversiq/performance-1.jpg",
    "/images/conversiq/performance-2.jpg",
    "/images/conversiq/performance-3.jpg",
    "/images/conversiq/performance-4.jpg"
    
  ]}
/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Results That Speak
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              After deployment, clients experienced significantly improved lead
              capture and customer engagement rates. ConversIQ not only handled
              inquiries but built stronger relationships through intelligent
              empathy.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              With adaptive memory and live-hand-off logic, the AI team member
              became an indispensable part of the customer journey.
            </p>
          </motion.div>
        </section>

        {/* FOOTER SUMMARY */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · CONVERSIQ
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


