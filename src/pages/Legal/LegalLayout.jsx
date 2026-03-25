import { motion } from 'framer-motion';
import SectionTag from '../../common/components/SectionTag/SectionTag';
import './Legal.css';

export default function LegalLayout({ title, updated, intro, sections }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="lg-hero">
        <div className="lg-hero__inner">

          <div className="lg-hero__meta">
            <SectionTag color="blue">Legal</SectionTag>
            <span className="lg-hero__updated">Last updated: {updated}</span>
          </div>

          <motion.h1
            className="lg-hero__heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="lg-hero__intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {intro}
          </motion.p>

        </div>
      </section>

      <hr className="lg-divider" />

      {/* ── Body ── */}
      <section className="lg-body">
        <div className="lg-body__inner">

          {/* Sticky TOC */}
          <aside className="lg-toc">
            <div className="lg-toc__heading">Contents</div>
            <ul className="lg-toc__list">
              {sections.map((s, i) => (
                <li key={s.id} className="lg-toc__item">
                  <span className="lg-toc__num">{String(i + 1).padStart(2, '0')}</span>
                  <a href={`#${s.id}`} className="lg-toc__link">{s.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Article */}
          <article className="lg-article">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                className="lg-section"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="lg-section__label">{String(i + 1).padStart(2, '0')}</div>
                <div className="lg-section__bar" />
                <h2 className="lg-section__title">{s.title}</h2>

                {s.content.map((block, bi) => {
                  if (block.type === 'p') {
                    return <p key={bi}>{block.text}</p>;
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={bi}>
                        {block.items.map((item, ii) => <li key={ii}>{item}</li>)}
                      </ul>
                    );
                  }
                  if (block.type === 'highlight') {
                    return (
                      <div key={bi} className="lg-highlight">
                        <p>{block.text}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </motion.div>
            ))}
          </article>

        </div>
      </section>
    </>
  );
}
