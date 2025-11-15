import type { ServiceSlug } from "./services";

export type CaseStudy = {
  slug: string;
  title: string;
  service: ServiceSlug;
  excerpt: string;
  metrics?: string[];
  thumbnail?: string;
  tech?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  // ----------------------------------------------------
  // AI AUTOMATION (already existed)
  // ----------------------------------------------------
  {
    slug: "conversiq",
    title: "ConversIQ — AI Chatbot System",
    service: "ai-automation",
    excerpt: "Lead qualification + faster responses with brand-tone chat.",
    metrics: ["+65% faster first response", "+40% conversions"],
    thumbnail: "/images/conversiq/cover.jpg",
    tech: ["GPT API", "Next.js", "Make"],
  },
  {
    slug: "voxai",
    title: "VoxAI — AI Receptionist",
    service: "ai-automation",
    excerpt:
      "Voice-driven receptionist that books appointments and handles inbound calls with natural speech.",
    metrics: ["80% fewer missed calls", "+50% satisfaction"],
  },
  {
    slug: "flowbridge",
    title: "FlowBridge — Workflow Automation Suite",
    service: "ai-automation",
    excerpt: "Pipelines + RPA. 72% manual work reduction.",
    metrics: ["-72% manual work"],
  },

  // ----------------------------------------------------
  // WEB ARCHITECTURE (3 new)
  // ----------------------------------------------------
  
{
  slug: "quantumedge",
  title: "QuantumEdge — Modern Tech Landing Experience",
  service: "web-architecture",
  excerpt: "A kinetic landing experience for a future-tech brand, designed with motion, depth, and a high-conversion architecture.",
  metrics: ["+42% conversion uplift", "+36% avg. session time"],
  tech: ["Next.js", "GSAP Motion", "Framer", "Tailwind"],
},
{
  slug: "horizonbuild",
  title: "HorizonBuild — Construction & Architecture Showcase",
  service: "web-architecture",
  excerpt: "A premium showcase website blending architectural photography, 3D transitions, and structure-driven layouts.",
  metrics: ["+50% engagement", "+30% project enquiries"],
  tech: ["Next.js", "Three.js", "GSAP", "Cloudinary"],
},
{
  slug: "novacommerce",
  title: "NovaCommerce — High-Performance E-Commerce Platform",
  service: "web-architecture",
  excerpt: "A fast, modern e-commerce experience with micro-interactions, dynamic product displays, and conversion-first UI.",
  metrics: ["+22% checkout completion", "1.2s load time"],
  tech: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
},


  // ----------------------------------------------------
  // BRAND DESIGN (3 new)
  // ----------------------------------------------------
  {
  slug: "atlas-identity-system",
  title: "Atlas Identity System",
  service: "brand-design",
  excerpt: "A geometric, gold-on-black identity system for a modern AI consultancy.",
  metrics: ["+58% brand recall", "3× consistency across decks"],
  tech: ["Figma", "After Effects", "Web", "Print"],
},

  {
  slug: "forma-studio",
  title: "Forma Studio",
  service: "brand-design",
  excerpt: "Architectural identity emphasizing symmetry, materiality, and rhythm.",
  metrics: ["CSSDA Nominee", "43% lead quality increase"],
  tech: ["Figma", "Illustrator", "Brand System"],
},

 


  // UX/UI
{
  slug: "neuralforms-ui",
  title: "NeuralForms UI — Intelligent Form System",
  service: "ux-ui",
  excerpt: "Adaptive, predictive form logic that reduces input friction and boosts completion rates.",
  metrics: ["+70% completion rate", "40% fewer input errors"],
  tech: ["React", "Framer Motion", "OpenAI API"]
},

{
  slug: "argo-dashboard",
  title: "Argo Dashboard — Real-Time Analytics Console",
  service: "ux-ui",
  excerpt: "A motion-first dashboard with real-time data visualisation and adaptive layout behaviour.",
  metrics: ["32% faster decision-making", "60% improved readability"],
  tech: ["Next.js", "Recharts", "Zustand"]
},

{
  slug: "lumos-design-kit",
  title: "Lumos Design Kit — Modular UI Component Library",
  service: "ux-ui",
  excerpt: "A scalable system of 200+ UI components designed for rapid prototyping and production design.",
  metrics: ["60% faster prototyping", "Consistency across 4 product teams"],
  tech: ["Figma", "React Components"]
},

];
