import { motion } from 'framer-motion';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './BlogTopics.css';

const TOPICS = [
  { label: 'E-Commerce',       count: 4 },
  { label: 'Logistics',        count: 3 },
  { label: 'MENA Markets',     count: 5 },
  { label: 'Fundraising',      count: 2 },
  { label: 'Dubai Ecosystem',  count: 3 },
  { label: 'B2B Tech',         count: 4 },
  { label: 'Portfolio',        count: 6 },
];

export default function BlogTopics() {
  return (
    <section className="bt-outer">
      <div className="bt-inner">

        <RevealWrapper>
          <SectionTag color="gold">Browse by Topic</SectionTag>
          <h3 className="bt-heading">Explore <em>Areas</em></h3>
        </RevealWrapper>

        <div className="bt-pills">
          {TOPICS.map((topic, i) => (
            <motion.button
              key={topic.label}
              className="bt-pill"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -2 }}
            >
              {topic.label}
              <span className="bt-pill__count">{topic.count}</span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
