"use client";
import Link from "next/link";
import { useCallback } from "react";

export default function Home() {

  const ripple = useCallback((e: any) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");

    card.classList.remove("clicked");
    void card.offsetWidth;
    card.classList.add("clicked");
  }, []);

  return (
    <div className="container-center">
      
      {/* ===== TITLE ===== */}
      <h1 className="neon-title">HELO LAB</h1>
      <h2 className="subtitle">Ideas to Reality</h2>

      <p className="intro">
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。
        頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
      </p>

      {/* ===== MENU CARDS ===== */}
      <div className="card-grid">
        {[
          { href: "/projects", title: "Projects", text: "進行中／完了プロジェクト" },
          { href: "/blog", title: "Blog", text: "研究ログと実験メモ" },
          { href: "/research", title: "Research", text: "制御・AI・アルゴリズム" },
          { href: "/gallery", title: "Gallery", text: "回路・写真・成果物" },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="neon-card glass"
            onClick={ripple}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "6px", color: "#aff" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
