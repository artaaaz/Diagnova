import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hospital, Stethoscope, Microscope, Bug, HeartPulse, Sparkles, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SOLUTIONS_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions — Different Laboratory Needs, One Connected Diagnova Platform",
  description:
    "Tailored laboratory intelligence solutions for hospital networks, clinical diagnostic centers, pathology labs, microbiology, and blood banks.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const solutions = [
    {
      slug: "hospital-laboratory",
      title: "Hospital Laboratory",
      eyebrow: "FOR HOSPITAL NETWORKS",
      desc: "Emergency STAT prioritization, inpatient/outpatient high-volume management, and seamless SIMRS native bridging.",
      icon: Hospital,
      badge: "SIMRS Native",
    },
    {
      slug: "clinical-laboratory",
      title: "Clinical Laboratory",
      eyebrow: "FOR COMMERCIAL LABS",
      desc: "High-throughput commercial diagnostic centers with B2B clinic referral portal and patient WhatsApp report delivery.",
      icon: Stethoscope,
      badge: "SaaS Scale",
    },
    {
      slug: "pathology",
      title: "Anatomic Pathology",
      eyebrow: "HISTOPATHOLOGY & CYTOLOGY",
      desc: "2D matrix tissue cassette tracking, synoptic oncology reporting, and high-resolution microscopic photo attachments.",
      icon: Microscope,
      badge: "Slide Traceability",
    },
    {
      slug: "microbiology",
      title: "Clinical Microbiology",
      eyebrow: "ANTIBIOTIC STEWARDSHIP",
      desc: "Culture incubation alerts, automated CLSI/EUCAST AST interpretation, and cumulative hospital antibiograms.",
      icon: Bug,
      badge: "PPRA Ready",
    },
    {
      slug: "blood-bank",
      title: "Blood Bank Management",
      eyebrow: "TRANSFUSION SAFETY",
      desc: "Positive patient-donor barcode crossmatching, component expiry sentinel, and cold-chain temperature logs.",
      icon: HeartPulse,
      badge: "Zero Transfusion Risk",
    },
    {
      slug: "nova-ai",
      title: "Nova AI Copilot",
      eyebrow: "CLINICAL INTELLIGENCE",
      desc: "Evidence-backed longitudinal delta checks, plain-language clinical summaries, and QA anomaly detection.",
      icon: Sparkles,
      badge: "AI Assists • Doctors Decide",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-white">
        {/* Header Hero */}
        <section className="border-b border-slate-100 py-16 lg:py-24 bg-gradient-to-b from-[#F4F8FC] to-white grid-pattern-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#EBF4FA] border border-[#CAE2F1] px-3.5 py-1.5 rounded text-xs font-bold text-[#345DAB] tracking-wider uppercase">
                <span>DIAGNOVA SOLUTIONS MATRIX</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                Different Laboratory Needs, One Connected Diagnova Platform
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether managing a 1,000-bed national referral hospital or an independent commercial diagnostic network, Diagnova adapts to your operational scale and specialized clinical disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="group bg-white rounded-xl border border-slate-200/90 p-8 shadow-sm hover:border-[#345DAB]/40 hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-lg bg-blue-50 text-[#345DAB] group-hover:bg-[#345DAB] group-hover:text-white transition-colors">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-[10px] font-bold text-[#345DAB] bg-[#CAE2F1]/50 px-2 py-1 rounded">
                          {item.badge}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {item.eyebrow}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F1D33] group-hover:text-[#345DAB] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#345DAB]">
                      <span>Eksplorasi Solusi</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Action Banner */}
        <section className="py-16 bg-[#10213A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Konsultasikan Kebutuhan Spesifik Fasilitas Anda</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Kami menyediakan arsitektur solusi khusus sesuai kapasitas dan volume lab.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Request Solution Demo →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
