import { motion } from 'framer-motion';
import './PortfolioMarquee.css';
import { COMPANIES } from '../../data/companies';

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: Math.min(index * 0.04, 0.6),
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PortfolioMarquee() {
  const doubled = [...COMPANIES, ...COMPANIES];

  return (
    <motion.div className="pmarq-root" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="pmarq-track">
        {doubled.map((c, i) => (
          <motion.div
            key={i}
            className="pmarq-item"
            custom={i % COMPANIES.length}
            initial="hidden"
            whileInView="visible"
            variants={ITEM_VARIANTS}
            viewport={{ once: true }}
          >
            <img src={c.logo} alt={c.name} className="pmarq-item__logo" />
            <span>{c.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
