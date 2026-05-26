import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './BlogGrid.css';

export const POSTS = [
  {
    id: 'tezz-logistics-investment',
    num: '01',
    imgVariant: 'blue',
    category: 'Portfolio',
    title: 'Why We Invested in Tezz Logistics',
    excerpt: 'Tezz is solving last-mile delivery in tier-2 cities across India. Here\'s our investment thesis and what we saw in the team from day one.',
    author: { initials: 'AH', name: 'Ahmed Hassan', color: 'blue' },
    date: 'Jan 2025',
    readTime: '6 min',
  },
  {
    id: 'building-in-dubai',
    num: '02',
    imgVariant: 'gold',
    category: 'Founder Resources',
    title: 'Building in Dubai: What Founders Need to Know',
    excerpt: 'DIFC, ADGM, free zones - navigating the UAE startup ecosystem is complex. We break down what matters and what doesn\'t.',
    author: { initials: 'RK', name: 'Riya Kapoor', color: 'gold' },
    date: 'Feb 2025',
    readTime: '10 min',
  },
  {
    id: 'year-in-review-2024',
    num: '03',
    imgVariant: 'dark',
    category: 'Team',
    title: 'GoBongo Ventures: Year in Review 2024',
    excerpt: 'Eleven ventures, seven countries, one year. A look at what we built, what we learned, and where we\'re heading in 2025.',
    author: { initials: 'GB', name: 'GoBongo Team', color: 'blue' },
    date: 'Dec 2024',
    readTime: '5 min',
  },
  {
    id: 'b2b-trade-finance-mena',
    num: '04',
    imgVariant: 'teal',
    category: 'Market Insights',
    title: 'The Future of B2B Trade Finance in MENA',
    excerpt: 'Traditional trade finance is broken for SMEs. We explore how embedded finance and digital platforms are closing the $2.5T gap.',
    author: { initials: 'MR', name: 'Mohamed Rashid', color: 'teal' },
    date: 'Nov 2024',
    readTime: '7 min',
  },
  {
    id: 'how-we-evaluate-startups',
    num: '05',
    imgVariant: 'indigo',
    category: 'Founder Resources',
    title: 'How We Evaluate Early-Stage Startups',
    excerpt: 'No black box. We walk through our exact framework - from the first email to a term sheet - so founders know exactly what we\'re looking for.',
    author: { initials: 'AH', name: 'Ahmed Hassan', color: 'blue' },
    date: 'Oct 2024',
    readTime: '9 min',
  },
  {
    id: 'hooqx-global-digital-layer',
    num: '06',
    imgVariant: 'slate',
    category: 'Portfolio',
    title: 'Hooqx LLC: Building a Global Digital Services Layer',
    excerpt: 'Hooqx is quietly becoming the infrastructure layer for digital service providers across North America and South Asia. Here\'s why we backed them early.',
    author: { initials: 'RK', name: 'Riya Kapoor', color: 'gold' },
    date: 'Sep 2024',
    readTime: '6 min',
  },
  {
    id: 'bigbuy-wholesale-commerce',
    num: '07',
    imgVariant: 'gold',
    category: 'Portfolio',
    title: 'BigBuy: The Omnichannel Supermarket UAE Families Have Been Waiting For',
    excerpt: 'Shop in-store or order online  BigBuy is building the UAE supermarket experience that works both ways, with same-day delivery and one unified loyalty programme.',
    author: { initials: 'AH', name: 'Ahmed Hassan', color: 'blue' },
    date: 'Mar 2025',
    readTime: '7 min',
  },
  {
    id: 'bigmeat-halal-distribution',
    num: '08',
    imgVariant: 'dark',
    category: 'Portfolio',
    title: 'BigMeat: Bringing Butcher Quality and Supermarket Convenience Under One Roof',
    excerpt: 'UAE shoppers want fresh halal cuts from a trusted source  without hunting down a specialist butcher. BigMeat is the omnichannel meat supermarket that delivers both.',
    author: { initials: 'MR', name: 'Mohamed Rashid', color: 'teal' },
    date: 'Apr 2025',
    readTime: '6 min',
  },
  {
    id: 'wedocx-document-automation',
    num: '09',
    imgVariant: 'teal',
    category: 'Portfolio',
    title: 'WeDocX: Giving Doctors the Freedom to Practice Without Signing a Lease',
    excerpt: 'Independent practitioners in the UAE should not need a 3-year lease to see a patient. WeDocX makes flexible clinic space rentals as simple as booking a hotel room.',
    author: { initials: 'RK', name: 'Riya Kapoor', color: 'gold' },
    date: 'May 2025',
    readTime: '7 min',
  },
];

