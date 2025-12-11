import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="neon-title">Blog</h1>

      <div className="blog-list">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-item">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="blog-date">{p.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
