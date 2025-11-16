import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json();
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, message: "Invalid password" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true, message: "Login successful" });

  response.cookies.set("admin", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
