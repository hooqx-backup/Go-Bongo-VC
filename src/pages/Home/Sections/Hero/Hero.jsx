import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "../../../../common/components/Button/Button";
import Marquee from "../../../../common/components/Marquee/Marquee";

/* ─────────────────────────────────────
   Animated Counter
───────────────────────────────────── */
function Counter({ to, prefix = "", suffix = "", delay = 1.3 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const ctrl = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setVal(Math.floor(v)),
      });
      return ctrl.stop;
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [to, delay]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
}

/* ─────────────────────────────────────
   Sparkline (mobile cards)
───────────────────────────────────── */
function Sparkline({ data, color = "#2563eb", height = 32 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const W = 100, H = height;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * W;
      const y = H - ((v - min) / (max - min || 1)) * (H - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} className="overflow-visible block">
      <defs>
        <linearGradient id="spkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.16" />
          <stop offset="100%" stopColor={color} stopOpacity="0"    />
        </linearGradient>
      </defs>
      <polygon points={`0,${H} ${pts} ${W},${H}`} fill="url(#spkFill)" />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────
   Data
───────────────────────────────────── */
const PORTFOLIO_BARS = [30, 45, 35, 55, 42, 65, 50, 80, 60, 100];

const CATEGORIES = [
  { dot: "#2563eb", label: "E-Commerce & Retail",   count: 2 },
  { dot: "#22c55e", label: "Logistics & Trade",      count: 3 },
  { dot: "#f59e0b", label: "Tech & Communications",  count: 2 },
];

const TAGS = ["E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Comms", "Trading"];

const AVATARS = [
  { initials: "TL", bg: "linear-gradient(135deg,#2563eb,#0ea5e9)" },
  { initials: "HG", bg: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { initials: "GM", bg: "linear-gradient(135deg,#22c55e,#0ea5e9)" },
  { initials: "+4", bg: "#e2e8f0", color: "#64748b" },
];

const STATS = [
  { to: 40,   prefix: "",  suffix: "K+",  label: "Active users worldwide"    },
  { to: 2300, prefix: "+", suffix: "",    label: "New signups this month"     },
  { to: 4,    prefix: "$", suffix: ".6B", label: "Total volume processed"     },
];

const SPARKDATA = [22, 35, 28, 45, 38, 55, 48, 62, 58, 72];
const MINI_BARS  = [38, 62, 44, 80, 52, 94, 68];

/* ─────────────────────────────────────
   Framer variants
───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

const cardEnter = (delay = 0, x = 0, y = 20) => ({
  initial:    { opacity: 0, x, y },
  animate:    { opacity: 1, x: 0, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

/* ─────────────────────────────────────
   Component
───────────────────────────────────── */
export default function Hero() {
  return (
    <div className="hero-section">
      {/* Background layers */}
      <div className="fin-bg"    aria-hidden="true" />
      <div className="fin-grain" aria-hidden="true" />
      <div className="hero-blobs" aria-hidden="true">
        <span className="hero-blob hero-blob--one" />
        <span className="hero-blob hero-blob--two" />
        <span className="hero-blob hero-blob--three" />
      </div>

      {/* ══════════════ DESKTOP TWO-COLUMN LAYOUT ══════════════ */}
      <div className="hero-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">

          {/* Badge */}
          <motion.div {...fadeUp(0.15)} className="hero-badge-wrap">
            <div className="hero-badge">
              <span className="hero-badge-icon">→</span>
              <span className="hero-badge-text">7 Ventures are live &amp; growing</span>
              <span className="hero-badge-arrow">→</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.22)} className="hero-heading">
            Welcome to a<br />
            <em className="shimmer-blue hero-serif">Smarter</em>{" "}Way<br />
            to Build{" "}<em className="shimmer-amber hero-serif">Ventures</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...fadeUp(0.34)} className="hero-subtext">
            GoBongo Ventures is a Dubai-based holding group backing
            bold companies across e-commerce, logistics, technology,
            trade, and communications.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.44)} className="hero-ctas">
            <Button to="/portfolio" >
              Explore Portfolio
            </Button>
            <Link to="/about" className="hero-btn-ghost">
              Our Story
            </Link>
          </motion.div>

          {/* Avatar stack */}
          <motion.div {...fadeUp(0.56)} className="hero-avatars">
            <div className="avatar-stack">
              {AVATARS.map((a, i) => (
                <div
                  key={i}
                  className="avatar-item"
                  style={{
                    background: a.bg,
                    color:      a.color ?? "white",
                    zIndex:     AVATARS.length - i,
                  }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="hero-avatar-label">
              <strong>8 companies</strong> under one vision
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — positioned cards ── */}
        <div className="hero-right" aria-hidden="true">

          {/* Globe / Countries card — left side, floats gently */}
          <motion.div
            {...cardEnter(0.68, -16, 16)}
            className="glass-card float-a hero-card-countries"
          >
            {/* Globe placeholder — swap with <Globe> component when available */}
            <svg
              viewBox="0 0 160 130"
              width="100%"
              height="130"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              {/* Outer glow */}
              <circle cx="80" cy="65" r="55" fill="rgba(219,234,254,0.45)" />
              {/* Globe body */}
              <circle cx="80" cy="65" r="46" fill="#EEF4FF" stroke="#BFDBFE" strokeWidth="1" />
              {/* Meridian lines */}
              <ellipse cx="80" cy="65" rx="22" ry="46" fill="none" stroke="#BFDBFE" strokeWidth="0.9" />
              <ellipse cx="80" cy="65" rx="38" ry="46" fill="none" stroke="#DBEAFE" strokeWidth="0.7" />
              {/* Horizontal lines */}
              <line x1="34" y1="65" x2="126" y2="65" stroke="#BFDBFE" strokeWidth="0.8" />
              <ellipse cx="80" cy="65" rx="44" ry="18" fill="none" stroke="#DBEAFE" strokeWidth="0.65" strokeDasharray="2.5,3.5" />
              <ellipse cx="80" cy="65" rx="38" ry="30" fill="none" stroke="#E0ECFF" strokeWidth="0.6" strokeDasharray="2,4" />
              {/* City dots */}
              <circle cx="98"  cy="55" r="5"   fill="#2563eb" opacity="0.9" />
              <circle cx="98"  cy="55" r="9"   fill="none"    stroke="#2563eb" strokeWidth="1" opacity="0.28" />
              <circle cx="58"  cy="60" r="3.5" fill="#22c55e" opacity="0.85" />
              <circle cx="76"  cy="74" r="3.5" fill="#f59e0b" opacity="0.85" />
              <circle cx="112" cy="63" r="3.5" fill="#2563eb" opacity="0.7" />
              <circle cx="62"  cy="50" r="2.5" fill="#0ea5e9" opacity="0.65" />
              {/* Connection lines */}
              <line x1="98" y1="55" x2="112" y2="63" stroke="#2563eb" strokeWidth="0.7" opacity="0.3" strokeDasharray="2,2" />
              <line x1="58" y1="60" x2="76"  y2="74" stroke="#22c55e" strokeWidth="0.7" opacity="0.3" strokeDasharray="2,2" />
            </svg>

            <p className="hero-counter-big">
              <Counter to={7} delay={1.0} />
            </p>
            <p className="hero-counter-label">Countries of operation</p>
          </motion.div>

          {/* Portfolio Growth card — right side, wider */}
          <motion.div
            {...cardEnter(0.78, 24, 16)}
            style={{width:"360px"}}
            className="glass-card  float-b hero-card-portfolio"
          >
            <div className="hero-portfolio-header ">
              <p className="hero-portfolio-title">Portfolio Growth</p>
              <span className="hero-portfolio-badge">↑ Active</span>
            </div>

            <p className="hero-portfolio-num">
              <Counter to={8} delay={1.1} />
            </p>
            <p className="hero-portfolio-sub">Ventures across 7 countries</p>

            {/* Bar chart */}
            <div className="hero-portfolio-bars">
              {PORTFOLIO_BARS.map((h, i) => (
                <div
                  key={i}
                  className="hero-portfolio-bar"
                  style={{
                    background:
                      i === PORTFOLIO_BARS.length - 1
                        ? "linear-gradient(180deg,#2563eb,#0ea5e9)"
                        : "#dbeafe",
                    height: `${h}%`,
                    animation: `growBar 0.55s ease-out ${0.88 + i * 0.045}s both`,
                  }}
                />
              ))}
            </div>

            {/* Category rows */}
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="cat-row">
                <div className="hero-cat-left">
                  <div className="hero-cat-dot" style={{ background: cat.dot }} />
                  <span className="hero-cat-label">{cat.label}</span>
                </div>
                <span className="hero-cat-count">{cat.count}</span>
              </div>
            ))}
          </motion.div>

          {/* Notification card — bottom-center */}
          <motion.div
            {...cardEnter(0.94, 0, 20)}
            className="glass-card hero-card-notification"
          >
            <div className="hero-notification-inner">
              <div className="hero-notification-icon">🚀</div>
              <div>
                <p className="hero-notification-title">New venture onboarded</p>
                <p className="hero-notification-sub">Tezz Logistics · India</p>
              </div>
            </div>
          </motion.div>

          {/* Sectors dark card — bottom-right */}
          <motion.div
            {...cardEnter(1.02, 20, 20)}
            className="hero-card-sectors"
          >
            <div className="hero-sectors-tags">
              {TAGS.map((tag, i) => (
                <span key={i} className="tag-pill">{tag}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ══════════════ MOBILE CARDS GRID ══════════════ */}
      <div className="hero-mobile-grid">

        {/* Countries */}
        <motion.div
          className="glass-card"
          style={{ borderRadius: 20, padding: 16 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 4 }}>
            Countries
          </p>
          <p style={{ fontSize: 32, fontWeight: 900, color: "#0D0D0B", letterSpacing: "-1.5px", lineHeight: 1 }}>
            <Counter to={7} delay={0.7} />
          </p>
          <div style={{ margin: "8px 0" }}>
            <Sparkline data={SPARKDATA} color="#2563eb" height={28} />
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", paddingTop: 8, borderTop: "1px solid rgba(37,99,235,0.08)" }}>
            {["UAE", "India", "BD", "USA", "CA", "UK", "DE"].map((c, i) => (
              <span
                key={i}
                style={{ fontSize: 9, fontWeight: 700, color: "#475569", borderRadius: 5, padding: "2px 6px", background: "rgba(37,99,235,0.06)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Portfolio */}
        <motion.div
          className="glass-card"
          style={{ borderRadius: 20, padding: 16 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Portfolio
            </p>
            <span style={{ fontSize: 9, fontWeight: 700, color: "#16a34a", borderRadius: 999, padding: "2px 7px", background: "rgba(22,163,74,0.08)" }}>
              ↑ Active
            </span>
          </div>
          <p style={{ fontSize: 32, fontWeight: 900, color: "#0D0D0B", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 3 }}>
            <Counter to={8} delay={0.8} />
          </p>
          <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 8 }}>Ventures · 7 countries</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 28 }}>
            {PORTFOLIO_BARS.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: "3px 3px 1px 1px",
                  background: i === PORTFOLIO_BARS.length - 1
                    ? "linear-gradient(180deg,#2563eb,#0ea5e9)"
                    : "#dbeafe",
                  height: `${h}%`,
                  transformOrigin: "bottom",
                  animation: `growBar 0.55s ease-out ${0.75 + i * 0.04}s both`,
                }}
              />
            ))}
          </div>
        </motion.div>

          {/* Notification */}
        <motion.div
          className="glass-card"
          style={{ borderRadius: 20, padding: 16 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
              🚀
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#0D0D0B", lineHeight: 1.3 }}>New venture onboarded</p>
              <p style={{ fontSize: 9, color: "#94a3b8", marginTop: 2 }}>Tezz Logistics · India</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 32 }}>
            {MINI_BARS.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: "3px 3px 1px 1px",
                  background: i === 5
                    ? "linear-gradient(180deg,#2563eb,#0ea5e9)"
                    : "linear-gradient(180deg,#bfdbfe,#dbeafe)",
                  height: `${h}%`,
                  transformOrigin: "bottom",
                  animation: `growBar 0.65s ease-out ${0.82 + i * 0.06}s both`,
                }}
              />
            ))}
          </div>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", marginTop: 8 }}>↑ 12.4% this month</p>
        </motion.div>

        {/* Sectors (dark) */}
        <motion.div
          style={{
            borderRadius: 20,
            padding: 16,
            background: "linear-gradient(135deg,#0B1D3A 0%,#1e293b 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10, color: "rgba(255,255,255,0.38)" }}>
            Sectors
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {TAGS.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  borderRadius: 999,
                  padding: "4px 9px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="live-dot" />
            <span style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>
              All sectors active
            </span>
          </div>
        </motion.div>

      </div>

      {/* ══════════════ VC STATS ROW ══════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.65 }}
        className="hero-vc-stats"
      >
        <div className="hero-vc-stat">
          <p className="hero-vc-num"><Counter to={8} suffix="+" delay={1.2} /></p>
          <p className="hero-vc-label hero-vc-label--amber">Portfolio Companies</p>
        </div>
        <div className="hero-vc-divider" />
        <div className="hero-vc-stat">
          <p className="hero-vc-num"><Counter to={7} delay={1.3} /></p>
          <p className="hero-vc-label">Countries</p>
        </div>
        <div className="hero-vc-divider" />
        <div className="hero-vc-stat">
          <p className="hero-vc-num"><Counter to={6} delay={1.4} /></p>
          <p className="hero-vc-label">
            <span className="hero-vc-label--blue">Industry</span> Sectors
          </p>
        </div>
        <div className="hero-vc-divider" />
        <div className="hero-vc-stat">
          <p className="hero-vc-num"><Counter to={1} delay={1.5} /></p>
          <p className="hero-vc-label">Global HQ · Dubai UAE</p>
        </div>
      </motion.div>

      {/* ══════════════ MARQUEE TICKER ══════════════ */}
      <Marquee speed="36s" />

      

    </div>
  );
}
