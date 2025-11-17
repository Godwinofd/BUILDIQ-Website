"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"
// import CustomCursor from "@/components/ui/CustomCursor"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import Link from "next/link"
import { HiOutlineSearch, HiOutlineLightBulb, HiOutlineCog, HiOutlineCheck } from "react-icons/hi";




// ---------------- LOADER ----------------

function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval)
          setTimeout(() => onFinish(), 400)
          return 100
        }
        return old + 2
      })
    }, 45)
    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
    >
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(200,168,106,0.22)_0%,rgba(0,0,0,0)_70%)] blur-3xl" />
      <motion.h1
        className="text-5xl md:text-7xl font-serif text-[#C8A86A] tracking-tight relative z-10"
        animate={{
          textShadow: [
            "0 0 6px rgba(200,168,106,0.45)",
            "0 0 16px rgba(200,168,106,0.9)",
            "0 0 6px rgba(200,168,106,0.45)",
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        BuildIQ
      </motion.h1>

      <div className="relative w-40 h-[3px] mt-6 bg-[#171717] overflow-hidden rounded-full">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full bg-[#C8A86A]"
        />
      </div>
    </motion.div>
  )
}

// ---------------- PARTICLE BACKGROUND ----------------

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouse = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Radial gold gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      )
      gradient.addColorStop(0, "rgba(200,168,106,0.09)")
      gradient.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "rgba(200,168,106,0.05)"
      const grid = 80
      for (let x = 0; x < canvas.width; x += grid) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += grid) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Particle logic
      for (const p of particles) {
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouse.current.radius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouse.current.radius - dist) / mouse.current.radius
          p.x -= Math.cos(angle) * force * 1.4
          p.y -= Math.sin(angle) * force * 1.4
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(200,168,106,0.85)"
        ctx.fill()
      }

      requestAnimationFrame(draw)
    }

    const mouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener("mousemove", mouseMove)
    draw()

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-[1500ms] ease-in-out"
    />
  )
}

