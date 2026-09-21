import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Activity, Layers } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SubpageContent } from "@/lib/data";

interface SubpageTemplateProps {
  data: SubpageContent;
  parentSection: {
    title: string;
    href: string;
  };
  relatedPages?: { title: string; href: string }[];
}

export function SubpageTemplate({ data, parentSection, relatedPages }: SubpageTemplateProps) {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-white">
        {/* Breadcrumb & Hero Header */}
        <section className="border-b border-slate-100 py-16 lg:py-24 bg-gradient-to-b from-[#F4F8FC] to-white grid-pattern-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-[#345DAB]">Beranda</Link>
              <span>/</span>
              <Link href={parentSection.href} className="hover:text-[#345DAB]">{parentSection.title}</Link>
              <span>/</span>
              <span className="text-[#345DAB]">{data.title}</span>
            </nav>

            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#EBF4FA] border border-[#CAE2F1] px-3.5 py-1.5 rounded text-xs font-bold text-[#345DAB] tracking-wider uppercase">
                <Sparkles className="size-3.5 text-[#56ADE2]" />
                <span>{data.eyebrow}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                {data.title}
              </h1>

              <p className="text-base sm:text-xl text-[#345DAB] font-medium leading-relaxed">
                {data.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed pt-2">
                {data.description}
              </p>

              {data.quote && (
                <div className="p-4 rounded-md bg-white border-l-4 border-[#56ADE2] shadow-sm text-sm font-semibold text-[#0F1D33] italic">
                  &ldquo;{data.quote}&rdquo;
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        {data.highlights && data.highlights.length > 0 && (
          <section className="py-12 bg-slate-50/70 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.highlights.map((h, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200/90 shadow-sm">
                    {h.stat && (
                      <span className="font-display text-2xl text-[#345DAB] block mb-2">
                        {h.stat}
                      </span>
                    )}
                    <h4 className="text-base font-bold text-[#0F1D33] mb-1">{h.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Clinical Workflow / Stage Gate (if present) */}
        {data.clinicalWorkflow && data.clinicalWorkflow.length > 0 && (
          <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                  Sequential Progression
                </span>
                <h3 className="text-2xl font-bold text-[#0F1D33] mt-1">
                  Alur Operasional Terintegrasi
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.clinicalWorkflow.map((stage, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-[#345DAB] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{stage}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Tervalidasi secara digital dengan audit trail lengkap.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Detailed Key Capabilities */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                  Capabilities Matrix
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1D33] tracking-tight">
                  Standar Fungsional & Spesifikasi Klinis
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Setiap fitur dirancang khusus untuk mengurangi beban kognitif analis laboratorium dan mempercepat alur penegakan diagnosis oleh dokter.
                </p>
                <div className="p-4 rounded-lg bg-blue-50/70 border border-blue-200/80 text-xs text-slate-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#345DAB]">
                    <ShieldCheck className="size-4" />
                    <span>Clinical Compliance & Quality Assurance</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Sesuai dengan standar akreditasi laboratorium klinis ISO 15189, regulasi Kemenkes RI, dan integrasi SATUSEHAT.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {data.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg border border-slate-200/90 hover:border-[#345DAB]/40 bg-white hover:bg-slate-50/50 transition-colors flex items-start gap-4 shadow-sm"
                  >
                    <CheckCircle2 className="size-5 text-[#56ADE2] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Related Pages Navigation */}
        {relatedPages && relatedPages.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Modul & Solusi Terkait
              </p>
              <div className="flex flex-wrap gap-3">
                {relatedPages.map((rp, idx) => (
                  <Link
                    key={idx}
                    href={rp.href}
                    className="bg-white border border-slate-200/90 hover:border-[#345DAB] px-4 py-2 rounded-md text-xs font-semibold text-slate-700 hover:text-[#345DAB] transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>{rp.title}</span>
                    <ArrowRight className="size-3 text-[#56ADE2]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Action Banner */}
        <section className="py-16 bg-[#10213A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Implementasikan {data.title} di Laboratorium Anda</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Konsultasikan kebutuhan teknis dan integrasi alat bersama tim Diagnova.</p>
            </div>
            <Link
              href="/request-demo"
              className="bg-[#345DAB] hover:bg-[#284a8a] text-white px-6 py-3.5 rounded-md font-semibold text-sm shadow-md transition-all whitespace-nowrap"
            >
              Jadwalkan Demo Klinis →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
