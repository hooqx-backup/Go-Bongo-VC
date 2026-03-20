import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../../common/components/Button/Button';
import './AboutHero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-mesh" />

      <div className="about-hero-inner">
        {/* ── Left column ── */}
        <div className="about-hero-left">
          <motion.div className="about-breadcrumb" {...fadeUp(0.1)}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="about-breadcrumb__current">About Us</span>
          </motion.div>

          <motion.h1 className="about-hero-h" {...fadeUp(0.2)}>
            We Don't Just Fund<br />Companies. We Build <em>Ecosystems.</em>
          </motion.h1>

          <motion.p className="about-hero-sub" {...fadeUp(0.3)}>
            GoBongo VC is a Dubai-based venture capital firm built by operators, for
            founders — backing bold ideas across 6 industries in 7 countries with
            conviction, capital, and hands-on operational support.
          </motion.p>

          <motion.div className="about-hero-ctas" {...fadeUp(0.4)}>
            {/* anchor link — Button's href opens in new tab, so use plain <a> with btn classes */}
            <a href="#story" className="btn btn-blue btn-md">Our Story →</a>
            <Button variant="ghost" to="/pitch">Pitch Your Startup</Button>
          </motion.div>

          <motion.div className="about-hero-stats" {...fadeUp(0.5)}>
            <div className="ahs">
              <div className="ahs-n">2022</div>
              <div className="ahs-l">Founded</div>
            </div>
            <div className="ahs">
              <div className="ahs-n">8<span className="ahs-plus">+</span></div>
              <div className="ahs-l">Ventures Built</div>
            </div>
            <div className="ahs">
              <div className="ahs-n">7</div>
              <div className="ahs-l">Countries</div>
            </div>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          className="about-hero-right"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-hero-quote">
            <img src="/logos/gobongoventureslogo.png" alt="GoBongo VC" className="ahq-brand-logo" />
            <p className="ahq-text">
              "Our portfolio companies don't just share a cap table. They share
              customers, suppliers, infrastructure, and institutional knowledge.
              That's the <em>compounding advantage</em> no single investment can create."
            </p>
            <div className="ahq-attr">GoBongo VC · Investment Philosophy</div>
          </div>

          <div className="about-hero-tag">
            <div className="aht-dot" />
            <div>
              <div className="aht-text">8 Ventures Active</div>
              <div className="aht-sub">Growing across 7 countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
