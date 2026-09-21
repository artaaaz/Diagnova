import { NextResponse } from "next/server";
import { z } from "zod";
import { updateDemoRequestStatus, deleteDemoRequest } from "@/lib/prisma";

const updateSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "QUALIFIED", "CLOSED"]),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = updateSchema.parse(body);

    const updated = await updateDemoRequestStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Permohonan demo tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ success: true, request: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal memperbarui status permohonan." }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await deleteDemoRequest(id);
    if (!deleted) {
      return NextResponse.json({ error: "Permohonan demo tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Permohonan demo berhasil dihapus." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus permohonan." }, { status: 500 });
  }
}
