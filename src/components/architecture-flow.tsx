"use client";

import { Cpu, RefreshCw, Network, Zap, ShieldCheck, Server, Radio, Database } from "lucide-react";

const INFRASTRUCTURE_NODES = [
  {
    step: "01",
    title: "100% Automation & Direct Interfacing",
    tag: "HARDWARE LAYER",
    metric: "500+ Analyzers",
    description: "Bidirectional protocol translation via HL7 and ASTM eliminates manual entry errors. Worklists stream directly to instruments, and results flow straight to validation benches.",
    specs: ["HL7 / ASTM Native", "RS-232 & TCP/IP Support", "HIL Pre-Screening"],
    icon: Cpu,
  },
  {
    step: "02",
    title: "Seamless Integration & Smart Gateway",
    tag: "INTEROPERABILITY LAYER",
    metric: "99.9% Uptime",
    description: "Smart Gateway with Offline-Buffer Mode ensures zero sample loss even during hospital internet outages. Seamless bridging with SIMRS (Khanza, Medifirst), RME, and SATUSEHAT.",
    specs: ["Offline-Buffer Mode", "SATUSEHAT Ready (FHIR)", "Universal SIMRS Bridge"],
    icon: Network,
  },
  {
    step: "03",
    title: "Nova AI Assistant & Delta Check Engine",
    tag: "INTELLIGENCE LAYER",
    metric: "< 30s Panic Alerts",
    description: "Continuous real-time stream processing correlates historical records, flags abnormal physiological deviations, and drafts plain-language summaries for pathologist review.",
    specs: ["Longitudinal Delta Checks", "Explainable AI Reasoning", "Strict Doctor-in-the-Loop"],
    icon: Zap,
  },
];

export function ArchitectureFlow() {
  return (
    <div className="relative">
      {/* Central Connector Line on Desktop */}
      <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#345DAB] via-[#56ADE2] to-[#CAE2F1] -translate-x-1/2 z-0" />

      <div className="space-y-12 relative z-10">
        {INFRASTRUCTURE_NODES.map((node, idx) => {
          const Icon = node.icon;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={node.step}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? "lg:text-right" : ""
              }`}
            >
              {/* Content Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-2 lg:text-left" : "lg:order-1"
                }`}
              >
                <div className="bg-white rounded-xl p-8 border border-slate-200/90 shadow-sm hover:border-[#345DAB]/40 hover:shadow-md transition-all">
                  <div className={`flex items-center gap-3 mb-3 ${isEven ? "" : ""}`}>
                    <span className="text-xs font-mono font-bold text-[#345DAB] bg-blue-50 px-2.5 py-1 rounded">
                      STEP {node.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {node.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1D33] tracking-tight">
                    {node.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {node.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {node.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Node Badge */}
              <div className="hidden lg:flex lg:col-span-2 justify-center lg:order-2">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-[#56ADE2] shadow-lg flex items-center justify-center text-[#345DAB] hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
              </div>

              {/* Telemetry Indicator Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-1 lg:text-right" : "lg:order-3"
                }`}
              >
                <div className="bg-[#10213A] text-white p-6 rounded-xl border border-slate-700 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-[#56ADE2] uppercase">ARCHITECTURE CAPABILITY</span>
                    <span>ONLINE</span>
                  </div>
                  <p className="text-2xl font-bold text-white tracking-tight">
                    {node.metric}
                  </p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Continuous telemetry validation with zero operational lock-in and universal hardware compatibility.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
