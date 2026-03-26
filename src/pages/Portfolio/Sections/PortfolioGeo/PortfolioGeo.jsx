import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PortfolioGeo.css';

// 1. Data ko thoda aur "bhara-bhara" banaya (Added coords, percentage, tags)
const GEO_NODES = [
  { region: 'UAE', focus: 'Key operating hub and portfolio base', ventures: 8, maxVentures: 10, coords: '25.2048° N, 55.2708° E', tags: ['Fintech', 'SaaS'] },
  { region: 'Saudi Arabia', focus: 'Commerce and logistics expansion', ventures: 4, maxVentures: 10, coords: '23.8859° N, 45.0792° E', tags: ['Logistics', 'Retail'] },
  { region: 'India', focus: 'Technology and fulfilment operations', ventures: 3, maxVentures: 10, coords: '20.5937° N, 78.9629° E', tags: ['DeepTech', 'AI'] },
  { region: 'Pakistan', focus: 'Talent and product execution layer', ventures: 2, maxVentures: 10, coords: '30.3753° N, 69.3451° E', tags: ['Talent', 'Dev'] },
  { region: 'Kuwait', focus: 'Market expansion and pilot launches', ventures: 2, maxVentures: 10, coords: '29.3117° N, 47.4818° E', tags: ['Pilot', 'Commerce'] },
  { region: 'United Kingdom', focus: 'Partnerships and investor network', ventures: 1, maxVentures: 10, coords: '55.3781° N, 3.4360° W', tags: ['Capital', 'Network'] },
];

const SLIDE_VARIANTS = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// 2. Zabardast 3D Card Component
const InteractiveCard = ({ node, index }) => {
  const ref = useRef(null);

  // Mouse Tracking Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Springs for 3D Tilt
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Translate Mouse X/Y to Rotate X/Y (Tilt Effect)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Spotlight Effect (Follows mouse)
  const spotX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const spotY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${spotX}px ${spotY}px, rgba(26, 86, 232, 0.08), transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse position between -0.5 and 0.5 for tilting
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    mouseX.set(mouseXPos / width - 0.5);
    mouseY.set(mouseYPos / height - 0.5);

    // Update Spotlight coordinates
    spotX.set(mouseXPos);
    spotY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    spotX.set(0);
    spotY.set(0);
  };

  const percentage = (node.ventures / node.maxVentures) * 100;

  return (
    <RevealWrapper delay={index * 0.05}>
      <motion.div
        ref={ref}
        className="pgeo-card-wrapper"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={SLIDE_VARIANTS}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
      >
        <motion.article
          className="pgeo-card"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Spotlight Effect */}
          <motion.div className="pgeo-card__spotlight" style={{ background: spotlightBackground }} />

          {/* Glowing Border Accents */}
          <span className="pgeo-card__corner pgeo-card__corner--tl" aria-hidden="true" />
          <span className="pgeo-card__corner pgeo-card__corner--br" aria-hidden="true" />
          
          {/* Card Content - Elevated in 3D Space */}
          <div className="pgeo-card__content" style={{ transform: "translateZ(30px)" }}>
            <div className="pgeo-card__header">
              <span className="pgeo-card__coords">{node.coords}</span>
              <span className="pgeo-card__dot-radar" aria-hidden="true">
                 <span className="pgeo-radar-ring"></span>
                 <span className="pgeo-radar-core"></span>
              </span>
            </div>

            <motion.h3>{node.region}</motion.h3>
            <p className="pgeo-card__focus">{node.focus}</p>

            {/* Tags area to make it look full */}
            <div className="pgeo-card__tags">
              {node.tags.map(tag => (
                <span key={tag} className="pgeo-tag">{tag}</span>
              ))}
            </div>

            <div className="pgeo-card__footer">
              <div className="pgeo-ventures-meta">
                <span className="pgeo-ventures-count">{node.ventures} Ventures</span>
                <span className="pgeo-ventures-label">Active</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="pgeo-progress-track">
                <motion.div 
                  className="pgeo-progress-fill" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </RevealWrapper>
  );
};

export default function PortfolioGeo() {
  return (
    <section className="pgeo-root">
      <div className="pgeo-bg-glow pgeo-bg-glow--1" aria-hidden="true" />
      <div className="pgeo-bg-glow pgeo-bg-glow--2" aria-hidden="true" />
      <div className="pgeo-grid-lines" aria-hidden="true" />
      
      <div className="pgeo-inner">
        <RevealWrapper>
          <div className="pgeo-head">
            <SectionTag color="gold">Geographic Footprint</SectionTag>
            <h2 className="pgeo-title">Incorporated in Delaware, Operating Across Seven Markets</h2>
          </div>
        </RevealWrapper>

        <div className="pgeo-grid">
          {GEO_NODES.map((node, index) => (
            <InteractiveCard key={node.region} node={node} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}