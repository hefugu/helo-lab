export default function Home() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* HERO */}
      <section>
        <h1
          style={{
            fontSize: "2.8rem",
            marginBottom: "8px",
            color: "#00eaff",
          }}
        >
          HELO LAB
        </h1>
        <h2
          style={{
            fontSize: "1.2rem",
            marginBottom: "16px",
            color: "#a8f7ff",
          }}
        >
          Ideas to Reality
        </h2>
        <p style={{ maxWidth: "640px", lineHeight: 1.6, color: "#d0faff" }}>
          電子工作、プログラミング、自作PC、ロボット、シミュレータ。
          頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
        </p>
      </section>

      {/* SECTIONS OVERVIEW */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            border: "1px solid #00eaff33",
            padding: "16px",
            borderRadius: "8px",
            background: "#070b0f",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#00eaff" }}>Projects</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
            進行中/完了したプロジェクト一覧。
          </p>
        </div>

        <div
          style={{
            border: "1px solid #00eaff33",
            padding: "16px",
            borderRadius: "8px",
            background: "#070b0f",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#00eaff" }}>Blog</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
            実験ログ、トラブルシュート、日常のメモ。
          </p>
        </div>

        <div
          style={{
            border: "1px solid #00eaff33",
            padding: "16px",
            borderRadius: "8px",
            background: "#070b0f",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#00eaff" }}>Research</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
            制御、アルゴリズム、シミュレーションなどの情報置き場。
          </p>
        </div>

        <div
          style={{
            border: "1px solid #00eaff33",
            padding: "16px",
            borderRadius: "8px",
            background: "#070b0f",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#00eaff" }}>Gallery</h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
            写真、グラフ、回路、スクショなど、見た目で分かる成果物。
          </p>
        </div>
      </section>
    </main>
  );
}
