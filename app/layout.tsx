import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "HELO LAB",
  description: "Ideas to Reality — Electronics, Robotics, Programming, Simulation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "24px",
            padding: "16px 40px",
            borderBottom: "1px solid rgba(0, 234, 255, 0.2)",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Link className="neon-title" href="/">HELO LAB</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/research">Research</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <main style={{ padding: "40px 0" }}>{children}</main>
      </body>
    </html>
  );
}
