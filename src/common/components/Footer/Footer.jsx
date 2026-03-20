import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HyperPremiumFooter.css";

const NAV_LINKS = ["About", "Portfolio", "Sectors", "Dubai", "Contact"];

const VENTURES = [
  "GoBongo Shop",
  "Hooqx LLC",
  "CallTawk",
  "GMI Trading",
  "Tezz Logistics",
  "Tradeflink",
  "Scooda",
  "Stratigi 360",
];

const OFFICES = [
  { city: "Dubai", detail: "DIFC, Gate Village, UAE" },
  { city: "Bengaluru", detail: "GoBongo House, India" },
  { city: "New York", detail: "United States" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Medium", href: "#" },
];

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function HyperPremiumFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-80px" });

  return (
    <footer className="hyper-footer" ref={footerRef}>
      <div className="hyper-noise" />
      <div className="hyper-core-glow" />
      <div className="hyper-orb orb-1" />
      <div className="hyper-orb orb-2" />
      <div className="hyper-orb orb-3" />
      <div className="hyper-orb orb-4" />
      <div className="hyper-orb orb-5" />
      <div className="hyper-orb orb-6" />
      <div className="hyper-orb orb-7" />
      <div className="hyper-orb orb-8" />
      <div className="hyper-orb orb-9" />
      <div className="hyper-orb orb-10" />
      <div className="hyper-orb orb-11" />
      <div className="hyper-orb orb-12" />

      <motion.div
        className="hyper-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* ── Pre-footer CTA ── */}
        <motion.div className="hyper-cta-row" variants={itemVariants}>
          <div className="hyper-cta-text">
            <p className="hyper-cta-eyebrow">Ready to build together?</p>
            <h2 className="hyper-cta-heading">
              Back the next category&#8209;defining company.
            </h2>
          </div>
          <a href="#" className="hyper-cta-btn">
            Get in Touch &rarr;
          </a>
        </motion.div>

        <motion.div className="hyper-divider" variants={itemVariants} />

        {/* ── Main columns ── */}
        <div className="hyper-main-row">

          {/* Brand column */}
          <motion.div className="hyper-brand-col" variants={itemVariants}>
            <img
              src="/gobongoventureslogo.png"
              alt="GoBongo Ventures"
              className="hyper-logo"
              style={{width:"220px"}}
              
            />
            <p className="hyper-brand-desc">
              A Dubai-based venture studio backing the next generation of
              category-defining companies across emerging markets.
            </p>
            <div className="hyper-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="hyper-social-chip">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="hyper-columns">
            {/* Company */}
            <motion.div className="hyper-col" variants={itemVariants}>
              <h4 className="hyper-col-title">Company</h4>
              <div className="hyper-link-list">
                {NAV_LINKS.map((link) => (
                  <a key={link} href="#" className="hyper-col-link">
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div className="hyper-col" variants={itemVariants}>
              <h4 className="hyper-col-title">Portfolio</h4>
              <div className="hyper-link-list">
                {VENTURES.map((v) => (
                  <a key={v} href="#" className="hyper-col-link">
                    {v}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Get in Touch */}
            <motion.div className="hyper-col" variants={itemVariants}>
              <h4 className="hyper-col-title">Get in Touch</h4>
              <a href="mailto:hello@gobongoventures.com" className="hyper-col-link hyper-col-link--email">
                hello@gobongoventures.com
              </a>
              <a href="tel:+97140000000" className="hyper-col-link">
                +971 4 000 0000
              </a>

              <h4 className="hyper-col-title hyper-col-title--spaced">Offices</h4>
              <div className="hyper-offices">
                {OFFICES.map((o) => (
                  <div key={o.city} className="hyper-office">
                    <span className="hyper-office-city">{o.city}</span>
                    <span className="hyper-office-detail">{o.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div className="hyper-bottom-row" variants={itemVariants}>
          <p className="hyper-bottom-tagline">
            Built in Dubai &mdash; scaling globally.
          </p>
          <p className="hyper-bottom-copy">
            &copy; {new Date().getFullYear()} GoBongo Ventures. All rights reserved.
          </p>
          <div className="hyper-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookies</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
