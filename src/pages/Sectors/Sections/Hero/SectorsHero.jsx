import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Truck,
  Monitor,
  Handshake,
  Radio,
  TrendingUp,
} from "lucide-react";
import "./SectorsHero.css";

const SECTORS = [
  { Icon: ShoppingBag, label: "E-Commerce",    color: "#1A56E8", bg: "#EEF3FF", stat: "2 Ventures", pct: 72 },
  { Icon: Truck,       label: "Logistics",      color: "#0D9488", bg: "#F0FDFB", stat: "1 Venture",  pct: 55 },
  { Icon: Monitor,     label: "IT & Digital",   color: "#7C3AED", bg: "#F3F0FF", stat: "2 Ventures", pct: 68 },
  { Icon: Handshake,   label: "B2B Trade",      color: "#B8892A", bg: "#FBF5E8", stat: "1 Venture",  pct: 45 },
  { Icon: Radio,       label: "Communications", color: "#E85D26", bg: "#FFF1EB", stat: "1 Venture",  pct: 38 },
  { Icon: TrendingUp,  label: "Trading",        color: "#16A34A", bg: "#F0FDF4", stat: "1 Venture",  pct: 62 },
];

const MARQUEE_ITEMS = [
  "E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Communications", "Trading",
  "E-Commerce", "Logistics", "IT & Digital", "B2B Trade", "Communications", "Trading",
];

const FLOAT_CLASSES = ["sh-float-a", "sh-float-b", "sh-float-c", "sh-float-b", "sh-float-c", "sh-float-a"];

const HEADING_LINES = [
  { text: "We Back",     accent: null },
  { text: "Industries",  accent: null },
  { text: "Built for ",  accent: "Scale." },
];

const STATS = [
  { to: 6, suffix: "",  label: "Sectors"   },
  { to: 8, suffix: "+", label: "Ventures"  },
  { to: 7, suffix: "",  label: "Countries" },
];

/* Animated counter that counts up from 0 on scroll-enter */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(count, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [isInView, to, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function SectorsHero() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  /* ── Cursor-tracking glow (pixel position) ── */
  const glowX = useMotionValue(-500);
  const glowY = useMotionValue(-500);
  const springGlowX = useSpring(glowX, { stiffness: 52, damping: 20 });
  const springGlowY = useSpring(glowY, { stiffness: 52, damping: 20 });

  /* ── Right column 3-D tilt (normalised 0→1) ── */
  const mouseXN = useMotionValue(0.5);
  const mouseYN = useMotionValue(0.5);
  const springXN = useSpring(mouseXN, { stiffness: 45, damping: 18 });
  const springYN = useSpring(mouseYN, { stiffness: 45, damping: 18 });
  const tiltX = useTransform(springYN, [0, 1], [5, -5]);
  const tiltY = useTransform(springXN, [0, 1], [-6, 6]);

  function onMouseMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowX.set(x);
    glowY.set(y);
    mouseXN.set(x / rect.width);
    mouseYN.set(y / rect.height);
  }

  function onMouseLeave() {
    glowX.set(-500);
    glowY.set(-500);
    mouseXN.set(0.5);
    mouseYN.set(0.5);
  }

  return (
    <section
      className="sh-section"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated dot grid */}
      <div className="sh-dot-grid" />

      {/* Cursor-tracking glow blob */}
      <motion.div
        className="sh-cursor-glow"
        style={{ x: springGlowX, y: springGlowY }}
      />

      {/* Ambient glows */}
      <div className="sh-glow sh-glow--tl" />
      <div className="sh-glow sh-glow--br" />
      <div className="sh-noise" />

      {/* ── Scrolling marquee strip ── */}
      <div className="sh-marquee-wrap">
        <div className="sh-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="sh-marquee-item">
              <span className="sh-marquee-dot" style={{ background: SECTORS[i % 6].color }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="sh-inner">
        {/* ══ LEFT ══ */}
        <div className="sh-left">

          {/* Eyebrow — blur + slide in */}
          <motion.div
            className="sh-eyebrow"
            initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="sh-eyebrow-dot" />
            <span className="sh-eyebrow-text">6 Core Sectors · Deep Conviction</span>
          </motion.div>

          {/* Heading — masked slide-up per line */}
          <h1 className="sh-heading">
            {HEADING_LINES.map((line, i) => (
              <div key={i} className="sh-line-mask">
                <motion.span
                  className="sh-line"
                  initial={{ y: "112%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{
                    duration: 0.85,
                    delay: 0.14 + i * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                  {line.accent && (
                    <span className="sh-accent">
                      {line.accent}
                      <motion.span
                        className="sh-underline"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.85, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  )}
                </motion.span>
              </div>
            ))}
          </h1>

          {/* Sub — blur in */}
          <motion.p
            className="sh-sub"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.95, delay: 0.54 }}
          >
            Our thesis is deliberately narrow essential industries undergoing digital
            transformation, where operational excellence creates compounding advantages
            that are nearly impossible to replicate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="sh-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.66 }}
          >
            <Link to="/portfolio" className="sh-btn-primary">View Portfolio →</Link>
            <Link to="/pitch" className="sh-btn-ghost">Create a Unicorn</Link>
          </motion.div>

          {/* Stats — count up on enter */}
          <motion.div
            className="sh-stats-row"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {STATS.map(({ to, suffix, label }) => (
              <div key={label} className="sh-stat">
                <span className="sh-stat-num">
                  <Counter to={to} suffix={suffix} />
                </span>
                <span className="sh-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT — tilting card grid ══ */}
        <motion.div
          className="sh-right"
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformPerspective: 1100,
          }}
        >
          <div className="sh-cards-grid">
            {SECTORS.map((s, i) => (
              <div key={s.label} className={`sh-card-wrap ${FLOAT_CLASSES[i]}`}>
                <motion.a
                  
                  className="sh-sector-card"
                  initial={{ opacity: 0, y: 40, rotateX: 18, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.75,
                    delay: 0.22 + i * 0.09,
                    type: "spring",
                    damping: 17,
                    stiffness: 95,
                  }}
                  whileHover={{ y: -7, scale: 1.035, transition: { duration: 0.22 } }}
                  style={{
                    transformPerspective: 900,
                    "--card-color": s.color,
                    "--card-bg": s.bg,
                  }}
                >
                  {/* Top colour stripe */}
                  <span className="sh-card-stripe" style={{ background: s.color }} />

                  {/* Icon + arrow */}
                  <div className="sh-card-top">
                    <div className="sh-card-icon" style={{ background: s.bg }}>
                      <s.Icon size={18} color={s.color} strokeWidth={1.8} />
                    </div>
                    <span className="sh-card-arrow">↗</span>
                  </div>

                  {/* Label */}
                  <span className="sh-card-label">{s.label}</span>

                  {/* Stat chip */}
                  <span className="sh-card-stat" style={{ color: s.color, background: s.bg }}>
                    {s.stat}
                  </span>

                  {/* Animated progress bar */}
                  <div className="sh-card-bar-track">
                    <motion.div
                      className="sh-card-bar-fill"
                      style={{ background: s.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${s.pct}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.48 + i * 0.09,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.a>
              </div>
            ))}
          </div>

          {/* Live badge */}
          <motion.div
            className="sh-deco-badge"
            initial={{ opacity: 0, scale: 0.82, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.65, delay: 0.98 }}
          >
            <span className="sh-deco-dot" />
            <span className="sh-deco-text">Structural transformation · Every sector</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
