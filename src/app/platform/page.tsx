import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, Activity, FileText, CheckCircle2, BarChart3, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PLATFORM_SUBPAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Platform — One Platform to Manage the Entire Laboratory Workflow",
  description:
    "Diagnova Core, Flow, and Insight unify specimen collection, accessioning, direct analyzer interfacing, auto-verification, and reporting.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  const subpages = [
    {
      slug: "overview",
      name: "Platform Overview",
      title: "One Platform to Manage the Entire Laboratory Workflow",
      desc: "Comprehensive orchestration connecting people, specimens, instruments, and clinical decisions.",
      icon: Layers,
    },
    {
      slug: "workflow",
      name: "Diagnova Flow (Workflow Engine)",
      title: "Specimen Collection → Accessioning → Processing → Analysis → Validation → Reporting",
      desc: "Eliminates redundant steps with strict stage-gate digital chain-of-custody tracking.",
      icon: Activity,
    },
    {
      slug: "automation",
      name: "Automation & Interfacing",
      title: "100% Automation & Direct Analyzer Interfacing",
      desc: "Direct protocol capture from 500+ analyzers via HL7/ASTM with automated reflex rules.",
      icon: Cpu,
    },
    {
      slug: "reporting",
      name: "Clinical Reporting",
      title: "Structured, Clear & Actionable Diagnostic Reports",
      desc: "Color-coded reference spectrum gauges, longitudinal trend charts, and anti-tamper QR codes.",
      icon: FileText,
    },
    {
      slug: "analytics",
      name: "Diagnova Insight (TAT Analytics)",
      title: "Operational Intelligence & Quality Indicators",
      desc: "Granular pre/analytical/post TAT breakdown, workload balancing, and Levey-Jennings QC tracking.",
      icon: BarChart3,
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
                <span>DIAGNOVA PLATFORM ARCHITECTURE</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                One Platform to Manage the Entire Laboratory Workflow
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From bedside phlebotomy collection to final clinical sign-off, Diagnova delivers end-to-end operational visibility, eliminates manual transcription errors, and accelerates Turnaround Time (TAT) by up to 70%.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow Progression Visual */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
              Continuous Specimen Progression
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                "1. Specimen Collection",
                "2. Accessioning & Barcode",
                "3. Processing & Routing",
                "4. Direct Analysis",
                "5. Doctor Validation",
                "6. Multi-channel Reporting",
              ].map((step, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 rounded-md text-xs font-semibold text-slate-800">
                  <span className="text-[#345DAB] font-mono block text-[10px] mb-1">STAGE 0{idx + 1}</span>
                  {step.split(". ")[1]}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subpages Deep Dive Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subpages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/platform/${item.slug}`}
                    className="group bg-white rounded-xl border border-slate-200/90 p-8 shadow-sm hover:border-[#345DAB]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-lg bg-blue-50 text-[#345DAB] group-hover:bg-[#345DAB] group-hover:text-white transition-colors">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#56ADE2]">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-[#345DAB] uppercase tracking-wider block mb-1">
                        {item.name}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F1D33] group-hover:text-[#345DAB] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#345DAB]">
                      <span>Pelajari Selengkapnya</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[#10213A] text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Siap Mengoptimalkan Operasional Laboratorium Anda?</h3>
              <p className="text-sm text-slate-300 mt-1">Jadwalkan demonstrasi langsung bersama konsultan teknis kami.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Request Platform Demo →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
