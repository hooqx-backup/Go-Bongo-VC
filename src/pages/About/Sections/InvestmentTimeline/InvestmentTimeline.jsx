import { motion } from 'framer-motion';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './InvestmentTimeline.css';

const TIMELINE = [
  {
    color: 'blue',
    year: '2017 — The Foundation',
    title: 'GoBongo Venture is incorporated in Delaware, USA',
    milestones: [
      'Founding partners bring together 30+ combined years of operator experience',
      'Investment thesis defined: essential industries undergoing digital transformation',
      'First three portfolio companies onboarded: Thescooda, Tezz Logistics, GoBongo Shop',
      'Dubai office established DIFC presence secured as regional operating hub',
    ],
  },
  {
    color: 'teal',
    year: '2023 — Expansion',
    title: 'Geographic reach doubles. Portfolio diversifies.',
    milestones: [
      'Hooqx LLC launched from the USA, digital services arm established',
      'Tradeflink onboarded, B2B trade infrastructure across Middle East and Asia',
      'Cross-portfolio synergies begin generating value: Tezz routing GoBongo Shop deliveries',
      'Group presence expands to India, Bangladesh, and North America',
    ],
  },
  {
    color: 'gold',
    year: '2024-Scale',
    title: 'Communications and trading capabilities added. Team grows.',
    milestones: [
      'CallTawk launched, next-generation communications technology platform',
      'GMI Trading established in Dubai, commodity and asset trading arm',
      'Group team reaches 200+ across all portfolio companies',
      'GoBongo Venture recognised as a Top 10 UAE Startup Group by regional media',
    ],
  },
  {
    color: 'coral',
    year: '2025 — Deepening',
    title: 'Strategic advisory capability added. European reach established.',
    milestones: [
      'Stratigi 360 launched, strategy and growth consulting covering global markets',
      'Group reach extends to UK and Germany, 7-country presence achieved',
      'Inter-portfolio revenue sharing formalised, ecosystem model proven',
      'Investment thesis refined: focus on operational embedding deepens',
    ],
  },
  {
    color: 'green',
    year: '2026 — Forward',
    title: 'Next phase: Series A investments, 2 new verticals, 3 new markets.',
    milestones: [
      'Expanding investment remit to include Series A rounds in portfolio companies',
      'Two new industry verticals under evaluation, fintech and healthtech',
      'Target markets: Southeast Asia, West Africa, and Latin America',
      'Vision 2030: 25+ ventures, 15 countries, one ecosystem',
    ],
  },
];

export default function InvestmentTimeline() {
  return (
    <div className="tl-outer">
      <div className="tl-sec">
        <RevealWrapper className="tl-header">
          <SectionTag color="gold">Investment Journey</SectionTag>
          <h2 className="tl-h">
            From Conviction to <em>Portfolio</em>
          </h2>
        </RevealWrapper>

        <div className="tl-wrap">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              className="tl-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className={`tl-dot tl-dot--${item.color}`} />
              <div className="tl-card">
                <div className={`tl-year tl-year--${item.color}`}>{item.year}</div>
                <div className="tl-title">{item.title}</div>
                <ul className="tl-milestones">
                  {item.milestones.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
