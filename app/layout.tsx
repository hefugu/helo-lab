"use client";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="fade-bg">

        {/* ─────── HEADER ─────── */}
        <header className="top-nav">

          <Link href="/" className="nav-brand">
            HELO LABO
          </Link>

          <nav className="nav-links">
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

        </header>

        {/* ─────── PAGE CONTENT ─────── */}
        <main className="main-panel">
          {children}
        </main>

      </body>
    </html>
  );
}
