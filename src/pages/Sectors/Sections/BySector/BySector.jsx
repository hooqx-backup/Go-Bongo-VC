import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Truck,
  Monitor,
  Radio,
  TrendingUp,
  Target,
  Package,
  Store,
  Handshake,
  Globe,
  Phone,
  BarChart2,
  Compass,
} from "lucide-react";
import "./BySector.css";

const GROUPS = [
  {
    Icon: ShoppingBag,
    name: "E-Commerce & Retail",
    accent: "#1A56E8",
    accentBg: "#EEF3FF",
    count: "2 Ventures",
    companies: [
      { name: "Thescooda",    geo: "Global",            logoBg: "#EEF3FF", Icon: Package,    iconColor: "#1A56E8" },
      { name: "GoBongo Shop", geo: "Global · Flagship", logoBg: "#FBF5E8", Icon: Store,      iconColor: "#B8892A" },
    ],
  },
  {
    Icon: Truck,
    name: "Logistics & Trade",
    accent: "#0D9488",
    accentBg: "#F0FDFB",
    count: "2 Ventures",
    companies: [
      { name: "Tezz Logistics", geo: "India",              logoBg: "#F0FDFB", Icon: Truck,     iconColor: "#0D9488" },
      { name: "Tradeflink",     geo: "Middle East & Asia", logoBg: "#FBF5E8", Icon: Handshake, iconColor: "#B8892A" },
    ],
  },
  {
    Icon: Monitor,
    name: "IT & Digital",
    accent: "#7C3AED",
    accentBg: "#F3F0FF",
    count: "1 Venture",
    companies: [
      { name: "Hooqx LLC", geo: "United States", logoBg: "#F3F0FF", Icon: Monitor, iconColor: "#7C3AED" },
    ],
  },
  {
    Icon: Radio,
    name: "Communications",
    accent: "#E85D26",
    accentBg: "#FFF1EB",
    count: "1 Venture",
    companies: [
      { name: "CallTawk", geo: "Global", logoBg: "#FFF1EB", Icon: Phone, iconColor: "#E85D26" },
    ],
  },
  {
    Icon: TrendingUp,
    name: "Trading",
    accent: "#16A34A",
    accentBg: "#F0FDF4",
    count: "1 Venture",
    companies: [
      { name: "GMI Trading", geo: "Dubai, UAE", logoBg: "#F0FDF4", Icon: BarChart2, iconColor: "#16A34A" },
    ],
  },
  {
    Icon: Target,
    name: "Strategy & Consulting",
    accent: "#1A56E8",
    accentBg: "#EEF3FF",
    count: "1 Venture",
    companies: [
      { name: "Stratigi 360", geo: "Global", logoBg: "#EEF3FF", Icon: Compass, iconColor: "#1A56E8" },
    ],
  },
];

const MotionDiv = motion.div;

export default function BySector() {
  return (
    <div className="bs-outer">
      <div className="bs-glow bs-glow--tl" />
      <div className="bs-glow bs-glow--br" />

      <div className="bs-section">
        <MotionDiv
          className="bs-header"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bs-eyebrow">Our Portfolio</div>
          <h2 className="bs-heading">
            Every Venture Mapped<br />to <em className="shimmer-blue">Its Sector</em>
          </h2>
          <p className="bs-sub">
            Eight companies across six industries — each chosen because it sits inside
            a structural transformation we have deep conviction in.
          </p>
        </MotionDiv>

        <div className="bs-grid">
          {GROUPS.map((g, gi) => (
            <MotionDiv
              key={g.name}
              className="bs-group"
              style={{ "--g-accent": g.accent, "--g-accent-bg": g.accentBg }}
              initial={{ 
                opacity: 0, 
                x: gi % 2 === 0 ? -140 : 140, 
                y: 100, 
                z: -200, 
                rotateX: 35, 
                rotateY: gi % 2 === 0 ? -25 : 25, 
                scale: 0.7 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0, 
                z: 0, 
                rotateX: 0, 
                rotateY: 0, 
                scale: 1 
              }}
              whileHover={{ 
                y: -16, 
                z: 80, 
                scale: 1.04, 
                rotateX: 6, 
                rotateY: gi % 2 === 0 ? -5 : 5 
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 1.5, 
                delay: 0.1 + gi * 0.12, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <div className="bs-group-glass-fx" />
              <div className="bs-group-head">
                <div className="bs-group-icon-wrap" style={{ background: g.accentBg }}>
                  <g.Icon size={18} color={g.accent} strokeWidth={1.8} />
                </div>
                <div className="bs-group-meta">
                  <span className="bs-group-name">{g.name}</span>
                  <span className="bs-group-count" style={{ color: g.accent }}>
                    {g.count}
                  </span>
                </div>
                <div className="bs-group-arrow" style={{ color: g.accent }}>→</div>
              </div>

              <div className="bs-companies">
                {g.companies.map((c) => (
                  <Link key={c.name} to="/portfolio" className="bs-company">
                    <div className="bs-company-logo" style={{ background: c.logoBg }}>
                      <c.Icon size={16} color={c.iconColor} strokeWidth={1.8} />
                    </div>
                    <div className="bs-company-info">
                      <span className="bs-company-name">{c.name}</span>
                      <span className="bs-company-geo">{c.geo}</span>
                    </div>
                    <span className="bs-company-arrow">↗</span>
                  </Link>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
