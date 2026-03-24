import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { POST_CONTENT } from './posts';
import { POSTS } from '../Sections/BlogGrid/BlogGrid';
import '../Sections/BlogGrid/BlogGrid.css';
import SectionTag from '../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../common/components/Button/Button';
import './BlogPost.css';

/* ── Animated block renderers ── */
function renderBlock(block, i) {
  switch (block.type) {

    case 'p':
      return (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {block.text}
        </motion.p>
      );

    case 'h2':
      /* Horizontal clip-path sweep — text wipes in from left to right */
      return (
        <motion.h2
          key={i}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.72, ease: [0.25, 1, 0.5, 1] }}
        >
          {block.text}
        </motion.h2>
      );

    case 'h3':
      return (
        <motion.h3
          key={i}
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          {block.text}
        </motion.h3>
      );

    case 'ul':
      /* Staggered list — items cascade in from the left one by one */
      return (
        <motion.ul
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {block.items.map((item, j) => (
            <motion.li
              key={j}
              variants={{
                hidden: { opacity: 0, x: -26 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.48, ease: [0.25, 1, 0.5, 1] },
                },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      );

    case 'pullquote':
      /* Blur + scale entrance — the giant mark rotates into place */
      return (
        <motion.blockquote
          key={i}
          className="bp-pullquote"
          initial={{ scale: 0.92, opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            className="bp-pullquote__mark"
            aria-hidden="true"
            initial={{ scale: 2.4, opacity: 0, rotate: -20 }}
            whileInView={{ scale: 1, opacity: 0.18, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            &ldquo;
          </motion.div>
          <p>{block.text}</p>
        </motion.blockquote>
      );

    default:
      return null;
  }
}

export default function BlogPost() {
  const { id } = useParams();
  const post = POST_CONTENT[id];

  /* Progress bar + watermark parallax */
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const wmY = useTransform(scrollY, [0, 700], [0, 110]);

  if (!post) {
    return (
      <div className="bp-404">
        <div className="bp-404__num">404</div>
        <div className="bp-404__title">Article not found</div>
        <p className="bp-404__sub">This article doesn&apos;t exist or may have been moved.</p>
        <Button variant="blue" to="/blog">← Back to Blog</Button>
      </div>
    );
  }

  const relatedPosts = POSTS.filter((p) => p.id !== id).slice(0, 3);
  const titleWords = post.title.split(' ');

  return (
    <>
      {/* Reading progress bar */}
      <motion.div className="bp-progress" style={{ scaleX }} />

      {/* ── Hero — full-bleed gradient cover ── */}
      <section className="bp-hero">
        <div className={`bp-hero__cover bg-card__img--${post.imgVariant}`}>
          <div className="bp-abstract-orb bp-abstract-orb--1" />
          <div className="bp-abstract-orb bp-abstract-orb--2" />
          <div className="bp-hero__noise" />
          {/* Watermark drifts downward as user scrolls — parallax */}
          <motion.span className="bp-hero__wm" aria-hidden="true" style={{ y: wmY }}>
            {post.imgWatermark}
          </motion.span>
          <div className="bp-hero__overlay" />
        </div>

        <div className="bp-hero__content">
          <motion.div
            className="bp-hero__nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/blog" className="bp-back">
              <LuArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="bp-cat">
              <div className="bp-cat__dot" />
              {post.category}
            </div>
          </motion.div>

          <div className="bp-hero__bottom">
            {/* Word-cascade title — each word slides up from clip */}
            <h1 className="bp-title">
              {titleWords.map((word, i) => (
                <span key={i} className="bp-word-wrap">
                  <motion.span
                    className="bp-word"
                    initial={{ y: '115%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.12 + i * 0.075,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="bp-meta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 + titleWords.length * 0.04, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="bp-author">
                <div className={`bp-avatar bp-avatar--${post.author.color}`}>
                  {post.author.initials}
                </div>
                <div>
                  <div className="bp-author__name">{post.author.name}</div>
                  <div className="bp-author__role">{post.author.role}</div>
                </div>
              </div>
              <div className="bp-meta__right">
                <span className="bp-date">{post.date}</span>
                <span className="bp-meta__sep">·</span>
                <span className="bp-read">{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats strip — blur-to-sharp number entrance ── */}
      {post.stats && (
        <div className="bp-stats-strip">
          {post.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bp-stat-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div
                className="bp-stat__num"
                initial={{ filter: 'blur(12px)', scale: 0.82 }}
                whileInView={{ filter: 'blur(0px)', scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.13 + 0.18, ease: [0.25, 1, 0.5, 1] }}
              >
                {s.num}
              </motion.div>
              <div className="bp-stat__label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Article — 2-column layout ── */}
      <div className="bp-layout">
        <main className="bp-main">
          {/* Each block handles its own whileInView — no wrapping RevealWrapper */}
          <div className="bp-content">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Mobile-only — tags + CTA (desktop version lives in sidebar) */}
          <div className="bp-article-footer">
            <div className="bp-tags">
              {post.tags.map((tag) => <span key={tag} className="bp-tag">{tag}</span>)}
            </div>
            <Button variant="blue" to="/contact">Get in Touch &rarr;</Button>
          </div>
        </main>

        {/* ── Sticky sidebar — slides in from right ── */}
        <aside className="bp-sidebar">
          <motion.div
            className="bp-sidebar__card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className={`bp-avatar bp-avatar--${post.author.color} bp-avatar--lg`}>
              {post.author.initials}
            </div>
            <div className="bp-sidebar__author-name">{post.author.name}</div>
            <div className="bp-sidebar__author-role">{post.author.role}</div>

            <div className="bp-sidebar__rule" />

            <div className="bp-sidebar__meta-row">
              <div>
                <div className="bp-sidebar__label">Published</div>
                <div className="bp-sidebar__val">{post.date}</div>
              </div>
              <div>
                <div className="bp-sidebar__label">Read time</div>
                <div className="bp-sidebar__val">{post.readTime}</div>
              </div>
            </div>

            <div className="bp-sidebar__rule" />

            <div className="bp-sidebar__label bp-sidebar__label--topics">Topics</div>
            <div className="bp-tags">
              {post.tags.map((tag) => <span key={tag} className="bp-tag">{tag}</span>)}
            </div>

            <div className="bp-sidebar__rule" />

            <Button variant="blue" size="sm" to="/contact">Get in Touch &rarr;</Button>
          </motion.div>
        </aside>
      </div>

      {/* ── More posts ── */}
      <section className="bp-more">
        <div className="bp-more__inner">
          <RevealWrapper>
            <SectionTag color="gold">Keep Reading</SectionTag>
            <h2 className="bp-more__heading">More <em>Perspectives</em></h2>
          </RevealWrapper>

          <div className="bp-more__grid">
            {relatedPosts.map((p, i) => (
              <motion.article
                key={p.id}
                className="bg-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                <Link to={`/blog/${p.id}`} className="bg-card__link">
                  <div className={`bg-card__bg bg-card__img--${p.imgVariant}`} />
                  <div className="bg-card__num">{p.num}</div>
                  <div className="bg-card__cat-wrap">
                    <span className="bg-card__cat">{p.category}</span>
                  </div>
                  <div className="bg-card__time">{p.readTime} read</div>
                  <div className="bg-card__base">
                    <div className="bg-card__base-title">{p.title}</div>
                    <div className="bg-card__base-author">
                      <div className={`bg-card__avatar bg-card__avatar--${p.author.color}`}>{p.author.initials}</div>
                      <span className="bg-card__base-name">{p.author.name} · {p.date}</span>
                    </div>
                  </div>
                  <div className="bg-card__drawer">
                    <div className="bg-card__drawer-title">{p.title}</div>
                    <p className="bg-card__drawer-excerpt">{p.excerpt}</p>
                    <div className="bg-card__drawer-footer">
                      <div className="bg-card__drawer-author">
                        <div className={`bg-card__avatar bg-card__avatar--${p.author.color}`}>{p.author.initials}</div>
                        <div>
                          <div className="bg-card__drawer-name">{p.author.name}</div>
                          <div className="bg-card__drawer-date">{p.date}</div>
                        </div>
                      </div>
                      <div className="bg-card__drawer-cta">Read <LuArrowRight size={13} /></div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
