import { motion } from "framer-motion";
import { LuArrowRight, LuCheck, LuArrowDown } from "react-icons/lu";
import SectionTag from "../../../../common/components/SectionTag/SectionTag";
import Button from "../../../../common/components/Button/Button";
import "./PitchHero.css";

const HERO_STATS = [
  { num: "200+", label: "Applications reviewed in 2024" },
  { num: "4–6W", label: "Average decision time" },
  { num: "$4.6B", label: "Combined portfolio exposure" },
];

const CARD_STATS = [
  { num: "8", label: "Portfolio companies" },
  { num: "200+", label: "Applications reviewed" },
  { num: "7", label: "Countries" },
];

const CRITERIA = [
  "Founder-market fit — lived experience required",
  "Problem + solution in one paragraph",
  "A number that proves early traction",
  "MENA, South Asia, or global play",
];

// Refined Variants to prevent hover bleed
const leftItemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PitchHero() {
  return (
    <section className="pch-hero">
      <div className="pch-hero__mesh" />
      <div className="pch-hero__dots" />

      <div className="pch-hero__inner">
        {/* ── Left Content ── */}
        <div className="pch-hero__left">
          <motion.div custom={1} initial="hidden" animate="visible" variants={leftItemVariants}>
            <SectionTag color="gold">Build a Unicorn</SectionTag>
          </motion.div>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              className="pch-hero__heading"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              We Back Founders Who <em className="shimmer-gold">Build Unicorns.</em>
            </motion.h1>
          </div>

          <motion.p 
            className="pch-hero__sub" 
            custom={3} 
            initial="hidden" 
            animate="visible" 
            variants={leftItemVariants}
          >
            GoBongo Ventures invests pre-seed to Series&nbsp;A in founders
            building defensible businesses across MENA, South Asia, and beyond.
          </motion.p>

          <motion.div 
            className="pch-hero__ctas" 
            custom={4} 
            initial="hidden" 
            animate="visible" 
            variants={leftItemVariants}
          >
            <a href="#pitch-form" className="pch-btn-primary">
              Create a Unicorn <LuArrowDown size={15} />
            </a>
            <div className="pch-btn-secondary-wrapper">
                <Button variant="ghost" to="/portfolio">
                See Our Portfolio
                </Button>
            </div>
          </motion.div>

          <div className="pch-hero__stats">
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={i}
                className="pch-hero__stat"
                custom={5 + i}
                initial="hidden"
                animate="visible"
                variants={leftItemVariants}
              >
                <div className="pch-hero__stat-num">{s.num}</div>
                <div className="pch-hero__stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right Content (3D Visuals) ── */}
        <div className="pch-hero__right">
          {/* Investment Stage Badge */}
          <motion.div
            className="pch-float-badge pch-float-badge--stage"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="pch-float-badge__sup">Investment Stage</div>
            <div className="pch-float-badge__val">Pre-seed → Series A</div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="pch-app-card"
            initial={{ opacity: 0, rotateY: 20, x: 40 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="pch-app-card__hdr">
              <img src="/gobongoventureslogo.png" className="pch-app-card__logo" alt="GoBongo" />
              <span className="pch-app-card__brief">Investment Brief · 2025</span>
            </div>

            <div className="pch-app-card__stats">
              {CARD_STATS.map((s) => (
                <div key={s.label} className="pch-app-card__stat">
                  <div className="pch-app-card__stat-num">{s.num}</div>
                  <div className="pch-app-card__stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="pch-app-card__status">
              <span className="pch-app-card__dot" /> Applications open
            </div>

            <ul className="pch-app-card__list">
              {CRITERIA.map((c, i) => (
                <li key={i}>
                  <LuCheck size={12} className="pch-app-card__check" /> {c}
                </li>
              ))}
            </ul>

            <div className="pch-app-card__rule" />
            <a href="#pitch-form" className="pch-app-card__cta">
              Create a Unicorn <LuArrowRight size={14} />
            </a>
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            className="pch-float-badge pch-float-badge--notif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="pch-float-badge__icon">🚀</span>
            <div>
              <div className="pch-float-badge__val">Tezz Logistics · India</div>
              <div className="pch-float-badge__sup">Latest portfolio</div>
            </div>
          </motion.div>

          {/* Geo Badge */}
          <motion.div
            className="pch-float-badge pch-float-badge--geo"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="pch-float-badge__icon">🌍</span>
            <div>
              <div className="pch-float-badge__val">MENA + South Asia</div>
              <div className="pch-float-badge__sup">7 active countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}