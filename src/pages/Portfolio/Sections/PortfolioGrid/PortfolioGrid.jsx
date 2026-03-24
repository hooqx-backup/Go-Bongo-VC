import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import { COMPANIES, SECTOR_FILTERS } from '../../data/companies';
import './PortfolioGrid.css';

const _MOTION = motion;

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleCompanies = useMemo(() => {
    const source = activeFilter === 'all'
      ? COMPANIES
      : COMPANIES.filter((company) => company.sectorLower === activeFilter);

    return [...source].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [activeFilter]);

  return (
    <section className="pgrid-root" id="portfolio-grid">
      {/* Background star field implemented in CSS to maintain light theme */}
      <div className="pgrid-bg-stars" />
      
      <div className="pgrid-inner">
        <div className="pgrid-head">
          <RevealWrapper>
            <div>
              <SectionTag color="gold">Portfolio Companies</SectionTag>
              <h2 className="pgrid-title">Built Across Sectors, Scaled Across Markets</h2>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <p className="pgrid-sub">
              Explore every venture in the GoBongo VC ecosystem. Filter by sector to
              see where we are concentrated and how each company complements the group.
            </p>
          </RevealWrapper>
        </div>

        <div className="pgrid-filters" role="tablist" aria-label="Filter companies by sector">
          {SECTOR_FILTERS.map((filter) => (
            <button
              key={filter.key}
              className={`pgrid-filter ${activeFilter === filter.key ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              type="button"
            >
              <span>{filter.label}</span>
              <em>{filter.count}</em>
            </button>
          ))}
        </div>

        <motion.div layout className="pgrid-grid">
          <AnimatePresence mode="popLayout">
            {visibleCompanies.map((company, index) => (
              <motion.div
                layout
                key={company.id}
                className={`pgrid-card-wrapper ${company.featured ? 'pgrid-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.03 }} /* Professional Scale & Lift only */
              >
                <Link to={`/portfolio/${company.id}`} className="pgrid-card">
                  {/* --- VISUAL HALF: Light Mode Galactic Explorer --- */}
                  <div className="pgrid-visual" style={{ '--pgrid-visual-bg': company.heroBg }}>
                    {/* Faint blueprint mesh grid */}
                    <div className="pgrid-visual__mesh" />
                    
                    {/* Tiny Blinking/Twinkling Planets in Background */}
                    <div className="pgrid-visual__cosmic-field" aria-hidden="true">
                      <span className="pgrid-tiny-planet pgrid-tiny-planet--1" />
                      <span className="pgrid-tiny-planet pgrid-tiny-planet--2" />
                      <span className="pgrid-tiny-planet pgrid-tiny-planet--3" />
                      <span className="pgrid-tiny-planet pgrid-tiny-planet--4" />
                    </div>

                    {/* Nebula glows matching sector colors */}
                    <div className="pgrid-visual__nebula pgrid-visual__nebula--1" />
                    <div className="pgrid-visual__nebula pgrid-visual__nebula--2" />
                    
                    {/* Colored falling asteroids comets */}
                    <div className="pgrid-asteroids" aria-hidden="true">
                       <span className="pgrid-asteroid pgrid-asteroid--1" />
                       <span className="pgrid-asteroid pgrid-asteroid--2" />
                       <span className="pgrid-asteroid pgrid-asteroid--3" />
                       <span className="pgrid-asteroid pgrid-asteroid--4" />
                    </div>

                    {/* THE SATURN LOGO PLANET CONTAINER (Centered) */}
                    <div className="pgrid-logo-container">
                      {/* Asli slanted Saturn rings that go behind logo planet */}
                      <div className="pgrid-saturn-rings" aria-hidden="true">
                        <span className="pgrid-saturn-ring-slanted" />
                      </div>
                      
                      {/* FIXED CIRCULAR ORBIT with satellite moon gumna infinitely */}
                      <div className="pgrid-orbit" aria-hidden="true">
                        <motion.span 
                          className="pgrid-orbit-moon"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>

                      {/* Logo holds central planet core */}
                      <div className="pgrid-logo-inner">
                        <img src={company.logo} alt={company.name} />
                      </div>
                    </div>

                    {/* Tags */}
                    {company.featured && <span className="pgrid-featured">Featured</span>}
                    <span className="pgrid-country">{company.country}</span>
                    <span className="pgrid-open">Open <LuArrowUpRight size={14} /></span>
                    
                    {/* Hover shine sweep */}
                    <motion.div className="pgrid-shine" aria-hidden="true" />
                  </div>

                  {/* DATA HALF */}
                  <div className="pgrid-card__body">
                    <div className="pgrid-card__topline">
                      <span className="pgrid-sector" style={{ color: company.sectorColor, background: company.sectorBg }}>
                        {company.sector}
                      </span>
                      <span className="pgrid-founded">Founded {company.founded}</span>
                    </div>

                    <h3 className="pgrid-name">{company.name}</h3>
                    <p className="pgrid-tagline">{company.tagline}</p>

                    <div className="pgrid-mini-stats">
                      {company.miniStats.map((item) => (
                        <div key={`${company.id}-${item.l}`} className="pgrid-mini-stats__cell">
                          <strong>{item.n}</strong>
                          <span>{item.l}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pgrid-meta">
                      <span>{company.details.stage}</span>
                      <span>{company.details.hq}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}