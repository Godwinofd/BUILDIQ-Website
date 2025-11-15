"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/data/caseStudies";
import { SERVICES } from "@/app/data/services";

export function CaseStudiesSection() {
  return (
    <section className="bg-black text-white py-28 px-6 border-t border-[#111] relative overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.3] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif text-center mb-6 text-[#C8A86A]"
        >
          Architectural Intelligence in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-20 text-base md:text-lg"
        >
          Explore how each BuildIQ discipline comes alive through real projects.
        </motion.p>

        {/* Loop through services */}
        {SERVICES.map((service, index) => {
          const related = CASE_STUDIES.filter((cs) => cs.service === service.slug);
          if (!related.length) return null; // skip empty groups

          return (
            <div key={service.slug} className="mb-24">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-serif text-[#C8A86A] mb-10 border-l-4 border-[#C8A86A] pl-4"
              >
                {service.name}
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {related.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="group bg-gradient-to-b from-[#0B0B0B] to-[#050505] 
                               border border-[#1a1a1a] rounded-2xl p-6 
                               relative overflow-hidden hover:border-[#C8A86A]/60 
                               transition-all duration-500"
                  >
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 
                    bg-[radial-gradient(circle_at_top,_rgba(200,168,106,0.1),transparent_60%)]" />

                    <h4 className="text-lg font-semibold text-neutral-50 mb-2">
                      {project.title}
                    </h4>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {project.excerpt}
                    </p>

                    {project.metrics && (
                      <p className="text-[#C8A86A] text-xs uppercase tracking-[0.15em] mb-2">
                        {project.metrics.join(" · ")}
                      </p>
                    )}

                    {project.tech && (
                      <p className="text-neutral-500 text-[11px]">{project.tech.join(" · ")}</p>
                    )}

                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="inline-block mt-4 text-[10px] uppercase tracking-[0.18em] 
                      text-[#C8A86A] hover:text-white hover:underline transition"
                    >
                      View Project →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
