"use client";
import Link from "next/link";

export default function Home() {

  const modules = [
    { href: "/projects", title: "Projects", text: "進行中／完了プロジェクト" },
    { href: "/blog", title: "Blog", text: "研究ログと実験メモ" },
    { href: "/research", title: "Research", text: "制御・AI・アルゴリズム" },
    { href: "/gallery", title: "Gallery", text: "回路・写真・成果物" },
  ];

  return (
    <main className="main-panel">
      <h1 className="cyber-title" style={{ fontSize: "3.2rem", marginBottom: "8px" }}>
        HELO LAB
      </h1>
      <h2 style={{ color: "#c7faff", marginBottom: "26px" }}>Ideas to Reality</h2>

      <p style={{ maxWidth: "720px", lineHeight: 1.7, fontSize: "1rem", marginBottom: "40px", color: "#e6ffff" }}>
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。
        頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
      </p>

      <div className="card-grid">
        {modules.map((item) => (
          <Link key={item.title} href={item.href} className="cyber-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
