import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PortfolioCTA.css';

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function PortfolioCTA() {
  return (
    <section className="pcta-root">
      <motion.div
        className="pcta-inner"
        initial="hidden"
        whileInView="visible"
        variants={CONTAINER_VARIANTS}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div custom={0} initial="hidden" whileInView="visible" variants={CHILD_VARIANTS} viewport={{ once: true }}>
          <RevealWrapper>
            <SectionTag color="gold">Ready to Build?</SectionTag>
          </RevealWrapper>
        </motion.div>
        <motion.div custom={1} initial="hidden" whileInView="visible" variants={CHILD_VARIANTS} viewport={{ once: true }}>
          <RevealWrapper delay={0.08}>
            <h2 className="pcta-title">Building Something Bold? We Want to Hear From You.</h2>
          </RevealWrapper>
        </motion.div>
        <motion.div custom={2} initial="hidden" whileInView="visible" variants={CHILD_VARIANTS} viewport={{ once: true }}>
          <RevealWrapper delay={0.14}>
            <p className="pcta-sub">
              We back founders from idea stage through Series A. If you are building in
              sectors we know deeply, we should talk.
            </p>
          </RevealWrapper>
        </motion.div>

        <RevealWrapper delay={0.2}>
          <div className="pcta-actions">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/pitch" className="pcta-btn pcta-btn--primary">
                Pitch Your Startup <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="pcta-btn pcta-btn--outline">
                Partner With Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="pcta-btn pcta-btn--outline">
                Investor Relations
              </Link>
            </motion.div>
          </div>
        </RevealWrapper>
      </motion.div>
    </section>
  );
}
