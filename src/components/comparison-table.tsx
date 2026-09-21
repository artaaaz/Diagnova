"use client";

import { Check, X, ArrowRight, ShieldAlert, Sparkles, Cpu, Layers, Activity } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  traditional: {
    title: string;
    description: string;
  };
  diagnova: {
    title: string;
    description: string;
  };
}

const COMPARISONS: ComparisonRow[] = [
  {
    dimension: "Operational Paradigm",
    traditional: {
      title: "Manual & Siloed",
      description: "Re-keying values from paper printouts, isolated bench workstations, and risk of human clerical errors.",
    },
    diagnova: {
      title: "Intelligent & Connected",
      description: "Direct bidirectional analyzer interfacing with automated specimen tracking and unified data layer.",
    },
  },
  {
    dimension: "Clinical Responsiveness",
    traditional: {
      title: "Reactive & Delayed",
      description: "Abnormal values discovered only after manual review of final printouts, delaying critical clinical interventions.",
    },
    diagnova: {
      title: "Proactive with Early Alarms",
      description: "Real-time panic flags broadcast to clinicians within seconds of analyzer completion.",
    },
  },
  {
    dimension: "Interoperability & EHR",
    traditional: {
      title: "Limited Integration",
      description: "Fragile point-to-point connections with hospital HMIS, requiring duplicate patient registration.",
    },
    diagnova: {
      title: "Universal Native Bridging",
      description: "Seamless native bridging with SIMRS, RME, SATUSEHAT, and 500+ diagnostic instruments via HL7/ASTM.",
    },
  },
  {
    dimension: "Decision Support",
    traditional: {
      title: "Manual Reference Lookup",
      description: "Technicians manually compare results against age/gender charts and paper historical records.",
    },
    diagnova: {
      title: "Nova AI Copilot & Delta Checks",
      description: "Multi-visit baseline delta checks and explainable plain-language summaries (AI assists, Doctors decide).",
    },
  },
  {
    dimension: "Compliance & Traceability",
    traditional: {
      title: "Limited Visibility",
      description: "Fragmented paper logs make tracking test modifications and reagent lots laborious during audits.",
    },
    diagnova: {
      title: "Full Digital Audit Trail",
      description: "ISO 15189-ready immutable audit logging of every barcode scan, calibration, and pathologist sign-off.",
    },
  },
];

export function ComparisonTable() {
  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* Traditional LIS Column */}
      <div className="bg-slate-50/80 rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                LEGACY PARADIGM
              </span>
              <h3 className="text-xl font-bold text-slate-700 mt-1">
                Traditional LIS
              </h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-500">
              <X className="size-5" />
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {COMPARISONS.map((item, idx) => (
              <div key={idx} className="pb-5 border-b border-slate-200/60 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-slate-400 mt-0.5">0{idx + 1}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                      {item.traditional.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.traditional.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
          High cognitive fatigue, slower turnaround times, and fragmented clinical records.
        </div>
      </div>

      {/* Diagnova Column */}
      <div className="bg-white rounded-lg border-2 border-[#345DAB]/30 shadow-lg shadow-blue-900/5 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#CAE2F1] to-[#56ADE2]/30 blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="flex items-center justify-between pb-4 border-b border-blue-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#345DAB]">
                THE MODERN BENCHMARK
              </span>
              <h3 className="text-xl font-bold text-[#0F1D33] mt-1 flex items-center gap-2">
                <span>DIAGNOVA Platform</span>
                <span className="bg-[#CAE2F1] text-[#345DAB] text-[10px] font-bold px-2 py-0.5 rounded">
                  AI-POWERED
                </span>
              </h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#345DAB] flex items-center justify-center text-white shadow-sm shadow-blue-900/20">
              <Check className="size-5" />
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {COMPARISONS.map((item, idx) => (
              <div key={idx} className="pb-5 border-b border-blue-50/80 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-[#56ADE2] font-semibold mt-0.5">0{idx + 1}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F1D33] flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#56ADE2]"></span>
                      {item.diagnova.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.diagnova.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-[#345DAB] font-semibold">
          <span>70% TAT Reduction + 99.9% Uptime</span>
          <span className="text-[#56ADE2]">From Results to Intelligence →</span>
        </div>
      </div>
    </div>
  );
}
