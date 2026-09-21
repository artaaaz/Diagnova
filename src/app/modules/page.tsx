import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, HeartPulse, Boxes, Microscope, Bug, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Clinical Modules — Modular System for Specialized Laboratory Operations",
  description:
    "Explore Diagnova's 5 core clinical modules: Routine & Hematology, Blood Bank, Inventory & Reagent, Pathology, and Microbiology.",
  alternates: { canonical: "/modules" },
};

export default function ModulesPage() {
  const modules = [
    {
      num: "01",
      slug: "routine-hematology",
      title: "Routine & Hematology",
      tagline: "High-speed processing for CBC, coagulation, and clinical chemistry.",
      desc: "Handles maximum laboratory test volume with automated morphology flags, scattergram archives, and instant delta check variance alerts.",
      icon: Activity,
    },
    {
      num: "02",
      slug: "blood-bank",
      title: "Blood Bank & Transfusion Safety",
      tagline: "Complete blood unit lifecycle, compatibility testing, and cold-chain logging.",
      desc: "Guarantees zero transfusion mismatches with double-blind barcode verification, donor registries, and 5-day platelet expiration sentinels.",
      icon: HeartPulse,
    },
    {
      num: "03",
      slug: "inventory-reagent",
      title: "Inventory & Reagent Management",
      tagline: "Real-time stock monitoring, automated reorder alerts, and lot calibration.",
      desc: "Prevents laboratory downtime with per-test microliter depletion tracking, calibration lot traceability, and predictive stockout forecasting.",
      icon: Boxes,
    },
    {
      num: "04",
      slug: "pathology",
      title: "Anatomic Pathology & Cytology",
      tagline: "End-to-end specimen tracking for tissue biopsies and surgical resections.",
      desc: "Laser-etched 2D matrix cassette tracking, CAP-compliant synoptic oncology reporting, and high-resolution photomicrograph attachment.",
      icon: Microscope,
    },
    {
      num: "05",
      slug: "microbiology",
      title: "Clinical Microbiology & AST",
      tagline: "Culture incubation management, organism ID, and AST sensitivity profiles.",
      desc: "Automated CLSI/EUCAST antibiotic susceptibility interpretation, scheduled incubation alerts, and cumulative hospital antibiogram surveillance.",
      icon: Bug,
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
                <span>5 CORE CLINICAL MODULES</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                A Modular System That Adapts to Your Laboratory Operations
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Deploy individual clinical modules or the complete unified ecosystem. Diagnova provides clinical-grade depth across every laboratory discipline without architectural fragmentation.
              </p>
            </div>
          </div>
        </section>

        {/* Modules List Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.slug}
                  className="bg-white rounded-xl border border-slate-200/90 p-8 sm:p-10 shadow-sm hover:border-[#345DAB]/40 hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#345DAB] bg-blue-50 px-2.5 py-1 rounded">
                        MODULE {mod.num}
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase">
                        CLINICAL GRADE
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F1D33]">
                      {mod.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#345DAB]">
                      {mod.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8">
                    <div className="p-4 rounded-xl bg-slate-50 text-[#345DAB] border border-slate-200">
                      <Icon className="size-8" />
                    </div>

                    <Link
                      href={`/modules/${mod.slug}`}
                      className="inline-flex items-center gap-2 bg-[#345DAB] hover:bg-[#284a8a] text-white px-5 py-2.5 rounded-md text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Spesifikasi Modul</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Action Banner */}
        <section className="py-16 bg-[#10213A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Butuh Kustomisasi Modul Khusus?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Konsultasikan integrasi instrumen dan konfigurasi SOP modul bersama kami.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Jadwalkan Konsultasi Modul →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
