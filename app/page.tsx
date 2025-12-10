export default function Home() {
  return (
    <div className="container-center">
      <h1 className="neon-title" style={{ fontSize: "3.4rem", marginBottom: "10px" }}>
        HELO LAB
      </h1>
      <h2 style={{ color: "#a8f7ff", marginBottom: "22px" }}>
        Ideas to Reality
      </h2>

      <p style={{ maxWidth: "620px", marginBottom: "40px", lineHeight: 1.7 }}>
        電子工作、プログラミング、自作PC、ロボット、シミュレータ。
        頭に浮かんだ「やってみたい」を、ひとつずつ現実にしていく個人ラボ。
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        <a href="/projects" className="neon-card">
          <h3 style={{ marginBottom: "6px", color: "#00eaff" }}>Projects</h3>
          <p>進行中/完了したプロジェクト一覧。</p>
        </a>

        <a href="/blog" className="neon-card">
          <h3 style={{ marginBottom: "6px", color: "#00eaff" }}>Blog</h3>
          <p>実験ログ、トラブルシュート、日常のメモ。</p>
        </a>

        <a href="/research" className="neon-card">
          <h3 style={{ marginBottom: "6px", color: "#00eaff" }}>Research</h3>
          <p>制御、アルゴリズム、シミュレーションの情報置き場。</p>
        </a>

        <a href="/gallery" className="neon-card">
          <h3 style={{ marginBottom: "6px", color: "#00eaff" }}>Gallery</h3>
          <p>写真、回路、スクショなど、見た目で伝わる成果物。</p>
        </a>
      </section>
    </div>
  );
}
