import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_CREDENTIALS, createAdminToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (
      email !== ADMIN_CREDENTIALS.email ||
      password !== ADMIN_CREDENTIALS.password
    ) {
      return NextResponse.json(
        { error: "Kredensial login admin tidak valid." },
        { status: 401 }
      );
    }

    const token = await createAdminToken({ email, role: "admin" });

    const cookieStore = await cookies();
    cookieStore.set("diagnova_admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json(
      { success: true, message: "Login admin berhasil." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memproses login admin." },
      { status: 500 }
    );
  }
}
