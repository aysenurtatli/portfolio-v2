import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ ok: false, message: "Missing id" }),
        { status: 400 },
      );
    }

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({ ok: false, message: "DB error" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, message: err.message }), {
      status: 500,
    });
  }
}
