"use client";

import { useState } from "react";
import { 
  Search, 
  Filter, 
  Eye, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  XCircle, 
  X, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  Calendar,
  AlertCircle
} from "lucide-react";
import { DemoRequestRecord } from "@/lib/prisma";

interface AdminTableProps {
  initialRequests: DemoRequestRecord[];
}

export function AdminTable({ initialRequests }: AdminTableProps) {
  const [requests, setRequests] = useState<DemoRequestRecord[]>(initialRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedRequest, setSelectedRequest] = useState<DemoRequestRecord | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.phone.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || req.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id: string, newStatus: "NEW" | "CONTACTED" | "QUALIFIED" | "CLOSED") => {
    setIsUpdating(true);
    try {
      const res = await fetch(`/api/demo-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Gagal memperbarui status");

      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus, updatedAt: new Date() } : r))
      );

      if (selectedRequest && selectedRequest.id === id) {
        setSelectedRequest((prev) => (prev ? { ...prev, status: newStatus } : null));
      }

      setAlert({ type: "success", text: `Status berhasil diubah menjadi ${newStatus}` });
      setTimeout(() => setAlert(null), 3000);
    } catch {
      setAlert({ type: "error", text: "Terjadi kesalahan saat memperbarui status." });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus permohonan demo ini?")) return;

    setIsUpdating(true);
    try {
      const res = await fetch(`/api/demo-requests/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal menghapus permohonan");

      setRequests((prev) => prev.filter((r) => r.id !== id));
      if (selectedRequest?.id === id) setSelectedRequest(null);

      setAlert({ type: "success", text: "Permohonan demo berhasil dihapus." });
      setTimeout(() => setAlert(null), 3000);
    } catch {
      setAlert({ type: "error", text: "Terjadi kesalahan saat menghapus data." });
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return (
          <span className="inline-flex items-center gap-1 bg-blue-50 text-[#345DAB] border border-blue-200 px-2.5 py-0.5 rounded text-xs font-semibold">
            <Clock className="size-3" />
            NEW
          </span>
        );
      case "CONTACTED":
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded text-xs font-semibold">
            <UserCheck className="size-3" />
            CONTACTED
          </span>
        );
      case "QUALIFIED":
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded text-xs font-semibold">
            <CheckCircle2 className="size-3" />
            QUALIFIED
          </span>
        );
      case "CLOSED":
        return (
          <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-0.5 rounded text-xs font-semibold">
            <XCircle className="size-3" />
            CLOSED
          </span>
        );
      default:
        return <span className="text-xs">{status}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {alert && (
        <div
          className={`p-4 rounded-md text-xs font-semibold flex items-center justify-between ${
            alert.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <span>{alert.text}</span>
          <button onClick={() => setAlert(null)}><X className="size-4" /></button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {["ALL", "NEW", "CONTACTED", "QUALIFIED", "CLOSED"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                statusFilter === s
                  ? "bg-[#345DAB] text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama, RS, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-md border border-slate-200 text-xs focus:outline-none focus:border-[#345DAB]"
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
              <tr>
                <th className="p-4">Nama & Institusi</th>
                <th className="p-4">Kontak</th>
                <th className="p-4">Tipe Institusi</th>
                <th className="p-4">Status</th>
                <th className="p-4">Tanggal Masuk</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    Tidak ada permohonan demo yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-slate-900">{req.fullName}</p>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1 mt-0.5">
                        <Building2 className="size-3 text-[#345DAB]" />
                        {req.institution}
                      </p>
                    </td>
                    <td className="p-4 space-y-0.5">
                      <p className="text-slate-700 flex items-center gap-1">
                        <Mail className="size-3 text-slate-400" />
                        {req.email}
                      </p>
                      <p className="text-slate-500 text-[11px] flex items-center gap-1">
                        <Phone className="size-3 text-slate-400" />
                        {req.phone}
                      </p>
                    </td>
                    <td className="p-4">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {req.institutionType}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(req.status)}
                      </div>
                    </td>
                    <td className="p-4 text-slate-500 whitespace-nowrap">
                      {new Date(req.createdAt).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="p-1.5 rounded text-[#345DAB] hover:bg-blue-50 transition-colors"
                          title="Lihat Detail"
                        >
                          <Eye className="size-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(req.id)}
                          className="p-1.5 rounded text-red-600 hover:bg-red-50 transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#345DAB] uppercase">Detail Permohonan Demo</span>
                {getStatusBadge(selectedRequest.status)}
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg">
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Nama Lengkap</span>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{selectedRequest.fullName}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Jabatan</span>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{selectedRequest.jobTitle || "—"}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Email</span>
                  <p className="font-bold text-slate-800 mt-0.5">{selectedRequest.email}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Telepon / WA</span>
                  <p className="font-bold text-slate-800 mt-0.5">{selectedRequest.phone}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Institusi</span>
                  <p className="font-bold text-slate-800 mt-0.5">{selectedRequest.institution}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Tipe & Pengguna</span>
                  <p className="font-bold text-slate-800 mt-0.5">
                    {selectedRequest.institutionType} ({selectedRequest.laboratoryUsers || "Standar"})
                  </p>
                </div>
              </div>

              <div>
                <span className="text-slate-400 uppercase font-semibold text-[10px]">Pesan / Kebutuhan Khusus</span>
                <p className="mt-1 p-3 bg-slate-50 rounded border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {selectedRequest.message || "Tidak ada pesan tambahan."}
                </p>
              </div>

              {/* Status Updater */}
              <div className="pt-2">
                <span className="text-slate-700 font-bold block mb-1.5">Ubah Status Permohonan:</span>
                <div className="flex flex-wrap gap-2">
                  {(["NEW", "CONTACTED", "QUALIFIED", "CLOSED"] as const).map((st) => (
                    <button
                      key={st}
                      disabled={isUpdating || selectedRequest.status === st}
                      onClick={() => handleStatusChange(selectedRequest.id, st)}
                      className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                        selectedRequest.status === st
                          ? "bg-[#345DAB] text-white shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      Set {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleDelete(selectedRequest.id)}
                className="text-red-600 hover:text-red-700 font-semibold text-xs flex items-center gap-1"
              >
                <Trash2 className="size-3.5" />
                <span>Hapus Data</span>
              </button>

              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
