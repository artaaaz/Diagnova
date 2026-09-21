import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { getDemoRequests } from "@/lib/prisma";
import { AdminTable } from "@/components/admin-table";

export const metadata: Metadata = {
  title: "Demo Requests Management — Diagnova Admin",
  robots: { index: false, follow: false },
};

export default async function DemoRequestsPage() {
  const requests = await getDemoRequests();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Kembali ke Dashboard</span>
            </Link>
            <span className="text-slate-300">|</span>
            <div>
              <span className="font-display text-base tracking-tight text-[#0F1D33]">
                DEMO REQUESTS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/request-demo"
              target="_blank"
              className="text-slate-600 hover:text-[#345DAB] flex items-center gap-1 font-semibold"
            >
              <span>Formulir Publik</span>
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Manajemen Permohonan Demo
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Daftar seluruh formulir masuk dari rumah sakit, laboratorium klinik, dan bank darah.
            </p>
          </div>
        </div>

        {/* Interactive Client Table */}
        <AdminTable initialRequests={requests} />
      </div>
    </main>
  );
}
