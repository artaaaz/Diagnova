import Link from "next/link";
import { 
  ArrowRight, 
  Dna, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Microscope, 
  CheckCircle2, 
  Layers, 
  Users, 
  Clock, 
  Sparkles,
  GitBranch,
  Radio,
  FileCheck
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PartnerTicker } from "@/components/partner-ticker";
import { ComparisonTable } from "@/components/comparison-table";
import { SpecimenJourney } from "@/components/specimen-journey";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { QuickDemoForm } from "@/components/quick-demo-form";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* =========================================================================
            SECTION 1 — HERO
            ========================================================================= */}
        <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-8 pb-16 lg:pt-16 lg:pb-24 grid-pattern-light">
          {/* Subtle Ambient Gradient Orb */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#CAE2F1]/40 to-[#56ADE2]/20 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-[#EBF4FA] border border-[#CAE2F1] px-3.5 py-1.5 rounded text-xs font-bold text-[#345DAB] tracking-wider uppercase">
                  <Sparkles className="size-3.5 text-[#56ADE2]" />
                  <span>AI-Powered Laboratory Intelligence Platform</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0F1D33] tracking-tight leading-[1.08]">
                  From Results <br />
                  <span className="text-gradient-diagnova">To Intelligence</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Diagnova transforms laboratory data into clinical intelligence, helping modern laboratories and hospital networks work with greater accuracy, efficiency, and clinical confidence.
                </p>

                {/* CTA Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/request-demo"
                    className="inline-flex items-center justify-center gap-2 bg-[#345DAB] hover:bg-[#284a8a] text-white px-7 py-4 rounded-md font-semibold text-sm shadow-md shadow-blue-900/20 hover:shadow-lg transition-all"
                  >
                    <span>Schedule Demo</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="/modules"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#345DAB] border border-[#345DAB]/40 px-7 py-4 rounded-md font-semibold text-sm transition-colors"
                  >
                    <span>Explore Modules</span>
                  </Link>
                </div>

                {/* Clinical Trust Micro-Indicators */}
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs text-slate-600">
                  <div>
                    <span className="font-display text-xl text-[#345DAB] block">70%</span>
                    <span className="text-slate-500 text-[11px]">Turnaround Time Reduction</span>
                  </div>
                  <div>
                    <span className="font-display text-xl text-[#345DAB] block">500+</span>
                    <span className="text-slate-500 text-[11px]">Compatible Analyzers</span>
                  </div>
                  <div>
                    <span className="font-display text-xl text-[#345DAB] block">99.9%</span>
                    <span className="text-slate-500 text-[11px]">Operational Uptime</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Clinical HUD & Microscope Intelligence Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-xl overflow-hidden border border-slate-200/90 bg-gradient-to-br from-[#0F1D33] via-[#10213A] to-[#1E3A5F] p-7 text-white shadow-2xl shadow-blue-950/20">
                  
                  {/* Top Bar Indicator */}
                  <div className="flex items-center justify-between border-b border-slate-700/70 pb-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#56ADE2] animate-pulse"></span>
                      <span className="font-mono text-[#CAE2F1] uppercase text-[11px]">DIAGNOVA CORE HUD</span>
                    </div>
                    <span className="bg-blue-500/20 text-[#56ADE2] px-2 py-0.5 rounded text-[10px] font-mono">
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Central Scientific Focus Visual */}
                  <div className="my-8 py-6 relative flex flex-col items-center justify-center text-center">
                    {/* Concentric Calibration Circles */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-56 h-56 rounded-full border border-blue-400/20 animate-spin-slow"></div>
                      <div className="w-40 h-40 rounded-full border border-dashed border-[#56ADE2]/30 absolute"></div>
                    </div>

                    <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-[#345DAB] to-[#56ADE2] p-0.5 shadow-xl flex items-center justify-center mb-4">
                      <div className="w-full h-full rounded-full bg-[#10213A] flex items-center justify-center text-white">
                        <Microscope className="size-9 text-[#56ADE2]" />
                      </div>
                    </div>

                    <h4 className="font-bold text-white text-base tracking-tight">
                      Automated Specimen Ingestion
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xs mt-1">
                      Direct HL7 capture from Sysmex XN-Series. Real-time delta check active.
                    </p>
                  </div>

                  {/* Live Telemetry Data Cards */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-md">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Specimen ID</span>
                      <p className="font-mono font-bold text-white mt-0.5">DN-2026-98421</p>
                      <span className="text-[10px] text-emerald-400 font-semibold mt-1 inline-block">● Verified Barcode</span>
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-md">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Nova AI Analysis</span>
                      <p className="font-mono font-bold text-[#56ADE2] mt-0.5">DELTA CHECK: OK</p>
                      <span className="text-[10px] text-slate-300 mt-1 inline-block">Variance &lt; 2.4%</span>
                    </div>
                  </div>

                  {/* Bottom Guardrail Badge */}
                  <div className="mt-5 pt-3 border-t border-slate-700/70 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5 text-[#56ADE2]" />
                      <span>Clinical Safety Guardrail</span>
                    </span>
                    <span className="font-medium text-slate-300">AI assists. Doctors decide.</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2 — TRUSTED BY
            ========================================================================= */}
        <PartnerTicker />

        {/* =========================================================================
            SECTION 3 — ABOUT
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Vision Statement */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#345DAB]"></span>
                  <span>About Diagnova</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1D33] tracking-tight leading-tight">
                  At Diagnova, We Transform Diagnostic Data Into Clinical Intelligence, Empowering Laboratories To Make Precise Medical Decisions.
                </h2>

                <p className="text-base text-slate-600 leading-relaxed">
                  Diagnova is far more than a traditional Laboratory Information System (LIS). It functions as an intelligent ecosystem that unites <strong>people, specimens, instruments, workflows, and clinical information</strong> into one transparent, proactive operational view.
                </p>

                {/* 4 Pillars of Connection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="text-sm font-bold text-[#0F1D33] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#345DAB]" />
                      <span>Unified Workflow Engine</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Smooth progression from collection to accessioning, analysis, and validation.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="text-sm font-bold text-[#0F1D33] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#345DAB]" />
                      <span>Universal Interoperability</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Direct HL7/ASTM interfacing with 500+ diagnostic instruments and hospital EHRs.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="text-sm font-bold text-[#0F1D33] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#345DAB]" />
                      <span>Nova AI Clinical Copilot</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Evidence-oriented insights, delta checks, and plain-language summaries.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                    <h4 className="text-sm font-bold text-[#0F1D33] flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#345DAB]" />
                      <span>Immutable Audit Trail</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Full digital traceability for every specimen revision and calibration event.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Scientific DNA Graphic Visualization */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#EBF4FA] to-[#CAE2F1]/50 border border-[#CAE2F1] p-8 sm:p-10 overflow-hidden">
                  <Dna className="absolute -right-8 -top-8 size-64 text-[#56ADE2]/20 rotate-12 pointer-events-none" />

                  <div className="relative space-y-6">
                    <span className="text-xs font-mono font-bold text-[#345DAB] uppercase tracking-wider">
                      DATA → INTELLIGENCE → INSIGHT → DECISION
                    </span>

                    <h3 className="text-xl font-bold text-[#0F1D33]">
                      The Diagnostic Intelligence Cycle
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      By converting raw numerical telemetry from medical instruments into structured, contextual clinical intelligence, Diagnova eliminates cognitive overload for pathologists and laboratory technologists.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 bg-white/90 p-3 rounded-md border border-blue-200/60 shadow-sm text-xs text-slate-800">
                        <span className="font-bold text-[#345DAB]">01</span>
                        <span>Raw Instrument Data Stream</span>
                        <span className="ml-auto text-slate-400 font-mono">100% Direct</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/90 p-3 rounded-md border border-blue-200/60 shadow-sm text-xs text-slate-800">
                        <span className="font-bold text-[#345DAB]">02</span>
                        <span>Nova AI Correlation & Delta Checks</span>
                        <span className="ml-auto text-slate-400 font-mono">Live Check</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/90 p-3 rounded-md border border-blue-200/60 shadow-sm text-xs text-slate-800">
                        <span className="font-bold text-[#345DAB]">03</span>
                        <span>Clinical Physician Decision</span>
                        <span className="ml-auto text-[#345DAB] font-bold">Doctor Decides</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4 — COMPARISON (Traditional LIS vs Diagnova)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                A Clearer Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1D33] tracking-tight">
                Why Upgrade to Diagnova?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Compare traditional legacy laboratory information systems with the modern, connected intelligence of Diagnova.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* =========================================================================
            SECTION 5 — HOW IT WORKS (Interactive Specimen Journey)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#345DAB] via-[#2A5298] to-[#56ADE2] text-white relative overflow-hidden">
          {/* Subtle Background DNA/Molecular Graphic */}
          <Dna className="absolute -left-12 -bottom-12 size-96 text-white/5 rotate-[-30deg] pointer-events-none" />
          <Dna className="absolute right-0 top-0 size-80 text-white/5 rotate-45 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
              <span className="text-xs font-bold text-[#CAE2F1] uppercase tracking-widest">
                The Specimen Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                How Diagnova Guides a Drop of Blood
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Follow the seamless digital journey of a clinical specimen from smart barcode labeling at phlebotomy to automated analysis and instant validated clinical delivery.
              </p>
            </div>

            <SpecimenJourney />
          </div>
        </section>

        {/* =========================================================================
            SECTION 6 — INFRASTRUCTURE
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                Resilient Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1D33] tracking-tight">
                Intelligent Infrastructure for Seamless Operations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Built from the ground up for high reliability, zero data loss, and smooth interoperability across hospital networks.
              </p>
            </div>

            <ArchitectureFlow />
          </div>
        </section>

        {/* =========================================================================
            SECTION 7 — CTA SECTION
            ========================================================================= */}
        <section className="py-20 lg:py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#56ADE2] uppercase tracking-wider">
                  Start the Modernization
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Transform Your Laboratory with Diagnova
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  Bring high reliability, speed, and precision to your healthcare institution today. Speak with our clinical specialists to see how Diagnova adapts to your analyzers and SIMRS.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-[#56ADE2]" />
                    <span>No CapEx Lock-In</span>
                  </span>
                  <span>•</span>
                  <span>500+ Compatible Analyzers</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
                <div className="mb-4">
                  <h4 className="text-base font-bold text-white">Dapatkan Demonstrasi Langsung</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Masukkan email institusi Anda untuk menjadwalkan konsultasi awal.
                  </p>
                </div>

                <QuickDemoForm />

                <div className="mt-4 text-center">
                  <Link
                    href="/request-demo"
                    className="text-xs text-[#56ADE2] hover:underline font-semibold"
                  >
                    Atau isi formulir kustomisasi lengkap →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* =========================================================================
          SECTION 8 — FOOTER
          ========================================================================= */}
      <SiteFooter />
    </>
  );
}
