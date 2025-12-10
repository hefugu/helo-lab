"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container-center fade-bg">
      <h1 className="neon-title glow">HELO LAB</h1>
      <h2 className="subtitle">Ideas to Reality</h2>

      <p className="intro">
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。
        頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
      </p>

      <div className="card-grid">
        <Link href="/projects" className="neon-card glass">
          <h3>Projects</h3>
          進行中／完了プロジェクト一覧。
        </Link>

        <Link href="/blog" className="neon-card glass">
          <h3>Blog</h3>
          実験ログ、メモ、障害解決まとめ。
        </Link>

        <Link href="/research" className="neon-card glass">
          <h3>Research</h3>
          制御・アルゴリズム・シミュレーション。
        </Link>

        <Link href="/gallery" className="neon-card glass">
          <h3>Gallery</h3>
          回路・機械・スクショ展示。
        </Link>
      </div>
    </div>
  );
}
