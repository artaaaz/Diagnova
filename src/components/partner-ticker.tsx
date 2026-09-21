"use client";

import { Building2, Landmark, Stethoscope, HeartPulse, Hospital, ShieldCheck } from "lucide-react";

const PARTNERS = [
  { name: "RSUP Dr. Cipto Mangunkusumo Network", type: "National Referral Hospital", icon: Hospital },
  { name: "Siloam Hospitals Laboratory Group", type: "Private Healthcare Network", icon: HeartPulse },
  { name: "Laboratorium Klinik Utama Prima", type: "Clinical Diagnostic Center", icon: Stethoscope },
  { name: "RS Kanker Dharmais Partner Network", type: "Specialized Oncology Center", icon: Landmark },
  { name: "Pramita Diagnostic Network", type: "Multi-branch Clinical Lab", icon: Building2 },
  { name: "RS Hermina Healthcare System", type: "Integrated Hospital Group", icon: Hospital },
];

export function PartnerTicker() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/70 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#345DAB]"></span>
            <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              DIPERCAYA OLEH
            </p>
          </div>
          <p className="text-xs text-slate-500 max-w-md text-center md:text-right">
            Dipercaya oleh institusi rumah sakit dan laboratorium terkemuka di seluruh Indonesia.
          </p>
        </div>

        {/* Desktop Grid / Mobile Horizontal Scroll */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-2 md:pb-0 scrollbar-none md:grid md:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-auto p-4 bg-white rounded-md border border-slate-200/90 shadow-sm hover:border-[#345DAB]/40 hover:shadow transition-all group"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded bg-blue-50 text-[#345DAB] group-hover:bg-[#345DAB] group-hover:text-white transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    PARTNER
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#345DAB] transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {partner.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
