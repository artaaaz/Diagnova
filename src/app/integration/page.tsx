import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network, Hospital, FileSpreadsheet, Cpu, Globe2, Wifi, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Integration — Universal Connectivity for Modern Laboratories",
  description:
    "Connect Diagnova with SIMRS/HIS, RME/EMR, 500+ diagnostic analyzers, SATUSEHAT national health data, and external laboratory networks.",
  alternates: { canonical: "/integration" },
};

export default function IntegrationPage() {
  const integrations = [
    {
      slug: "simrs-his",
      title: "SIMRS / HIS Bridging",
      eyebrow: "HOSPITAL INFORMATION SYSTEM",
      desc: "Native bridging with Khanza, Medifirst2000, SIMETRIS, and custom hospital ERPs for two-way order and billing synchronization.",
      icon: Hospital,
      badge: "Native Bridge",
    },
    {
      slug: "rme",
      title: "RME / EMR Integration",
      eyebrow: "ELECTRONIC MEDICAL RECORD",
      desc: "Delivers structured, discrete laboratory parameters and longitudinal trend graphs directly into patient digital charts.",
      icon: FileSpreadsheet,
      badge: "Permenkes 24 Ready",
    },
    {
      slug: "analyzer",
      title: "500+ Laboratory Analyzers",
      eyebrow: "HARDWARE PROTOCOLS",
      desc: "Direct interfacing via HL7 and ASTM with instruments from Sysmex, Roche, Abbott, Mindray, Siemens, and Beckman Coulter.",
      icon: Cpu,
      badge: "HL7 / ASTM Native",
    },
    {
      slug: "satusehat",
      title: "SATUSEHAT Interoperability",
      eyebrow: "KEMENKES RI COMPLIANCE",
      desc: "FHIR-compliant mapping for Observation and DiagnosticReport resources, LOINC dictionaries, and automated national dispatch.",
      icon: Globe2,
      badge: "FHIR Standard",
    },
    {
      slug: "connectivity",
      title: "Smart Gateway & Connectivity",
      eyebrow: "EDGE RESILIENCE",
      desc: "99.9% uptime with Offline-Buffer Mode. Stores analyzer transactions locally during hospital network hiccups with auto-sync.",
      icon: Wifi,
      badge: "99.9% Uptime",
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
                <span>INTEROPERABILITY & CONNECTIVITY</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                Connect Diagnova with the Systems You Already Use
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Diagnova acts as the central connected laboratory operating system, integrating seamlessly with your existing medical hardware, hospital information systems, and national health networks.
              </p>
            </div>
          </div>
        </section>

        {/* Central Connected Hub Diagram */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B1528] rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden border border-slate-800">
              <span className="text-xs font-mono font-bold text-[#56ADE2] uppercase tracking-widest block mb-2">
                CENTRAL CONNECTED ECOSYSTEM
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Diagnova at the Core of Laboratory Operations
              </h3>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-[#56ADE2] block mb-1">INBOUND</span>
                  SIMRS & EMR Orders
                </div>
                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-[#56ADE2] block mb-1">HARDWARE</span>
                  500+ Analyzers (HL7/ASTM)
                </div>
                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-[#56ADE2] block mb-1">INTELLIGENCE</span>
                  Nova AI Delta Engine
                </div>
                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-[#56ADE2] block mb-1">OUTBOUND</span>
                  SATUSEHAT & WhatsApp PDF
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    href={`/integration/${item.slug}`}
                    className="group bg-white rounded-xl border border-slate-200/90 p-8 shadow-sm hover:border-[#345DAB]/40 hover:shadow-lg transition-all flex flex-col justify-between"
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
                      <span>Spesifikasi Integrasi</span>
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
              <h3 className="text-2xl font-bold">Ingin Menguji Kompatibilitas Analyzer Anda?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Tim integrasi kami dapat melakukan assessment protokol HL7/ASTM dalam hitungan hari.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Konsultasi Integrasi →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
