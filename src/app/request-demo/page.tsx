import type { Metadata } from "next";
import { DemoForm } from "@/components/demo-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ShieldCheck, Activity, Cpu, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Demo — Experience Diagnova Laboratory Intelligence",
  description:
    "Schedule a customized clinical demonstration of Diagnova Core and Nova AI tailored to your hospital or laboratory workflow.",
  alternates: { canonical: "/request-demo" },
};

export default function RequestDemoPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-slate-50/70">
        <section className="border-b border-slate-200/80 py-16 lg:py-24 bg-white grid-pattern-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Clinical Value & Reassurance */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#EBF4FA] border border-[#CAE2F1] px-3.5 py-1.5 rounded text-xs font-bold text-[#345DAB] tracking-wider uppercase">
                  <Sparkles className="size-3.5 text-[#56ADE2]" />
                  <span>CONSULTATION & DEMONSTRATION</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0F1D33] tracking-tight leading-tight">
                  Bring Clinical Intelligence to Every Diagnostic Decision
                </h1>

                <p className="text-base text-slate-600 leading-relaxed">
                  Diskusikan tantangan operasional dan integrasi instrumen di laboratorium Anda bersama konsultan teknis kami. Kami akan menyajikan simulasi workflow langsung sesuai volume dan konfigurasi fasilitas Anda.
                </p>

                {/* Value Propositions */}
                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#345DAB] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Simulasi Alur Kerja Riil</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Melihat bagaimana spesimen bergerak dari barcode phlebotomy hingga validasi klinis.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#345DAB] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Uji Kompatibilitas Analyzer</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Analisis kesiapan integrasi HL7/ASTM untuk 500+ jenis instrumen medis yang Anda miliki.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#345DAB] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Kesiapan SIMRS & SATUSEHAT</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Evaluasi kesesuaian arsitektur bridging data dengan SIMRS RS dan standar Kemenkes RI.</p>
                    </div>
                  </div>
                </div>

                {/* Trust Footer */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
                  <ShieldCheck className="size-4 text-[#345DAB]" />
                  <span>Kerahasiaan data institusi terjamin di bawah perjanjian NDA.</span>
                </div>
              </div>

              {/* Right Column: React Hook Form + Zod */}
              <div className="lg:col-span-7">
                <DemoForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
