"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function QuickDemoForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Mohon masukkan alamat email yang valid.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "Inquiry via Quick Form",
          email: email.trim(),
          phone: "Belum diisi",
          institution: "Institusi Pengunjung Web",
          institutionType: "Hospital",
          message: "Request demo diajukan melalui formulir cepat di beranda.",
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal mengirim permintaan demo.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 border border-[#56ADE2]/40 rounded-lg p-6 text-white backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="size-6 text-[#56ADE2]" />
          <div>
            <h4 className="font-bold text-base text-white">Permintaan Demo Terkirim</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Tim spesialis Diagnova akan segera menghubungi Anda melalui email untuk mengatur jadwal konsultasi.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email institusi / rumah sakit..."
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3.5 bg-white/10 border border-slate-700 text-white placeholder-slate-400 rounded-md text-sm focus:outline-none focus:border-[#56ADE2] focus:bg-white/15 transition-all"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#56ADE2] hover:bg-[#459bc9] text-[#0B1528] font-bold px-6 py-3.5 rounded-md text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/20 disabled:opacity-60 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <span>Request Demo</span>
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-300 text-xs mt-1">
          <AlertCircle className="size-3.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-[11px] text-slate-400">
        Konsultasi LIS & demonstrasi Nova AI disesuaikan dengan alur kerja laboratorium Anda.
      </p>
    </form>
  );
}
