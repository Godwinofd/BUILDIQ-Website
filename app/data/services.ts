// -----------------------------
// SERVICE LIST
// -----------------------------
export const SERVICES = [
  { slug: "web-architecture", name: "Web Architecture & Development" },
  { slug: "ux-ui", name: "UX/UI Systems" },
  { slug: "brand-design", name: "Brand Design" },
  { slug: "ai-automation", name: "AI Automation" },
] as const;

// Type for slugs
export type ServiceSlug = typeof SERVICES[number]["slug"];

// -----------------------------
// MAP from display name → slug
// -----------------------------
export const serviceByName: Record<string, ServiceSlug> = {
  "Web Architecture & Development": "web-architecture",
  "UX/UI Systems": "ux-ui",
  "Brand Design": "brand-design",
  "AI Automation": "ai-automation",
};

// -----------------------------
// META DATA for service pages
// -----------------------------
export const SERVICE_META: Record<
  ServiceSlug,
  { title: string; description: string }
> = {
  "web-architecture": {
    title: "Web Architecture & Development",
    description:
      "High-performance website design and development — crafted with motion, visual storytelling, and scalable modern architecture.",
  },
  "ux-ui": {
    title: "UX/UI Systems",
    description:
      "Interfaces designed as systems — consistent patterns, intuitive flows, and clear hierarchy.",
  },
  "brand-design": {
    title: "Brand Design",
    description:
      "Visual identities that balance cultural relevance with minimal, timeless form.",
  },
  "ai-automation": {
    title: "AI Automation",
    description:
      "Chatbots, internal tools, and workflows that extend your team without losing human tone.",
  },
};
