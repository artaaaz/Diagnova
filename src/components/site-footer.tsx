import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Cpu, Sparkles, Activity } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1528] text-white border-t border-slate-800">
      {/* Top Banner / Philosophy */}
      <div className="border-b border-slate-800/80 bg-[#10213A]/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56ADE2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#56ADE2]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              PHILOSOPHY: <span className="text-[#56ADE2]">DATA → INTELLIGENCE → INSIGHT → DECISION</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-3 py-1 rounded text-xs text-slate-300">
            <ShieldCheck className="size-3.5 text-[#56ADE2]" />
            <span>Guiding Principle: <strong className="text-white font-medium">AI assists. Doctors decide.</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-10">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#345DAB] to-[#56ADE2] flex items-center justify-center text-white font-bold text-base">
                DN
              </div>
              <span className="font-display text-2xl tracking-tight text-white">
                DIAGNOVA
              </span>
            </Link>
            <p className="text-xs font-semibold text-[#56ADE2] tracking-wider uppercase">
              From Results to Intelligence
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Diagnova transforms laboratory data into clinical intelligence, helping modern laboratories and hospital networks work with greater accuracy, speed, and confidence.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="bg-slate-800/60 border border-slate-700 px-2 py-1 rounded">ISO 15189 Ready</span>
              <span className="bg-slate-800/60 border border-slate-700 px-2 py-1 rounded">SATUSEHAT Compliant</span>
              <span className="bg-slate-800/60 border border-slate-700 px-2 py-1 rounded">HL7 / ASTM Native</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Platform</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/platform/overview" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/platform/workflow" className="hover:text-white transition-colors">Workflow Engine</Link></li>
              <li><Link href="/platform/automation" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/platform/reporting" className="hover:text-white transition-colors">Reporting</Link></li>
              <li><Link href="/platform/analytics" className="hover:text-white transition-colors">TAT Analytics</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Solutions</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/solutions/hospital-laboratory" className="hover:text-white transition-colors">Hospital Lab</Link></li>
              <li><Link href="/solutions/clinical-laboratory" className="hover:text-white transition-colors">Clinical Lab</Link></li>
              <li><Link href="/solutions/pathology" className="hover:text-white transition-colors">Pathology</Link></li>
              <li><Link href="/solutions/microbiology" className="hover:text-white transition-colors">Microbiology</Link></li>
              <li><Link href="/solutions/blood-bank" className="hover:text-white transition-colors">Blood Bank</Link></li>
              <li><Link href="/solutions/nova-ai" className="hover:text-white transition-colors">Nova AI</Link></li>
            </ul>
          </div>

          {/* Column 3: Modules */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Modules</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/modules/routine-hematology" className="hover:text-white transition-colors">Routine & Hematology</Link></li>
              <li><Link href="/modules/blood-bank" className="hover:text-white transition-colors">Blood Bank</Link></li>
              <li><Link href="/modules/inventory-reagent" className="hover:text-white transition-colors">Inventory & Reagent</Link></li>
              <li><Link href="/modules/pathology" className="hover:text-white transition-colors">Pathology</Link></li>
              <li><Link href="/modules/microbiology" className="hover:text-white transition-colors">Microbiology</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect & Admin */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">Integrations</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/integration/simrs-his" className="hover:text-white transition-colors">SIMRS / HIS</Link></li>
              <li><Link href="/integration/rme" className="hover:text-white transition-colors">RME / EMR</Link></li>
              <li><Link href="/integration/analyzer" className="hover:text-white transition-colors">500+ Analyzers</Link></li>
              <li><Link href="/integration/satusehat" className="hover:text-white transition-colors">SATUSEHAT</Link></li>
              <li><Link href="/integration/connectivity" className="hover:text-white transition-colors">Smart Gateway</Link></li>
              <li className="pt-2 border-t border-slate-800">
                <Link href="/request-demo" className="text-[#56ADE2] font-semibold hover:text-white flex items-center gap-1">
                  <span>Schedule Demo</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} DIAGNOVA Healthcare Intelligence. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-200 transition-colors">Security & Audit Trail</Link>
            <Link href="/admin/login" className="text-slate-400 hover:text-[#56ADE2] transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
