// lib/session.js
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getSession() {
  const cookieStore = await cookies(); // ✅ AWAIT IT
  const token = cookieStore.get("jwt-token")?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
