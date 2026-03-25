import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, TrendingUp, Target, Quote, ArrowRight } from 'lucide-react';
import { COMPANIES } from './data/companies';
import './PortfolioCompanyPage.css';

// --- CUSTOM INTERACTIVE FLEX CARD COMPONENT ---
const FlexAccordionCard = ({ title, content, icon, color, isActive, onHover }) => {
  return (
    <motion.div
      className={`pcp-flex-card ${isActive ? 'is-active' : ''}`}
      onMouseEnter={onHover}
      animate={{ flex: isActive ? 2.5 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{ '--accent': color }}
    >
      <div className="flex-card-icon" style={{ background: isActive ? color : '#f4f4f5', color: isActive ? '#fff' : '#888' }}>
        {icon}
      </div>
      <div className="flex-card-content">
        <h3 style={{ color: isActive ? color : '#000' }}>{title}</h3>
        <AnimatePresence>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// --- MARQUEE DRAWER STAMP BUTTON ---
const MarqueeDrawerBtn = ({ href, color, companyName, sector, stats, tags }) => {
  const tickerItems = [...(tags || []), ...(tags || []), ...(tags || []), ...(tags || [])];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mdsb-root"
      style={{ '--accent': color }}
    >
      {/* Rotating text ring */}
      <svg className="mdsb-ring" viewBox="0 0 100 100">
        <defs>
          <path id="mdsb-cp" d="M50,50 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fontSize="9.5" fontWeight="700" letterSpacing="1.8">
          <textPath href="#mdsb-cp" fill={color}>
            VISIT PLATFORM • EXPLORE SITE • 
          </textPath>
        </text>
      </svg>

      {/* Core arrow */}
      <div className="mdsb-core" style={{ background: color }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Drawer sliding right */}
      <div className="mdsb-drawer" style={{ background: color }}>
        <div className="mdsb-drawer-content">

          <div className="mdsb-top">
            <div className="mdsb-title">{companyName}<br />{sector}</div>
            <div className="mdsb-stat-block">
              <div className="mdsb-stat-val">{stats?.[0]?.n ?? '—'}</div>
              <div className="mdsb-stat-lbl">{stats?.[0]?.l ?? ''}</div>
            </div>
          </div>

          <div className="mdsb-ticker-wrap">
            <div className="mdsb-ticker-track">
              {tickerItems.map((t, i) => (
                <span className="mdsb-ticker-item" key={i}>
                  {t}<span className="mdsb-ticker-sep" />
                </span>
              ))}
            </div>
          </div>

          <div className="mdsb-bot">
            <div>
              <div className="mdsb-bot-val">{stats?.[1]?.n ?? '—'}</div>
              <div className="mdsb-bot-lbl">{stats?.[1]?.l ?? ''}</div>
            </div>
            <div className="mdsb-cta">
              Explore
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </a>
  );
};

export default function PortfolioCompanyPage() {
  const { id } = useParams();
  const company = COMPANIES.find((item) => item.id === id);
  const [activeFlexCard, setActiveFlexCard] = useState(1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const visitBannerRef = useRef(null);
  const [visitPos, setVisitPos] = useState({ x: -9999, y: -9999 });
  const handleVisitMove = (e) => {
    const rect = visitBannerRef.current.getBoundingClientRect();
    setVisitPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleVisitLeave = () => setVisitPos({ x: -9999, y: -9999 });


  if (!company) return <Navigate to="/portfolio" replace />;

  const relatedCompanies = COMPANIES
    .filter((item) => item.id !== company.id && item.sectorLower === company.sectorLower)
    .slice(0, 3);

  return (
    <div className="pcp-hatke-wrapper">
      <motion.div className="pcp-scroll-bar" style={{ scaleX, backgroundColor: company.sectorColor }} />

      <div className="pcp-split-layout">

        {/* ── LEFT: STICKY SIDEBAR ── */}
        <div className="pcp-sticky-sidebar">
          <img src={company.logo} alt="Watermark" className="hatke-giant-watermark" />

          <div className="pcp-sidebar-inner">

            {/* Top */}
            <div className="sidebar-top">
              <Link to="/portfolio" className="hatke-back-btn">
                <ArrowLeft size={18} /> <span>Back to Index</span>
              </Link>
            </div>

            {/* Center */}
            <div className="sidebar-center">
              <motion.div
                className="hatke-logo-box"
                style={{ background: company.logoBg }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <img src={company.logo} alt={company.name} />
                <div className="hatke-logo-glow" style={{ background: company.sectorColor }} />
              </motion.div>

              <div className="hatke-meta">
                <span className="hatke-tag" style={{ color: company.sectorColor, borderColor: company.sectorColor }}>
                  {company.sector}
                </span>
                <span className="hatke-tag">{company.details.stage}</span>
              </div>

              <h1 className="hatke-title">{company.name}</h1>

              {/* <ul className="hatke-quick-facts">
                <li><strong>HQ:</strong> {company.details.hq}</li>
                <li><strong>Founded:</strong> {company.founded}</li>
                <li><strong>Team:</strong> {company.details.employees}</li>
              </ul> */}
{/* Bottom — Marquee Drawer Button replaces old stamp */}
            <div className="sidebar-bottom">
              <MarqueeDrawerBtn
                href={`https://${company.details.website}`}
                color={company.sectorColor}
                companyName={company.name}
                sector={company.sector}
                stats={company.stats}
                tags={company.tags}
              />
            </div>
              <div className="hatke-sidebar-modules">
                <div className="hatke-side-block">
                  <h4 className="hatke-side-title">Performance Pulse</h4>
                  <div className="hatke-mini-stats">
                    {company.stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="hatke-mini-stat">
                        <strong style={{ color: company.sectorColor }}>{stat.n}</strong>
                        <span>{stat.l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hatke-side-block">
                  <h4 className="hatke-side-title">Focus Areas</h4>
                  <div className="hatke-focus-pills">
                    {company.tags.slice(0, 4).map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="hatke-side-block">
                  <h4 className="hatke-side-title">Recent Milestones</h4>
                  <ul className="hatke-side-timeline">
                    {company.highlights.slice(0, 2).map((item, index) => (
                      <li key={index}>
                        <span className="hatke-side-dot" style={{ backgroundColor: company.sectorColor }} />
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            

          </div>
        </div>

        {/* ── RIGHT: SCROLLING CONTENT ── */}
        <div className="pcp-scroll-content">
          <div className="pcp-scroll-inner">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hatke-section"
            >
              <h2 className="hatke-section-title">The Thesis</h2>
              <p className="hatke-hero-tagline">{company.tagline}</p>
              <p className="hatke-paragraph drop-cap">{company.about}</p>
            </motion.div>

            {/* VISIT WEBSITE BANNER */}
            <a
              href={`https://${company.details.website}`}
              target="_blank"
              rel="noreferrer"
              className="pcp-visit-banner"
              ref={visitBannerRef}
              onMouseMove={handleVisitMove}
              onMouseLeave={handleVisitLeave}
              style={{ '--accent': company.sectorColor }}
            >
              <div className="pvb-wordmark-wrap">
                <span className="pvb-wordmark pvb-wordmark--base" aria-hidden="true">
                  Visit Website <span className="pvb-arrow">→</span>
                </span>
                <span
                  className="pvb-wordmark pvb-wordmark--glow"
                  style={{ '--gx': `${visitPos.x}px`, '--gy': `${visitPos.y}px` }}
                  aria-hidden="true"
                >
                  Visit Website <span className="pvb-arrow">→</span>
                </span>
                <span className="pvb-wordmark-sr">Visit Website →</span>
              </div>

              <div className="pvb-stamp">
                <svg className="pvb-stamp-ring" viewBox="0 0 100 100">
                  <defs>
                    <path id="pvb-cp" d="M50,50 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text fontSize="9.5" fontWeight="700" letterSpacing="1.8">
                    <textPath href="#pvb-cp" fill={company.sectorColor}>
                      VISIT PLATFORM • EXPLORE SITE •{' '}
                    </textPath>
                  </text>
                </svg>
                <div className="pvb-stamp-core" style={{ background: company.sectorColor }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>

            {/* INFINITE MARQUEE STATS */}
            <div className="hatke-marquee-section">
              <div className="hatke-marquee-track">
                <div className="hatke-marquee-content">
                  {company.stats.map((stat, i) => (
                    <div key={i} className="hatke-stat-item">
                      <strong>{stat.n}</strong><span>{stat.l}</span>
                      <div className="stat-separator" style={{ backgroundColor: company.sectorColor }} />
                    </div>
                  ))}
                  {company.stats.map((stat, i) => (
                    <div key={`dup-${i}`} className="hatke-stat-item">
                      <strong>{stat.n}</strong><span>{stat.l}</span>
                      <div className="stat-separator" style={{ backgroundColor: company.sectorColor }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTERACTIVE FLEX ACCORDION */}
            <div className="hatke-section">
              <h2 className="hatke-section-title">Challenge & Solution</h2>
              <div className="hatke-flex-accordion">
                <FlexAccordionCard
                  title="The Challenge"
                  content={company.problem}
                  icon={<TrendingUp size={28} />}
                  color="#d93025"
                  isActive={activeFlexCard === 1}
                  onHover={() => setActiveFlexCard(1)}
                />
                <FlexAccordionCard
                  title="The Solution"
                  content={company.solution}
                  icon={<Target size={28} />}
                  color={company.sectorColor}
                  isActive={activeFlexCard === 2}
                  onHover={() => setActiveFlexCard(2)}
                />
              </div>
            </div>

            {/* EDITORIAL QUOTE */}
            <div className="hatke-section">
              <motion.div
                className="hatke-quote-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Quote className="hatke-quote-icon" style={{ color: company.sectorColor }} size={56} />
                <blockquote>"{company.quote}"</blockquote>
                <figcaption>
                  <div className="fig-line" style={{ backgroundColor: company.sectorColor }} />
                  <span>{company.quoteAttr}</span>
                </figcaption>
              </motion.div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="hatke-section" style={{ marginBottom: 0 }}>
              <h2 className="hatke-section-title">Why it matters</h2>
              <ul className="hatke-modern-list">
                {company.highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ paddingLeft: "20px", color: company.sectorColor }}
                  >
                    <ArrowRight size={20} className="list-arrow" />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── RELATED ECOSYSTEM ── */}
      {relatedCompanies.length > 0 && (
        <section className="pcp-related-hatke">
          <div className="related-inner">
            <h2 className="hatke-section-title">Ecosystem</h2>
            <div className="related-grid">
              {relatedCompanies.map((item) => (
                <Link to={`/portfolio/${item.id}`} key={item.id} className="related-card">
                  <div className="rc-logo" style={{ background: item.logoBg }}>
                    <img src={item.logo} alt={item.name} />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.sector}</p>
                  </div>
                  <div className="rc-arrow"><ArrowUpRight size={20} /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