const FILTERS = [
  { label: 'All',                count: 9 },
  { label: 'Portfolio',          count: 5 },
  { label: 'Market Insights',    count: 2 },
  { label: 'Founder Resources',  count: 2 },
  { label: 'Team',               count: 1 },
];

/* Entry direction per index - each card comes from a different angle */
const ENTRY_VARIANTS = [
  { x: 0,   y: 60  },  // 0 → from bottom
  { x: 60,  y: 30  },  // 1 → from right-bottom
  { x: -60, y: 30  },  // 2 → from left-bottom
  { x: 0,   y: 60  },  // 3 → from bottom
  { x: 60,  y: 30  },  // 4 → from right-bottom
  { x: -60, y: 30  },  // 5 → from left-bottom
];

/* ── Animated 3D tilt + spotlight card ── */
function BlogCard({ post, index }) {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 260, damping: 28 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 260, damping: 28 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const entry = ENTRY_VARIANTS[index % ENTRY_VARIANTS.length];

  return (
    <motion.article
      ref={cardRef}
      className="bg-card"
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: entry.x, y: entry.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link to={`/blog/${post.id}`} className="bg-card__link">

        {/* Full-bleed gradient background */}
        <div className={`bg-card__bg bg-card__img--${post.imgVariant}`} />

        {/* Cursor spotlight overlay */}
        <div
          className="bg-card__spotlight"
          style={{
            background: hovered
              ? `radial-gradient(circle 180px at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.13), transparent 70%)`
              : 'transparent',
          }}
        />

        {/* Large watermark number */}
        <div className="bg-card__num">{post.num}</div>

        {/* Category badge */}
        <div className="bg-card__cat-wrap">
          <span className="bg-card__cat">{post.category}</span>
        </div>

        {/* Read time */}
        <div className="bg-card__time">{post.readTime} read</div>

        {/* Permanent bottom - fades out on hover */}
        <div className="bg-card__base">
          <div className="bg-card__base-title">{post.title}</div>
          <div className="bg-card__base-author">
            <div className={`bg-card__avatar bg-card__avatar--${post.author.color}`}>
              {post.author.initials}
            </div>
            <span className="bg-card__base-name">{post.author.name} · {post.date}</span>
          </div>
        </div>

        {/* Hover drawer - slides up */}
        <div className="bg-card__drawer">
          <div className="bg-card__drawer-title">{post.title}</div>
          <p className="bg-card__drawer-excerpt">{post.excerpt}</p>
          <div className="bg-card__drawer-footer">
            <div className="bg-card__drawer-author">
              <div className={`bg-card__avatar bg-card__avatar--${post.author.color}`}>
                {post.author.initials}
              </div>
              <div>
                <div className="bg-card__drawer-name">{post.author.name}</div>
                <div className="bg-card__drawer-date">{post.date}</div>
              </div>
            </div>
            <div className="bg-card__drawer-cta">
              Read <LuArrowRight size={13} />
            </div>
          </div>
        </div>

      </Link>
    </motion.article>
  );
}

/* ── Grid ── */
export default function BlogGrid({ activeFilter, onFilterChange }) {
  const filtered = activeFilter === 'All'
    ? POSTS
    : POSTS.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-outer">
      <div className="bg-inner">

        <RevealWrapper className="bg-header">
          <div>
            <SectionTag color="blue">Latest Articles</SectionTag>
            <h2 className="bg-heading">All <em>Perspectives</em></h2>
          </div>
          <div className="bg-filters">
            {FILTERS.map((f) => (
              <button
                key={f.label}
                className={`bg-pill${activeFilter === f.label ? ' bg-pill--active' : ''}`}
                onClick={() => onFilterChange(f.label)}
              >
                {f.label}
                <span className="bg-pill__count">{f.count}</span>
              </button>
            ))}
          </div>
        </RevealWrapper>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="bg-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {activeFilter === 'All' && (
          <motion.div
            className="bg-loadmore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-loadmore__bar">
              <div className="bg-loadmore__line" />
              <span className="bg-loadmore__count">Showing all {POSTS.length} articles</span>
              <div className="bg-loadmore__line" />
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
