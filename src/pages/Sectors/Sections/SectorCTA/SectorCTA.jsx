import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./SectorCTA.css";

const STEPS = [
  { num: "01", title: "Reach Out", desc: "Submit your pitch deck through our portal. We read every submission within 48 hours." },
  { num: "02", title: "First Call", desc: "If there's a fit, we'll schedule a 30-minute intro call with a partner within one week." },
  { num: "03", title: "Deep Dive", desc: "We move fast. Due diligence and term sheet within 3 weeks for the right opportunity." },
];

export default function SectorCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="scta-outer" ref={ref}>
      <div className="scta-glow scta-glow--t" />
      <div className="scta-glow scta-glow--bl" />
      <div className="scta-glow scta-glow--br" />
      <div className="scta-noise" />

      <div className="scta-section">
        {/* Eyebrow */}
        <motion.div
          className="scta-eyebrow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="scta-eyebrow-dot" />
          <span className="scta-eyebrow-text">Build In Our Sectors</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="scta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Operating in One of<br />These <em>Industries?</em>
        </motion.h2>

        <motion.p
          className="scta-sub"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          We actively look for founders building in our six core sectors — especially at
          the idea stage and Series A. If your business sits at an intersection we care
          about, we want to hear from you.
        </motion.p>

        <motion.div
          className="scta-btns"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <Link to="/pitch" className="scta-btn-primary">Pitch GoBongo VC →</Link>
          <Link to="/portfolio" className="scta-btn-outline">View Full Portfolio</Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="scta-divider"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <span className="scta-divider-line" />
          <span className="scta-divider-label">How it works</span>
          <span className="scta-divider-line" />
        </motion.div>

        {/* Step cards */}
        <div className="scta-steps">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              className="scta-step"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.5 + i * 0.1 }}
            >
              <div className="scta-step-stripe" />
              <span className="scta-step-num">Step {s.num}</span>
              <h3 className="scta-step-title">{s.title}</h3>
              <p className="scta-step-desc">{s.desc}</p>
              <span className="scta-step-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
