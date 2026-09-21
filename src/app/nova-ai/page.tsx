import type { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Eye, 
  Brain, 
  MessageSquareText, 
  HandHelping, 
  ShieldAlert, 
  CheckCircle2, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  FileSearch,
  Scale
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Nova AI — The Intelligence Inside Diagnova",
  description:
    "Nova AI is an intelligent laboratory copilot. Observe → Understand → Explain → Assist. AI assists. Doctors decide.",
  alternates: { canonical: "/nova-ai" },
};

export default function NovaAIPage() {
  const workflowStages = [
    {
      num: "01",
      title: "OBSERVE",
      desc: "Continuous real-time ingestion of raw numerical telemetry from 500+ diagnostic analyzers and patient longitudinal records.",
      icon: Eye,
    },
    {
      num: "02",
      title: "UNDERSTAND",
      desc: "Cross-parameter correlation, automated delta checks against historical baselines, and quality anomaly detection.",
      icon: Brain,
    },
    {
      num: "03",
      title: "EXPLAIN",
      desc: "Drafts plain-language clinical narratives and transparent reasoning behind critical flags and abnormal findings.",
      icon: MessageSquareText,
    },
    {
      num: "04",
      title: "ASSIST",
      desc: "Suggests reflex testing, smear reviews, or immediate panic alert broadcasts to ward clinicians.",
      icon: HandHelping,
    },
  ];

  const capabilities = [
    { title: "Result Summarization", desc: "Transforms dense numerical parameter matrices into structured, intuitive diagnostic narratives.", icon: FileSearch },
    { title: "Longitudinal Trend Analysis", desc: "Correlates multi-visit patient data across 3 to 12 months to detect physiological drifts.", icon: TrendingUp },
    { title: "Abnormal Result Detection", desc: "Instant automated flags for values outside customized reference ranges with panic alarms.", icon: AlertTriangle },
    { title: "Automated Delta Checks", desc: "Evaluates sudden shifts in critical analytes (e.g., Hemoglobin, Creatinine, Electrolytes).", icon: Activity },
    { title: "Quality Intelligence", desc: "Monitors instrument drift and Westgard rules to prevent analytical calibration errors.", icon: Scale },
    { title: "Natural Language Queries", desc: "Enables technicians to ask conversational questions regarding reference ranges and test protocols.", icon: MessageSquareText },
  ];

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-white">
        {/* Header Hero */}
        <section className="border-b border-slate-100 py-16 lg:py-24 bg-gradient-to-b from-[#F4F8FC] via-white to-white grid-pattern-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              
              {/* Guardrail Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#EBF4FA] border border-[#CAE2F1] px-3.5 py-1.5 rounded text-xs font-bold text-[#345DAB] tracking-wider uppercase">
                <Sparkles className="size-3.5 text-[#56ADE2]" />
                <span>CLINICAL LABORATORY COPILOT</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl text-[#0F1D33] tracking-tight leading-[1.1]">
                The Intelligence <br />
                <span className="text-gradient-diagnova">Inside Diagnova</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Nova AI is an intelligent laboratory copilot engineered to augment clinical decision-making. By automating repetitive routine screening and highlighting critical patterns, Nova AI enables pathologists to focus their expertise where it matters most.
              </p>

              {/* Crucial Clinical Guardrail Box */}
              <div className="p-4 sm:p-5 rounded-lg bg-blue-50/90 border-2 border-[#56ADE2]/40 shadow-sm flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#345DAB] text-white flex-shrink-0">
                  <ShieldAlert className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1D33]">
                    Guiding Clinical Principle: &ldquo;AI assists. Doctors decide.&rdquo;
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Nova AI does not replace physicians or issue unilateral medical diagnoses. Every recommendation, delta flag, and summary is subject to human-in-the-loop review and validation by qualified medical specialists.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/nova-ai/how-it-works"
                  className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Cara Kerja Nova AI</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/nova-ai/ai-doctor"
                  className="bg-white hover:bg-slate-50 text-[#345DAB] border border-[#345DAB]/40 px-6 py-3.5 rounded-md font-semibold text-sm transition-colors"
                >
                  <span>Kemitraan AI + Dokter</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 4-Stage Workflow: Observe → Understand → Explain → Assist */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                Cognitive Architecture
              </span>
              <h2 className="text-3xl font-bold text-[#0F1D33] tracking-tight mt-1">
                Alur Kerja Kognitif 4 Tahap
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                OBSERVE → UNDERSTAND → EXPLAIN → ASSIST
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowStages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.num}
                    className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:border-[#345DAB]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#345DAB] bg-blue-50 px-2 py-0.5 rounded">
                          STAGE {stage.num}
                        </span>
                        <div className="p-2 rounded bg-slate-50 text-[#345DAB]">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#0F1D33] tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6 Core AI Capabilities */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl font-bold text-[#0F1D33] tracking-tight mt-1">
                Kapabilitas Klinis Nova AI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Dirancang khusus untuk mendukung akurasi diagnostik laboratorium modern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-slate-200/90 bg-white hover:border-[#345DAB]/40 hover:shadow-sm transition-all"
                  >
                    <div className="p-3 rounded-lg bg-blue-50 text-[#345DAB] w-fit mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F1D33]">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Action Banner */}
        <section className="py-16 bg-[#10213A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Lihat Demonstrasi Langsung Nova AI</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Pelajari bagaimana Nova AI beroperasi dengan data spesimen simulasi.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Request Nova AI Demo →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
