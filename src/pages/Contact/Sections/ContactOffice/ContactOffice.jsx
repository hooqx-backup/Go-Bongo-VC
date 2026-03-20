import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactOffice.css';

const OFFICES = [
  {
    flag: '🇦🇪',
    type: 'Global Headquarters',
    city: 'Dubai',
    country: 'United Arab Emirates',
    detail: ['DIFC presence · Free Zone entity', 'Primary operations & decisions'],
    badge: 'HQ · Est. 2022',
  },
  {
    flag: '🇮🇳',
    type: 'Regional Office',
    city: 'India',
    country: 'South Asia Operations',
    detail: ['Tezz Logistics HQ', 'South Asia investment coverage'],
    badge: null,
  },
  {
    flag: '🇺🇸',
    type: 'Portfolio Office',
    city: 'USA',
    country: 'North America',
    detail: ['Hooqx LLC entity', 'Digital services partnerships'],
    badge: null,
  },
  {
    flag: '🌐',
    type: 'Expanding Presence',
    city: '+4 More',
    country: 'BD · CA · UK · DE',
    detail: ['Portfolio operations & access'],
    badge: null,
  },
];

export default function ContactOffice() {
  return (
    <div className="co-outer">
      <div className="co-sec">
        <RevealWrapper style={{ maxWidth: 600 }}>
          <SectionTag color="gold">Where We Are</SectionTag>
          <h2 className="co-heading">
            Our Presence<br />Across <em>4 Markets</em>
          </h2>
        </RevealWrapper>

        <div className="co-grid">
          {OFFICES.map((o, i) => (
            <RevealWrapper key={o.city} delay={i * 0.1}>
              <div className="co-card">
                <div className="co-card__flag">{o.flag}</div>
                <div className="co-card__type">{o.type}</div>
                <div className="co-card__city">{o.city}</div>
                <div className="co-card__country">{o.country}</div>
                <div className="co-card__detail">
                  {o.detail.map((line, j) => (
                    <span key={j}>{line}{j < o.detail.length - 1 && <br />}</span>
                  ))}
                </div>
                {o.badge && <div className="co-card__badge">{o.badge}</div>}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
