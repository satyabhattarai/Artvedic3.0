import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET() {
  const token = cookies().get("jwt-token")?.value;

  if (!token) return NextResponse.json({ authenticated: false });

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.json({
      authenticated: true,
      username: payload.username,
    });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
