import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import { SECTOR_FILTERS } from '../../data/companies';
import './PortfolioSectors.css';

const COLORS = {
  commerce: '#1A56E8', // Blue
  logistics: '#0D9488', // Teal
  tech: '#7C3AED',      // Purple
  trade: '#B8892A',     // Gold
  strategy: '#E85D26',  // Orange
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const SectorCard = ({ sector, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const color = COLORS[sector.key] || '#1A56E8';
  
  // Dummy data to make the back of the card look "heavy"
  const growthRate = Math.floor(Math.random() * (45 - 15 + 1) + 15);
  const totalValuation = Math.floor(Math.random() * (500 - 100 + 1) + 100);

  return (
    <RevealWrapper delay={index * 0.08}>
      <motion.div
        className="psec-card-container"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ '--sector-color': color }}
      >
        <motion.div
          className="psec-card-flipper"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* FRONT OF CARD */}
          <div className="psec-card-front">
            <span className="psec-glow-blob" />
            <div className="psec-card-header">
              <span className="psec-count-badge">{sector.count}</span>
              <div className="psec-pulse-ring" />
            </div>
            
            <h3 className="psec-title-front">{sector.label}</h3>
            <p className="psec-desc-front">Core high-leverage vertical with strong regional pull.</p>
            
            {/* Visual Progress Bar on Front */}
            <div className="psec-progress-container">
              <div className="psec-progress-bar">
                <motion.div 
                  className="psec-progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min((sector.count / 10) * 100, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              <span className="psec-progress-text">Portfolio Share</span>
            </div>
          </div>

          {/* BACK OF CARD (The "Maal Pani" side) */}
          <div className="psec-card-back">
            <div className="psec-back-grid"></div> {/* Blueprint overlay */}
            
            <h4 className="psec-back-title">{sector.label} Matrix</h4>
            
            <div className="psec-stats-grid">
              <div className="psec-stat-box">
                <span className="psec-stat-value">+{growthRate}%</span>
                <span className="psec-stat-label">YoY Growth</span>
              </div>
              <div className="psec-stat-box">
                <span className="psec-stat-value">${totalValuation}M</span>
                <span className="psec-stat-label">Est. Value</span>
              </div>
            </div>

            <ul className="psec-back-list">
              <li><span className="dot"></span> Market leadership</li>
              <li><span className="dot"></span> Margin expansion</li>
              <li><span className="dot"></span> Talent density</li>
            </ul>

            <button className="psec-explore-btn">Deep Dive ↗</button>
          </div>
          
        </motion.div>
      </motion.div>
    </RevealWrapper>
  );
};

export default function PortfolioSectors() {
  const sectors = SECTOR_FILTERS.filter((item) => item.key !== 'all');

  return (
    <section className="psec-root">
      <div className="psec-bg-grid" />
      
      <div className="psec-inner">
        <RevealWrapper>
          <div className="psec-head">
            <SectionTag>Sector Mix</SectionTag>
            <h2 className="psec-title">Concentrated Bets in High-Leverage Verticals</h2>
            <p className="psec-subtitle">Hover to analyze our thesis data across key operating categories.</p>
          </div>
        </RevealWrapper>

        <div className="psec-grid">
          {sectors.map((sector, index) => (
            <SectorCard key={sector.key} sector={sector} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}