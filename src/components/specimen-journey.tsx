"use client";

import { useState } from "react";
import { QrCode, CheckCircle2, AlertTriangle, FileText, ArrowRight, Dna, Activity, ShieldCheck, Microscope } from "lucide-react";

interface WorkflowStep {
  stepNumber: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  telemetryMetric: string;
  icon: any;
}

const STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Smart Reception & Labeling",
    category: "PRE-ANALYTICAL",
    description: "Unique barcode issuance upon phlebotomy collection prevents sample mix-ups between patients and ensures a continuous digital chain of custody.",
    details: [
      "Dynamic 2D Matrix / Barcode generation matching SIMRS order",
      "Immediate patient demographic validation via NIK & No. RM",
      "Automated tube routing to appropriate lab workbenches",
    ],
    telemetryMetric: "0% Mix-up Risk",
    icon: QrCode,
  },
  {
    stepNumber: "02",
    title: "Auto-Verification",
    category: "ANALYTICAL",
    description: "Direct protocol interfacing (HL7 / ASTM) auto-captures raw parameters directly from 500+ diagnostic instruments without manual re-keying.",
    details: [
      "Zero-keystroke numerical parameter capture directly from analyzer",
      "HIL (Hemolysis, Icterus, Lipemia) index pre-screening alerts",
      "Automated release for normal results meeting protocol thresholds",
    ],
    telemetryMetric: "Instant Ingestion",
    icon: CheckCircle2,
  },
  {
    stepNumber: "03",
    title: "Early Detection & Delta Checks",
    category: "INTELLIGENCE LAYER",
    description: "Nova AI compares current findings against multi-visit historical baselines, highlighting sudden physiological variances and critical panic limits.",
    details: [
      "Delta check algorithm evaluating 3-12 month patient baselines",
      "Instant critical panic alerts dispatched to ward clinicians (<30s)",
      "Plain-language clinical narrative drafting for pathologist review",
    ],
    telemetryMetric: "< 30s Panic Alert",
    icon: AlertTriangle,
  },
  {
    stepNumber: "04",
    title: "Accurate Results Ready",
    category: "POST-ANALYTICAL",
    description: "Clinically validated reports are instantly delivered across hospital EHR, patient portal, WhatsApp, and digital PDF with verifiable QR codes.",
    details: [
      "Pathologist digital signature with anti-tamper QR code",
      "Direct auto-synchronization to SIMRS, RME, and SATUSEHAT",
      "Patient-friendly graphical report with reference spectrum gauges",
    ],
    telemetryMetric: "70% TAT Reduction",
    icon: FileText,
  },
];

export function SpecimenJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      {/* Step Tabs / Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-6 rounded-lg transition-all border ${
                isActive
                  ? "bg-white text-slate-900 border-white shadow-xl shadow-blue-950/20 scale-[1.02]"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? "text-[#345DAB]" : "text-white/70"}`}>
                  {step.stepNumber} / 04
                </span>
                <div className={`p-2 rounded-md ${isActive ? "bg-blue-50 text-[#345DAB]" : "bg-white/10 text-white"}`}>
                  <Icon className="size-4" />
                </div>
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isActive ? "text-[#56ADE2]" : "text-white/60"}`}>
                {step.category}
              </span>
              <h3 className="text-base font-bold leading-snug">
                {step.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Spotlight */}
      <div className="mt-8 bg-white/95 text-slate-900 rounded-xl p-8 sm:p-10 shadow-2xl border border-white/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#345DAB] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              <span>Stage {STEPS[activeStep].stepNumber}</span>
              <span>•</span>
              <span>{STEPS[activeStep].category}</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-[#0F1D33] tracking-tight">
              {STEPS[activeStep].title}
            </h4>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {STEPS[activeStep].description}
            </p>

            <div className="pt-3 space-y-2.5">
              {STEPS[activeStep].details.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#345DAB] mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#10213A] text-white p-6 rounded-lg border border-slate-700 relative overflow-hidden">
            {/* Background DNA Graphic Accent */}
            <Dna className="absolute -right-6 -bottom-6 size-40 text-blue-400/10 rotate-45 pointer-events-none" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <span className="text-[11px] font-mono text-[#56ADE2] uppercase tracking-wider">
                  TELEMETRY BENCHMARK
                </span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                  STAGE {STEPS[activeStep].stepNumber}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Outcome Metric</span>
                <p className="text-2xl font-bold text-white mt-0.5">
                  {STEPS[activeStep].telemetryMetric}
                </p>
              </div>

              <div className="p-3 rounded bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <p className="font-semibold text-[#56ADE2] flex items-center gap-1.5">
                  <Activity className="size-3.5" />
                  <span>Clinical Assurance Protocol</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
                  Automated validation parameters calibrated against ISO 15189 laboratory standards.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>Guardrail: AI assists. Doctors decide.</span>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % STEPS.length)}
                  className="text-[#56ADE2] font-semibold hover:text-white flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="size-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
