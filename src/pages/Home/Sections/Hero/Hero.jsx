import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Link } from "react-router-dom";
import Globe from "../../../../common/components/Globe/Globe";
import "./Hero.css";

/* ── Animated counter ── */
function Counter({ to, prefix = "", suffix = "", delay = 1.3 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const ctrl = animate(0, to, {
        duration: 2, ease: "easeOut",
        onUpdate: (v) => setVal(Math.floor(v)),
      });
      return ctrl.stop;
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [to, delay]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
}

/* ── Sparkline ── */
function Sparkline({ data, color = "#2563eb", height = 34 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const W = 100, H = height;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((v - min) / (max - min || 1)) * (H - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} className="overflow-visible block">
      <defs>
        <linearGradient id="spkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.16" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${H} ${pts} ${W},${H}`} fill="url(#spkFill)" />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BARS      = [38, 62, 44, 80, 52, 94, 68];
const SPARKDATA = [22, 35, 28, 45, 38, 55, 48, 62, 58, 72];

const CATEGORIES = [
  { dot: "#2563eb", label: "E-Commerce & Retail",   count: 2 },
  { dot: "#22c55e", label: "Logistics & Trade",     count: 3 },
  { dot: "#f59e0b", label: "Tech & Communications", count: 2 },
];

const TAGS = ["E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Comms", "Trading"];

const AVATARS = [
  { initials: "TL", bg: "linear-gradient(135deg,#2563eb,#0ea5e9)" },
  { initials: "HG", bg: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { initials: "GM", bg: "linear-gradient(135deg,#22c55e,#0ea5e9)" },
  { initials: "+4", bg: "#e2e8f0", color: "#64748b" },
];

const STATS = [
  { to: 40,   prefix: "",  suffix: "K+", label: "Active users worldwide" },
  { to: 2300, prefix: "+", suffix: "",   label: "New signups this month" },
  { to: 4,    prefix: "$", suffix: ".6B", label: "Total volume processed" },
];

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="fin-bg" />
      <div className="fin-grain" />

      <div className="hero-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="hero-badge-wrap"
          >
            <div className="hero-badge">
              <span className="hero-badge-icon">→</span>
              <span className="hero-badge-text">7 Ventures are live &amp; growing</span>
              <span className="hero-badge-arrow">→</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-heading"
          >
            Welcome to a<br />
            <em className="shimmer-blue hero-serif">Smarter</em>{" "}Way<br />
            to Build{" "}<em className="shimmer-amber hero-serif">Ventures</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="hero-subtext"
          >
            GoBongo Ventures is a Dubai-based holding group backing<br />
            bold companies across e-commerce, logistics, technology,<br />
            trade, and communications.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="hero-ctas"
          >
            <Link to="/portfolio" className="hero-btn-dark">Explore Portfolio →</Link>
            <Link to="/about" className="hero-btn-ghost">Our Story</Link>
          </motion.div>

          {/* Avatar stack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
            className="hero-avatars"
          >
            <div className="avatar-stack">
              {AVATARS.map((a, i) => (
                <div key={i} className="avatar-item" style={{
                  background: a.bg,
                  color: a.color || "white",
                  zIndex: AVATARS.length - i,
                }}>
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="hero-avatar-label">
              <strong>8 companies</strong> under one vision
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hero-right">

          {/* Card: Countries of Operation (contains Globe) */}
          <motion.div
            className="glass-card float-a hero-card-countries"
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Globe src="/videos/globe.mp4" width={162} height={162} />
            <p className="hero-counter-big"><Counter to={4} delay={1.0} /></p>
            <p className="hero-counter-label">Countries of operation</p>
          </motion.div>

          {/* Card: Portfolio Growth */}
          <motion.div
            className="glass-card float-b hero-card-portfolio"
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portfolio-header">
              <p className="hero-portfolio-title">Portfolio Growth</p>
              <span className="hero-portfolio-badge">↑ Active</span>
            </div>
            <p className="hero-portfolio-num"><Counter to={8} delay={1.1} /></p>
            <p className="hero-portfolio-sub">Ventures across 7 countries</p>
            <div className="hero-portfolio-bars">
              {[30,45,35,55,42,65,50,80,60,100].map((h, i) => (
                <div key={i} className="hero-portfolio-bar" style={{
                  background: i === 9 ? "linear-gradient(180deg,#2563eb,#0ea5e9)" : "#dbeafe",
                  height: `${h}%`,
                  animation: `growBar 0.6s ease-out ${0.85 + i * 0.05}s both`,
                }} />
              ))}
            </div>
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

          {/* Card: New Venture Notification */}
          <motion.div
            className="glass-card hero-card-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-notification-inner">
              <div className="hero-notification-icon">🚀</div>
              <div>
                <p className="hero-notification-title">New venture onboarded</p>
                <p className="hero-notification-sub">Tezz Logistics · India</p>
              </div>
            </div>
          </motion.div>

          {/* Card: Sectors (dark) */}
          <motion.div
            className="hero-card-sectors"
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-sectors-tags">
              {TAGS.map((tag, i) => (
                <span key={i} className="tag-pill">{tag}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Mobile Cards Grid ── */}
      <div className="hero-mobile-grid">

        <motion.div className="glass-card rounded-[20px] p-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          <p className="text-[10px] text-slate-400 font-semibold tracking-[0.04em] uppercase mb-1">Countries</p>
          <p className="text-[30px] font-black text-slate-900 leading-none" style={{ letterSpacing: "-1.5px" }}>
            <Counter to={4} delay={0.7} />
          </p>
          <div className="my-2"><Sparkline data={SPARKDATA} color="#2563eb" height={28} /></div>
          <div className="flex gap-[5px] flex-wrap pt-2" style={{ borderTop: "1px solid rgba(37,99,235,0.08)" }}>
            {["UAE", "India", "KSA", "UK"].map((c, i) => (
              <span key={i} className="text-[9px] font-bold text-slate-600 rounded-[5px] px-[6px] py-[2px]"
                style={{ background: "rgba(37,99,235,0.06)" }}>{c}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="glass-card rounded-[20px] p-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}>
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] text-slate-400 font-bold tracking-[0.04em] uppercase">Portfolio</p>
            <span className="text-[9px] font-bold text-green-600 rounded-full px-[6px] py-[1px]"
              style={{ background: "rgba(22,163,74,0.08)" }}>↑ Active</span>
          </div>
          <p className="text-[30px] font-black text-slate-900 leading-none mb-1" style={{ letterSpacing: "-1.5px" }}>
            <Counter to={8} delay={0.8} />
          </p>
          <p className="text-[10px] text-slate-400 mb-2">Ventures · 7 countries</p>
          <div className="flex items-end gap-[3px]" style={{ height: 28 }}>
            {[30,45,35,55,42,65,50,80,60,100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-[3px]" style={{
                background: i === 9 ? "linear-gradient(180deg,#2563eb,#0ea5e9)" : "#dbeafe",
                height: `${h}%`, transformOrigin: "bottom",
                animation: `growBar 0.6s ease-out ${0.7 + i * 0.04}s both`,
              }} />
            ))}
          </div>
        </motion.div>

        <motion.div className="glass-card rounded-[20px] p-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-[8px] shrink-0 flex items-center justify-center text-sm"
              style={{ background: "linear-gradient(135deg,#2563eb,#0ea5e9)" }}>🚀</div>
            <div>
              <p className="text-[10px] font-bold text-slate-900 leading-tight">New venture onboarded</p>
              <p className="text-[9px] text-slate-400">Tezz Logistics · India</p>
            </div>
          </div>
          <div className="flex items-end gap-1" style={{ height: 36 }}>
            {BARS.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-[3px]" style={{
                background: i === 5 ? "linear-gradient(180deg,#2563eb,#0ea5e9)" : "linear-gradient(180deg,#bfdbfe,#dbeafe)",
                height: `${h}%`, transformOrigin: "bottom",
                animation: `growBar 0.7s ease-out ${0.8 + i * 0.06}s both`,
              }} />
            ))}
          </div>
          <p className="text-[10px] font-bold text-green-600 mt-2">↑ 12.4% this month</p>
        </motion.div>

        <motion.div className="rounded-[20px] p-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ background: "linear-gradient(135deg,#0B1D3A 0%,#1e293b 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}>
          <p className="text-[10px] font-bold tracking-[0.06em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Sectors</p>
          <div className="flex flex-wrap gap-[5px]">
            {TAGS.map((tag, i) => (
              <span key={i} className="text-[9px] font-semibold rounded-full px-[8px] py-[3px]"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-[6px] mt-3 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="live-dot" />
            <span className="text-[9px] font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>All sectors active</span>
          </div>
        </motion.div>

      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="hero-stats"
      >
        <div className="hero-stats-inner">
          {STATS.map((s, i) => (
            <>
              <div key={s.label} className="hero-stat">
                <p className="hero-stat-value">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} delay={1.4 + i * 0.1} />
                </p>
                <p className="hero-stat-label">{s.label}</p>
              </div>
              {i < 2 && <div key={`div${i}`} className="stat-divider mx-8" />}
            </>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
