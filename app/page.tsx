"use client";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "40px 30px",
        background: "rgba(10, 14, 17, 0.65)",
        borderRadius: "14px",
        border: "1px solid #00eaff22",
        boxShadow: "0 0 40px #00eaff15",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >

      {/* HERO ========================= */}
      <section style={{ textAlign: "left" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "#00eaff",
          }}
        >
          HELO LAB
        </h1>
        <h2
          style={{
            fontSize: "1.3rem",
            marginBottom: "18px",
            fontWeight: "normal",
            color: "#a8f7ff",
          }}
        >
          Ideas to Reality
        </h2>

        <p style={{ maxWidth: "650px", lineHeight: 1.8, fontSize: "1rem", color: "#d0faff" }}>
          電子工作、プログラミング、自作PC、ロボット、そして独自ツールの開発。
          頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく実験的個人ラボ。
        </p>
      </section>


      {/* FEATURE CARDS ========================= */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          {
            title: "Projects",
            desc: "進行中 / 完了したプロジェクト一覧。",
          },
          {
            title: "Blog",
            desc: "実験ログ、トラブルシュート、日常のメモ。",
          },
          {
            title: "Research",
            desc: "制御、アルゴリズム、検証系のまとめ。",
          },
          {
            title: "Gallery",
            desc: "写真、回路、スクショ、成果物のアーカイブ。",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #00eaff33",
              padding: "16px",
              borderRadius: "10px",
              background: "#070b0f",
              transition: "0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <h3 style={{ marginBottom: "8px", color: "#00eaff" }}>{item.title}</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#cfeeff" }}>{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
