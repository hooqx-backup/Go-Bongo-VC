export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        background: "white",
        padding: "28px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Sora', sans-serif",
        fontSize: 13,
        color: "#94a3b8",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span>© {new Date().getFullYear()} GoBongo Ventures. All rights reserved.</span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy Policy", "Terms of Use", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0f172a")}
            onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}
