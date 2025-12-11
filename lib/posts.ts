import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(postsPath);

  const posts = files.map((file) => {
    const full = path.join(postsPath, file);
    const text = fs.readFileSync(full, "utf-8");

    const { data, content } = matter(text);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const full = path.join(postsPath, `${slug}.md`);
  const text = fs.readFileSync(full, "utf8");

  const { data, content } = matter(text);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,
  };
}
