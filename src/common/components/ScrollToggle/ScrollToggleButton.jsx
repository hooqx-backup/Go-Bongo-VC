import { useState, useEffect, useRef } from "react";
import "./ScrollToggleButton.css";

export default function ScrollToggleButton() {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [progress, setProgress] = useState(0);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollY > 80);
      setAtBottom(docHeight > 0 && scrollY >= docHeight - 40);
      setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  /* SVG arc progress ring */
  const R = 20;
  const CIRC = 2 * Math.PI * R;
  const dash = CIRC * progress;
  const gap  = CIRC - dash;

  return (
    <button
      ref={btnRef}
      className={[
        "stb-btn",
        visible  ? "stb-btn--visible"  : "",
        atBottom ? "stb-btn--bottom"   : "",
        clicked  ? "stb-btn--clicked"  : "",
      ].join(" ")}
      onClick={handleClick}
      aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {/* Pulse ring */}
      <span className="stb-pulse" />

      {/* SVG: progress arc + arrow icon together */}
      <svg className="stb-svg" viewBox="0 0 50 50">
        {/* Track */}
        <circle
          className="stb-track"
          cx="25" cy="25" r={R}
          fill="none"
          strokeWidth="2"
        />
        {/* Progress arc */}
        <circle
          className="stb-arc"
          cx="25" cy="25" r={R}
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${dash} ${gap}`}
          strokeLinecap="round"
          transform="rotate(-90 25 25)"
        />
        {/* Arrow — chevron down or up */}
        <polyline
          className="stb-arrow"
          points={atBottom ? "17 28 25 20 33 28" : "17 22 25 30 33 22"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
