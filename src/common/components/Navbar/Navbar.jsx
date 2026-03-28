import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

const _MOTION = motion;

const NAV_LINKS = [
  { label: "Home",      path: "/" },
  { label: "About",     path: "/about" },
  { label: "Blog",      path: "/blog" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Sectors",   path: "/sectors" },

  { label: "Contact",   path: "/contact" },
];
  
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = ({ path }) => {
    if (!path) return false;
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <nav
      className="navbar-root"
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: "0 4px 24px rgba(15, 23, 42, 0.06), 0 1px 0 rgba(255,255,255,0.8) inset",
        position: "sticky", top: 0, zIndex: 100,
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* ── Logo ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <img src="/gobongoventureslogo.png" alt="" width={100} />
      </div>

      {/* ── Center Nav Pill (desktop) ── */}
      <div
        className="hide-mobile shadow-inner"
        style={{
          display: "flex", alignItems: "center",
          background: "#f1f5f9", borderRadius: 999, padding: "4px",
        }}
      >
        {NAV_LINKS.map((item) => {
          const active = isActive(item);
          const pillStyle = {
            position: "relative", padding: "7px 20px",
            fontSize: 13, fontWeight: active ? 600 : 500,
            color: active ? "#3284fa" : "black",
            background: "none", border: "none", borderRadius: 999,
            cursor: item.path ? "pointer" : "default",
            fontFamily: "'Sora', sans-serif",
            zIndex: 1, transition: "color 0.2s",
            textDecoration: "none", display: "inline-flex", alignItems: "center",
          };
          const pill = (
            <>
              {active && (
                <motion.div
                  layoutId="nav-active-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  style={{
                    position: "absolute", inset: 0,
                    background: "white", borderRadius: 999,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
                    zIndex: -1,
                  }}
                />
              )}
              {item.label}
            </>
          );
          return item.path
            ? <Link key={item.label} to={item.path} style={pillStyle}>{pill}</Link>
            : <span key={item.label} style={pillStyle}>{pill}</span>;
        })}
      </div>

      {/* ── Right Actions (desktop) ── */}
      <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 20 }}>
        
        <Button to="/pitch">Pitch Us →</Button>
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        className="show-mobile"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          width: 40, height: 40, flexDirection: "column",
          justifyContent: "center", alignItems: "center", gap: 5,
          background: "#f1f5f9", border: "none", borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div key={i}
            animate={
              isMobileMenuOpen
                ? i === 1 ? { opacity: 0, scaleX: 0 }
                  : { rotate: i === 0 ? 45 : -45, y: i === 0 ? 9 : -9 }
                : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
            }
            style={{ width: 18, height: 2, background: "#334155", borderRadius: 99 }}
          />
       ))}
      </button>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute", top: 68, left: 16, right: 16,
              background: "white", border: "1px solid #e5e7eb",
              boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
              borderRadius: 20, zIndex: 99, padding: 20,
              display: "flex", flexDirection: "column", gap: 4,
            }}
          >
            {NAV_LINKS.map((item) => {
              const active = isActive(item);
              const mobileStyle = {
                fontSize: 15, fontWeight: active ? 700 : 500,
                color: active ? "#0f172a" : "#64748b",
                textAlign: "left", background: active ? "#f1f5f9" : "none",
                border: "none", cursor: item.path ? "pointer" : "default",
                fontFamily: "'Sora',sans-serif",
                borderRadius: 10, padding: "10px 14px",
                textDecoration: "none", display: "block",
              };
              return item.path
                ? <Link key={item.label} to={item.path} style={mobileStyle} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                : <span key={item.label} style={mobileStyle}>{item.label}</span>;
            })}
            <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "8px 0" }} />
            
            <Button to="/pitch" style={{ marginTop: 8, width: "100%", borderRadius: 12 }}>
              Pitch Us →
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}