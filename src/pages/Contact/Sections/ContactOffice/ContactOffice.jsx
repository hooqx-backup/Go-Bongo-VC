import { useState } from 'react';
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

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

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
        <div className="co-stage">
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
          <button className="co-nav__arrow" onClick={prev} aria-label="Previous">
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

          <button className="co-nav__arrow" onClick={next} aria-label="Next">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
