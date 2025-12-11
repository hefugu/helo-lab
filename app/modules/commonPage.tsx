"use client";
import Link from "next/link";

export function commonPage(title: string, items: { title: string; text: string }[]) {
  const ripple = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left + "px";
    const y = e.clientY - rect.top + "px";
    card.style.setProperty("--x", x);
    card.style.setProperty("--y", y);

    card.classList.remove("clicked");
    void card.offsetWidth;
    card.classList.add("clicked");
  };

  return (
    <>
      <h1 className="neon-title">{title}</h1>

      <div className="card-grid">
        {items.map((p, i) => (
          <div key={i} className="neon-card" onClick={ripple}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
