import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICES,
  SERVICE_META,
  type ServiceSlug,
} from "../../data/services";
import {
  CASE_STUDIES,
  type CaseStudy,
} from "../../data/caseStudies";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const typedSlug = slug as ServiceSlug;

  // Validate slug
  const exists = SERVICES.some((s) => s.slug === typedSlug);
  if (!exists) notFound();

  const service = SERVICE_META[typedSlug];

  const relatedCases = CASE_STUDIES.filter(
    (c: CaseStudy) => c.service === typedSlug
  );

  return (
    <main className="bg-black text-white min-h-screen py-24 px-6 relative overflow-hidden">

      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,168,106,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,168,106,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.25] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/#services"
            className="text-[#C8A86A] text-xs uppercase tracking-[0.18em] hover:text-white transition"
          >
            ← Back
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#C8A86A] mb-4">
          {service.title}
        </h1>

        <p className="text-neutral-300 max-w-2xl mb-12 text-base md:text-lg">
          {service.description}
        </p>

        <div className="h-px w-full bg-[#1a1a1a] mb-10" />

        {/* Case studies list */}
        <h2 className="text-2xl md:text-3xl font-serif text-[#C8A86A] mb-6">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {relatedCases.map((item) => (
            <div
              key={item.slug}
              className="p-6 rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#0B0B0B] to-[#050505]"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm mb-3">
                {item.excerpt}
              </p>

              {item.metrics && (
                <p className="text-[#C8A86A] text-xs uppercase tracking-[0.16em] mb-2">
                  {item.metrics.join(" · ")}
                </p>
              )}

              {item.tech && (
                <p className="text-neutral-500 text-[11px] mb-3">
                  {item.tech.join(" · ")}
                </p>
              )}

              <Link
                href={`/case-studies/${item.slug}`}
                className="inline-block text-[10px] uppercase tracking-[0.18em] text-[#C8A86A] hover:text-white transition"
              >
                View case study →
              </Link>
            </div>
          ))}

          {relatedCases.length === 0 && (
            <p className="text-neutral-500 text-sm">
              Case studies for this service are coming soon.
            </p>
          )}
        </div>

        <div className="text-center border-t border-[#1a1a1a] pt-10 mt-16">
          <p className="text-neutral-400 text-xs uppercase tracking-[0.2em]">
            BUILDIQ · {service.title.toUpperCase()}
          </p>
        </div>
      </div>
    </main>
  );
}

