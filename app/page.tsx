"use client";
import Link from "next/link";

export default function Home() {

  return (
    <div className="fade-bg">
      <div className="container-center">

        <div className="glass-panel">
          <h1 className="neon-title">HELO LAB</h1>
          <h2 className="subtitle">Ideas to Reality</h2>

          <p className="intro">
            電子工作、プログラミング、自作PC、ロボット、シミュレータ。
            頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
          </p>

          <div className="card-grid">
            <Link href="/projects" className="neon-card">
              <h3>Projects</h3>
              <p>進行中／完了プロジェクト</p>
            </Link>

            <Link href="/blog" className="neon-card">
              <h3>Blog</h3>
              <p>研究ログと実験メモ</p>
            </Link>

            <Link href="/research" className="neon-card">
              <h3>Research</h3>
              <p>制御・AI・アルゴリズム</p>
            </Link>

            <Link href="/gallery" className="neon-card">
              <h3>Gallery</h3>
              <p>回路・写真・成果物</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
