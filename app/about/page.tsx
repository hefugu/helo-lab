export default function AboutPage() {
  return (
    <div>
      <h1 className="neon-title">About</h1>

      <p className="about-desc">
        HELO LAB は、電子工作・プログラミング・ロボティクス・自作PC・Web開発・シミュレーションなど、  
        多岐にわたる技術を横断しながら「やりたい」を即座に形にする個人ラボです。
      </p>

      <h2 className="about-subtitle">HELO LAB とは</h2>

      <div className="about-grid">

        {/* 1 */}
        <div className="about-card">
          <h3>Multi-Tech Engineering Lab</h3>
          <p>
            電子工作・プログラミング・PC・ロボットまで、技術の境界をなくして
            作り続ける個人ラボです。ハードとソフトを自由に行き来しながら開発する
            スタイルを持っています。
          </p>
        </div>

        {/* 2 */}
        <div className="about-card">
          <h3>技術を楽しむ場所</h3>
          <p>
            「気になる」をすぐ試してみる。そんな軽いノリから始まるラボ。
            回路・コード・メカニズムを触って学び、失敗しながら成長していく
            “実験の遊び場” です。
          </p>
        </div>

        {/* 3 */}
        <div className="about-card">
          <h3>プロトタイピング思考</h3>
          <p>
            思いついた瞬間に試作するスタイル。
            完璧を待たずにまず形にして、そこから改善し続けます。
            行動の速さを最優先に技術を積み上げています。
          </p>
        </div>
      </div>

      {/* ===== Skills ===== */}
      <h2 style={{ marginTop: "50px" }} className="about-subtitle">
        Skills
      </h2>

      <div className="about-grid">

        <div className="about-card">
          <h3>Electronics</h3>
          <p>回路設計 / センサー制御 / マイコン（Pico, Arduino, RA4M1）</p>
        </div>

        <div className="about-card">
          <h3>Programming</h3>
          <p>Python / C / C++ / TypeScript / Web開発 / APIツール制作</p>
        </div>

        <div className="about-card">
          <h3>Robotics</h3>
          <p>ラインカー / 自律制御 / メカ設計 / センサー融合</p>
        </div>

        <div className="about-card">
          <h3>Simulation</h3>
          <p>避難経路シミュレーター / 物理・経路探索 / AIテスト環境</p>
        </div>

        <div className="about-card">
          <h3>PC & Server</h3>
          <p>自作PC / Linux / ネットワーク構築 / サーバー運用</p>
        </div>

        <div className="about-card">
          <h3>Design & UI</h3>
          <p>Cyberpunk UI / クラスデザイン / インタラクティブ表示</p>
        </div>
      </div>

      {/* Philosophy */}
      <h2 style={{ marginTop: "50px" }} className="about-subtitle">
        Philosophy
      </h2>

      <div className="about-grid">

        <div className="about-card">
          <h3>Ideas to Reality</h3>
          <p>
            「思いついたらすぐ形にする」。スピードと行動を重視し、
            学びながら形にしていくスタイルです。
          </p>
        </div>

        <div className="about-card">
          <h3>Tech as Art</h3>
          <p>
            技術は表現でありアート。コードも回路も作品として仕上げることを
            大切にしています。
          </p>
        </div>

        <div className="about-card">
          <h3>Always Experimenting</h3>
          <p>
            新しい分野は知らないから面白い。常に挑戦し、実験し続けることで
            成長していくラボを目指しています。
          </p>
        </div>

      </div>
    </div>
  );
}
