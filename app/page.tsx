import './globals.css';



export const metadata = {
  title: "HELO LAB",
  description: "Ideas to Reality",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: "#050505",
        color: "#d0faff",
        fontFamily: "monospace",
      }}>
        

        <nav style={{
          display: "flex",
          gap: "20px",
          padding: "15px 30px",
          borderBottom: "1px solid #00eaff55",
          position: "sticky",
          top: 0,
          backgroundColor: "#050505bb",
          backdropFilter: "blur(3px)",
        }}>
          <a href="/" style={{ color: "#00eaff", textDecoration: "none"}}>HELO LAB</a>
          <a href="/projects" style={{ color: "#d0faff", textDecoration: "none"}}>Projects</a>
          <a href="/blog" style={{ color: "#d0faff", textDecoration: "none"}}>Blog</a>
          <a href="/research" style={{ color: "#d0faff", textDecoration: "none"}}>Research</a>
          <a href="/gallery" style={{ color: "#d0faff", textDecoration: "none"}}>Gallery</a>
          <a href="/about" style={{ color: "#d0faff", textDecoration: "none"}}>About</a>
          <a href="/contact" style={{ color: "#d0faff", textDecoration: "none"}}>Contact</a>
        </nav>

        <div style={{ padding: "50ox"}}>
          {children}
        </div>


      </body>
    </html>
  );
}