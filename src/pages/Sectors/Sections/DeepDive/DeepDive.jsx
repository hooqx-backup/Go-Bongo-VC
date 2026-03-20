import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  Monitor,
  Handshake,
  Radio,
  TrendingUp,
} from "lucide-react";
import "./DeepDive.css";

const SECTORS = [
  {
    id: "ecommerce",
    num: "01",
    Icon: ShoppingBag,
    iconBg: "#EEF3FF",
    name: "E-Commerce & Retail",
    tag: "Digital Commerce",
    tagColor: "#1A56E8",
    tagBg: "#EEF3FF",
    desc: "The shift from physical to digital commerce is still in its first innings across emerging markets. We invest in the infrastructure, marketplaces, and D2C brands that will define how billions of consumers shop in the next decade.",
    thesis: "Commerce isn't moving online — it's being rebuilt from scratch for a mobile-first, cross-border world.",
    count: "2 Ventures",
    ventures: ["Thescooda", "GoBongo Shop"],
    accent: "#1A56E8",
  },
  {
    id: "logistics",
    num: "02",
    Icon: Truck,
    iconBg: "#F0FDFB",
    name: "Logistics & Supply Chain",
    tag: "Physical Infrastructure",
    tagColor: "#0D9488",
    tagBg: "#F0FDFB",
    desc: "Supply chains are the invisible backbone of every economy. The companies that digitise and optimise logistics — from first-mile to last-mile — become essential infrastructure that's nearly impossible to displace.",
    thesis: "The company that owns the movement of goods owns the margin of commerce.",
    count: "2 Ventures",
    ventures: ["Tezz Logistics", "Tradeflink"],
    accent: "#0D9488",
  },
  {
    id: "digital",
    num: "03",
    Icon: Monitor,
    iconBg: "#F3F0FF",
    name: "IT & Digital Services",
    tag: "Technology",
    tagColor: "#7C3AED",
    tagBg: "#F3F0FF",
    desc: "Every business in every sector needs a digital layer. IT services, software development, and data infrastructure are the picks-and-shovels plays that win regardless of which vertical leads the next wave.",
    thesis: "The digitisation of business is not a trend — it's a transformation that's decades from complete.",
    count: "1 Venture",
    ventures: ["Hooqx LLC"],
    accent: "#7C3AED",
  },
  {
    id: "trade",
    num: "04",
    Icon: Handshake,
    iconBg: "#FBF5E8",
    name: "B2B Trade & Procurement",
    tag: "Cross-Border Commerce",
    tagColor: "#B8892A",
    tagBg: "#FBF5E8",
    desc: "Cross-border B2B trade moves trillions of dollars annually but runs on antiquated systems — manual procurement, email-based sourcing, fragmented supplier networks. The companies modernising this infrastructure will capture enormous value.",
    thesis: "B2B trade is the largest commerce category in the world — and the least digitised.",
    count: "1 Venture",
    ventures: ["Tradeflink"],
    accent: "#B8892A",
  },
  {
    id: "comms",
    num: "05",
    Icon: Radio,
    iconBg: "#FFF1EB",
    name: "Communications Technology",
    tag: "Comms Infrastructure",
    tagColor: "#E85D26",
    tagBg: "#FFF1EB",
    desc: "Business communication is migrating from legacy telephony to cloud-native, AI-augmented platforms. The businesses that replace the old stack with intelligent, scalable alternatives will become essential infrastructure.",
    thesis: "Every company on earth pays for communication infrastructure — the legacy providers are losing ground daily.",
    count: "1 Venture",
    ventures: ["CallTawk"],
    accent: "#E85D26",
  },
  {
    id: "trading",
    num: "06",
    Icon: TrendingUp,
    iconBg: "#F0FDF4",
    name: "Commodity & Asset Trading",
    tag: "Financial Markets",
    tagColor: "#16A34A",
    tagBg: "#F0FDF4",
    desc: "Dubai's unique position as the trading hub between East and West creates structural advantages for commodity and asset trading operations. We invest in sophisticated trading businesses that leverage technology and geography.",
    thesis: "Geographic advantage plus operational sophistication is a moat that's nearly impossible to replicate.",
    count: "1 Venture",
    ventures: ["GMI Trading"],
    accent: "#16A34A",
  },
];

function SectorCard({ s, i }) {
  return (
    <motion.div
      id={s.id}
      className="dd-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      style={{ "--accent": s.accent }}
    >
      <div className="dd-card-accent-bar" style={{ background: s.accent }} />

      <div className="dd-card-head">
        <div className="dd-card-icon" style={{ background: s.iconBg }}>
          <s.Icon size={22} color={s.accent} strokeWidth={1.8} />
        </div>
        <span className="dd-card-num">/ {s.num}</span>
      </div>

      <h3 className="dd-card-name">{s.name}</h3>

      <span className="dd-card-tag" style={{ color: s.tagColor, background: s.tagBg }}>
        {s.tag}
      </span>

      <p className="dd-card-desc">{s.desc}</p>

      <blockquote className="dd-card-thesis" style={{ borderColor: `${s.accent}30` }}>
        "{s.thesis}"
      </blockquote>

      <div className="dd-card-footer">
        <span className="dd-card-count" style={{ color: s.accent, background: s.iconBg }}>
          {s.count}
        </span>
        <div className="dd-card-ventures">
          {s.ventures.map((v) => (
            <span key={v} className="dd-card-venture">{v}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function DeepDive() {
  return (
    <div className="dd-outer">
      <div className="dd-section">
        <motion.div
          className="dd-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <div className="dd-eyebrow">Our Investment Focus</div>
            <h2 className="dd-heading">
              Six Sectors.<br />One <em>Deliberate</em> Thesis.
            </h2>
          </div>
          <div>
            <p className="dd-sub">
              Every sector we operate in was chosen because it sits at the intersection of necessity
              and digital transformation — where the old way of doing things is visibly broken and
              where the right operator can build something structurally defensible.
            </p>
          </div>
        </motion.div>

        <div className="dd-grid">
          {SECTORS.map((s, i) => (
            <SectorCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
