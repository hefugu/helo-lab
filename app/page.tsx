export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050505",
        color: "#d0faff",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#00eaff" }}>
        HELO LAB
      </h1>

      <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem", color: "#a8f7ff" }}>
        Ideas to Reality
      </h2>

      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        Bridging imagination and engineering.
      </p>
    </main>
  );
}
