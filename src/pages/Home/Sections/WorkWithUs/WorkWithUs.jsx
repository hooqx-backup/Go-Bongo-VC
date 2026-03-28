import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./WorkWithUs.css";

const STEPS = [
  {
    num: "01",
    title: "Submit Your Pitch",
    desc: "Fill out our structured intake form. Tell us about your vision, your market, and what you're building — we read every submission personally.",
  },
  {
    num: "02",
    title: "Intro Call",
    desc: "If there's a fit, one of our partners will schedule a 30-minute call within 5 business days. No gatekeepers, no long wait times.",
  },
  {
    num: "03",
    title: "Partnership",
    desc: "We move fast. If we're aligned, expect a term sheet within weeks — not months. We build alongside you from day one.",
  },
];

const ease = [0.22, 1, 0.36, 1];

/* ── Process step pill (top strip) ── */
function ProcessStep({ num, label, i }) {
  return (
    <motion.div
      className="wwu-process-step"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease, delay: 0.3 + i * 0.1 }}
    >
      <div className="wwu-ps-circle">
        <span className="wwu-ps-num">{num}</span>
      </div>
      <span className="wwu-ps-label">{label}</span>
    </motion.div>
  );
}

/* ── Card with mouse-spotlight ── */
function StepCard({ step, i }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [mp, setMp] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMp({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const spotlightBg = hovered
    ? `radial-gradient(circle at ${mp.x}% ${mp.y}%, rgba(26,86,232,0.07) 0%, rgba(26,86,232,0.025) 46%, #ffffff 70%)`
    : "#ffffff";

  return (
    <motion.div
      ref={cardRef}
      className="wwu-step-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease, delay: 0.2 + i * 0.13 }}
      whileHover={{ y: -8, transition: { duration: 0.38, ease } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: spotlightBg }}
    >
      {/* Top accent stripe animates in on view */}
      <motion.div
        className="wwu-step-stripe"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease, delay: 0.35 + i * 0.13 }}
      />

      {/* Step badge */}
      <div className="wwu-step-badge">
        <span className="wwu-step-badge-dot" />
        STEP {step.num}
      </div>

      <h3 className="wwu-step-title">{step.title}</h3>
      <p className="wwu-step-desc">{step.desc}</p>

      {/* Arrow appears on hover */}
      <motion.span
        className="wwu-step-arrow"
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileHover={{ opacity: 1, x: 4, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
}

/* ══ Main Section ══ */
export default function WorkWithUsSection() {
  return (
    <section className="wwu-section">
      {/* Atmospheric layers */}
      <div className="wwu-grain" />
      <div className="wwu-glow wwu-glow--center" />
      <div className="wwu-glow wwu-glow--left" />
      <div className="wwu-glow wwu-glow--right" />
      <div className="wwu-glow wwu-glow--bottom" />

      {/* Decorative horizontal rule top */}
      <motion.div
        className="wwu-top-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease }}
      />

      <div className="wwu-container">

        {/* ── Eyebrow ── */}
        <motion.div
          className="wwu-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="wwu-eyebrow-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.65, ease }}
          />
          <span className="wwu-eyebrow-text">Ready to Build?</span>
          <motion.span
            className="wwu-eyebrow-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          />
        </motion.div>

        {/* ── Heading ── */}
        <div className="wwu-heading-wrap">
          <motion.h2
            className="wwu-heading"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease, delay: 0.08 }}
          >
            Building Something
            <em className="shimmer-blue"> Bold?</em>
          </motion.h2>
          <motion.h2
            className="wwu-heading wwu-heading--sub"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease, delay: 0.18 }}
          >
            We Want to <em className="shimmer-blue"> Hear  </em>From You.
          </motion.h2>
        </div>

        {/* ── Subtext ── */}
        <motion.p
          className="wwu-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.26 }}
        >
          We back founders at the idea stage through Series A. If you're
          building in our core sectors and you think differently about what
          your industry could be — let's talk.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          className="wwu-ctas"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.34 }}
        >
          <motion.div
            whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/pitch" className="wwu-btn wwu-btn--primary">
              <span className="wwu-btn-shimmer" />
              Pitch GoBongo VC →
            </Link>
          </motion.div>
          <motion.div
            
            
            whileHover={{ scale: 1.03, transition: { duration: 0.22 } }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/contact" className="wwu-btn wwu-btn--outline">
              Partner With Us
            </Link>
          </motion.div>
          
        </motion.div>

        {/* ── Process strip ── */}
        <motion.div
          className="wwu-process-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Divider label */}
          <div className="wwu-divider">
            <span className="wwu-divider-line" />
            <span className="wwu-divider-label">How it works</span>
            <span className="wwu-divider-line" />
          </div>

          {/* 4 process steps */}
          <div className="wwu-process-steps">
            {[
              { num: "01", label: "Submit Pitch" },
              { num: "02", label: "Review Call" },
              { num: "03", label: "Partner Meeting" },
              { num: "04", label: "Term Sheet" },
            ].map((s, i) => (
              <React.Fragment key={s.num}>
                <ProcessStep num={s.num} label={s.label} i={i} />
                {i < 3 && (
                  <motion.div
                    className="wwu-connector"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                    transition={{ duration: 0.5, ease, delay: 0.45 + i * 0.1 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ── Step Cards ── */}
        <div className="wwu-steps">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} />
          ))}
        </div>

      </div>

      {/* Bottom rule */}
      <motion.div
        className="wwu-bottom-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
      />
    </section>
  );
}
