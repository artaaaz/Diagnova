"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login gagal.");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Gagal masuk. Periksa email dan password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1528] flex items-center justify-center p-4 grid-pattern-dark">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl border border-slate-700/50 p-8 sm:p-10">
        
        {/* Header Branding */}
        <div className="text-center space-y-2 mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#345DAB] to-[#56ADE2] flex items-center justify-center text-white font-bold text-sm">
              DN
            </div>
            <span className="font-display text-2xl tracking-tight text-[#0F1D33]">
              DIAGNOVA
            </span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900 mt-3">Portal Admin Klinis</h1>
          <p className="text-xs text-slate-500">
            Masuk dengan kredensial administrator terotorisasi.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Email Administrator
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@diagnova.id"
                className="w-full pl-9 pr-4 py-3 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-[#345DAB]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-3 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-[#345DAB]"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="size-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#345DAB] hover:bg-[#284a8a] text-white py-3 px-4 rounded-md font-bold text-xs shadow-md shadow-blue-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Memverifikasi...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Dashboard Admin</span>
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security Note */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-[#345DAB]" />
            Session Encrypted (JWT)
          </span>
          <Link href="/" className="hover:text-slate-600">
            ← Kembali ke Website
          </Link>
        </div>

      </div>
    </main>
  );
}
