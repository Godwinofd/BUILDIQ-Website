"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong — please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 py-20">
      {/* ✨ Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.2]" />

      {/* 🔙 Back Button */}
      <motion.button
        onClick={() => router.back()}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-8 left-8 text-[#C8A86A] text-sm uppercase tracking-[0.18em] flex items-center gap-2 hover:text-white transition"
      >
        <span className="text-lg">←</span> Back
      </motion.button>

      <div className="relative z-10 w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif text-[#C8A86A] text-center mb-8"
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-neutral-400 text-center mb-14 max-w-2xl mx-auto"
        >
          Tell us about your business or your project idea — we’ll respond
          within 24 hours.
        </motion.p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name */}
            <div>
              <label className="block text-sm tracking-[0.18em] uppercase mb-2 text-[#C8A86A]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#222] focus:border-[#C8A86A] transition rounded-md px-4 py-3 text-sm text-white placeholder-neutral-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm tracking-[0.18em] uppercase mb-2 text-[#C8A86A]">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-[#222] focus:border-[#C8A86A] transition rounded-md px-4 py-3 text-sm text-white placeholder-neutral-500"
                placeholder="john@company.com"
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm tracking-[0.18em] uppercase mb-2 text-[#C8A86A]">
                Business Name
              </label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#222] focus:border-[#C8A86A] transition rounded-md px-4 py-3 text-sm text-white placeholder-neutral-500"
                placeholder="Acme Design Co."
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm tracking-[0.18em] uppercase mb-2 text-[#C8A86A]">
                What do you want to discuss?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border border-[#222] focus:border-[#C8A86A] transition rounded-md px-4 py-3 text-sm text-white placeholder-neutral-500"
                placeholder="Tell us about your project, idea, or question..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#C8A86A] text-black uppercase tracking-[0.18em] text-sm py-4 rounded-md hover:bg-[#d8b974] transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-serif text-[#C8A86A] mb-3">
              Message Sent!
            </h3>
            <p className="text-neutral-400 text-sm">
              Thanks for reaching out. We’ll get back to you within 24 hours.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}

