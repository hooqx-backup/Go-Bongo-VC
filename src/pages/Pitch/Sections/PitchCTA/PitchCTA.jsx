import { motion } from 'framer-motion';
import Button from '../../../../common/components/Button/Button';
import './PitchCTA.css';

const STATS = [
  { value: '8+',   label: 'Ventures Funded' },
  { value: '7',    label: 'Countries Active' },
  { value: '100%', label: 'Pitches Read' },
  { value: '5d',   label: 'Avg. Response' },
];

export default function PitchCTA() {
  return (
    <section className="pctx">
      {/* Background orbs */}
      <div className="pctx-orb pctx-orb--1" aria-hidden="true" />
      <div className="pctx-orb pctx-orb--2" aria-hidden="true" />
      <div className="pctx-orb pctx-orb--3" aria-hidden="true" />
      <div className="pctx-grain"           aria-hidden="true" />

      {/* Rotating watermark */}
      <div className="pctx-watermark" aria-hidden="true">&ldquo;</div>

      <div className="pctx-inner">

        {/* Glass panel — 2-col, book-fold reveal */}
        <div className="pctx-panel" style={{ perspective: '1800px' }}>
          {/* Gold top accent */}
          <div className="pctx-panel__accent" aria-hidden="true" />

          {/* Left — folds open from the right edge (spine) */}
          <motion.div
            className="pctx-panel__left"
            initial={{ rotateY: -90, opacity: 0, backgroundColor: 'rgba(209,224,255,0.85)' }}
            whileInView={{ rotateY: 0, opacity: 1, backgroundColor: 'rgba(248,247,244,0.6)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'right center' }}
          >
            <div className="pctx-eyebrow">A Note From the Founders</div>
            <motion.div
              className="pctx-big-mark"
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >&ldquo;</motion.div>
            <div className="pctx-vline" />
            <div className="pctx-identity">
              <img src="/gobongoventureslogo.png" className="pctx-logo" alt="GoBongo Ventures" />
              <span className="pctx-identity__name">GoBongo Ventures</span>
              <span className="pctx-identity__loc">Delaware, USA</span>
            </div>
          </motion.div>

          {/* Right — folds open from the left edge (spine) */}
          <motion.div
            className="pctx-panel__right"
            initial={{ rotateY: 90, opacity: 0, backgroundColor: 'rgba(251,242,210,0.85)' }}
            whileInView={{ rotateY: 0, opacity: 1, backgroundColor: 'rgba(255,255,255,0.0)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left center' }}
          >
            <blockquote className="pctx-quote">
              <p>
                A pass from us is not a no forever. We pass on many great companies — sometimes
                the sector does not fit our current thesis, sometimes the timing is wrong, sometimes
                we simply do not have the bandwidth to be the partner a company deserves.
              </p>
              <p className="pctx-quote__close">
                If we pass, try again. <em>We mean it.</em>
              </p>
            </blockquote>

            <div className="pctx-actions">
              <a href="#pitch-form" className="pctx-btn-primary">
                Submit Your Pitch →
              </a>
              <Button variant="ghost" to="/contact">Reach Out Directly</Button>
            </div>
          </motion.div>
        </div>

        {/* Stats strip — folds up from floor */}
        <motion.div
          className="pctx-stats"
          initial={{ rotateX: 52, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top center', transformPerspective: 900 }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="pctx-stat">
              <span className="pctx-stat__val">{s.value}</span>
              <span className="pctx-stat__label">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
