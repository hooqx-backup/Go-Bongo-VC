import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Send, PhoneCall, FileSearch, ArrowRight } from "lucide-react";
import "./SectorCTA.css";

const STEPS = [
  { num: "01", title: "Submit Pitch", desc: "Submit your pitch deck through our portal. We read every submission within 48 hours.", icon: Send, color: "#1A56E8", bg: "#EEF3FF" },
  { num: "02", title: "Review Call", desc: "If there's a fit, we'll schedule a 30-minute intro call with a partner within one week.", icon: PhoneCall, color: "#0D9488", bg: "#F0FDFB" },
  { num: "03", title: "Partner Meeting", desc: "Deep dive with the whole team.", icon: FileSearch, color: "#7C3AED", bg: "#F3F0FF" },
];

export default function SectorCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="scta-outer" ref={ref}>
      <div className="scta-glow-wrapper">
        <div className="scta-glow scta-glow--t" />
        <div className="scta-glow scta-glow--bl" />
        <div className="scta-glow scta-glow--br" />
      </div>
      <div className="scta-noise" />
      <div className="scta-grid-floor" />

      <div className="scta-section">
        <div className="scta-layer-top">
          {/* Eyebrow */}
          <motion.div
            className="scta-eyebrow"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <span className="scta-eyebrow-dot" />
            <span className="scta-eyebrow-text">Build In Our Sectors</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="scta-heading"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Operating in One of<br />These <em className="shimmer-blue ">Industries?</em>
          </motion.h2>

          <motion.p
            className="scta-sub"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            We actively look for founders building in our six core sectors — especially at
            the idea stage and Series A. If your business sits at an intersection we care
            about, we want to hear from you.
          </motion.p>

          <motion.div
            className="scta-btns"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/pitch" className="scta-btn-primary">
              <span className="btn-txt">Pitch GoBongo VC</span>
              <ArrowRight className="btn-arr" size={18} strokeWidth={2.5} />
              <div className="btn-flare" />
            </Link>
            <Link to="/portfolio" className="scta-btn-outline">View Full Portfolio</Link>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="scta-divider"
            initial={{ opacity: 0, width: "0%" }}
            animate={inView ? { opacity: 1, width: "100%" } : {}}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="scta-divider-line line-l" />
            <span className="scta-divider-label">How it works</span>
            <span className="scta-divider-line line-r" />
          </motion.div>
        </div>

        {/* Step cards */}
        <div className="scta-steps-stage" onMouseLeave={() => setHoveredStep(null)}>
          <div className="scta-steps">
            {STEPS.map((s, i) => {
              const isHovered = hoveredStep === i;
              const isOtherHovered = hoveredStep !== null && hoveredStep !== i;

              return (
                <motion.div
                  key={s.num}
                  className={`scta-step ${isHovered ? 'is-active' : ''} ${isOtherHovered ? 'is-dimmed' : ''}`}
                  style={{ "--step-accent": s.color, "--step-accent-bg": s.bg, transformPerspective: 900 }}
                  onMouseEnter={() => setHoveredStep(i)}
                  initial={{ opacity: 0, y: 60, rotateX: 22, scale: 0.88 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
                  whileHover={{ y: -10, scale: 1.03, rotateX: 4, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } }}
                  transition={{
                    duration: 0.85,
                    delay: 0.5 + i * 0.14,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="scta-step-stripe" />
                  <div className="scta-step-bg" />
                  <div className="scta-step-content">
                    <div className="scta-step-header">
                      <span className="scta-step-num" style={{ color: s.color }}>Step {s.num}</span>
                      <div className="scta-step-icon" style={{ background: s.bg }}>
                        <s.icon size={18} color={s.color} strokeWidth={1.8} />
                      </div>
                    </div>
                    <h3 className="scta-step-title">{s.title}</h3>
                    <p className="scta-step-desc">{s.desc}</p>
                  </div>

                  <div className="scta-step-beam" />
                  <div className="scta-step-border-light" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
