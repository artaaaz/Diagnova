"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Layers, 
  Activity, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Globe 
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  subitems?: { name: string; href: string; desc: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Platform",
    href: "/platform",
    subitems: [
      { name: "Overview", href: "/platform/overview", desc: "One platform to manage the entire laboratory workflow" },
      { name: "Workflow Engine", href: "/platform/workflow", desc: "Specimen collection to clinical validation" },
      { name: "Automation", href: "/platform/automation", desc: "Direct analyzer interfacing & auto-verification" },
      { name: "Reporting", href: "/platform/reporting", desc: "Structured, clear & multi-channel diagnostic reports" },
      { name: "Analytics (TAT)", href: "/platform/analytics", desc: "70% TAT reduction, quality indicators & workload" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    subitems: [
      { name: "Hospital Laboratory", href: "/solutions/hospital-laboratory", desc: "High-volume inpatient/outpatient & SIMRS bridging" },
      { name: "Clinical Laboratory", href: "/solutions/clinical-laboratory", desc: "Commercial diagnostic centers & patient self-service" },
      { name: "Pathology", href: "/solutions/pathology", desc: "Digital histopathology, cytology & slide tracking" },
      { name: "Microbiology", href: "/solutions/microbiology", desc: "Culture tracking & AST antibiotic stewardship" },
      { name: "Blood Bank", href: "/solutions/blood-bank", desc: "Transfusion safety, crossmatching & cold-chain" },
      { name: "Nova AI Copilot", href: "/solutions/nova-ai", desc: "Explainable clinical AI copilot for laboratories" },
    ],
  },
  {
    name: "Modules",
    href: "/modules",
    subitems: [
      { name: "Routine & Hematology", href: "/modules/routine-hematology", desc: "CBC, coagulation & automated blood smear review" },
      { name: "Blood Bank Management", href: "/modules/blood-bank", desc: "Donor registry, crossmatch & inventory expiry alerts" },
      { name: "Inventory & Reagent", href: "/modules/inventory-reagent", desc: "Real-time stock monitoring & per-test depletion" },
      { name: "Anatomic Pathology", href: "/modules/pathology", desc: "2D matrix cassette tracking & synoptic reports" },
      { name: "Clinical Microbiology", href: "/modules/microbiology", desc: "Culture workbenches & automated CLSI/EUCAST AST" },
    ],
  },
  {
    name: "Nova AI",
    href: "/nova-ai",
    subitems: [
      { name: "AI Overview", href: "/nova-ai", desc: "Observe → Understand → Explain → Assist" },
      { name: "How It Works", href: "/nova-ai/how-it-works", desc: "Real-time analyzer stream & delta check engine" },
      { name: "AI + Doctor", href: "/nova-ai/ai-doctor", desc: "Human-in-the-loop: AI assists. Doctors decide." },
    ],
  },
  {
    name: "Integration",
    href: "/integration",
    subitems: [
      { name: "Integration Hub", href: "/integration", desc: "Universal connectivity for modern laboratories" },
      { name: "SIMRS / HIS Bridging", href: "/integration/simrs-his", desc: "Khanza, Medifirst & custom hospital systems" },
      { name: "RME / EMR Sync", href: "/integration/rme", desc: "Structured lab results for electronic medical records" },
      { name: "500+ Analyzers", href: "/integration/analyzer", desc: "Direct HL7 / ASTM protocols with legacy support" },
      { name: "SATUSEHAT", href: "/integration/satusehat", desc: "FHIR-compliant national health platform readiness" },
      { name: "Smart Gateway", href: "/integration/connectivity", desc: "99.9% uptime with Offline-Buffer Mode" },
    ],
  },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"ID" | "EN">("ID");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#345DAB] to-[#56ADE2] flex items-center justify-center text-white shadow-sm shadow-blue-900/10 transition-transform group-hover:scale-105">
              <span className="font-bold text-lg tracking-tighter">DN</span>
            </div>
            <div>
              <span className="font-display text-xl tracking-tight text-[#0F1D33] group-hover:text-[#345DAB] transition-colors">
                DIAGNOVA
              </span>
              <span className="block text-[9px] font-semibold tracking-wider text-[#56ADE2] uppercase -mt-1">
                Laboratory Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const isOpen = activeDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActive
                        ? "text-[#345DAB] bg-blue-50/70"
                        : "text-slate-700 hover:text-[#345DAB] hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                    {item.subitems && (
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#345DAB]" : "text-slate-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subitems && isOpen && (
                    <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-lg border border-slate-200/90 shadow-xl shadow-slate-900/10 p-2 overflow-hidden">
                        <div className="px-3 py-2 border-b border-slate-100 mb-1">
                          <p className="text-xs font-bold text-[#345DAB] uppercase tracking-wider">
                            {item.name} Solutions
                          </p>
                        </div>
                        <div className="space-y-0.5">
                          {item.subitems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="group block p-2.5 rounded-md hover:bg-[#F4F8FC] transition-colors"
                            >
                              <div className="text-xs font-semibold text-slate-900 group-hover:text-[#345DAB] flex items-center justify-between">
                                <span>{sub.name}</span>
                                <ArrowRight className="size-3 text-[#56ADE2] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#345DAB] border border-slate-200 rounded px-2 py-1 transition-colors"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="size-3.5 text-[#56ADE2]" />
              <span>{lang}</span>
            </button>

            {/* Request Demo Button */}
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center gap-2 bg-[#345DAB] hover:bg-[#284a8a] text-white px-4 py-2 text-sm font-semibold rounded-md shadow-sm shadow-blue-900/20 transition-all hover:shadow hover:-translate-y-0.5"
            >
              <span>Request Demo</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
              className="text-xs font-semibold text-slate-600 border border-slate-200 rounded px-2 py-1 mr-1"
            >
              {lang}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#345DAB] hover:bg-slate-100 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                <Link
                  href={item.href}
                  className="block py-2 text-base font-semibold text-slate-900 hover:text-[#345DAB]"
                >
                  {item.name}
                </Link>
                {item.subitems && (
                  <div className="pl-3 space-y-1.5 mt-1 border-l-2 border-[#CAE2F1]">
                    {item.subitems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-xs text-slate-600 hover:text-[#345DAB] py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/request-demo"
              className="w-full flex items-center justify-center gap-2 bg-[#345DAB] text-white py-3 px-4 rounded-md font-semibold text-sm shadow-md"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
