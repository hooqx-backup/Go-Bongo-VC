import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './CultureValues.css';

const VALUES = [
  {
    num: '01',
    icon: '💡',
    name: 'Conviction',
    desc: "We back ideas that most people dismiss early. We're not contrarian for its own sake — but we invest before consensus, because consensus-following doesn't create outlier returns.",
  },
  {
    num: '02',
    icon: '⚡',
    name: 'Velocity',
    desc: "We move fast. We make decisions in days, not months. We don't drag founders through 12-round processes. Speed is a feature, not a nice-to-have.",
  },
  {
    num: '03',
    icon: '🤲',
    name: 'Ownership',
    desc: "We operate like founders, not financiers. When a portfolio company has a problem, it's our problem too. We don't attend board meetings — we show up and build.",
  },
  {
    num: '04',
    icon: '🌱',
    name: 'Impact',
    desc: 'We measure success beyond returns. Jobs created, markets served, infrastructure built. The companies we back should make the regions they operate in meaningfully better.',
  },
];

const CP_STATS = [
  { num: '3+',   label: 'Years of operator-led investing' },
  { num: '0',    label: "Portfolio companies we've walked away from" },
  { num: '100%', label: 'Founder satisfaction rate across portfolio' },
  { num: '∞',    label: 'Our time horizon for the right founder' },
];

export default function CultureValues() {
  return (
    <div className="culture-outer">
      <div className="culture-sec">
        <RevealWrapper className="culture-header">
          <SectionTag color="gold">Culture &amp; Values</SectionTag>
          <h2 className="culture-h">
            The Principles That<br />Drive <em>Everything</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper className="values-grid" delay={0.1}>
          {VALUES.map((v) => (
            <div key={v.num} className="val-card">
              <div className="val-card__num">{v.num}</div>
              <div className="val-card__icon">{v.icon}</div>
              <div className="val-card__name">{v.name}</div>
              <p className="val-card__desc">{v.desc}</p>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper className="culture-pull" delay={0.2}>
          <blockquote className="cp-quote">
            "We don't interview founders — we have conversations with them. The best
            investments we've made started with a shared obsession about what a market{' '}
            <em>could</em> become."
          </blockquote>
          <div className="cp-stats">
            {CP_STATS.map((s) => (
              <div key={s.label}>
                <div className="cp-stat-n">{s.num}</div>
                <div className="cp-stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}
