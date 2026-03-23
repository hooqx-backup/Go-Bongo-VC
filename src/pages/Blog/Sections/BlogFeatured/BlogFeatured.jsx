import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './BlogFeatured.css';

const FEATURED = {
  id: 'b2b-trade-finance-mena',
  category: 'Market Insights',
  title: <>The State of <em>E-Commerce</em> in South Asia: Why We're Doubling Down</>,
  excerpt: 'South Asia\'s e-commerce market is at an inflection point. With 800M+ digitally active consumers, improving logistics infrastructure, and a rising middle class, we believe the next decade belongs to founders building in this region.',
  author: { initials: 'AH', name: 'Ahmed Hassan', role: 'Managing Partner', date: 'March 14, 2025' },
  stats: [
    { num: '800M+', label: 'Consumers' },
    { num: '8 min', label: 'Read time' },
    { num: '2025', label: 'Published' },
  ],
};

export default function BlogFeatured() {
  return (
    <section className="bf-outer">
      <div className="bf-inner">

        <RevealWrapper className="bf-tag-wrap">
          <SectionTag color="gold">Featured Article</SectionTag>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <article className="bf-card">

            {/* Decorative orbs */}
            <div className="bf-orb bf-orb--1" />
            <div className="bf-orb bf-orb--2" />
            <div className="bf-orb bf-orb--3" />

            {/* Huge faint watermark */}
            <div className="bf-watermark">01</div>

            {/* ── Left — main editorial content ── */}
            <div className="bf-left">

              {/* Top row */}
              <div className="bf-top-row">
                <motion.div
                  className="bf-cat"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bf-cat__dot" />
                  {FEATURED.category}
                </motion.div>

                <motion.div
                  className="bf-star-badge"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  ★ Featured
                </motion.div>
              </div>

              {/* Title */}
              <motion.h2
                className="bf-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
              >
                {FEATURED.title}
              </motion.h2>

              {/* Author strip */}
              <motion.div
                className="bf-author-strip"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bf-avatar">{FEATURED.author.initials}</div>
                <div>
                  <div className="bf-author__name">{FEATURED.author.name}</div>
                  <div className="bf-author__meta">{FEATURED.author.role} · {FEATURED.author.date}</div>
                </div>
              </motion.div>

            </div>

            {/* ── Right — frosted glass panel ── */}
            <motion.div
              className="bf-glass"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="bf-glass__label">Editor's Pick</div>

              <p className="bf-glass__excerpt">{FEATURED.excerpt}</p>

              {/* Stats */}
              <div className="bf-glass__stats">
                {FEATURED.stats.map((s, i) => (
                  <div key={s.label} style={{ display: 'contents' }}>
                    {i > 0 && <div className="bf-glass__stat-sep" />}
                    <div className="bf-glass__stat">
                      <div className="bf-glass__stat-num">{s.num}</div>
                      <div className="bf-glass__stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to={`/blog/${FEATURED.id}`} className="bf-glass__cta">
                Read Article <LuArrowRight size={15} />
              </Link>
            </motion.div>

          </article>
        </RevealWrapper>

      </div>
    </section>
  );
}
