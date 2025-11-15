"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import CustomCursor from "@/components/ui/CustomCursor";
import ImageSlider from "@/components/ui/ImageSlider";

export default function VoxAICaseStudy() {
  return (
    <main className="bg-black text-white py-24 px-6 overflow-hidden relative">
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
            <span className="text-[#C8A86A]">VoxAI</span> — AI Receptionist
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            An AI-powered receptionist that answers calls, books appointments,
            and routes conversations to the right teams — while sounding
            distinctly on-brand.
          </p>
        </motion.div>

        {/* SECTION 1 — Voice-first experience */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/voxai/ai-call-1.jpg",
                "/images/voxai/ai-call-2.jpg",
                "/images/voxai/ai-call-3.jpg",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Designing a Voice-First Front Door
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              VoxAI was created to handle the reality of modern inbound traffic:
              missed calls, long queues, and over-stretched front-of-house
              teams. The goal wasn&apos;t just to “answer the phone” — it was to
              create a receptionist that understands intent, tone, and urgency.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Call flows are modeled as conversational journeys: greeting,
              qualification, routing, and follow-up. Each step is designed to
              feel human, while quietly automating the repetitive work behind
              the scenes.
            </p>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-32 text-center">
          {[
            { stat: "80%", label: "Fewer Missed Calls" },
            { stat: "60%", label: "Faster Call Resolution" },
            { stat: "4.8/5", label: "Caller Satisfaction Rating" },
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

        {/* SECTION 2 — Call intelligence */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Context, Memory & Handoff Intelligence
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              VoxAI doesn&apos;t treat every call as a blank slate. It
              remembers caller history, recognizes repeat issues, and can
              summarize intent before handing off to a human team member.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Using integrations with CRM and calendar systems, the assistant
              can check availability, propose time slots, and confirm bookings —
              all while maintaining the brand&apos;s tone of voice.
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
                "/images/voxai/ai-call-4.jpg",
                "/images/voxai/ai-call-5.jpg",
                "/images/voxai/ai-call-6.jpg",
              ]}
            />
          </motion.div>
        </section>

        {/* SECTION 3 — Operational impact */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider
              images={[
                "/images/voxai/ai-call-7.jpg",
                "/images/voxai/ai-call-8.jpg"
                
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-serif mb-6 text-[#C8A86A]">
              Front-of-House, Reimagined
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              After launch, teams reported a dramatic drop in interruptions for
              deep work, while customers experienced faster, clearer call
              handling. VoxAI filtered noise, escalated only what mattered, and
              documented everything.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Each call is logged with structured summaries, sentiment, and next
              steps — feeding into analytics that inform staffing, training, and
              service design decisions.
            </p>
          </motion.div>
        </section>

        {/* FOOTER SUMMARY */}
        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-10">
          <p className="text-neutral-400 text-sm uppercase tracking-[0.2em]">
            BUILDIQ CASE STUDY · VOXAI
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
