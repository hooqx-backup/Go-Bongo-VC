import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './LeadershipTeam.css';

const TEAM = [
  {
    name: 'Partner, Portfolio Operations',
    role: 'GoBongo VC',
    bio: 'Former COO of two venture-backed logistics companies. Leads operational support for all portfolio companies — ensuring systems, processes, and talent are in place for each venture to scale. Deep expertise in supply chain and last-mile logistics.',
  },
  {
    name: 'Partner, Investments',
    role: 'GoBongo VC',
    bio: '15 years in cross-border trade finance and B2B market development across the Middle East and Asia. Leads deal origination, investment evaluation, and term sheet structuring. Has closed transactions in 9 countries.',
  },
  {
    name: 'Head of Portfolio Growth',
    role: 'GoBongo VC',
    bio: 'Growth strategist with a background in consumer tech and marketplace businesses. Works across portfolio companies on GTM strategy, digital marketing, and revenue acceleration. Previously led growth at two Series B startups.',
  },
];

export default function LeadershipTeam() {
  return (
    <div className="team-outer" id="team">
      <div className="team-sec">
        <RevealWrapper className="team-header">
          <SectionTag>Leadership Team</SectionTag>
          <h2 className="team-h">
            The People Who<br /><em>Built</em> Before They Invested
          </h2>
        </RevealWrapper>

        <RevealWrapper className="team-grid" delay={0.1}>
          {/* Featured founder card */}
          <div className="tm-card tm-card--featured">
            <div className="tm-photo tm-photo--large">🤝</div>
            <div className="tm-feat-body">
              <div className="tm-name">Founder &amp; Managing Partner</div>
              <div className="tm-role">GoBongo VC</div>
              <p className="tm-feat-bio">
                Serial entrepreneur with two successful exits across logistics and e-commerce.
                Founded GoBongo VC in 2022 after a decade of building companies in South Asia,
                the Gulf, and Europe. Known for operator-first thinking and a conviction that
                the best companies are built, not funded, into existence. Has personally
                overseen the growth of all 8 portfolio ventures.
              </p>
              <a href="#" className="tm-li">LinkedIn Profile →</a>
            </div>
            <div className="tm-badge-wrap">
              <span className="tm-badge">2 Exits</span>
              <span className="tm-badge">10+ Years</span>
              <span className="tm-badge">3 Continents</span>
            </div>
          </div>

          {/* Standard cards */}
          {TEAM.map((member) => (
            <div key={member.name} className="tm-card">
              <div className="tm-photo">🤝</div>
              <div className="tm-name">{member.name}</div>
              <div className="tm-role">{member.role}</div>
              <p className="tm-bio">{member.bio}</p>
              <a href="#" className="tm-li">LinkedIn →</a>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
