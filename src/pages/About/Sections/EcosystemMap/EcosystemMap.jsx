import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './EcosystemMap.css';

const VENTURES = [
  { num: '01', logo: '/logos/scoodalogo.png',      name: 'Thescooda',     sector: 'E-Commerce',        geo: 'Global' },
  { num: '02', logo: '/logos/tezzlogo.png',         name: 'Tezz Logistics', sector: 'Logistics',         geo: 'India' },
  { num: '03', logo: '/logos/hooqxlogo.png',        name: 'Hooqx LLC',     sector: 'IT & Digital',      geo: 'USA' },
  { num: '04', logo: '/logos/bongologo.png',        name: 'GoBongo Shop',  sector: 'D2C Retail',        geo: 'Global' },
  { num: '05', logo: '/logos/tradeflinklogo.png',   name: 'Tradeflink',    sector: 'B2B Trade',         geo: 'ME & Asia' },
  { num: '06', logo: '/logos/calltawklogo.png',     name: 'CallTawk',      sector: 'Comms Tech',        geo: 'Global' },
  { num: '07', logo: '/logos/gmilogo.png',          name: 'GMI Trading',   sector: 'Commodity Trading', geo: 'Dubai, UAE' },
  { num: '08', logo: '/logos/stratigi360logo.png',  name: 'Stratigi 360',  sector: 'Strategy',          geo: 'Global' },
];

export default function EcosystemMap() {
  return (
    <div className="eco-outer">
      <div className="eco-sec">
        {/* ── Header ── */}
        <RevealWrapper className="eco-header">
          <div>
            <SectionTag>Our Ecosystem</SectionTag>
            <h2 className="eco-h">
              One Group. Eight Ventures.<br /><em>Infinite Synergies.</em>
            </h2>
          </div>
          <p className="eco-sub">
            GoBongo VC is the parent brand. Each venture below operates independently
            while benefiting from shared infrastructure, cross-portfolio relationships,
            and collective institutional knowledge. It's not a portfolio — it's an ecosystem.
          </p>
        </RevealWrapper>

        {/* ── Grid ── */}
        <RevealWrapper className="eco-grid" delay={0.15}>
          {/* Parent row */}
          <div className="eco-parent">
            <div className="eco-parent__left">
              <img src="/logos/gobongoventureslogo.png" alt="GoBongo VC" className="eco-parent__logo" />
              <div>
                <div className="eco-parent__name">GoBongo VC</div>
                <div className="eco-parent__sub">Parent Holding Company · Dubai, UAE · Est. 2022</div>
              </div>
            </div>
            <div className="eco-parent__badge">8 Active Ventures · 7 Countries</div>
          </div>

          {/* Child cells */}
          {VENTURES.map((v) => (
            <div key={v.num} className="eco-child">
              <div className="eco-child__num">{v.num}</div>
              <div className="eco-child__logo-wrap">
                <img src={v.logo} alt={v.name} className="eco-child__logo" />
              </div>
              <div className="eco-child__name">{v.name}</div>
              <div className="eco-child__sector">{v.sector}</div>
              <div className="eco-child__geo">
                <span className="eco-child__dot" />
                {v.geo}
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
