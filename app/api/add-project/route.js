import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const adminCookie = req.cookies.get("admin")?.value;
    console.log("Admin cookie value:", adminCookie);
    if (adminCookie !== "true") {
      console.log("Unauthorized! Cookie:", req.cookies.get("admin")?.value);
      return NextResponse.json(
        { ok: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    console.log("Form data received:", body); // <-- burası önemli

    const { title, image, link, category } = body;

    if (!title || !image || !link || !category) {
      console.log("Missing fields:", body);
      return NextResponse.json(
        { ok: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const projects = db.collection("projects");

    const result = await projects.insertOne({
      title,
      image,
      link,
      category,
      createdAt: new Date(),
    });

    console.log("Inserted into DB:", result);
    return NextResponse.json({
      ok: true,
      message: "Project added",
      data: result,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}
