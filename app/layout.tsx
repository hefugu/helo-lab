import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "HELO LAB OS",
  description: "Cyberpunk Personal Research Lab UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="cyber-header">
          <div className="cyber-title">HELO LAB OS</div>

          <nav>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/research">Research</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
