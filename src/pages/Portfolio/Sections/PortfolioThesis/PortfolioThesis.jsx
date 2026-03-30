import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PortfolioThesis.css';

const THESIS = [
  {
    title: 'Operator-Led Founders',
    text: 'We back founders with direct market experience, not just ideas. Execution quality and local understanding are non-negotiable.',
    tags: ['Domain Expertise', 'Track Record'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: 'Infrastructure Over Hype',
    text: 'We prefer companies that become market rails: logistics, commerce, communications, and systems that other businesses depends',
    tags: ['B2B Focus', 'Network Effect'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    )
  },
  {
    title: 'Cross-Portfolio Synergy',
    text: 'Our portfolio is designed to compound. Companies share insights, talent, and go-to-market leverage across the ecosystem.',
    tags: ['Talent Flow', 'Ecosystem Play'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
];

const HolographicCard = ({ item, index }) => {
  const cardRef = useRef(null);

  // Smooth springs for 3D physics (Lag-free fluid motion)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // Deep Parallax Tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  // Spotlight coordinates
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlightMask = useMotionTemplate`radial-gradient(350px circle at ${spotX}px ${spotY}px, black, transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const xPos = e.clientX - left;
    const yPos = e.clientY - top;

    // Normalizing for 3D rotation (-0.5 to 0.5)
    mouseX.set(xPos / width - 0.5);
    mouseY.set(yPos / height - 0.5);

    // Exact pixels for Spotlight mask
    spotX.set(xPos);
    spotY.set(yPos);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <RevealWrapper delay={index * 0.1}>
      <div 
        className="pth-card-container" 
        style={{ perspective: 1200 }} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          className="pth-card-3d-body"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d", // Magic that enables floating elements
          }}
        >
          {/* THE HOLOGRAM LAYER (Only visible near mouse) */}
          <motion.div className="pth-card-aurora-mask" style={{ maskImage: spotlightMask, WebkitMaskImage: spotlightMask }}>
            <div className="pth-aurora-bg" />
            <div className="pth-card-grid-pattern" />
          </motion.div>

          {/* THE FLOATING CONTENT LAYER (Pops out in 3D) */}
          <div className="pth-card-content" style={{ transform: "translateZ(60px)" }}>
            <div className="pth-card-header">
              <span className="pth-card-num">0{index + 1}</span>
              <div className="pth-card-icon">{item.icon}</div>
            </div>
            
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="pth-card-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="pth-card-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          {/* Outer Glowing Border */}
          <div className="pth-glass-border" />
        </motion.div>
      </div>
    </RevealWrapper>
  );
};

export default function PortfolioThesis() {
  return (
    <section className="pth-root" id="portfolio-thesis">
      <div className="pth-inner">
        <RevealWrapper>
          <div className="pth-head">
            <SectionTag color="gold">Investment Thesis</SectionTag>
            <h2 className="pth-title">How We Decide What to Build and Back</h2>
          </div>
        </RevealWrapper>

        <div className="pth-grid">
          {THESIS.map((item, index) => (
            <HolographicCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}