// ---------------- NAVBAR ----------------

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 pt-7 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-3xl font-serif tracking-wide text-[#C8A86A] cursor-pointer">
  BIQ
</Link>


      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-10 text-sm text-white">
        <a href="#about" className="hover:text-[#C8A86A] transition">About</a>
        <a href="#services" className="hover:text-[#C8A86A] transition">Services</a>
        <a href="#contact" className="hover:text-[#C8A86A] transition">Contact</a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md border-t border-[#222] py-6 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 text-white text-sm">
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-[#C8A86A] transition"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="hover:text-[#C8A86A] transition"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-[#C8A86A] transition"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


// ---------------- HERO ----------------

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden px-4 sm:px-6 md:px-10">
      <Navbar />
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative flex flex-col items-center justify-center flex-1 px-6 pt-16 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-serif tracking-[0.05em]"
        >
          BuildIQ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-neutral-200 max-w-3xl"
        >
          We design and automate digital spaces with architectural precision.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mt-6 text-xs md:text-sm tracking-[0.35em] uppercase text-[#C8A86A]"
        >
          Web · UX/UI · Brand Design · AI Automation
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
          className="mt-10 inline-flex items-center justify-center px-14 py-4 border border-white text-sm tracking-[0.18em] uppercase hover:bg-white hover:text-black transition"
        >
          Enter the Space
        </motion.a>

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


      </div>

      <div className="relative flex flex-col items-center pb-10 z-10">
        <span className="text-[10px] tracking-[0.2em] text-[#C8A86A]">Scroll</span>
        <span className="mt-2 text-[#C8A86A] text-xs">↓</span>
      </div>
    </section>
  )
}

// ---------------- ABOUT ----------------

function AboutSection() {
  const principles = [
    {
      icon: "◇",
      title: "Architecture Thinking",
      desc: "We build systems, not pages.",
    },
    {
      icon: "◉",
      title: "AI Integration",
      desc: "Automation that amplifies human potential.",
    },
    {
      icon: "△",
      title: "Cultural Design",
      desc: "Informed by people, grounded in meaning.",
    },
    {
      icon: "▢",
      title: "Human Connection",
      desc: "Technology that speaks like humans do.",
    },
  ]

  return (
    <section id="about" className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.4] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-12 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-2xl">
          <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-3xl sm:text-4xl md:text-6xl font-serif leading-snug md:leading-tight mb-6 text-center md:text-left px-2"
>
  Where{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A86A] to-[#b39156]">
    Architecture
  </span>{" "}
  Meets <br className="sm:hidden" /> Intelligence
</motion.h2>


          <div className="h-[2px] w-40 bg-[#C8A86A] mb-10" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-neutral-300 text-base md:text-[17px] leading-relaxed mb-6"
          >
            We don't just build websites — we{" "}
            <span className="text-[#C8A86A]">architect digital experiences</span>{" "}
            with the precision of structural engineers and the vision of creative
            innovators. Every pixel, interaction, and automation is designed with
            intentionality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-neutral-300 text-base md:text-[17px] leading-relaxed"
          >
            At BuildIQ, we merge{" "}
            <span className="text-[#C8A86A]">cultural intelligence</span> with
            cutting-edge{" "}
            <span className="text-[#C8A86A]">AI automation</span>, creating
            solutions that are as structurally sound as they are visually
            striking. We believe technology should feel{" "}
            <span className="text-[#C8A86A]">
              human, refined, and effortlessly intelligent.
            </span>
          </motion.p>

          
        </div>

        {/* RIGHT — ROBOT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative w-full h-[280px] sm:h-[380px] md:h-[550px] lg:h-[620px] mt-10 md:mt-0"

        >
          <SplineScene scene="/scene.splinecode" className="w-full h-full" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* QUOTE LINE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="text-[#C8A86A] italic text-lg md:text-xl font-serif text-center mt-24"
      >
        "We don't design for screens — we design for systems that think."
      </motion.p>

      {/* 4 PRINCIPLES */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
        {principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-[#C8A86A] text-3xl mb-3">{item.icon}</div>
            <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
            <p className="text-neutral-400 text-xs max-w-[180px] mx-auto">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}



// ---------------- SERVICES ----------------

function ServicesSection() {
  const services = [
  {
    title: "Web Architecture & Development",
    slug: "web-architecture",
    desc: "Robust, scalable builds with an architectural mindset — fast, durable, and intentional.",
  },
  {
    title: "UX/UI Systems",
    slug: "ux-ui",
    desc: "Interfaces designed as systems — consistent patterns, intuitive flows, and clear hierarchy.",
  },
  {
    title: "Brand Design",
    slug: "brand-design",
    desc: "Visual identities that balance cultural relevance with minimal, timeless form.",
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    desc: "Chatbots, internal tools, and workflows that extend your team without losing human tone.",
  },
];


  return (
    <section
      id="services"
      className="bg-gradient-to-b from-black via-[#050505] to-black text-white py-24 px-4 border-t border-[#111]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif text-center mb-4 text-[#C8A86A]"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base"
        >
          Four disciplines working as one system — designing, expressing, and
          automating your digital presence with structural clarity.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="relative group p-6 rounded-2xl border border-[#202020] bg-gradient-to-b from-[#0B0B0B] to-[#050505] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(200,168,106,0.16),transparent_70%)]" />

              <h3 className="text-lg font-semibold text-neutral-50 mb-2">
                {service.title}
              </h3>

              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* 🔗 Updated Link — now uses slug */}
              <Link href={`/services/${service.slug}`} scroll={false}>
  <div className="cursor-pointer group">
    {/* service card content here */}
    <p className="text-[#C8A86A] mt-3 uppercase text-xs tracking-[0.18em] group-hover:text-white transition">
      Explore Capability →
    </p>
  </div>
</Link>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- OUR PROCESS ----------------

function ProcessSection() {
  const steps = [
    {
      icon: <HiOutlineSearch className="w-10 h-10 text-[#C8A86A]" />,
      title: "Discovery & Alignment",
      desc: "We start with in-depth discovery — understanding your structure, workflows, and long-term goals to ensure our solution fits your business like architecture fits its foundation.",
    },
    {
      icon: <HiOutlineLightBulb className="w-10 h-10 text-[#C8A86A]" />,
      title: "Blueprint & System Design",
      desc: "We translate insights into a blueprint. Each element — UX, automation, or web system — is mapped intentionally for scalability and coherence.",
    },
    {
      icon: <HiOutlineCog className="w-10 h-10 text-[#C8A86A]" />,
      title: "Build & Iterate",
      desc: "We develop with precision — structured code, elegant UI, and AI automation that feels human. Each iteration refines both function and form.",
    },
    {
      icon: <HiOutlineCheck className="w-10 h-10 text-[#C8A86A]" />,
      title: "Delivery & Optimization",
      desc: "After launch, we optimize for speed, data flow, and engagement. Our process is continuous — design, build, refine — ensuring long-term performance.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-36 px-6 overflow-hidden border-t border-[#111]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.15]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-serif text-[#C8A86A] mb-4"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          A structured creative process that bridges discovery, design, and technology — ensuring every outcome is intentional, scalable, and human-centered.
        </motion.p>
      </div>

      <div className="relative grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative group p-8 rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0B0B0B] to-[#050505] backdrop-blur-lg overflow-hidden hover:border-[#C8A86A]/50 hover:shadow-[0_0_25px_rgba(200,168,106,0.2)] transition"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,168,106,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {step.desc}
              </p>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#C8A86A] opacity-70">
                Step {index + 1}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute right-[-4%] top-1/2 w-[8%] h-[1px] bg-gradient-to-r from-[#C8A86A]/40 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-24 border-t border-[#1a1a1a] pt-10">
        <p className="text-neutral-400 text-xs uppercase tracking-[0.2em]">
          BUILDIQ · Process Driven, Outcome Focused
          
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-36 px-6 border-t border-[#111] overflow-hidden"
    >
      {/* ✨ Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.2]" />

      {/* ✨ Centered content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif text-[#C8A86A] mb-6"
        >
          Let’s Build Something Intelligent
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Ready to bring your vision to life?  
          Book a discovery call or send us a message — we’ll architect a digital system that aligns perfectly with your goals.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Calendly button */}
          <motion.a
            href="https://calendly.com/enquiry-buildiqs/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 border border-[#C8A86A] text-[#C8A86A] uppercase tracking-[0.18em] text-xs hover:bg-[#C8A86A] hover:text-black transition rounded-full"
          >
            Book a Discovery Call
          </motion.a>

          {/* Message form */}
          <motion.a
  href="/contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="px-10 py-4 border border-white text-white uppercase tracking-[0.18em] text-xs hover:bg-white hover:text-black transition rounded-full"
>
  Send a Message
</motion.a>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-neutral-500 text-xs mt-14 uppercase tracking-[0.2em]"
        >
          BuildIQ · Precision in Every Pixel
        </motion.p>
      </div>
    </section>
  );
}










// ---------------- PAGE EXPORT ----------------

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setFadeIn(true), )
    }
  }, [loading])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* <CustomCursor /> */}
      <AnimatePresence>{loading && <Loader onFinish={() => setLoading(false)} />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeIn ? 1 : 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        {!loading && (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <ContactSection />
            
          </>

          


        )}
      </motion.div>
    </main>
  )
}
