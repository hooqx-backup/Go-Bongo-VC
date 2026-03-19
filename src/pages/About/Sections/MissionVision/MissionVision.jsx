import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './MissionVision.css';

const CARDS = [
  {
    type: 'mission',
    tag: 'Our Mission',
    quote: '"To identify, fund, and build market-leading companies across essential industries — where operational excellence creates compounding, durable competitive advantages."',
    desc: 'We look for industries where the rules are being rewritten by digital transformation, where the old way of doing things is visibly broken, and where a founder with conviction and the right backing can build something that lasts.',
  },
  {
    type: 'vision',
    tag: 'Our Vision',
    quote: '"A portfolio of 25+ thriving companies across 15 countries — each one a market leader in its category — built together, not just funded separately."',
    desc: 'By 2030, we intend to be the most operationally impactful venture group to emerge from the Middle East — known not just for the capital we deploy, but for the companies we help build from the inside.',
  },
];

export default function MissionVision() {
  return (
    <div className="mv-outer">
      <div className="mv-sec">
        <RevealWrapper className="mv-header">
          <SectionTag color="gold">Mission &amp; Vision</SectionTag>
          <h2 className="mv-h">
            The Philosophy<br />Behind <em>Everything</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper className="mv-grid" delay={0.15}>
          {CARDS.map((card) => (
            <div key={card.type} className={`mv-card mv-card--${card.type}`}>
              <div className="mv-card__tag">{card.tag}</div>
              <p className="mv-card__quote">{card.quote}</p>
              <p className="mv-card__desc">{card.desc}</p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
