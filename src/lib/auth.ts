import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'diagnova-super-secure-secret-key-change-in-prod-2026';
const secretKey = new TextEncoder().encode(JWT_SECRET);

export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@diagnova.id',
  password: process.env.ADMIN_PASSWORD || 'DiagnovaAdmin2026!',
};

export async function createAdminToken(payload: { email: string; role: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secretKey);
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as { email: string; role: string };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('diagnova_admin_token')?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}
