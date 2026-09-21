import { NextResponse } from "next/server";
import { z } from "zod";
import { createDemoRequest, getDemoRequests } from "@/lib/prisma";

const demoSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(6, "Nomor telepon wajib diisi"),
  institution: z.string().min(2, "Nama institusi wajib diisi"),
  institutionType: z.string().min(1, "Jenis institusi wajib dipilih"),
  jobTitle: z.string().optional().nullable(),
  laboratoryUsers: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export async function GET() {
  try {
    const requests = await getDemoRequests();
    return NextResponse.json({ requests }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data demo requests." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = demoSchema.parse(body);

    const saved = await createDemoRequest({
      fullName: validated.fullName,
      email: validated.email,
      phone: validated.phone,
      institution: validated.institution,
      institutionType: validated.institutionType,
      jobTitle: validated.jobTitle || null,
      laboratoryUsers: validated.laboratoryUsers || null,
      message: validated.message || null,
    });

    return NextResponse.json(
      { success: true, id: saved.id, message: "Permohonan demo berhasil disimpan." },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Data formulir tidak valid.", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Gagal memproses permohonan demo." },
      { status: 500 }
    );
  }
}
