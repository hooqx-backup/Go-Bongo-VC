import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PortfolioSection.css";
import { ventures, filters } from "./portfolioData";

// ─── SPARKLINE ────────────────────────────────────────────────────────────────
function Sparkline({ color, points }) {
  const W = 80, H = 36;
  const max = Math.max(...points), min = Math.min(...points), range = max - min || 1;
  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * W,
    y: H - ((p - min) / range) * (H * 0.78) - 4,
  }));
  const d = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  const uid = `sp${color.replace(/[^a-z0-9]/gi, "")}`;
  const last = coords[coords.length - 1];
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${W},${H} L0,${H} Z`} fill={`url(#${uid})`} />
      <path d={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="3.5" fill={color} />
      <circle cx={last.x} cy={last.y} r="6" fill={color} opacity="0.2" />
    </svg>
  );
}

// ─── LOGO ─────────────────────────────────────────────────────────────────────
function VentureLogo({ v, size = 56 }) {
  const [err, setErr] = useState(false);
  if (!v.logo || err) {
    return (
      <div
        className="venture-logo venture-logo--fallback"
        style={{
          width: size, height: size,
          background: v.accentLight,
          border: `1px solid ${v.accentBorder}`,
          fontSize: size * 0.36, color: v.accent,
          boxShadow: `0 2px 8px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)`,
        }}
      >
        {v.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <div
      className="venture-logo venture-logo--image"
      style={{
        width: size, height: size,
        background: v.logoBg,
        border: v.darkLogo ? "1px solid rgba(255,255,255,0.07)" : `1px solid ${v.accentBorder}`,
        boxShadow: v.darkLogo
          ? `0 4px 16px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)`
          : `0 2px 8px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)`,
      }}
    >
      <img src={v.logo} alt={v.name} onError={() => setErr(true)} />
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────
function VentureCard({ v, index, isVisible }) {
  const [hov, setHov] = useState(false);
  const [mp, setMp] = useState({ x: 50, y: 50 });
  const ref = useRef(null);
  const isF = v.featured;

  const onMove = e => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setMp({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <Link
      ref={ref}
      to={`/portfolio/${v.id}`}
      className={`venture-card${isF ? " venture-card--featured" : ""}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onMouseMove={onMove}
      style={{
        border: `1px solid ${hov ? v.accent + "38" : "rgba(13,13,11,0.07)"}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
        transition: `opacity .6s cubic-bezier(.16,1,.3,1) ${index * .08}s, transform .6s cubic-bezier(.16,1,.3,1) ${index * .08}s, border-color .25s, box-shadow .3s`,
        pointerEvents: isVisible ? "auto" : "none",
        boxShadow: hov
          ? `0 22px 54px rgba(0,0,0,0.11), 0 4px 14px rgba(0,0,0,0.06)`
          : `0 1px 4px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.04)`,
      }}
    >
      {/* Mouse spotlight */}
      <div
        className="venture-card__spotlight"
        style={{ background: hov ? `radial-gradient(circle at ${mp.x}% ${mp.y}%, ${v.accent}0d 0%, transparent 55%)` : "transparent" }}
      />

      {/* Accent top stripe */}
      <div
        className="venture-card__stripe"
        style={{
          background: `linear-gradient(90deg, ${v.accent}, ${v.accent}55)`,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      {/* Inner shadow rim */}
      <div className="venture-card__rim" />

      {/* MAIN CONTENT */}
      <div className="venture-card__body">

        {/* Num + badge */}
        <div className="venture-card__meta">
          <span className="venture-card__num">{v.num} / 07</span>
          {isF && (
            <span style={{
              fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: v.accent, background: v.accentLight, border: `1px solid ${v.accentBorder}`,
              borderRadius: "100px", padding: "3px 12px",
              boxShadow: `0 2px 8px ${v.accent}28`,
            }}>★ Flagship</span>
          )}
        </div>

        {/* Logo */}
        <div className="venture-card__logo-wrap">
          <VentureLogo v={v} size={isF ? 64 : 56} />
        </div>

        {/* Name */}
        <div className="venture-card__name" style={{ fontSize: isF ? "24px" : "21px" }}>
          {v.name}
        </div>

        {/* Tagline */}
        <div style={{ fontSize: "12px", fontWeight: 600, color: v.accent, marginBottom: "5px", fontFamily: "'Outfit',sans-serif" }}>
          {v.tagline}
        </div>

        {/* Sector */}
        <div style={{ fontSize: "10px", fontWeight: 600, color: v.accent + "88", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'Outfit',sans-serif" }}>
          {v.sectorLabel}
        </div>

        {/* Desc */}
        <p className="venture-card__desc">{v.desc}</p>

        {/* Tags */}
        <div className="venture-card__tags">
          {v.tags.map(t => <span key={t} className="venture-card__tag">{t}</span>)}
        </div>

        {/* Card footer */}
        <div className="venture-card__footer">
          <div className="venture-card__geo">
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: v.accent, boxShadow: `0 0 0 3px ${v.accentLight}` }} />
            <span className="venture-card__geo-text">{v.geo}</span>
          </div>
          <div className="venture-card__actions">
            {/* Hover stat */}
            <div
              className="venture-card__stat"
              style={{ opacity: hov ? 1 : 0, transform: hov ? "translateX(0)" : "translateX(10px)" }}
            >
              <span className="venture-card__stat-val" style={{ color: v.accent }}>{v.stat1.val}</span>
              <span className="venture-card__stat-label">{v.stat1.label}</span>
            </div>
            {/* Arrow */}
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: hov ? "#0D0D0B" : "#F4F3EE",
              border: `1px solid ${hov ? "#0D0D0B" : "rgba(13,13,11,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "15px", color: hov ? "#ffffff" : "#AEADA6",
              transform: hov ? "rotate(45deg)" : "rotate(0deg)",
              transition: "all .35s cubic-bezier(.34,1.56,.64,1)",
              boxShadow: hov ? "0 4px 14px rgba(0,0,0,0.22)" : "0 1px 4px rgba(0,0,0,0.08)",
            }}>↗</div>
          </div>
        </div>
      </div>

      {/* FEATURED RIGHT PANEL */}
      {isF && (
        <div className="venture-card__panel">

          {/* Sparkline card */}
          <div className="venture-card__sparkline-card">
            <div className="venture-card__sparkline-header">
              <div>
                <div className="venture-card__sparkline-label">Order Volume</div>
                <div className="venture-card__sparkline-value">↑ 48%</div>
                <div className="venture-card__sparkline-sub">Year on year growth</div>
              </div>
              <Sparkline color={v.accent} points={v.sparkPoints} />
            </div>
          </div>

          {/* 2 stat tiles */}
          <div className="venture-card__stats-grid">
            {[v.stat1, v.stat2].map((s, i) => (
              <div
                key={i}
                className="venture-card__stat-tile"
                style={{
                  background: i === 0 ? v.accentLight : "#F4F3EE",
                  border: i === 0 ? `1px solid ${v.accentBorder}` : "1px solid rgba(13,13,11,0.07)",
                  boxShadow: i === 0 ? `0 4px 12px ${v.accent}20` : "0 2px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div className="venture-card__stat-tile-label" style={{ color: i === 0 ? v.accent : "#AEADA6" }}>
                  {s.label}
                </div>
                <div className="venture-card__stat-tile-val">{s.val}</div>
              </div>
            ))}
          </div>

          {/* Dark categories card */}
          <div className="venture-card__categories-card">
            <div className="venture-card__categories-label">Active Categories</div>
            <div className="venture-card__categories-tags">
              {v.featCategories.map(c => (
                <span key={c} className="venture-card__category-tag">{c}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const [active, setActive] = useState("all");
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState([]);
  const [secIn, setSecIn] = useState(false);
  const secRef = useRef(null);
  const revealTimersRef = useRef([]);

  const filtered = ventures.filter(v => active === "all" || v.sectorKey === active);

  const clearRevealTimers = () => {
    revealTimersRef.current.forEach(clearTimeout);
    revealTimersRef.current = [];
  };

  const triggerReveal = cards => {
    clearRevealTimers();
    setVisible([]);
    setAnimating(true);
    revealTimersRef.current.push(setTimeout(() => setAnimating(false), 200));
    cards.forEach((_, i) => {
      revealTimersRef.current.push(setTimeout(() => setVisible(p => [...p, i]), i * 90 + 150));
    });
  };

  useEffect(() => {
    if (!secIn) {
      clearRevealTimers();
      setVisible([]);
      return;
    }

    triggerReveal(filtered);
    return clearRevealTimers;
  }, [active, secIn]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        setSecIn(e.isIntersecting);
      },
      { threshold: 0.07 }
    );
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper">
      <section
        ref={secRef}
        className="portfolio-section"
        style={{
          opacity: secIn ? 1 : 0,
          transform: secIn ? "translateY(0)" : "translateY(36px)",
        }}
      >
        {/* HEADER */}
        <div className="portfolio-header">
          <div>
            <div className="portfolio-label">
              <div className="portfolio-label-line" />
              Our Portfolio
            </div>
            <h2 className="portfolio-heading">
              Seven Ventures.{" "}
              <em>One Vision.</em>
            </h2>
            <p className="portfolio-subtext">Spanning 6 industries · 4 countries · 1 holding group</p>
          </div>

          {/* Filter bar */}
          <div className="portfolio-filter-bar">
            {filters.map(f => {
              const on = active === f.key;
              return (
                <button
                  key={f.key}
                  className={`portfolio-filter-btn${on ? " active" : ""}`}
                  onClick={() => { if (f.key !== active) setActive(f.key); }}
                  style={{ transform: animating && on ? "scale(0.92)" : "scale(1)" }}
                >
                  {f.label}
                  <span className="portfolio-filter-count">{f.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Count line */}
        <div className="portfolio-count-line">
          <span className="portfolio-count-text">
            Showing{" "}
            <strong>{filtered.length}</strong>{" "}
            venture{filtered.length !== 1 ? "s" : ""}
            {active !== "all" && <> in <span className="portfolio-count-accent">{filters.find(f => f.key === active)?.label}</span></>}
          </span>
          <div className="portfolio-count-divider" />
        </div>

        {/* GRID */}
        <div className="portfolio-grid">
          {filtered.map((v, fi) => (
            <VentureCard
              key={v.id}
              v={v}
              index={fi}
              isVisible={visible.includes(fi)}
            />
          ))}
        </div>

        {/* Footer line */}
        <div
          className="portfolio-footer"
          style={{
            opacity: secIn ? 1 : 0,
            transform: secIn ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="portfolio-footer-line" />
          <span className="portfolio-footer-text">All ventures live & operating</span>
          <div className="portfolio-footer-line" />
        </div>
      </section>
    </div>
  );
}
