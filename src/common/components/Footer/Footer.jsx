import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HyperPremiumFooter.css";

const COMPANY = [
  { label: "About",     path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Sectors",   path: "/sectors" },
  { label: "Dubai",     path: "/dubai" },
  { label: "Insights",  path: "/blog" },
  { label: "Contact",   path: "/contact" },
];
const PORTFOLIO = [
  { label: "GoBongo Ventures", path: "/" },
  { label: "GoBongo Shop",     path: "/portfolio/gobongo-shop" },
  { label: "Hooqx LLC",        path: "/portfolio/hooqx" },
  { label: "CallTawk",         path: "/portfolio/calltawk" },
  { label: "GMI Trading",      path: "/portfolio/gmitrading" },
  { label: "Tezz Logistics",   path: "/portfolio/tezzlogistics" },
  { label: "Tradeflink",       path: "/portfolio/tradeflink" },
  { label: "Scooda",           path: "/portfolio/scooda" },
  { label: "Stratigi 360",     path: "/portfolio/stratigi360" },
];
const LEGAL = [
  { label: "Privacy Policy",    path: "/privacy" },
  { label: "Terms of Use",      path: "/terms" },
  { label: "Cookies",           path: "/cookies" },
 
];

export default function Footer() {
  const wrapRef  = useRef(null);
  const [gPos, setGPos] = useState({ x: -9999, y: -9999 });

  const onMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    setGPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const onLeave = () => setGPos({ x: -9999, y: -9999 });

  return (
    <footer className="rf-footer">
      <div className="rf-noise" />

      {/* ── Giant wordmark ── */}
      <div
        ref={wrapRef}
        className="rf-wordmark-wrap"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Base layer — dark matte */}
        <span className="rf-wordmark rf-wordmark--base" aria-hidden="true">
          GoBongo<span className="rf-vc">VC</span>
        </span>
        {/* Glow layer — reveals at cursor */}
        <span
          className="rf-wordmark rf-wordmark--glow"
          style={{ "--gx": `${gPos.x}px`, "--gy": `${gPos.y}px` }}
          aria-hidden="true"
        >
          GoBongo<span className="rf-vc">VC</span>
        </span>
        {/* Accessible text */}
        <span className="rf-wordmark-sr">GoBongo VC</span>
      </div>

      {/* ── Info + columns ── */}
      <div className="rf-bottom">
        <div className="rf-bottom-inner">

          {/* Left — address + status + socials */}
          <div className="rf-left">
            <p className="rf-address">
              Delaware, USA (HQ)<br />Dubai, UAE (Office)
            </p>
            <div className="rf-status">
              <span className="rf-status-dot" />
              <span className="rf-status-label">All systems operational</span>
            </div>
            <div className="rf-socials">
              {[["LinkedIn","in"],["Instagram","ig"],["Medium","m"]].map(([name, abbr]) => (
                <a key={name} href="#" className="rf-social" aria-label={name}>{abbr}</a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="rf-cols">
            <div className="rf-col">
              <span className="rf-col-head">Company</span>
              {COMPANY.map(l => (
                <Link key={l.label} to={l.path} className="rf-col-link">{l.label}</Link>
              ))}
            </div>
            <div className="rf-col">
              <span className="rf-col-head">Portfolio</span>
              {PORTFOLIO.slice(0, 4).map(l => l.external
                ? <a key={l.label} href={l.path} className="rf-col-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                : <Link key={l.label} to={l.path} className="rf-col-link">{l.label}</Link>
              )}
            </div>
            <div className="rf-col">
              <span className="rf-col-head">&nbsp;</span>
              {PORTFOLIO.slice(4).map(l => l.external
                ? <a key={l.label} href={l.path} className="rf-col-link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                : <Link key={l.label} to={l.path} className="rf-col-link">{l.label}</Link>
              )}
            </div>
            <div className="rf-col">
              <span className="rf-col-head">Legal</span>
              {LEGAL.map(l => l.path
                ? <Link key={l.label} to={l.path} className="rf-col-link">{l.label}</Link>
                : <span key={l.label} className="rf-col-link rf-col-link--muted">{l.label}</span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="rf-bar">
          <span className="rf-copy">&copy; {new Date().getFullYear()} GoBongo INC. All rights reserved.</span>
          <span className="rf-tagline">Incorporated in Delaware &mdash; scaling globally.</span>
        </div>
      </div>
    </footer>
  );
}
