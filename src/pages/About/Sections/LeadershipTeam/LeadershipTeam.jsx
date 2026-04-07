import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, BarChart3, Linkedin } from 'lucide-react';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './LeadershipTeam.css';

const TEAM = [
  {
    name: 'Partner, Portfolio Operations',
    role: 'GoBongo Venture',
    icon: <Zap size={24} strokeWidth={1.5} />,
    bio: 'Former COO of two venture-backed logistics companies. Leads operational support for all portfolio companies — ensuring systems, processes, and talent are in place.',
  },
  {
    name: 'Partner, Investments',
    role: 'GoBongo Venture',
    icon: <Globe size={24} strokeWidth={1.5} />,
    bio: '15 years in cross-border trade finance and B2B market development across the Middle East and Asia. Leads deal origination and investment evaluation.',
  },
  {
    name: 'Head of Portfolio Growth',
    role: 'GoBongo Venture',
    icon: <BarChart3 size={24} strokeWidth={1.5} />,
    bio: 'Growth strategist with a background in consumer tech and marketplace businesses. Works on GTM strategy, digital marketing, and revenue acceleration.',
  },
];

export default function LeadershipTeam() {
  return (
    <div className="team-outer" id="team">
      <div className="team-sec">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTag>Leadership Team</SectionTag>
          <h2 className="team-h">
            The People Who<br /><em>Built</em> Before They Invested
          </h2>
        </motion.div>

        <motion.div 
          className="team-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {/* Featured Founder Card */}
          <motion.div 
            className="tm-card tm-card--featured"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ y: -5 }}
          >
            <div className="tm-stellar-wrap">
              <div className="tm-photo tm-photo--large">
                <ShieldCheck size={40} color="var(--brand-blue)" strokeWidth={1.2} />
              </div>
              <div className="tm-stellar-orbit" />
            </div>

            <div className="tm-feat-body">
              <div className="tm-name">Founder & Managing Partner</div>
              <div className="tm-role">GoBongo Venture</div>
              <p className="tm-feat-bio">
                Serial entrepreneur with two successful exits across logistics and e-commerce. 
                Known for operator-first thinking and a conviction that the best companies are 
                built, not funded, into existence.
              </p>
              <a href="#" className="tm-li"><Linkedin size={14} /> Profile</a>
            </div>

            <div className="tm-badge-stack">
              {['2 Exits', '10+ Years', '3 Continents'].map((badge, idx) => (
                <motion.span 
                  key={badge}
                  className="tm-badge"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Standard cards */}
          {TEAM.map((member) => (
            <motion.div 
              key={member.name} 
              className="tm-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="tm-photo-mini">
                {member.icon}
              </div>
              <div className="tm-name">{member.name}</div>
              <div className="tm-role">{member.role}</div>
              <p className="tm-bio">{member.bio}</p>
              <a href="#" className="tm-li"><Linkedin size={14} /> LinkedIn</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}