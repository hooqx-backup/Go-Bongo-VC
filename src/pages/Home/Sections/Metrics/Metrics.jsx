import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Metrics.css";

const STATS = [
  { value: 8,    suffix: "+",  label: "Portfolio Companies" },
  { value: 7,    suffix: "",   label: "Countries" },
  { value: 6,    suffix: "",   label: "Industry Sectors" },
  { value: 200,  suffix: "+",  label: "Team Members" },
  { value: 2017, suffix: "",   label: "Year Founded" },
  { value: 1,    prefix: "#",  label: "UAE Startup Group", featured: true },
];

function CountUp({ end, prefix = "", suffix = "", duration = 1800, start }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const startVal = 0;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startVal + eased * (end - startVal)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration]);

  return (
    <span className="metrics-number">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function MetricsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="metrics-section" ref={sectionRef}>
      <div className="metrics-container">

        <motion.div
          className="metrics-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="metrics-eyebrow">
            <span className="metrics-eyebrow-line" />
            <span className="metrics-eyebrow-text">The Numbers Behind the Vision</span>
          </div>
          <h2 className="metrics-heading font-serif">
            Every Metric is a{" "}
            <em className="metrics-heading-em shimmer-blue">Milestone</em>
          </h2>
        </motion.div>

        <motion.div
          className="metrics-grid"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`metrics-card${stat.featured ? " metrics-card--featured" : ""}`}
            >
              <CountUp
                end={stat.value}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                duration={1800 + i * 80}
                start={hasAnimated}
              />
              <span className="metrics-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
