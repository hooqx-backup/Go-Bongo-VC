import { useRef, useState } from "react";

/**
 * Globe Component - Local MP4 Video
 *
 * Props:
 *   src         {string}        - path to your .mp4 file (required)
 *   width       {number|string} - default "100%"
 *   height      {number|string} - default 500
 *   autoPlay    {bool}          - auto play on mount, default true
 *   loop        {bool}          - loop the video, default true
 *   muted       {bool}          - mute audio (required for autoplay), default true
 *   controls    {bool}          - show native controls, default false
 *   bgColor     {string}        - fallback background color, default "#000"
 *   className   {string}        - optional CSS class
 *   style       {object}        - optional inline styles
 *
 * Usage:
 *   import Globe from './Globe';
 *   <Globe src="/videos/globe.mp4" />
 *
 *   Place your .mp4 file in the /public/videos/ folder (Vite/Next.js)
 *   and reference it as src="/videos/globe.mp4"
 */

export default function Globe({
  src,
  width = "100%",
  height = 500,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  bgColor = "white",
  className = "",
  style = {},
}) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  function onCanPlay() {
    setLoaded(true);
  }

  function onError() {
    setError(true);
  }

  if (!src) {
    return (
      <div
        style={{
          width,
          height,
          background: bgColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderRadius: 12,
        }}
      >
        <div style={{ fontSize: 32 }}>🎬</div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          No video src provided.
        </p>
        <code
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.05)",
            padding: "4px 8px",
            borderRadius: 4,
          }}
        >
          {'<Globe src="/videos/globe.mp4" />'}
        </code>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        background: bgColor,
        borderRadius: 0,
        ...style,
      }}
    >
      {/* ── Spinner while buffering ── */}
      {!loaded && !error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            zIndex: 2,
          }}
        >
          <div className="globe-spinner" />
          <span style={{ fontSize: 13,  }}>
            Loading video...
          </span>
        </div>
      )}

      {/* ── Error state ── */}
      {error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 24,
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <div style={{ fontSize: 32 }}>⚠️</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
            Could not load video.
          </p>
          <code
            style={{
              fontSize: 11,
              color: "rgba(255,100,100,0.6)",
              background: "rgba(255,255,255,0.05)",
              padding: "4px 10px",
              borderRadius: 4,
            }}
          >
            {src}
          </code>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>
            Make sure the file is in your /public folder and the path is correct.
          </p>
        </div>
      )}

      {/* ── Video ── */}
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        onCanPlay={onCanPlay}
        onError={onError}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",       // fills the container, crops edges like a bg video
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          mixBlendMode: "multiply", // Blends white video background into the site background
        }}
      />

      <style>{`
        .globe-spinner {
          width: 36px;
          height: 36px;
          
          border-radius: 50%;
          animation: globe-spin 0.8s linear infinite;
        }
        @keyframes globe-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
