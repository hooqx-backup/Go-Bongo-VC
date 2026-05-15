import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, LayoutGroup } from "framer-motion";
import "./Sectors.css";

const SECTORS = [
  {
    icon: "E",
    name: "E-Commerce",
    index: "01",
    desc: "Digital retail infrastructure across emerging markets where commerce is moving online at unprecedented speed.",
    ventures: 2,
    accent: "#1A56E8",
    accentLight: "rgba(26, 86, 232, 0.08)",
    image: "/images/ecommerce.jpg",
  },
  {
    icon: "L",
    name: "Logistics",
    index: "02",
    desc: "Physical and digital supply chain solutions that become essential infrastructure as economies digitise.",
    ventures: 2,
    accent: "#059669",
    accentLight: "rgba(5, 150, 105, 0.08)",
    image: "/images/logistics.jpg",
  },
  {
    icon: "I",
    name: "IT & Digital",
    index: "03",
    desc: "Technology services enabling businesses to compete in an increasingly digital-first world.",
    ventures: 1,
    accent: "#7C3AED",
    accentLight: "rgba(124, 58, 237, 0.08)",
    image: "/images/itanddigital.jpg",
  },
  {
    icon: "B",
    name: "B2B Trade",
    index: "04",
    desc: "Cross-border procurement and trade infrastructure connecting manufacturers, suppliers, and buyers globally.",
    ventures: 1,
    accent: "#D97706",
    accentLight: "rgba(217, 119, 6, 0.08)",
    image: "/images/b2b.jpg",
  },
  {
    icon: "C",
    name: "Communications",
    index: "05",
    desc: "Business communications platforms that replace legacy telecoms infrastructure with modern, scalable alternatives.",
    ventures: 1,
    accent: "#0891B2",
    accentLight: "rgba(8, 145, 178, 0.08)",
    image: "/images/communication.jpg",
  },
  {
    icon: "T",
    name: "Trading",
    index: "06",
    desc: "Commodity and asset trading operations spanning global markets with sophisticated risk management frameworks.",
    ventures: 1,
    accent: "#DC2626",
    accentLight: "rgba(220, 38, 38, 0.08)",
    image: "/images/trading.jpg",
  },
];

const HEADING_WORDS = ["Industries", "Built", "for", "Scale."];

export default function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="accordion-section">
      {/* Decorative ambient background */}
      <div className="accordion-bg-glow" />

      <div className="accordion-wrap" ref={ref}>
        
        {/* ── The Premium Header (Brought Back) ── */}
        <div className="premium-header">
          <motion.div
            className="premium-eyebrow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="premium-eyebrow__dot" />
            <span className="premium-eyebrow__text">Focus Areas</span>
          </motion.div>

          <div className="premium-heading-row">
            <motion.span
              className="premium-heading-pre"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We Back
            </motion.span>
            <div className="premium-heading-words">
              {HEADING_WORDS.map((w, i) => (
                <motion.span
                  key={w}
                  className={`premium-heading-word ${
                    w === "Scale." ? "premium-heading-word--accent" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.08,
                    type: "spring",
                    damping: 25,
                  }}
                >
                  {w}
                  {w === "Scale." && (
                    <motion.div 
                      className="premium-heading-underline"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            className="premium-sub"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Six essential industries undergoing structural transformation, where
            operational excellence compounds into 
          </motion.p>
        </div>

        {/* ── Interactive Flex Layout ── */}
        <LayoutGroup>
        <div className="accordion-container">
          {SECTORS.map((s, i) => {
            const isActive = activeIndex === i;
            const hasImg = !!s.image;
            const onImg = isActive && hasImg;

            const panelStyle = onImg
              ? {
                  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.92) 100%), url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderColor: `${s.accent}50`,
                  boxShadow: `0 24px 48px rgba(0,0,0,0.18), 0 8px 24px ${s.accent}20`,
                }
              : isActive
              ? {
                  backgroundColor: "#FFFFFF",
                  borderColor: `${s.accent}40`,
                  boxShadow: `0 24px 48px rgba(0,0,0,0.06), 0 8px 24px ${s.accent}15`,
                  backgroundImage: "none",
                }
              : hasImg
              ? {
                  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.78) 100%), url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "none",
                }
              : {
                  backgroundColor: "#F8F7F4",
                  borderColor: "rgba(13,13,11,0.04)",
                  boxShadow: "none",
                  backgroundImage: `linear-gradient(to bottom, ${s.accentLight}, transparent 40%)`,
                };

            return (
              <motion.div
                key={s.name}
                className={`accordion-panel ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.5, delay: i * 0.1 },
                  y: { duration: 0.5, delay: i * 0.1, type: "spring" },
                }}
                layout
                style={panelStyle}
              >
                <AnimatePresence mode="popLayout">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10, transition: { duration: 0.1 } }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="accordion-panel__expanded"
                    >
                      <div className="accordion-panel__top">
                        <div
                          className="accordion-panel__icon"
                          style={{
                            backgroundColor: s.accentLight,
                            color: s.accent,
                            backdropFilter: "none",
                          }}
                        >
                          {s.icon}
                        </div>
                        <span
                          className="accordion-panel__index"
                          style={{ color: s.accent }}
                        >
                          {s.index}
                        </span>
                      </div>

                      <div className="accordion-panel__body">
                        <h3
                          className="accordion-panel__name"
                          style={{ color: "#0D0D0B" }}
                        >
                          {s.name}
                        </h3>
                        <p
                          className="accordion-panel__desc"
                          style={{ color: "#7A7A72" }}
                        >
                          {s.desc}
                        </p>

                        <div className="accordion-panel__footer">
                          <span
                            className="accordion-panel__badge"
                            style={{ color: s.accent, backgroundColor: s.accentLight, borderColor: `${s.accent}25` }}
                          >
                            {s.ventures} {s.ventures === 1 ? "Venture" : "Ventures"}
                          </span>
                          <span
                            className="accordion-panel__arrow"
                            style={{ color: s.accent }}
                          >
                            ↗
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="accordion-panel__collapsed"
                    >
                      <div
                        className="accordion-panel__collapsed-icon"
                        style={{
                          backgroundColor: "#FFFFFF",
                          backdropFilter: "none",
                          boxShadow: `0 4px 12px ${s.accentLight}`,
                        }}
                      >
                        {s.icon}
                      </div>
                      <span
                        className="accordion-panel__vertical-text"
                        style={{ color: s.accent }}
                      >
                        {s.name}
                      </span>
                      <div
                        className="accordion-panel__collapsed-line"
                        style={{ backgroundColor: `${s.accent}30` }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        </LayoutGroup>

      </div>
    </section>
  );
}