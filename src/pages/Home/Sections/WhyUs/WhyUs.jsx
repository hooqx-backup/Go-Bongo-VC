import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EliteWhyUs.css";
import Marquee from "../../../../common/components/Marquee/Marquee";

const DATA = [
  {
    id: "01",
    title: "OPERATOR-LED",
    subtitle: "WE BUILD WITH YOU",
    content:
      "Every partner at GoBongo has built, scaled, or exited a company. We don't just write cheques — we embed ourselves in the work. We've felt the friction. We know what it takes.",
  },
  {
    id: "02",
    title: "DUBAI ADVANTAGE",
    subtitle: "THE GLOBAL BRIDGE",
    content:
      "Headquartered in the world's most business-friendly city. 0% corporate tax, 200+ nationalities, DIFC access, and a geographic position as the literal bridge between East and West markets.",
  },
  {
    id: "03",
    title: "COMPOUNDING",
    subtitle: "CROSS-PORTFOLIO SYNERGY",
    content:
      "When Tezz Logistics needs digital services, Hooqx delivers. When GoBongo Shop needs logistics, Tezz routes it. Our portfolio creates synergies no single investment can manufacture alone.",
  },
  {
    id: "04",
    title: "LONG-HORIZON",
    subtitle: "DECIMAL THINKING",
    content:
      "We measure success in decades, not quarters. We partner with founders who share this conviction — because the most valuable companies are built slowly, deliberately, and with the long game always in mind.",
  },
];

export default function EliteWhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Auto-open the first one

  return (
    <section className="elite-section ">
      <div className="elite-container ">
        {/* Section Header */}
        <div className="elite-header">
          <div className="elite-eyebrow"></div>
          <h2 className="elite-heading">
            Why Choose <em className="shimmer-blue">Us</em>
          </h2>
        </div>

        {/* The Accordion */}
        <div className="elite-accordion">
          {DATA.map((item, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            // Dim others when one is hovered
            const isDimmed = hoveredIndex !== null && !isHovered && !isActive;

            return (
              <div
                key={item.id}
                className={`elite-row ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className="elite-trigger"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <div className="elite-trigger-left">
                    <span className="elite-number">{item.id}</span>
                    <h3 className="elite-title">{item.title}</h3>
                  </div>

                  <div className="elite-trigger-right">
                    <span className="elite-subtitle">{item.subtitle}</span>
                    <div
                      className={`elite-icon-wrap ${isActive ? "active" : ""}`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          className={`plus-vertical ${isActive ? "hidden" : ""}`}
                        />
                        <path d="M5 12h14" />
                      </svg>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="elite-content-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Expensive feeling cubic-bezier
                    >
                      <div className="elite-content-inner">
                        <p className="elite-text">{item.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <Marquee />
      </div>
    </section>
  );
}
