import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Zap, Users, Sprout } from 'lucide-react';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './CultureValues.css';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  { num: '01', icon: <Lightbulb />, name: 'Conviction', desc: "We back ideas that most people dismiss early. We invest before consensus creates outlier returns.", color: '#1a56e8' },
  { num: '02', icon: <Zap />, name: 'Velocity', desc: "We move fast. Decisions in days, not months. Speed is a competitive feature, not a luxury.", color: '#b8892a' },
  { num: '03', icon: <Users />, name: 'Ownership', desc: "We operate like founders. When a portfolio company has a problem, it's our problem too.", color: '#1a56e8' },
  { num: '04', icon: <Sprout />, name: 'Impact', desc: "We measure success beyond returns. Infrastructure built must make regions meaningfully better.", color: '#b8892a' },
];

const CP_STATS = [
  { num: 3, label: 'Years Operator-Led', suffix: '+' },
  { num: 0, label: 'Companies Abandoned', suffix: '' },
  { num: 100, label: 'Founder Satisfaction', suffix: '%' },
  { num: 999, label: 'Time Horizon', suffix: '∞' }, // Use 999 for infinity logic
];

export default function CultureValues() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const quoteRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // 1. Quote reveal animation (Slow and sophisticated)
    gsap.fromTo(quoteRef.current, 
      { opacity: 0, y: 30, letterSpacing: "-0.05em" },
      { 
        opacity: 1, y: 0, letterSpacing: "0em",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 90%",
        }
      }
    );

    // 2. Odometer/Counter animation for stats
    statsRef.current.forEach((el, i) => {
      const target = CP_STATS[i].num;
      if (target === 999) return; // Skip infinity symbol for counting

      gsap.fromTo(el, 
        { innerText: 0 },
        { 
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    // Cinematic slow reveal (1.8s duration as requested)
    gsap.fromTo(cardsRef.current, 
      { opacity: 0, y: 80, filter: 'blur(8px)' },
      { 
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 1.8,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  

  const handleMouseEnter = (i) => {
    const card = cardsRef.current[i];
    const accentColor = VALUES[i].color;

    // Innovative Hover: Card expands and background subtle-tints
    gsap.to(card, {
      y: -12,
      backgroundColor: '#ffffff',
      boxShadow: `0 30px 60px -12px rgba(0, 0, 0, 0.08), 0 18px 36px -18px ${accentColor}22`,
      borderColor: accentColor,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(card.querySelector('.val-card-icon'), {
      color: accentColor,
      scale: 1.1,
      duration: 0.6
    });
  };

  const handleMouseLeave = (i) => {
    const card = cardsRef.current[i];
    gsap.to(card, {
      y: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      borderColor: "rgba(0,0,0,0.05)",
      duration: 0.6,
      ease: "power2.inOut"
    });

    gsap.to(card.querySelector('.val-card-icon'), {
      color: '#0d0d0b',
      scale: 1,
      duration: 0.6
    });
  };

  return (
    <div className="culture-outer-white" ref={containerRef}>
      <div className="culture-sec">
        <div className="culture-header">
          <SectionTag color="gold">Culture & Values</SectionTag>
          <h2 className="culture-h">The Principles That<br />Drive <em>Everything</em></h2>
        </div>

        <div className="values-flex-container">
          {VALUES.map((v, i) => (
            <div 
              key={v.num} 
              ref={el => cardsRef.current[i] = el}
              className="val-card-white"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div className="val-card-content">
                <span className="val-card-num">{v.num}</span>
                <div className="val-card-icon">{v.icon}</div>
                <h3 className="val-card-name">{v.name}</h3>
                <p className="val-card-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

<div className="culture-bottom-premium">
        <div className="quote-container">
          <p className="premium-quote" ref={quoteRef}>
            "We don't interview founders, we have <span>conversations</span>. 
            The best investments start with a shared obsession."
          </p>
        </div>

        <div className="premium-stats-bar">
          {CP_STATS.map((s, i) => (
            <div key={s.label} className="p-stat-card">
              <div className="p-stat-value">
                <span ref={el => statsRef.current[i] = el}>
                  {s.num === 999 ? '∞' : '0'}
                </span>
                {s.num !== 999 && s.suffix}
              </div>
              <div className="p-stat-label">{s.label}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}