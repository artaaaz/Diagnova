"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Building, 
  Mail, 
  Phone, 
  User, 
  FileText 
} from "lucide-react";

const demoSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap wajib diisi (minimal 2 karakter)"),
  email: z.string().email("Masukkan alamat email kerja yang valid"),
  phone: z.string().min(6, "Nomor telepon / WhatsApp wajib diisi"),
  institution: z.string().min(2, "Nama institusi / rumah sakit wajib diisi"),
  institutionType: z.enum([
    "Hospital",
    "Clinical Laboratory",
    "Pathology Laboratory",
    "Microbiology Laboratory",
    "Blood Bank",
    "Other",
  ], {
    message: "Pilih jenis institusi Anda",
  }),
  jobTitle: z.string().optional(),
  laboratoryUsers: z.string().optional(),
  message: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoSchema>;

const INSTITUTION_TYPES = [
  { value: "Hospital", label: "Rumah Sakit (Umum / Khusus / RSUD / Swasta)" },
  { value: "Clinical Laboratory", label: "Laboratorium Klinik Mandiri / Utama / Pratama" },
  { value: "Pathology Laboratory", label: "Pusat Patologi Anatomi & Sitologi" },
  { value: "Microbiology Laboratory", label: "Laboratorium Mikrobiologi & Uji Resistensi" },
  { value: "Blood Bank", label: "Unit Transfusi Darah / Bank Darah Rumah Sakit" },
  { value: "Other", label: "Institusi Riset / Lainnya" },
];

const USER_TIERS = [
  "1 - 5 Pengguna Lab",
  "6 - 15 Pengguna Lab",
  "16 - 30 Pengguna Lab",
  "31 - 50 Pengguna Lab",
  "Lebih dari 50 Pengguna Lab",
];

export function DemoForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      institutionType: "Hospital",
      laboratoryUsers: "6 - 15 Pengguna Lab",
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || "Gagal mengirim formulir demo.");
      }

      setFormState("success");
      reset();
    } catch (err: any) {
      setFormState("error");
      setErrorMessage(err.message || "Terjadi kesalahan saat memproses permintaan Anda.");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-white rounded-xl border-2 border-[#56ADE2] p-8 sm:p-12 shadow-xl text-center space-y-6 animate-in fade-in-50 duration-300">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-[#345DAB] mx-auto flex items-center justify-center">
          <CheckCircle2 className="size-10 text-[#56ADE2]" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#345DAB] uppercase tracking-widest">
            Permintaan Diterima
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Terima Kasih atas Minat Anda pada Diagnova
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Spesialis implementasi klinis kami akan meninjau kebutuhan laboratorium Anda dan menghubungi Anda dalam 1x24 jam kerja untuk menyusun jadwal demonstrasi terarah.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-[#345DAB]" />
            Kerahasiaan Data Medis Dijamin
          </span>
          <span>•</span>
          <span>SLA Respons Cepat &lt; 24 Jam</span>
        </div>

        <button
          onClick={() => setFormState("idle")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#345DAB] hover:underline pt-2"
        >
          Kirim formulir untuk laboratorium lain →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-900/5">
      <div className="mb-8 pb-4 border-b border-slate-100">
        <h3 className="text-xl font-bold text-slate-900">
          Jadwalkan Konsultasi & Demo Platform
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Lengkapi data berikut untuk demonstrasi langsung alur kerja Diagnova Core & Nova AI.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nama Lengkap & Gelar <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                {...register("fullName")}
                placeholder="mis. dr. Hendra Wijaya, Sp.PK"
                className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#345DAB] focus:ring-1 focus:ring-[#345DAB]"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Work Email */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Email Kerja / Institusi <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="nama@rumahsakit.co.id"
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#345DAB] focus:ring-1 focus:ring-[#345DAB]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="0812-XXXX-XXXX"
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#345DAB] focus:ring-1 focus:ring-[#345DAB]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Institution Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nama Rumah Sakit / Laboratorium <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("institution")}
              placeholder="RS Medika Sejahtera"
              className={`w-full px-4 py-3 rounded-md border text-sm focus:outline-none transition-colors ${
                errors.institution ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#345DAB] focus:ring-1 focus:ring-[#345DAB]"
              }`}
            />
            {errors.institution && (
              <p className="text-xs text-red-500">{errors.institution.message}</p>
            )}
          </div>

          {/* Institution Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Jenis Institusi <span className="text-red-500">*</span>
            </label>
            <select
              {...register("institutionType")}
              className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-[#345DAB]"
            >
              {INSTITUTION_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {errors.institutionType && (
              <p className="text-xs text-red-500">{errors.institutionType.message}</p>
            )}
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Jabatan / Peran
            </label>
            <input
              type="text"
              {...register("jobTitle")}
              placeholder="Kepala Laboratorium / Tim IT SIMRS"
              className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-[#345DAB]"
            />
          </div>

          {/* Laboratory Users Count */}
          <div className="space-y-2 md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Estimasi Jumlah Pengguna / Analis Lab
            </label>
            <select
              {...register("laboratoryUsers")}
              className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-[#345DAB]"
            >
              {USER_TIERS.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2 md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Kebutuhan Khusus / Instrumen yang Digunakan
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Contoh: Kami menggunakan 2 unit Sysmex XN-550 dan 1 Cobas c311, serta memerlukan integrasi SIMRS Khanza..."
              className="w-full px-4 py-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-[#345DAB]"
            />
          </div>

        </div>

        {formState === "error" && (
          <div className="p-4 rounded-md bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="size-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#345DAB]" />
            <span>Data Anda terlindungi & tidak akan dibagikan ke pihak ketiga.</span>
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full sm:w-auto bg-[#345DAB] hover:bg-[#284a8a] text-white font-bold px-8 py-4 rounded-md text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-900/20 disabled:opacity-60 cursor-pointer"
          >
            {formState === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Mengirimkan Permintaan...</span>
              </>
            ) : (
              <>
                <span>Jadwalkan Demo Diagnova</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
