import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

const ABOUT_TAGS = [
  "E-Commerce",
  "Logistics",
  "IT & Digital",
  "B2B Trade",
  "Communications",
  "Commodity Trading",
];

const ORBIT_BARS = [30, 55, 42, 70, 50, 85, 60];

/* Logos per ring: [ring1 (2), ring2 (4), ring3 (4)] */
const RING_LOGOS = [
  [
    { label: "Bongo", src: "/logos/bongologo.png" },
    { label: "Bongo", src: "/logos/bongologo.png" },
  ],
  [
    { label: "Tezz", src: "/logos/tezzlogo.png" },
    { label: "Scooda", src: "/logos/scoodalogo.png" },
    { label: "Hooqx", src: "/logos/hooqxlogo.png" },
    { label: "TradeFlink", src: "/logos/tradeflinklogo.png" },
  ],
  [
    { label: "CallTawk", src: "/logos/calltawklogo.png" },
    { label: "GMI", src: "/logos/gmilogo.png" },
    { label: "Stratigi 360", src: "/logos/stratigi360logo.png" },
    { label: "GoBongo Shop", src: "/logos/bongologo.png" },
  ],
];

const RING_RADII   = [90, 160, 230];
const RING_CLASSES = ["orbit-ring-1", "orbit-ring-2", "orbit-ring-3"];
const LOGO_COUNTER = ["logo-counter-1", "logo-counter-2", "logo-counter-3"];
const LOGO_SIZE    = [20, 65, 70];

function OrbitSystem() {
  const SIZE = 500;
  const CENTER = SIZE / 2;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}>

      {/* Static ring outlines */}
      {RING_RADII.map((r, i) => (
        <div key={i} style={{
          position: "absolute",
          left: CENTER - r, top: CENTER - r,
          width: r * 2, height: r * 2,
          borderRadius: "50%",
          border: "1px solid rgba(15,23,42,0.08)",
          pointerEvents: "none",
        }} />
      ))}

      {/* Rotating rings with logos */}
      {RING_RADII.map((r, ri) => (
        <div
          key={ri}
          className={RING_CLASSES[ri]}
          style={{
            position: "absolute",
            left: CENTER - r, top: CENTER - r,
            width: r * 2, height: r * 2,
            borderRadius: "50%",
          }}
        >
          {RING_LOGOS[ri].map((logo, li) => {
            const count = RING_LOGOS[ri].length;
            const angle = (li / count) * 2 * Math.PI - Math.PI / 2;
            const lw = LOGO_SIZE[ri];
            const lh = LOGO_SIZE[ri];
            const lx = r + Math.cos(angle) * r - lw / 2;
            const ly = r + Math.sin(angle) * r - lh / 2;
            return (
              <div
                key={li}
                className={LOGO_COUNTER[ri]}
                style={{ position: "absolute", left: lx, top: ly, width: lw, height: lh }}
              >
                <div className="logo-node" style={{ width: "100%", height: "100%" }}>
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.label}
                      style={{ width: "120%", height: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    <span style={{ fontSize: 19, fontWeight: 700, textAlign: "center", padding: "0 2px" }}>
                      {logo.label}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Center card */}
      <div
        className="orbit-center-card"
        style={{
          position: "absolute",
          borderRadius:50,
          left: CENTER - 80, top: CENTER - 55,
          width: 160, height: 100,
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/gobongoventureslogo.png"
          alt="GoBongo Ventures"
          style={{ width: "200%", height: 250, objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [activeTag, setActiveTag] = useState(3);

  return (
    <section
      className="about-section"
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "80px 40px",
        display: "flex",
        alignItems: "center",
        gap: 64,
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* ── Left: Text ── */}
      <div className="about-left" style={{ flex: "0 0 480px", maxWidth: 480 }}>

        {/* ABOUT US label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}
        >
          <div style={{ width: 20, height: 2, background: "#2563eb", borderRadius: 99 }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            About Us
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false ,amount: 0.8}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            color: "#0f172a",
            lineHeight: 1.1,
            marginBottom: 24,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          A Holding Group<br />
          Built for{" "}
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(110deg, #1d4ed8 20%, #2563eb 38%, #0ea5e9 50%, #2563eb 62%, #1d4ed8 80%)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 5s linear infinite",
          }}>
            Scale
          </span>
        </motion.h2>

        {/* Blockquote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            borderLeft: "3px solid #2563eb",
            paddingLeft: 16,
            margin: "0 0 24px",
            fontStyle: "italic",
            fontFamily: "'Playfair Display', serif",
            fontSize: 16,
            color: "#334155",
            lineHeight: 1.7,
          }}
        >
          "We don't just fund companies, we build ecosystems that compound value across industries."
        </motion.blockquote>

        {/* Body paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 16 }}
        >
          GoBongo Ventures is a Delaware-headquartered multi-sector holding group with a portfolio spanning
          e-commerce platforms, logistics networks, IT services, B2B trade infrastructure,
          communications technology, and commodity trading.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.38, duration: 0.6 }}
          style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 28 }}
        >
          We operate with a long-horizon mindset, backing exceptional founders and providing the
          operational and strategic support to turn bold ideas into market-leading businesses.
        </motion.p>

        {/* Tag pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false ,amount: 0.8}}
          transition={{ delay: 0.46, duration: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {ABOUT_TAGS.map((tag, i) => (
            <motion.span
              key={i}
              className={`about-tag-pill${activeTag === i ? " active" : ""}`}
              onClick={() => setActiveTag(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.35 }}
              style={{ cursor: "pointer" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* ── Right: Orbit ── */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
        style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="orbit-wrapper">
          <OrbitSystem />
        </div>
      </motion.div>
    </section>
  );
}
