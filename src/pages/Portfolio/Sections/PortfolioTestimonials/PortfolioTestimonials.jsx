import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import { COMPANIES } from '../../data/companies';
import './PortfolioTestimonials.css';

// --- MATH & CONFIG CONSTANTS ---
const CARD_WIDTH = 420;     // Card width (380px) + Gap
const TOTAL_CARDS = 11;     // One card per portfolio company
const TOTAL_WIDTH = CARD_WIDTH * TOTAL_CARDS;
const HALF_WIDTH = TOTAL_WIDTH / 2;
const SPEED = -80;          // Speed of wave

// Vibrant colors for each card to pop
const CARD_COLORS = [
  '#1A56E8', // Blue
  '#0D9488', // Teal
  '#7C3AED', // Purple
  '#E85D26', // Orange
  '#B8892A', // Gold
];

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const WaveCard = ({ item, index, baseX }) => {
  const x = useTransform(baseX, (v) => wrap(-HALF_WIDTH, HALF_WIDTH, v + index * CARD_WIDTH));

  const scale = useTransform(
    x,
    [-HALF_WIDTH, -840, -420, 0, 420, 840, HALF_WIDTH],
    [0.5, 0.6, 0.85, 1, 0.85, 0.6, 0.5]
  );

  const y = useTransform(
    x,
    [-HALF_WIDTH, -840, -420, 0, 420, 840, HALF_WIDTH],
    [40, 30, 10, -20, 10, 30, 40]
  );

  // Jab card center me aayega tabhi fully visible hoga
  const opacity = useTransform(
    x,
    [-HALF_WIDTH, -840, -420, 0, 420, 840, HALF_WIDTH],
    [0, 0, 0.5, 1, 0.5, 0, 0]
  );

  // Center card pe extra glowing effect denge
  const centerGlow = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const zIndex = useTransform(x, (currentX) => {
    const absX = Math.abs(currentX);
    if (absX < 210) return 10;
    if (absX < 630) return 5;
    return 1;
  });

  const pointerEvents = useTransform(x, (currentX) => {
    return Math.abs(currentX) < 200 ? 'auto' : 'none';
  });

  // Assign a unique color from the array based on index
  const cardColor = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <motion.article
      className="ptes-carousel-card"
      style={{ 
        x, 
        y, 
        scale, 
        opacity, 
        zIndex, 
        pointerEvents,
        '--card-accent': cardColor // Setting CSS variable for dynamic coloring
      }}
    >
      {/* Background glowing orbs for that rich, modern feel */}
      <div className="ptes-card-bg-orb ptes-card-bg-orb--1" />
      <div className="ptes-card-bg-orb ptes-card-bg-orb--2" />
      
      {/* Dynamic border glow when in center */}
      <motion.div 
        className="ptes-card-center-glow" 
        style={{ opacity: centerGlow }} 
      />

      <div className="ptes-card-content-inner">
        <span className="ptes-card__quote-mark" aria-hidden="true">"</span>
        <span className="ptes-card__pulse" aria-hidden="true" />
        
        <p className="ptes-quote">"{item.quote}"</p>
        
        <div className="ptes-card-footer">
          <div className="ptes-author-info">
            <p className="ptes-author">{item.quoteAttr}</p>
            <div className="ptes-company">
              <img src={item.logo} alt={item.name} />
              <span>{item.name}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function PortfolioTestimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);

  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      baseX.set(baseX.get() + (delta / 1000) * SPEED);
    }
  });

  const loopCards = [];
  while (loopCards.length < TOTAL_CARDS) {
    loopCards.push(...COMPANIES);
  }
  const carouselCards = loopCards.slice(0, TOTAL_CARDS);

  return (
    <section className="ptes-root">
      {/* Optional faint background grid for texture */}
      <div className="ptes-bg-grid" />

      <div className="ptes-inner">
        <RevealWrapper>
          <div className="ptes-head">
            <SectionTag>Founder Voice</SectionTag>
            <h2 className="ptes-title">What Our Founders Say About Building With Us</h2>
          </div>
        </RevealWrapper>

        {/* 1140px constraint is applied to this container via CSS */}
        <div 
          className="ptes-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="ptes-carousel-track">
            {carouselCards.map((item, index) => (
              <WaveCard 
                key={`wave-card-${index}`} 
                item={item} 
                index={index} 
                baseX={baseX} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}