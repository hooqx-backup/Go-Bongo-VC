import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, Link2, Globe, Settings } from "lucide-react";
import "./Thesis.css";

const POINTS = [
  {
    Icon: FlaskConical,
    title: "Structural, Not Cyclical",
    desc: "We don't chase trends. Each sector represents a multi decade transformation not a 3 year cycle. Our time horizon matches the founders we back.",
    color: "#1A56E8",
    bg: "#EEF3FF",
  },
  {
    Icon: Link2,
    title: "Cross-Sector Compounding",
    desc: "Our sectors are deliberately interconnected. Logistics enables commerce. Digital services enable logistics. Communications enables trade. The portfolio compounds because the sectors compound.",
    color: "#0D9488",
    bg: "#F0FDFB",
  },
  {
    Icon: Globe,
    title: "Emerging Market Timing",
    desc: "Our sectors are earlier in their transformation curve in emerging markets than in the West giving portfolio companies a longer runway and a less contested market.",
    color: "#7C3AED",
    bg: "#F3F0FF",
  },
  {
    Icon: Settings,
    title: "Operational Depth Required",
    desc: "Our sectors reward operational excellence over pure capital. Founders who build operational moats not just product moats create businesses that compound in value over time.",
    color: "#B8892A",
    bg: "#FBF5E8",
  },
];

export default function Thesis() {
  return (
    <div className="th-outer">
      <div className="th-noise" />
      <div className="th-glow th-glow--l" />
      <div className="th-glow th-glow--r" />

      <div className="th-section">
        {/* ── Left ── */}
        <motion.div
          className="th-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="th-eyebrow">Investment Thesis</div>
          <h2 className="th-heading">
            Why These Six.<br /><em className="shimmer-blue">Why Now.</em>
          </h2>
          <div className="th-divider" />
          <p className="th-quote">
            "We invest at the intersection of <strong>essential industries</strong> and digital
            transformation where the old way is visibly broken and the right operator
            can build something that lasts."
          </p>
          <p className="th-para">
            Our conviction is structural, not cyclical. We identify markets where digital
            transformation is inevitable where the problem is so deeply embedded that the
            shift, when it happens, creates durable, compounding businesses.
          </p>
          <Link to="/pitch" className="th-btn">Create a Unicorn →</Link>
        </motion.div>

        {/* ── Right ── */}
        <div className="th-right">
          <div className="th-float-element th-float-element--a" />
          <div className="th-float-element th-float-element--b" />

          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              className="th-point"
              initial={{ opacity: 0, y: 56, rotateX: -14, rotateY: i % 2 === 0 ? 10 : -10, z: -80 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, z: 0 }}
              whileHover={{ y: -7, rotateX: -3, rotateY: i % 2 === 0 ? 3 : -3 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.08, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="th-point-icon" style={{ background: p.bg }}>
                <p.Icon size={20} color={p.color} strokeWidth={1.8} />
              </div>
              <div className="th-point-body">
                <div className="th-point-title" style={{ color: p.color }}>{p.title}</div>
                <div className="th-point-desc">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
