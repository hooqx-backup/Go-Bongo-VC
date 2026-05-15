import { useRef, useEffect } from 'react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PitchThesis.css';

/* ── Data ── */
const SECTORS = [
  { name: 'E-Commerce',     color: 'blue'  },
  { name: 'Logistics',      color: 'teal'  },
  { name: 'IT & Digital',   color: 'blue'  },
  { name: 'B2B Trade',      color: 'gold'  },
  { name: 'Communications', color: 'blue'  },
  { name: 'Commodities',    color: 'gold'  },
];

const GEOS = [
  { flag: '🇦🇪', country: 'UAE',           role: 'Headquarters', active: true  },
  { flag: '🇮🇳', country: 'India',          role: 'Core Market',  active: true  },
  { flag: '🇸🇦', country: 'Saudi Arabia',   role: 'Core Market',  active: true  },
  { flag: '🇬🇧', country: 'United Kingdom', role: 'Operations',   active: true  },
  { flag: '🌏', country: 'South Asia',      role: 'Expansion',    active: false },
];

const PARAMS = [
  { label: 'Stage',      value: 'Pre-seed → Seed → Series A' },
  { label: 'Check Size', value: '$50K – $500K initial' },
  { label: 'Follow-on',  value: 'Yes, reserved capital maintained' },
  { label: 'Decision',   value: '4–6 weeks, first message to term' },
  { label: 'Structure',  value: 'Equity, SAFE, Convertible Note' },
];

/* ── Card set — rendered twice for seamless loop ── */
function CardSet({ suffix }) {
  return (
    <>
      {/* Col 01 — Sectors */}
      <div className="pt-col-wrap" key={`col1-${suffix}`}>
        <div className="pt-col pt-col--blue">
          <div className="pt-col__wm" aria-hidden="true">01</div>
          <div className="pt-col__body">
            <h3 className="pt-col__title">Sectors We Back</h3>
            <p className="pt-col__sub">
              We invest across six verticals where the MENA South Asia corridor creates structural advantage.
            </p>
            <div className="pt-sector-pills">
              {SECTORS.map((s) => (
                <span key={s.name} className={`pt-sector-pill pt-sector-pill--${s.color}`}>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col 02 — Geographies */}
      <div className="pt-col-wrap" key={`col2-${suffix}`}>
        <div className="pt-col pt-col--gold">
          <div className="pt-col__wm" aria-hidden="true">02</div>
          <div className="pt-col__body">
            <h3 className="pt-col__title">Where We Invest</h3>
            <p className="pt-col__sub">
              We focus on emerging markets where trusted infrastructure is undersupplied and demand is compounding.
            </p>
            <div className="pt-geo-list">
              {GEOS.map((g) => (
                <div
                  key={g.country}
                  className={`pt-geo-item${g.active ? '' : ' pt-geo-item--dim'}`}
                >
                  <span className="pt-geo-flag">{g.flag}</span>
                  <div className="pt-geo-info">
                    <div className="pt-geo-country">{g.country}</div>
                    <div className="pt-geo-role">{g.role}</div>
                  </div>
                  {g.active && <div className="pt-geo-dot" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Col 03 — Investment Parameters */}
      <div className="pt-col-wrap" key={`col3-${suffix}`}>
        <div className="pt-col pt-col--teal">
          <div className="pt-col__wm" aria-hidden="true">03</div>
          <div className="pt-col__body">
            <h3 className="pt-col__title">Investment Parameters</h3>
            <p className="pt-col__sub">
              We move fast and are transparent about terms. No prolonged exclusivity. No extended negotiations.
            </p>
            <div className="pt-params">
              {PARAMS.map((p) => (
                <div key={p.label} className="pt-param">
                  <div className="pt-param__label">{p.label}</div>
                  <div className="pt-param__value">{p.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PitchThesis() {
  const outerRef = useRef(null);

  /* ── RAF loop: 3D scale + rotateY based on distance from center ── */
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    let rafId;

    const update = () => {
      const outerRect = outer.getBoundingClientRect();
      const center = outerRect.left + outerRect.width / 2;
      const half   = outerRect.width / 2;

      outer.querySelectorAll('.pt-col-wrap').forEach((wrap) => {
        const rect     = wrap.getBoundingClientRect();
        const cardCtr  = rect.left + rect.width / 2;
        const dist     = cardCtr - center;                        // signed: neg=left, pos=right
        const absDist  = Math.abs(dist);
        const progress = Math.max(0, 1 - absDist / half);        // 0 at edge → 1 at center

        const scale   = 0.82 + progress * 0.22;                  // 0.82 → 1.04
        const rotateY = -(dist / half) * 14;                     // ±14 deg
        const tz      = progress * 40;                           // 0 → 40 px forward
        const opacity = 0.50 + progress * 0.50;                  // 0.50 → 1.0

        wrap.style.transform = `perspective(1000px) translateZ(${tz}px) scale(${scale}) rotateY(${rotateY}deg)`;
        wrap.style.opacity   = opacity;
        wrap.style.zIndex    = Math.round(progress * 10);
      });

      rafId = requestAnimationFrame(update);
    };

    update();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="pt-thesis">
      <div className="pt-thesis__mesh" />

      <div className="pt-thesis__inner">

        {/* ── Section header ── */}
        <RevealWrapper className="pt-thesis__header">
          <SectionTag color="blue">Investment Thesis</SectionTag>
          <h2 className="pt-thesis__heading">
            What We <em className="shimmer-gold">Back</em>
          </h2>
          <p className="pt-thesis__sub">
            Our portfolio is not random. Every venture sits at the intersection of real world operations
            and digital leverage where founders have earned the right to build.
          </p>
        </RevealWrapper>

        {/* ── Carousel ── */}
        <div className="pt-carousel-outer" ref={outerRef}>
          <div className="pt-carousel-track">
            <CardSet suffix="a" />
            <CardSet suffix="b" />
          </div>
        </div>

      </div>
    </section>
  );
}
