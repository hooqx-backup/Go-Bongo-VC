import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './Achievements.css';

const ACHIEVEMENTS = [
  {
    dark: true,
    icon: '🏢',
    num: '8',
    title: 'Active Portfolio Ventures',
    desc: 'Spanning e-commerce, logistics, tech, trade, communications, and strategic consulting.',
  },
  {
    dark: false,
    icon: '🌍',
    num: '7',
    title: 'Countries of Operation',
    desc: 'UAE, India, Bangladesh, USA, Canada, UK, and Germany — growing to 15 by 2030.',
  },
  {
    dark: false,
    icon: '👥',
    num: '200+',
    title: 'Team Members Across Group',
    desc: 'Full-time talent employed across all portfolio companies in operations, tech, and commercial roles.',
  },
  {
    dark: true,
    icon: '🏅',
    num: '#1',
    title: 'Ranked UAE Startup Group',
    desc: "Recognised by regional media and industry bodies as one of the UAE's top emerging holding groups in 2024.",
  },
  {
    dark: false,
    icon: '📊',
    num: '6',
    title: 'Industry Sectors Covered',
    desc: 'Deliberately diversified across essential, resilient industries where digital transformation is still in early innings.',
  },
  {
    dark: false,
    icon: '🏦',
    num: 'DIFC',
    title: 'Dubai International Financial Centre',
    desc: 'Full DIFC presence established — giving the group and its portfolio access to world-class financial infrastructure.',
  },
];

export default function Achievements() {
  return (
    <div className="ach-outer">
      <div className="ach-sec">
        <RevealWrapper className="ach-header">
          <SectionTag>Milestones</SectionTag>
          <h2 className="ach-h">
            Every Number is a <em>Chapter</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper className="ach-grid" delay={0.15}>
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className={`ach-card${a.dark ? ' ach-card--dark' : ''}`}>
              <div className="ach-card__icon">{a.icon}</div>
              <div className="ach-card__num">{a.num}</div>
              <div className="ach-card__title">{a.title}</div>
              <p className="ach-card__desc">{a.desc}</p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
