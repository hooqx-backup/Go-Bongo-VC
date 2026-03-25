import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuArrowUpRight, LuX } from 'react-icons/lu';

const MotionLink = motion(Link);
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import { COMPANIES, SECTOR_FILTERS } from '../../data/companies';
import './PortfolioGrid.css';

// --- FRAMER MOTION VARIANTS FOR DARK MODAL ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const expandLine = {
  hidden: { width: 0, opacity: 0 },
  show: { width: "100%", opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(null);

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

  const selectedCompany = useMemo(() => 
    COMPANIES.find(c => c.id === selectedId), 
  [selectedId]);

  return (
    <section className="pgrid-root" id="portfolio-grid">
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

        <div className="pgrid-filters" role="tablist">
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
            {!selectedId && visibleCompanies.map((company) => (
              <motion.div
                layoutId={`pgrid-card-${company.id}`}
                key={company.id}
                className={`pgrid-card-wrapper ${company.featured ? 'pgrid-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ 
                  opacity: 0, y: -1000, scale: 0.8, filter: "blur(10px)",
                  transition: { duration: 0.4, ease: "easeIn" } 
                }}
              >
                {/* 3D BOOK CONTAINER */}
                <div onClick={() => setSelectedId(company.id)} className="pgrid-book">
                  
                  {/* --- INSIDE THE BOOK (White Data Section) --- */}
                  <div className="pgrid-book-inside">
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
                          <strong>{item.n}</strong><span>{item.l}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pgrid-meta">
                      <span>{company.details.stage}</span><span>{company.details.hq}</span>
                    </div>
                  </div>

                  {/* --- THE BOOK COVER --- */}
                  <div className="pgrid-book-cover" style={{ '--sector-color': company.sectorColor }}>
                    <div className="pgrid-cover-front">
                      <div className="pgrid-cover-pattern"></div>
                      <div className="pgrid-metal-corner pgrid-metal-corner-top"></div>
                      <div className="pgrid-metal-corner pgrid-metal-corner-bottom"></div>
                      
                      <div className="pgrid-logo-container">
                        <div className="pgrid-saturn-rings"><span className="pgrid-saturn-ring-slanted" /></div>
                        <div className="pgrid-orbit"><motion.span className="pgrid-orbit-moon" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} /></div>
                        <div className="pgrid-logo-inner">
                          <img src={company.logo} alt={company.name} />
                        </div>
                      </div>

                      <h3 className="pgrid-cover-title">{company.name}</h3>
                      <span className="pgrid-open">Open <LuArrowUpRight size={14} /></span>
                      <div className="pgrid-foil-glint"></div>
                    </div>
                    
                    {/* --- THE BACK OF THE COVER --- */}
                    <div className="pgrid-cover-back">
                      <div className="pgrid-cover-back-content">
                        <img src={company.logo} alt="watermark" className="pgrid-back-watermark" />
                        <div className="pgrid-back-divider"></div>
                        <span className="pgrid-back-dossier">VENTURE PROFILE</span>
                        <span className="pgrid-back-confidential">KEY INSIGHTS & METRICS</span>
                      </div>
                      <div className="pgrid-back-glow" style={{ background: company.sectorColor }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- REPLACED: EXPANDED DARK DOSSIER MODAL --- */}
      <AnimatePresence>
        {selectedId && selectedCompany && (
          <motion.div 
            className="pgrid-dossier-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          >
            <motion.div 
              layoutId={`pgrid-card-${selectedCompany.id}`} 
              className="pgrid-dossier-modal"
            >
              {/* FLOATING BUBBLES */}
              <div className="floating-bubble bubble-1" />
              <div className="floating-bubble bubble-2" />
              <div className="floating-bubble bubble-3" />
              <div className="floating-bubble bubble-4" />
              
              {/* GEOMETRIC ACCENT SHAPES */}
              <div className="geo-accent geo-circle-1" />
              <div className="geo-accent geo-circle-2" />
              
              {/* BACKGROUND ANIMATIONS */}
              <div className="dossier-ambient-glow" style={{ background: selectedCompany.sectorColor }} />
              <img src={selectedCompany.logo} alt="Watermark" className="dossier-watermark-bg" />
              <div className="dossier-grid-overlay" />

              <button className="dossier-close-btn" onClick={() => setSelectedId(null)}>
                <LuX size={22} />
              </button>

              {/* LEFT PANEL: Floating Logo */}
              <div className="dossier-left">
                <motion.div className="dossier-logo-rings" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                </motion.div>
                
                <motion.div className="dossier-logo-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
                  <img src={selectedCompany.logo} alt={selectedCompany.name} />
                </motion.div>
              </div>

              {/* RIGHT PANEL: Staggered Content */}
              <motion.div className="dossier-right" variants={staggerContainer} initial="hidden" animate="show">
                
                <motion.div variants={slideUp} className="dossier-header-labels">
                  <span className="d-label-primary">VENTURE PROFILE</span>
                  <span className="d-label-secondary">STRICTLY CONFIDENTIAL</span>
                </motion.div>

                <motion.div variants={expandLine} className="dossier-divider" />

                <motion.h2 variants={slideUp} className="dossier-title">{selectedCompany.name}</motion.h2>
                <motion.p variants={slideUp} className="dossier-desc">{selectedCompany.tagline}</motion.p>

                <motion.div variants={slideUp} className="dossier-stats-container">
                  {selectedCompany.miniStats.map((stat, i) => (
                    <div key={i} className="d-stat-box">
                      <strong>{stat.n}</strong>
                      <span>{stat.l}</span>
                    </div>
                  ))}
                  <div className="d-stat-shine" />
                </motion.div>

                <motion.div variants={slideUp} className="dossier-meta">
                  <p><span>STAGE</span> {selectedCompany.details.stage}</p>
                  <p><span>HQ</span> {selectedCompany.details.hq}</p>
                  <p><span>REGION</span> {selectedCompany.country}</p>
                  <p><span>FOUNDED</span> {selectedCompany.founded}</p>
                </motion.div>

                <motion.div variants={expandLine} className="dossier-divider" style={{ opacity: 0.3, marginTop: 'auto' }} />

                <MotionLink
                  to={`/portfolio/${selectedCompany.id}`}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                  variants={slideUp}
                  className="dossier-action-btn"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Portfolio</span>
                  <LuArrowUpRight className="btn-arrow" />
                </MotionLink>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}