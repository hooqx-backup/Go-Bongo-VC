import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { POST_CONTENT } from './posts';
import { POSTS } from '../Sections/BlogGrid/BlogGrid';
import '../Sections/BlogGrid/BlogGrid.css';
import SectionTag from '../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../common/components/Button/Button';
import './BlogPost.css';

function renderBlock(block, i) {
  switch (block.type) {
    case 'p':
      return <p key={i}>{block.text}</p>;
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    case 'pullquote':
      return (
        <blockquote key={i} className="bp-pullquote">
          <p>{block.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { id } = useParams();
  const post = POST_CONTENT[id];

  if (!post) {
    return (
      <div className="bp-404">
        <div className="bp-404__num">404</div>
        <div className="bp-404__title">Article not found</div>
        <p className="bp-404__sub">This article doesn't exist or may have been moved.</p>
        <Button variant="blue" to="/blog">← Back to Blog</Button>
      </div>
    );
  }

  const relatedPosts = POSTS.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bp-hero">
        <div className="bp-hero__mesh" />
        <div className="bp-hero__inner">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/blog" className="bp-back">
              <LuArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="bp-cat">
              <div className="bp-cat__dot" />
              {post.category}
            </div>

            <h1 className="bp-title">{post.title}</h1>

            <div className="bp-meta">
              <div className="bp-author">
                <div className={`bp-avatar bp-avatar--${post.author.color}`}>
                  {post.author.initials}
                </div>
                <div>
                  <div className="bp-author__name">{post.author.name}</div>
                  <div className="bp-author__role">{post.author.role}</div>
                </div>
              </div>
              <div className="bp-divider" />
              <span className="bp-date">{post.date}</span>
              <span className="bp-read">· {post.readTime}</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Body ── */}
      <div className="bp-body-outer">
        <div className="bp-body-inner">

          {/* Cover image — overlaps hero */}
          <motion.div
            className="bp-cover-wrap"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className={`bp-cover bg-card__img--${post.imgVariant}`}>
              <div className="bp-cover__inner">
                <span className="bp-cover__watermark">{post.imgWatermark}</span>
              </div>
              <div className="bp-cover__glow" />
            </div>
          </motion.div>

          {/* Stat strip */}
          {post.stats && (
            <RevealWrapper>
              <div className="bp-stat-row">
                {post.stats.map((s) => (
                  <div key={s.label} className="bp-stat">
                    <div className="bp-stat__num">{s.num}</div>
                    <div className="bp-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          )}

          {/* Article content */}
          <RevealWrapper className="bp-content">
            {post.body.map((block, i) => renderBlock(block, i))}
          </RevealWrapper>

        </div>
      </div>

      {/* ── Tags + CTA ── */}
      <div className="bp-footer-section">
        <div className="bp-footer-inner">
          <div className="bp-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="bp-tag">{tag}</span>
            ))}
          </div>
          <Button variant="blue" to="/contact">Get in Touch →</Button>
        </div>
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
