import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './MissionVision.css';

const CARDS = [
  {
    type: 'mission',
    tag: 'Our Mission',
    quote: '"To identify, fund, and build market-leading companies across essential industries, where operational excellence creates compounding, durable competitive advantages."',
    desc: 'We look for industries where the rules are being rewritten by digital transformation, where the old way of doing things is visibly broken.',
    direction: -50, // Slides in from left
  },
  {
    type: 'vision',
    tag: 'Our Vision',
    quote: '"A portfolio of 25+ thriving companies across 15 countries, each one a market leader in its category, built together, not just funded separately."',
    desc: 'By 2030, we intend to be the most operationally impactful venture group to emerge from the Middle East, known for the companies we build from the inside.',
    direction: 50, // Slides in from right
  },
];

export default function MissionVision() {
  const { scrollYProgress } = useScroll();
  // Subtle parallax move as user scrolls
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="mv-outer">
      <div className="mv-sec">
        <motion.div 
          className="mv-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTag color="gold">Mission &amp; Vision</SectionTag>
          <h2 className="mv-h">
            The Philosophy<br />Behind <em className='shimmer-amber'>Everything</em>
          </h2>
        </motion.div>

        <div className="mv-grid">
          {CARDS.map((card, i) => (
            <motion.div 
              key={card.type} 
              className={`mv-card mv-card--${card.type}`}
              initial={{ opacity: 0, x: card.direction, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
              transition={{ 
                duration: 1, 
                delay: i * 0.2, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ y: i === 1 ? yTranslate : 0 }} // Vision card moves slightly on scroll
            >
              <div className="mv-card-glass-shine" />
              
              <motion.div 
                className="mv-card__tag"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                {card.tag}
              </motion.div>

              <p className="mv-card__quote">{card.quote}</p>
              <p className="mv-card__desc">{card.desc}</p>
              
              {/* Decorative background element that reacts to hover */}
              <motion.div 
                className="mv-card-blob" 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0] 
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}