import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Erreur récupération articles:", error);
    return NextResponse.json({ posts: [] });
  }
}
