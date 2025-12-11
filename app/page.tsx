"use client";

import Link from "next/link";

export default function HomePage() {
  const ripple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left + "px";
    const y = e.clientY - rect.top + "px";

    card.style.setProperty("--x", x);
    card.style.setProperty("--y", y);

    // 波紋リセット&再生
    card.classList.remove("clicked");
    void card.offsetWidth;
    card.classList.add("clicked");
  };

  const pages = [
    { href: "/projects", title: "Projects", text: "進行中／完了プロジェクト" },
    { href: "/blog", title: "Blog", text: "研究ログ・実験メモ" },
    { href: "/gallery", title: "Gallery", text: "画像・回路・成果物" },
    { href: "/distribution", title: "Distribution", text: "ツール・資料・アプリ配布" },
    { href: "/about", title: "About", text: "HELO LAB について" },
    { href: "/contact", title: "Contact", text: "連絡方法・SNS" },
  ];

  return (
    <div>
      <h1 className="neon-title">HELO LAB</h1>
      <h2 className="subtitle">Ideas to Reality</h2>

      <p className="intro-text">
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。  
        頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
      </p>

      {/* HOME 専用グリッド */}
      <div className="home-grid">
        {pages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="neon-link-card"
            onClick={ripple}
          >
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
