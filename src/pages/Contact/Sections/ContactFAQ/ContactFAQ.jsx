import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuPlus, LuMinus } from 'react-icons/lu';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../../common/components/Button/Button';
import './ContactFAQ.css';

const FAQS = [
  {
    q: 'What stage do you invest at?',
    a: 'We invest from the idea stage through Series A. Our sweet spot is pre-seed and seed where operational support makes the biggest difference.',
  },
  {
    q: 'Do I need a warm introduction?',
    a: "No. We actively review cold inbounds. If your application fits our thesis, a warm intro won't change our decision. Submit through the form.",
  },
  {
    q: 'Do you only invest in UAE-based companies?',
    a: 'No. We have portfolio companies across 7 countries. Geographic location is less important than market opportunity.',
  },
  {
    q: 'What sectors do you focus on?',
    a: 'We invest across e-commerce, logistics, fintech, digital services, communication tech, and trading sectors where we have deep operational experience.',
  },
  {
    q: 'How long does the evaluation process take?',
    a: 'From first message to a decision typically takes 4–6 weeks for founders who are a strong fit. We move fast when we see something we like.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="cfaq-outer">
      <div className="cfaq-sec">

        {/* ── Left ── */}
        <RevealWrapper className="cfaq-left">
          <SectionTag color="gold">Common Questions</SectionTag>
          <h2 className="cfaq-heading">
            Things People<br />Ask <em className="shimmer-gold">Us</em>
          </h2>
          <p className="cfaq-sub">
            Before reaching out, check if your question is already answered here. If not, the
            form above is the fastest path to a real answer.
          </p>
          <Button variant="blue" to="/pitch">Create a Unicorn →</Button>
        </RevealWrapper>

        {/* ── Right — spotlight FAQ items ── */}
        <div className="cfaq-right">
          {FAQS.map((faq, i) => {
            const isOpen   = openIndex === i;
            const anyOpen  = openIndex !== null;
            const isDimmed = anyOpen && !isOpen;
            return (
              <motion.div
                key={i}
                className={`cfaq-item${isOpen ? ' cfaq-item--open' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{
                  opacity: isDimmed ? 0.32 : 1,
                  y: 0,
                  scale:  isDimmed ? 0.965 : isOpen ? 1.02 : 1,
                  filter: isDimmed ? 'blur(3px)' : 'blur(0px)',
                }}
                transition={{
                  opacity: { duration: 0.35, delay: anyOpen ? 0 : i * 0.09 },
                  y:       { duration: 0.55, delay: i * 0.09, ease: [0.25, 1, 0.5, 1] },
                  scale:   { type: 'spring', stiffness: 280, damping: 26 },
                  filter:  { duration: 0.3 },
                }}
              >
                {/* Gold accent bar on open */}
                <div className="cfaq-item__bar" />

                <button className="cfaq-q" onClick={() => toggle(i)}>
                  {/* Step number */}
                  <span className="cfaq-q__num">0{i + 1}</span>

                  <span className="cfaq-q__text">{faq.q}</span>

                  {/* Animated icon */}
                  <motion.div
                    className="cfaq-q__icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span
                          key="minus"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.15 }}
                        >
                          <LuMinus size={14} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.15 }}
                        >
                          <LuPlus size={14} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </button>

                {/* Smooth expand answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="cfaq-a"
                      initial={{ height: 0, opacity: 0, y: -6 }}
                      animate={{ height: 'auto', opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <p className="cfaq-a__text">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
