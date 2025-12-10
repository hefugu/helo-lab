"use client";
import Link from "next/link";

export default function Home() {

  const ripple = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
    card.classList.remove("clicked");
    void card.offsetWidth;
    card.classList.add("clicked");
  };

  return (
    <div>
      <h1 className="nav-brand" style={{ fontSize: "3rem", marginBottom: "10px" }}>
        HELO LABO
      </h1>

      <p style={{ color: "#c9faff", maxWidth: "720px", lineHeight: 1.6 }}>
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。
        「やってみたい」をひとつずつ現実にしていく個人ラボ。
      </p>

      <div className="card-grid" style={{ marginTop: "30px" }}>
        {[
          { href: "/projects", title: "Projects", text: "進行中 / 完了 / 設計" },
          { href: "/blog", title: "Blog", text: "日常・メモ" },
          { href: "/research", title: "Research", text: "制御・AI・アルゴリズム" },
          { href: "/gallery", title: "Gallery", text: "写真・回路・可視化" },
        ].map((item) => (
          <Link key={item.title} href={item.href} className="neon-card" onClick={ripple}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
