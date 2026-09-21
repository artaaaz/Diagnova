import type { Metadata } from "next";
import Link from "next/link";
import { 
  Users, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Building2, 
  LogOut, 
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Activity
} from "lucide-react";
import { getDemoRequests } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Admin Dashboard — Diagnova",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const requests = await getDemoRequests();

  const total = requests.length;
  const newCount = requests.filter((r) => r.status === "NEW").length;
  const contactedCount = requests.filter((r) => r.status === "CONTACTED").length;
  const qualifiedCount = requests.filter((r) => r.status === "QUALIFIED").length;
  const closedCount = requests.filter((r) => r.status === "CLOSED").length;

  const stats = [
    { label: "Total Permohonan", value: total, icon: Users, color: "text-[#345DAB]", bg: "bg-blue-50" },
    { label: "Permohonan Baru", value: newCount, icon: Clock, color: "text-[#56ADE2]", bg: "bg-cyan-50" },
    { label: "Telah Dihubungi", value: contactedCount, icon: UserCheck, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Terkualifikasi (Qualified)", value: qualifiedCount, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Selesai (Closed)", value: closedCount, icon: XCircle, color: "text-slate-600", bg: "bg-slate-100" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#345DAB] to-[#56ADE2] flex items-center justify-center text-white font-bold text-sm">
              DN
            </div>
            <div>
              <span className="font-display text-lg tracking-tight text-[#0F1D33]">
                DIAGNOVA ADMIN
              </span>
              <span className="block text-[9px] font-bold text-[#56ADE2] uppercase -mt-0.5">
                Clinical Intelligence Center
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link
              href="/admin/demo-requests"
              className="bg-[#345DAB] text-white px-3.5 py-2 rounded-md hover:bg-[#284a8a] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Kelola Demo Requests</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <Link
              href="/"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-2 rounded-md transition-colors flex items-center gap-1"
            >
              <span>Lihat Website</span>
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#10213A] to-[#1E3A5F] text-white rounded-xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#56ADE2] uppercase">
              OPERATIONAL OVERVIEW
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold mt-1">
              Dashboard Manajemen Permohonan Demo
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Pantau prospek institusi rumah sakit dan laboratorium yang mengajukan demonstrasi Diagnova.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-xs backdrop-blur-sm">
            <span className="text-slate-300 block text-[10px] uppercase">Status Sistem</span>
            <span className="font-bold text-[#56ADE2] flex items-center gap-1.5 mt-0.5">
              <Activity className="size-3.5" />
              Database Online & Sinkron
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500">{st.label}</span>
                  <div className={`p-2 rounded-md ${st.bg} ${st.color}`}>
                    <Icon className="size-4" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 tracking-tight">
                  {st.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recent Demo Requests */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Permohonan Demo Terbaru</h3>
              <p className="text-xs text-slate-500 mt-0.5">5 data permohonan terkini yang masuk ke sistem.</p>
            </div>
            <Link
              href="/admin/demo-requests"
              className="text-xs font-bold text-[#345DAB] hover:underline flex items-center gap-1"
            >
              <span>Lihat Semua ({total})</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {requests.slice(0, 5).map((req) => (
              <div key={req.id} className="p-4 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-slate-900">{req.fullName}</p>
                  <p className="text-slate-500 text-[11px] flex items-center gap-1 mt-0.5">
                    <Building2 className="size-3 text-[#345DAB]" />
                    {req.institution} ({req.institutionType})
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-slate-400 text-[11px]">
                    {new Date(req.createdAt).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="bg-blue-50 text-[#345DAB] px-2.5 py-0.5 rounded font-bold text-[10px]">
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
