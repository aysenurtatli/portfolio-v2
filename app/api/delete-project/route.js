import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { id } = await req.json();
    if (!id)
      return new Response(
        JSON.stringify({ ok: false, message: "Missing id" }),
        { status: 400 }
      );

    const client = await clientPromise;
    const db = client.db("portfolio");
    const projects = db.collection("projects");

    await projects.deleteOne({ _id: new ObjectId(id) });

    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, message: err.message }), {
      status: 500,
    });
  }
}
