import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactOffice.css';

const OFFICES = [
  {
    flag: '🇦🇪',
    type: 'Global Headquarters',
    city: 'Dubai',
    country: 'United Arab Emirates',
    detail: ['DIFC presence · Free Zone entity', 'Primary operations & decisions'],
    badge: 'HQ · Est. 2022',
    accent: 'var(--gold)',
    accentRgb: '184,137,42',
  },
  {
    flag: '🇮🇳',
    type: 'Regional Office',
    city: 'India',
    country: 'South Asia Operations',
    detail: ['Tezz Logistics HQ', 'South Asia investment coverage'],
    badge: null,
    accent: 'var(--brand-blue)',
    accentRgb: '26,86,232',
  },
  {
    flag: '🇺🇸',
    type: 'Portfolio Office',
    city: 'USA',
    country: 'North America',
    detail: ['Hooqx LLC entity', 'Digital services partnerships'],
    badge: null,
    accent: 'var(--brand-blue)',
    accentRgb: '26,86,232',
  },
  {
    flag: '🌐',
    type: 'Expanding Presence',
    city: '+4 More',
    country: 'BD · CA · UK · DE',
    detail: ['Portfolio operations & access'],
    badge: null,
    accent: 'var(--brand-blue-m)',
    accentRgb: '59,111,240',
  },
];

// 3D position for each offset slot: 0=front, 1=right, 2=back, 3=left
const SLOTS = [
  { x: 0,    z: 200,  rotateY: 0,   scale: 1,    opacity: 1,    zIndex: 10 },
  { x: 290,  z: -30,  rotateY: -44, scale: 0.80, opacity: 0.72, zIndex: 6  },
  { x: 0,    z: -260, rotateY: 0,   scale: 0.55, opacity: 0,    zIndex: 1  },
  { x: -290, z: -30,  rotateY: 44,  scale: 0.80, opacity: 0.72, zIndex: 6  },
];

const SPRING = { type: 'spring', stiffness: 190, damping: 26 };

