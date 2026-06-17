import { getPostBySlug } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: "Article non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Erreur récupération article:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
