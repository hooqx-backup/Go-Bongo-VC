import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuArrowUpRight, LuGlobe, LuMapPin, LuUsers } from 'react-icons/lu';
import { COMPANIES } from './data/companies';
import SectionTag from '../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../common/components/RevealWrapper/RevealWrapper';
import './PortfolioCompanyPage.css';

const _MOTION = motion;

export default function PortfolioCompanyPage() {
  const { id } = useParams();
  const company = COMPANIES.find((item) => item.id === id);

  if (!company) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedCompanies = COMPANIES
    .filter((item) => item.id !== company.id && item.sectorLower === company.sectorLower)
    .slice(0, 3);

  return (
    <>
      <section className="pcp-hero" style={{ '--pcp-hero-bg': company.heroBg }}>
        <div className="pcp-hero__mesh" />
        <div className="pcp-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/portfolio" className="pcp-back">
              <LuArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <div className="pcp-topline">
              <span className="pcp-sector" style={{ color: company.sectorColor, background: company.sectorBg }}>
                {company.sector}
              </span>
              <span className="pcp-country">{company.country}</span>
            </div>

            <div className="pcp-brand">
              <div className="pcp-logo" style={{ background: company.logoBg }}>
                <img src={company.logo} alt={company.name} />
              </div>
              <div>
                <h1 className="pcp-title">{company.name}</h1>
                <p className="pcp-tagline">{company.tagline}</p>
              </div>
            </div>

            <div className="pcp-statbar">
              {company.stats.map((stat) => (
                <div key={`${company.id}-${stat.l}`} className="pcp-statbar__cell">
                  <strong>{stat.n}</strong>
                  <span>{stat.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pcp-body">
        <div className="pcp-inner">
          <div className="pcp-content-grid">
            <RevealWrapper className="pcp-main">
              <SectionTag>Company Brief</SectionTag>

              <h2>About</h2>
              <p>{company.about}</p>

              <h3>Problem</h3>
              <p>{company.problem}</p>

              <h3>Solution</h3>
              <p>{company.solution}</p>

              <h3>Key Highlights</h3>
              <ul className="pcp-list">
                {company.highlights.map((item, idx) => (
                  <li key={`${company.id}-hl-${idx}`}>{item.text}</li>
                ))}
              </ul>

              <blockquote className="pcp-quote">
                <p>{company.quote}</p>
                <footer>{company.quoteAttr}</footer>
              </blockquote>
            </RevealWrapper>

            <RevealWrapper className="pcp-aside" delay={0.1}>
              <div className="pcp-card">
                <h4>Company Snapshot</h4>
                <div className="pcp-kv">
                  <div>
                    <span>Stage</span>
                    <strong>{company.details.stage}</strong>
                  </div>
                  <div>
                    <span>Founded</span>
                    <strong>{company.founded}</strong>
                  </div>
                  <div>
                    <span>Headquarters</span>
                    <strong>{company.details.hq}</strong>
                  </div>
                  <div>
                    <span>Team Size</span>
                    <strong>{company.details.employees}</strong>
                  </div>
                </div>
              </div>

              <div className="pcp-card">
                <h4>Focus Tags</h4>
                <div className="pcp-tags">
                  {company.tags.map((tag) => (
                    <span key={`${company.id}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="pcp-card pcp-card--cta">
                <h4>Explore Website</h4>
                <a href={`https://${company.details.website}`} target="_blank" rel="noreferrer" className="pcp-site-link">
                  {company.details.website}
                  <LuArrowUpRight size={14} />
                </a>
                <div className="pcp-meta-list">
                  <div><LuMapPin size={15} /> <span>{company.details.hq}</span></div>
                  <div><LuUsers size={15} /> <span>{company.details.employees}</span></div>
                  <div><LuGlobe size={15} /> <span>{company.country}</span></div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {relatedCompanies.length > 0 && (
        <section className="pcp-related">
          <div className="pcp-inner">
            <RevealWrapper>
              <SectionTag color="gold">Related Companies</SectionTag>
              <h2 className="pcp-related__title">More in {company.sector}</h2>
            </RevealWrapper>

            <div className="pcp-related__grid">
              {relatedCompanies.map((item, idx) => (
                <motion.article
                  key={item.id}
                  className="pcp-related-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link to={`/portfolio/${item.id}`} className="pcp-related-card__link">
                    <div className="pcp-related-card__logo" style={{ background: item.logoBg }}>
                      <img src={item.logo} alt={item.name} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.tagline}</p>
                    <span className="pcp-related-card__cta">
                      View Profile
                      <LuArrowUpRight size={13} />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
