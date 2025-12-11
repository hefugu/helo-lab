import { getPostBySlug } from "@/lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← await しないと undefined になる！

  const post = getPostBySlug(slug);

  return (
    <div>
      <h1 className="neon-title">{post.title}</h1>
      <p className="blog-date">{post.date}</p>

      <div style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
        {post.content}
      </div>
    </div>
  );
}
