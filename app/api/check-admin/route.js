import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const isAdmin = (await cookieStore.get("admin")?.value) === "true";

  return NextResponse.json({ isAdmin });
}
