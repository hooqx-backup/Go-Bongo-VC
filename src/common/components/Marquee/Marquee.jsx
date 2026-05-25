import "./Marquee.css";

/* ─────────────────────────────────────
   Logo placeholder - swap src once assets arrive
───────────────────────────────────── */
function LogoPlaceholder({ name, src }) {
  return (
    <div className="marquee-logo-wrap">
      {src ? (
        <img src={src} alt={name} className="marquee-logo-img" />
      ) : (
        <div className="marquee-logo-placeholder" title={name}>
          <span className="marquee-logo-initials">
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <span className="marquee-logo-name">{name}</span>
    </div>
  );
}

/* ─────────────────────────────────────
   Gold star separator
───────────────────────────────────── */
function GoldStar() {
  return (
    <svg
      className="marquee-star"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 1l2.163 5.28H17l-4.683 3.4 1.787 5.5L9 12.05l-5.104 3.13 1.787-5.5L1 6.28h5.837z"
        fill="#C9A84C"
      />
    </svg>
  );
}

/* ─────────────────────────────────────
   Items - add real `src` paths when logos arrive
   e.g. src: "/logos/bongologo.png"
───────────────────────────────────── */
const MARQUEE_ITEMS = [
  { name: "GoBongo Shop",   src: "/logos/bongologo.png" },
  { name: "Hooqx LLC",      src: "/logos/hooqxlogo.png" },
  { name: "Tradeflink",     src: "/logos/tradeflinklogo.png" },
  { name: "CallTawk",       src: "/logos/calltawklogo.png" },
  { name: "GMI Trading",    src: "/logos/gmilogo.png" },
  { name: "Tezz Logistics", src: "/logos/tezzlogo.png" },
  { name: "Scooda",         src: "/logos/scoodalogo.png" },
  { name: "Stratigi 360",   src: "/logos/stratigi360logo.png" },
  { name: "BigBuy",         src: "/logos/bigbuylogovc.png" },
  { name: "BigMeat",        src: "/logos/bigmeatlogovc.png" },
  { name: "WeDocX",         src: "/logos/wedocxlogo.png" },
];

/* ─────────────────────────────────────
   Marquee Component
   Props:
     speed      - CSS animation duration (default "32s")
     direction  - "left" | "right" (default "left")
     label      - optional heading above (default hidden)
───────────────────────────────────── */
export default function Marquee({ speed = "32s", direction = "left", label }) {
  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-root">
      {label && <p className="marquee-label">{label}</p>}

      {/* fade edges */}
      <div className="marquee-fade-left"  aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      <div
        className="marquee-track-wrap"
        aria-label="Portfolio companies"
        role="region"
      >
        <div
          className="marquee-track"
          style={{
            animationDuration: speed,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {items.map((item, i) => (
            <span key={i} className="marquee-item">
              <GoldStar />
              <LogoPlaceholder name={item.name} src={item.src} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
