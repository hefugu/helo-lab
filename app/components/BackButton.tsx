"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();

  // ホーム "/" のときは表示しない
  if (pathname === "/") return null;

  return (
    <div className="back-wrapper">
      <Link href="/" className="back-btn">
        ← Back
      </Link>
    </div>
  );
}
