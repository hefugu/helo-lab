export default function ContactPage() {
  return (
    <div>
      <h1 className="neon-title">Contact</h1>

      <p className="about-desc">
        HELO LAB への問い合わせ・連絡・SNS アカウントはこちらから。
        個人開発・ロボット・プログラミング・Web 制作に関する話題も歓迎です。
      </p>

      <div className="about-grid">

        {/* メール */}
        <div className="about-card contact-card">
          <h3>Email</h3>
          <p>お気軽に連絡できます。</p>
          <p style={{ marginTop: "8px", opacity: 0.8 }}>
            <a
              href="mailto:helo_saitek@hotmail.com"
              style={{ color: "var(--neon)" }}
            >
              helo_saitek@hotmail.com
            </a>
          </p>
        </div>

        {/* X */}
        <div className="about-card contact-card">
          <h3>X (Twitter)</h3>
          <p>活動報告などしています。</p>
          <p style={{ marginTop: "8px", opacity: 0.8 }}>
            <a
              href="https://x.com/helo_saitek"
              target="_blank"
              style={{ color: "var(--neon)" }}
            >
              @helo_saitek
            </a>
          </p>
        </div>

        {/* GitHub */}
        <div className="about-card contact-card">
          <h3>GitHub</h3>
          <p>公開プロジェクト・ツール・ソースコードはこちら。</p>
          <p style={{ marginTop: "8px", opacity: 0.8 }}>
            <a
              href="https://github.com/hefugu"
              target="_blank"
              style={{ color: "var(--neon)" }}
            >
              github.com/hefugu
            </a>
          </p>
        </div>

      </div>

      <h2 className="about-subtitle" style={{ marginTop: "50px" }}>
        Notes
      </h2>

      <div className="about-card" style={{ marginTop: "14px" }}>
        <p style={{ lineHeight: 1.7 }}>
          個人ラボのため、返信に時間がかかることがあります。
          技術相談・制作依頼・気軽に声をかけてください。
        </p>
      </div>
    </div>
  );
}
