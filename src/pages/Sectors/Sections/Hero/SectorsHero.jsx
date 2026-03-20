import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const SECTORS_GRID = [
  { Icon: ShoppingBag, label: "E-Commerce",    color: "#1A56E8", bg: "#EEF3FF" },
  { Icon: Truck,       label: "Logistics",      color: "#0D9488", bg: "#F0FDFB" },
  { Icon: Monitor,     label: "IT & Digital",   color: "#7C3AED", bg: "#F3F0FF" },
  { Icon: Handshake,   label: "B2B Trade",      color: "#B8892A", bg: "#FBF5E8" },
  { Icon: Radio,       label: "Communications", color: "#E85D26", bg: "#FFF1EB" },
  { Icon: TrendingUp,  label: "Trading",        color: "#16A34A", bg: "#F0FDF4" },
];

const HEADING_LINE1 = ["We", "Back"];
const HEADING_LINE2 = ["Industries", "Built"];
const HEADING_LINE3 = ["for", "Scale."];

export default function SectorsHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section className="sh-section" ref={ref}>
      <div className="sh-glow sh-glow--tl" />
      <div className="sh-glow sh-glow--br" />
      <div className="sh-noise" />

      <div className="sh-inner">
        {/* ── Left column ── */}
        <div className="sh-left">
          <motion.div
            className="sh-eyebrow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="sh-eyebrow-dot" />
            <span className="sh-eyebrow-text">6 Core Sectors · Deep Conviction</span>
          </motion.div>

          <h1 className="sh-heading">
            {[HEADING_LINE1, HEADING_LINE2, HEADING_LINE3].map((line, li) =>
              line.map((w, wi) => {
                const isAccent = w === "Scale.";
                return (
                  <motion.span
                    key={`${li}-${wi}`}
                    className={`sh-word${isAccent ? " sh-word--accent" : ""}`}
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + (li * 2 + wi) * 0.07,
                      type: "spring",
                      damping: 24,
                    }}
                  >
                    {w}
                    {isAccent && (
                      <motion.span
                        className="sh-word-underline"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </motion.span>
                );
              })
            )}
          </h1>

          <motion.p
            className="sh-sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Our thesis is deliberately narrow — essential industries undergoing digital
            transformation, where operational excellence creates compounding advantages
            that are nearly impossible to replicate.
          </motion.p>

          <motion.div
            className="sh-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link to="/portfolio" className="sh-btn-primary">View Portfolio →</Link>
            <Link to="/pitch" className="sh-btn-ghost">Pitch in Our Sectors</Link>
          </motion.div>

          <motion.div
            className="sh-stats-row"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[["6", "Sectors"], ["8+", "Ventures"], ["7", "Countries"]].map(([n, l]) => (
              <div key={l} className="sh-stat">
                <span className="sh-stat-num">{n}</span>
                <span className="sh-stat-label">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — sector cards grid ── */}
        <div className="sh-right">
          <div className="sh-cards-grid">
            {SECTORS_GRID.map((s, i) => (
              <motion.a
                key={s.label}
                href={`#${s.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="sh-sector-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{ "--card-color": s.color, "--card-bg": s.bg }}
              >
                <div className="sh-card-icon" style={{ background: s.bg }}>
                  <s.Icon size={20} color={s.color} strokeWidth={1.8} />
                </div>
                <span className="sh-card-label" style={{ color: s.color }}>{s.label}</span>
                <span className="sh-card-arrow">↗</span>
                <span className="sh-card-stripe" style={{ background: s.color }} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="sh-deco-badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="sh-deco-dot" />
            <span className="sh-deco-text">Structural transformation · Every sector</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
