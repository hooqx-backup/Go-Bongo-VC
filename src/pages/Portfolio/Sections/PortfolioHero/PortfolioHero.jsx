import { motion } from 'framer-motion';
import './PortfolioHero.css';

const _MOTION = motion;

export default function PortfolioHero() {
  return (
    <section className="ph-root">
      <div className="ph-blob ph-blob--1" />
      <div className="ph-blob ph-blob--2" />
      <div className="ph-blob ph-blob--3" />
      <div className="ph-grid-lines" />

      <div className="ph-inner">
        {/* ── Left column ── */}
        <div className="ph-left">
          <motion.div
            className="ph-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="ph-kicker__dot" />
            Delaware-Incorporated Venture · Est. 2017
          </motion.div>

          <div className="ph-heading-wrap">
            {['Eleven Ventures.', 'One Vision.'].map((line, i) => (
              <div className="ph-heading-line" key={line}>
                <motion.span
                  className="ph-h1"
                  initial={{ y: '105%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.85, delay: 0.12 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 1 ? <em className='shimmer-blue'>{line}</em> : line}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            className="ph-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Each company in our portfolio is solving a real problem at scale, from
            logistics networks to digital commerce platforms and beyond.
          </motion.p>

          <motion.div
            className="ph-ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            <a href="#portfolio-grid" className="ph-btn ph-btn--primary">
              Explore Companies
            </a>
            <a href="#portfolio-thesis" className="ph-btn ph-btn--outline">
              Our Investment Thesis →
            </a>
          </motion.div>
        </div>

        {/* ── Right column: floating cards ── */}
        <motion.div
          className="ph-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ph-card ph-card--1">
            <div className="ph-card__label">Portfolio Growth</div>
            <div className="ph-card__val">11<em>+</em></div>
            <div className="ph-card__sub">Active ventures across 6 sectors</div>
            <div className="ph-card__bar">
              <div className="ph-card__bar-fill" style={{ '--w': '75%', '--clr': '#1A56E8' }} />
            </div>
          </div>

          <div className="ph-card ph-card--2">
            <div className="ph-card__label">Global Reach</div>
            <div className="ph-card__val">7</div>
            <div className="ph-card__sub">Countries of operation</div>
            <div className="ph-card__tags">
              <span className="ph-card__tag">🇦🇪 UAE</span>
              <span className="ph-card__tag">🇸🇦 KSA</span>
              <span className="ph-card__tag">🇮🇳 India</span>
            </div>
          </div>

          <div className="ph-card ph-card--3">
            <div className="ph-card__label">Team Size</div>
            <div className="ph-card__val">200<em>+</em></div>
            <div className="ph-card__sub">Across the group</div>
          </div>

          <div className="ph-card ph-card--4">
            <div className="ph-card__label">Sectors</div>
            <div className="ph-card__tags" style={{ marginTop: 2 }}>
              <span className="ph-card__tag">Commerce</span>
              <span className="ph-card__tag">Logistics</span>
              <span className="ph-card__tag">Tech</span>
              <span className="ph-card__tag">Trade</span>
            </div>
            <div className="ph-card__sub" style={{ marginTop: 10 }}>6 industry verticals</div>
          </div>
        </motion.div>
      </div>

      <div className="ph-scroll-hint">
        <div className="ph-scroll-hint__line" />
        <span className="ph-scroll-hint__text">Scroll</span>
      </div>
    </section>
  );
}
