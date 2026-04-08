import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const adminCookie = req.cookies.get("admin")?.value;

    if (adminCookie !== "true") {
      return NextResponse.json(
        { ok: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await req.json();
    const { title, image, link, category } = body;

    if (!title || !image || !link || !category) {
      return NextResponse.json(
        { ok: false, message: "Missing fields" },
        { status: 400 },
      );
    }

    // 🔥 Supabase insert
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          image,
          link,
          category,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { ok: false, message: "DB error" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Project added",
      data,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 },
    );
  }
}
