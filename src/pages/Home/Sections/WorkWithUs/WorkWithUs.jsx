import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
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
    ? `radial-gradient(circle at ${mp.x}% ${mp.y}%, rgba(26,86,232,0.065) 0%, rgba(26,86,232,0.018) 48%, #ffffff 72%)`
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
      {/* Top stripe */}
      <motion.div
        className="wwu-step-stripe"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.35 + i * 0.13 }}
      />

      <span className="wwu-step-num">STEP {step.num}</span>
      <h3 className="wwu-step-title">{step.title}</h3>
      <p className="wwu-step-desc">{step.desc}</p>

      {/* Corner arrow */}
      <motion.span
        className="wwu-step-arrow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, x: 3, y: -3 }}
        transition={{ duration: 0.2 }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
}

export default function WorkWithUsSection() {
  return (
    <section className="wwu-section">
      {/* Background layers */}
      <div className="wwu-noise" />
      <div className="wwu-glow wwu-glow--top" />
      <div className="wwu-glow wwu-glow--left" />
      <div className="wwu-glow wwu-glow--right" />
      <div className="wwu-glow wwu-glow--bottom" />

      <div className="wwu-container">

        {/* Eyebrow */}
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
          <motion.span
            className="wwu-eyebrow-text"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
          >
            Work With Us
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="wwu-heading"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
        >
          Building 
          <em className="wwu-heading-em shimmer-blue"> Something Bold?</em>
          <br />
          <span className="wwu-heading-sub">We Want to Hear From You.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="wwu-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          We back founders at the idea stage through Series A. If you're
          building in our core sectors and you think differently about what
          your industry could be — let's talk.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="wwu-ctas"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
        >
          <motion.a
            href="#"
            className="wwu-btn wwu-btn--primary"
            whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
            whileTap={{ scale: 0.97 }}
          >
            Pitch GoBongo VC &rarr;
          </motion.a>
          <motion.a
            href="#"
            className="wwu-btn wwu-btn--outline"
            whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
            whileTap={{ scale: 0.97 }}
          >
            Partner With Us
          </motion.a>
          <a href="#" className="wwu-btn wwu-btn--ghost">
            Investor Relations
          </a>
        </motion.div>

        {/* Divider with label */}
        <motion.div
          className="wwu-process-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="wwu-process-line" />
          <span className="wwu-process-label">How it works</span>
          <span className="wwu-process-line" />
        </motion.div>

        {/* Step Cards */}
        <div className="wwu-steps">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
