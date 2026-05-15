import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Leadership.css";

const TESTIMONIALS = [
  {
    quote:
      "GoBongo Venture doesn't just invest, they build alongside you. The cross-portfolio access they gave us opened doors we couldn't have knocked on alone.",
    role: "Founder & CEO",
    company: "Tezz Logistics",
    location: "India",
    initials: "TL",
    gradient: "linear-gradient(135deg, #1A56E8 0%, #5B8DEF 100%)",
    shadowColor: "rgba(26,86,232,0.28)",
  },
  {
    quote:
      "What sets GoBongo apart is their operator mindset. They don't ask you to explain logistics they already understand it. That changes everything about the partnership.",
    role: "Co-Founder",
    company: "Tradeflink",
    location: "Middle East",
    initials: "TF",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    shadowColor: "rgba(124,58,237,0.28)",
  },
  {
    quote:
      "Being part of the GoBongo ecosystem meant we had 7 other companies as potential partners from day one. That kind of immediate network is impossible to buy.",
    role: "Founder",
    company: "Hooqx LLC",
    location: "United States",
    initials: "HQ",
    gradient: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    shadowColor: "rgba(5,150,105,0.28)",
  },
  {
    quote:
      "Being part of the GoBongo ecosystem meant we had 7 other companies as potential partners from day one. That kind of immediate network is impossible to buy.",
    role: "Founder",
    company: "Hooqx LLC",
    location: "United States",
    initials: "HQ",
    gradient: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    shadowColor: "rgba(5,150,105,0.28)",
  },
  // {
  //   quote:
  //     "Being part of the GoBongo ecosystem meant we had 7 other companies as potential partners from day one. That kind of immediate network is impossible to buy.",
  //   role: "Founder",
  //   company: "Hooqx LLC",
  //   location: "United States",
  //   initials: "HQ",
  //   gradient: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
  //   shadowColor: "rgba(5,150,105,0.28)",
  // },
];

// Duplicate for seamless infinite loop
const TRACK_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

function Stars() {
  return (
    <div className="fv-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="fv-star">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  const cardRef = useRef(null);
  const [mp, setMp] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMp({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const spotlightBg = hovered
    ? `radial-gradient(circle at ${mp.x}% ${mp.y}%, rgba(26,86,232,0.07) 0%, rgba(26,86,232,0.02) 48%, #ffffff 72%)`
    : "#ffffff";

  return (
    <motion.div
      ref={cardRef}
      className="fv-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      style={{ background: spotlightBg }}
    >
      {/* Accent stripe — always visible */}
      <div className="fv-card-stripe" />

      {/* Decorative quote glyph */}
      <span className="fv-deco-quote">&ldquo;</span>

      <Stars />

      <blockquote className="fv-quote">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="fv-divider" />

      <div className="fv-attribution">
        <motion.div
          className="fv-avatar"
          style={{ background: t.gradient, boxShadow: `0 4px 14px ${t.shadowColor}` }}
          whileHover={{ scale: 1.1, transition: { duration: 0.28 } }}
        >
          {t.initials}
        </motion.div>
        <div className="fv-attribution-text">
          <span className="fv-role">{t.role}</span>
          <span className="fv-company">
            {t.company}
            <span className="fv-dot">&nbsp;·&nbsp;</span>
            {t.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="fv-section">
      <div className="fv-bg-glow fv-bg-glow--left" />
      <div className="fv-bg-glow fv-bg-glow--right" />

      {/* Header — contained and centered */}
      <div className="fv-container">
        <motion.div
          className="fv-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            className="fv-eyebrow-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="fv-eyebrow-text"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Founder Voices
          </motion.span>
        </motion.div>

        <motion.h2
          className="fv-heading"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          In Their{" "}
          <em className="fv-heading-em shimmer-blue">Own Words</em>
        </motion.h2>

        <motion.p
          className="fv-subtext"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        >
          Hear directly from the founders we back on what makes GoBongo
          different.
        </motion.p>
      </div>

      {/* Full-width infinite slider — outside container so it bleeds edge to edge */}
      <motion.div
        className="fv-slider-outer"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <div className="fv-track">
          {TRACK_ITEMS.map((t, i) => (
            <TestimonialCard key={`${t.company}-${i}`} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
