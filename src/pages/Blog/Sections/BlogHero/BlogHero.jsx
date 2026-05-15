import { motion } from 'framer-motion';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './BlogHero.css';

const PREVIEW_CARDS = [
  {
    slot: 'c3',
    color: 'teal',
    num: '04',
    category: 'Market Insights',
    title: 'The Future of B2B Trade Finance in MENA',
    meta: 'Nov 2024 · 7 min',
    entryDelay: 0.3,
  },
  {
    slot: 'c2',
    color: 'gold',
    num: '02',
    category: 'Founder Resources',
    title: 'Building in Dubai: What Founders Need to Know',
    meta: 'Feb 2025 · 10 min',
    entryDelay: 0.55,
  },
  {
    slot: 'c1',
    color: 'blue',
    num: '01',
    category: 'Portfolio',
    title: 'Why We Invested in Tezz Logistics',
    meta: 'Jan 2025 · 6 min',
    entryDelay: 0.82,
  },
];

const BADGE_DELAY = 1.2;

export default function BlogHero() {
  return (
    <section className="bh-outer">
      <div className="bh-mesh" />
      <div className="bh-dots" />
      <div className="bh-grain" />
      <div className="bh-inner">

        {/* ── Left ── */}
        <div className="bh-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0, ease: [0.25, 1, 0.5, 1] }}
          >
            <SectionTag color="blue">Insights &amp; Perspectives</SectionTag>
          </motion.div>

          <motion.h1
            className="bh-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 1, 0.5, 1] }}
          >
            Our Thinking,<br />
            <em className="shimmer-blue">Publicly Shared.</em>
          </motion.h1>

          <motion.p
            className="bh-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.25, 1, 0.5, 1] }}
          >
            Market insights, portfolio updates, and founder resources, straight
            from the GoBongo Ventures team.
          </motion.p>

        </div>

        {/* ── Right — cards slide in one by one from right ── */}
        <div className="bh-right">

          <motion.div
            className="bh-badge bh-badge--articles"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: BADGE_DELAY, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="bh-badge__dot bh-badge__dot--blue" />
            <div className="bh-badge__label">6 Articles</div>
          </motion.div>

          <motion.div
            className="bh-badge bh-badge--new"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: BADGE_DELAY + 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="bh-badge__dot bh-badge__dot--green" />
            <div className="bh-badge__label">New this month</div>
          </motion.div>

          <motion.div
            className="bh-badge bh-badge--topics"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: BADGE_DELAY + 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="bh-badge__dot bh-badge__dot--gold" />
            <div>
              <div className="bh-badge__label">5 Topics</div>
              <div className="bh-badge__sub">MENA · Logistics · Fintech</div>
            </div>
          </motion.div>

          {PREVIEW_CARDS.map((card) => (
            <motion.div
              key={card.slot}
              className={`bh-card-wrap bh-card-wrap--${card.slot}`}
              initial={{ opacity: 0, x: 120, rotate: card.slot === 'c2' ? 10 : card.slot === 'c3' ? -9 : 0 }}
              animate={{ opacity: 1, x: 0,   rotate: card.slot === 'c2' ? 10 : card.slot === 'c3' ? -9 : 0 }}
              transition={{ duration: 0.75, delay: card.entryDelay, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className={`bh-card bh-card--${card.color}`}>
                <div className="bh-card__scrim" />
                <div className="bh-card__num">{card.num}</div>
                <div className="bh-card__inner">
                  <div className="bh-card__cat">{card.category}</div>
                  <div className="bh-card__body">
                    <div className="bh-card__title">{card.title}</div>
                    <div className="bh-card__meta">{card.meta}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
