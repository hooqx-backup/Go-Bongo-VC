import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Container,
  Laptop,
  BarChart3,
  PhoneCall,
  Building,
} from "lucide-react";
import "./WhyNow.css";

const CARDS = [
  {
    Icon: ShoppingCart,
    accent: "#1A56E8",
    accentBg: "#EEF3FF",
    year: "E-Com",
    title: "Digital Commerce Inflection",
    desc: "E-commerce penetration in MENA and South Asia is still below 10% the same level Western markets were at in 2012. The next decade belongs to the platforms being built now.",
    stat: "$57B",
    statLabel: "MENA e-com by 2026",
  },
  {
    Icon: Container,
    accent: "#0D9488",
    accentBg: "#F0FDFB",
    year: "Logi",
    title: "Supply Chain Rewiring",
    desc: "Post 2020 disruptions accelerated a permanent shift toward regionalised, digitised logistics networks. Companies building this new infrastructure are capturing contract value that will last decades.",
    stat: "$12T",
    statLabel: "global logistics spend annually",
  },
  {
    Icon: Laptop,
    accent: "#7C3AED",
    accentBg: "#F3F0FF",
    year: "Tech",
    title: "SME Digitisation Wave",
    desc: "95% of SMEs in emerging markets still lack basic digital infrastructure. The providers who win this market at scale, with local knowledge will build the next generation of regional tech empires.",
    stat: "95%",
    statLabel: "of MENA SMEs underserved digitally",
  },
  {
    Icon: BarChart3,
    accent: "#B8892A",
    accentBg: "#FBF5E8",
    year: "B2B",
    title: "Cross-Border Trade Modernisation",
    desc: "The $32T global B2B commerce market is digitising at 10x the pace of 2015. Platforms that unify discovery, procurement, and payment in one place will win outsized share.",
    stat: "$32T",
    statLabel: "global B2B commerce",
  },
  {
    Icon: PhoneCall,
    accent: "#E85D26",
    accentBg: "#FFF1EB",
    year: "Comms",
    title: "Legacy Telecoms Displacement",
    desc: "Legacy telecom providers are being disintermediated by cloud-native platforms. Businesses migrating from legacy infrastructure represent $500B+ in annual spend up for grabs.",
    stat: "$500B",
    statLabel: "legacy comms spend at risk",
  },
  {
    Icon: Building,
    accent: "#16A34A",
    accentBg: "#F0FDF4",
    year: "UAE",
    title: "Dubai as the Fulcrum",
    desc: "Dubai's position at the crossroads of East-West trade, combined with 0% corporate tax and world class financial infrastructure, makes it the ideal operating base for all six of our sectors simultaneously.",
    stat: "#1",
    statLabel: "global re-export hub",
    link: { to: "/about", label: "The Dubai Advantage →" },
  },
];

const MotionDiv = motion.div;

const getPuzzleStart = (i) => {
  const positions = [
    { x: -180, y: -120, rotateZ: -14, rotateX: 35, rotateY: -30, scale: 0.65 },
    { x: 0,    y: -180, rotateZ: 10,  rotateX: -40, rotateY: 0,   scale: 0.65 },
    { x: 180,  y: -120, rotateZ: -18, rotateX: 35,  rotateY: 30,  scale: 0.65 },
    { x: -180, y: 120,  rotateZ: 18,  rotateX: -35, rotateY: 40,  scale: 0.65 },
    { x: 0,    y: 180,  rotateZ: -12, rotateX: 40,  rotateY: -30, scale: 0.65 },
    { x: 180,  y: 120,  rotateZ: 22,  rotateX: -35, rotateY: -20, scale: 0.65 },
  ];
  return positions[i] || { x: 0, y: 50, rotateZ: 0, rotateX: 0, rotateY: 0, scale: 0.8 };
};

export default function WhyNow() {
  return (
    <div className="wn-outer">
      <div className="wn-section">
        <MotionDiv
          className="wn-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <div className="wn-eyebrow">Market Timing</div>
          <h2 className="wn-heading">
            The Conditions That Make <em className="shimmer-blue">Right Now</em> Exceptional
          </h2>
          <p className="wn-sub">
            Six converging forces make this the defining window to build across our sectors.
          </p>
        </MotionDiv>

        <div className="wn-grid">
          {CARDS.map((c, i) => {
            const startPos = getPuzzleStart(i);
            return (
              <MotionDiv
                key={c.title}
                className="wn-card"
                style={{ "--card-accent": c.accent, "--card-accent-bg": c.accentBg }}
                initial={{ opacity: 0, z: -100, ...startPos }}
                whileInView={{ opacity: 1, x: 0, y: 0, z: 0, rotateZ: 0, rotateX: 0, rotateY: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.03, z: 40, rotateX: 5, rotateY: i % 2 === 0 ? -4 : 4 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 1.6, 
                  delay: 0.1 + i * 0.12, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div className="wn-card-stripe" />
                <div className="wn-card-year-row">
                  <div className="wn-card-icon-wrap" style={{ background: c.accentBg }}>
                    <c.Icon size={18} color={c.accent} strokeWidth={1.8} />
                  </div>
                  <span className="wn-card-year-text" style={{ color: c.accent, background: c.accentBg }}>
                    {c.year}
                  </span>
                </div>
                <h3 className="wn-card-title">{c.title}</h3>
                <p className="wn-card-desc">{c.desc}</p>
                <div className="wn-card-stat-row">
                  <span className="wn-card-stat" style={{ color: c.accent }}>{c.stat}</span>
                  <span className="wn-card-stat-label">{c.statLabel}</span>
                </div>
                {c.link && (
                  <Link to={c.link.to} className="wn-card-link" style={{ color: c.accent }}>
                    {c.link.label}
                  </Link>
                )}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </div>
  );
}
