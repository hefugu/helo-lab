import "./globals.css";
import Link from "next/link";
import BackButton from "./components/BackButton";

export const metadata = {
  title: "HELO LAB",
  description: "電子工作・プログラミング・自作PC・ロボット開発ラボ。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* ==============================
            ナビゲーションバー
        ============================== */}
        <nav className="nav-bar">
          <div className="nav-brand">
            <a href="/">HELO LAB</a>
          </div>

          <ul className="nav-links">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/distribution">Distribution</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* ==============================
            戻るボタン（HOME以外で表示）
        ============================== */}
        <BackButton />

        {/* ==============================
            ページ本体
        ============================== */}
        <main className="main-panel fade-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