export default function ContactOffice() {
  const [active, setActive] = useState(0);
  const total = OFFICES.length;
  const stageRef = useRef(null);
  const velocityRef = useRef(0);
  const isHoldingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const holdDirRef = useRef(0);
  const dragXRef = useRef(0);
  const dragTsRef = useRef(0);
  const lastTsRef = useRef(0);
  const carryRef = useRef(0);
  const rafRef = useRef(null);
  const tickRef = useRef(null);

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  const spinBy = (steps) => {
    if (!steps) return;
    setActive((i) => {
      const mod = ((steps % total) + total) % total;
      return (i + mod) % total;
    });
  };

  const ensureLoop = () => {
    if (!rafRef.current && tickRef.current) {
      lastTsRef.current = 0;
      rafRef.current = requestAnimationFrame(tickRef.current);
    }
  };

  const addImpulse = (delta) => {
    const MAX_SPEED = 7.5;
    velocityRef.current = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, velocityRef.current + delta));
    ensureLoop();
  };

  const startHold = (dir) => {
    isHoldingRef.current = true;
    holdDirRef.current = dir;
    ensureLoop();
  };

  const stopHold = () => {
    isHoldingRef.current = false;
    holdDirRef.current = 0;
  };

  const handleStageWheel = (e) => {
    e.preventDefault();
    const raw = e.deltaY !== 0 ? e.deltaY : e.deltaX;
    const impulse = Math.max(-1.2, Math.min(1.2, raw / 220));
    addImpulse(impulse);
  };

  const handleStagePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDraggingRef.current = true;
    stopHold();
    dragXRef.current = e.clientX;
    dragTsRef.current = performance.now();

    if (stageRef.current?.setPointerCapture) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handleStagePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dx = e.clientX - dragXRef.current;
    const dt = Math.max((now - dragTsRef.current) / 1000, 0.016);

    dragXRef.current = e.clientX;
    dragTsRef.current = now;

    const speed = dx / dt;
    const impulse = Math.max(-1.4, Math.min(1.4, -speed / 900));
    addImpulse(impulse);
  };

  const handleStagePointerUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const MAX_SPEED = 7.5; // cards per second
    const ACCEL = 0.28;
    const DECAY = 0.88;

    tickRef.current = (ts) => {
      const last = lastTsRef.current || ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      const frame = dt * 60;
      lastTsRef.current = ts;

      if (isHoldingRef.current) {
        const nextVelocity = velocityRef.current + holdDirRef.current * ACCEL * frame;
        velocityRef.current = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, nextVelocity));
      } else {
        velocityRef.current *= Math.pow(DECAY, frame / 2);
      }

      carryRef.current += velocityRef.current * dt;

      if (carryRef.current >= 1) {
        const steps = Math.floor(carryRef.current);
        carryRef.current -= steps;
        spinBy(steps);
      } else if (carryRef.current <= -1) {
        const steps = Math.floor(Math.abs(carryRef.current));
        carryRef.current += steps;
        spinBy(-steps);
      }

      if (!isHoldingRef.current && Math.abs(velocityRef.current) < 0.03) {
        velocityRef.current = 0;
        carryRef.current = 0;
        lastTsRef.current = 0;
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(tickRef.current);
    };

    window.addEventListener('mouseup', stopHold);
    window.addEventListener('touchend', stopHold);
    window.addEventListener('pointerup', stopHold);
    window.addEventListener('blur', stopHold);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mouseup', stopHold);
      window.removeEventListener('touchend', stopHold);
      window.removeEventListener('pointerup', stopHold);
      window.removeEventListener('blur', stopHold);
    };
  }, [total]);

  return (
    <div className="co-outer">
      <div className="co-sec">
        <RevealWrapper style={{ maxWidth: 600 }}>
          <SectionTag color="gold">Where We Are</SectionTag>
          <h2 className="co-heading">
            Our Presence<br />Across <em>4 Markets</em>
          </h2>
        </RevealWrapper>

        {/* ── 3D Carousel ── */}
        <div
          className="co-stage"
          ref={stageRef}
          onWheel={handleStageWheel}
          onPointerDown={handleStagePointerDown}
          onPointerMove={handleStagePointerMove}
          onPointerUp={handleStagePointerUp}
          onPointerCancel={handleStagePointerUp}
          onPointerLeave={handleStagePointerUp}
        >
          <div className="co-carousel">
            {OFFICES.map((o, i) => {
              const offset = (i - active + total) % total;
              const slot   = SLOTS[offset];
              const isActive = i === active;

              return (
                <motion.div
                  key={o.city}
                  className={`co-card${isActive ? ' co-card--active' : ''}`}
                  animate={{
                    x:       slot.x,
                    z:       slot.z,
                    rotateY: slot.rotateY,
                    scale:   slot.scale,
                    opacity: slot.opacity,
                  }}
                  transition={SPRING}
                  style={{
                    zIndex: slot.zIndex,
                    '--card-accent':     o.accent,
                    '--card-accent-rgb': o.accentRgb,
                  }}
                  onClick={() => !isActive && setActive(i)}
                  whileHover={!isActive ? { scale: slot.scale * 1.04 } : undefined}
                >
                  {/* top accent bar */}
                  <div className="co-card__accent-bar" />

                  {/* subtle inner glow on active */}
                  {isActive && <div className="co-card__glow" />}

                  <div className="co-card__flag">{o.flag}</div>
                  <div className="co-card__type">{o.type}</div>
                  <div className="co-card__city">{o.city}</div>
                  <div className="co-card__country">{o.country}</div>
                  <div className="co-card__detail">
                    {o.detail.map((line, j) => (
                      <span key={j}>{line}{j < o.detail.length - 1 && <br />}</span>
                    ))}
                  </div>
                  {o.badge && <div className="co-card__badge">{o.badge}</div>}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile fallback grid (hidden on desktop) ── */}
        <div className="co-mobile-grid">
          {OFFICES.map((o) => (
            <div key={o.city} className="co-card co-card--active" style={{ '--card-accent': o.accent, '--card-accent-rgb': o.accentRgb }}>
              <div className="co-card__accent-bar" style={{ transform: 'scaleX(1)' }} />
              <div className="co-card__flag">{o.flag}</div>
              <div className="co-card__type">{o.type}</div>
              <div className="co-card__city">{o.city}</div>
              <div className="co-card__country">{o.country}</div>
              <div className="co-card__detail">
                {o.detail.map((line, j) => (
                  <span key={j}>{line}{j < o.detail.length - 1 && <br />}</span>
                ))}
              </div>
              {o.badge && <div className="co-card__badge">{o.badge}</div>}
            </div>
          ))}
        </div>

        {/* ── Navigation ── */}
        <div className="co-nav">
          <button
            className="co-nav__arrow co-nav__arrow--prev"
            onClick={prev}
            onMouseDown={() => startHold(-1)}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={() => startHold(-1)}
            onTouchEnd={stopHold}
            aria-label="Previous"
          >
            <FiChevronLeft size={18} />
          </button>

          <div className="co-nav__dots">
            {OFFICES.map((_, i) => (
              <button
                key={i}
                className={`co-nav__dot${i === active ? ' co-nav__dot--on' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to ${OFFICES[i].city}`}
              />
            ))}
          </div>

          <button
            className="co-nav__arrow co-nav__arrow--next"
            onClick={next}
            onMouseDown={() => startHold(1)}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={() => startHold(1)}
            onTouchEnd={stopHold}
            aria-label="Next"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
