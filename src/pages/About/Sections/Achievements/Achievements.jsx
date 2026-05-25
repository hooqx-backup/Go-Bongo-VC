import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Globe2, Users2, Trophy, BarChart4 } from 'lucide-react';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS = [
  { icon: <Building2 />, num: '11', title: 'Active Portfolio Ventures', desc: 'Spanning e-commerce, logistics, tech, trade, communications, and strategic consulting.', type: 'blue' },
{
  icon: <Globe2 />,
  num: '15+',
  title: 'Markets by 2030',
  desc: 'Strategically expanding into high-growth international regions with a long-term global vision.',
  type: 'gold'
},  { icon: <Users2 />, num: '200+', title: 'Team Members Across Group', desc: 'Full-time talent employed across all portfolio companies in operations and tech.', type: 'blue' },
  { icon: <Trophy />, num: '7', title: 'Countries of Operation', desc: "UAE, India, Bangladesh, USA, Canada, UK, and Germany - growing to 15 by 2030.", type: 'gold' },
  { icon: <BarChart4 />, num: '6', title: 'Industry Sectors Covered', desc: 'Deliberately diversified across essential, resilient industries with high growth.', type: 'blue' },
];

export default function Achievements() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow-motion cinematic entrance
      gsap.fromTo(cardsRef.current, 
        { 
          opacity: 0, 
          y: 100, 
          rotateY: 15,
          scale: 0.9 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotateY: 0,
          scale: 1,
          duration: 1.8, // Increased duration for visibility
          stagger: 0.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const onMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      backgroundColor: ACHIEVEMENTS[index].type === 'blue' ? '#1a56e8' : '#b8892a',
      color: '#ffffff',
      y: -15,
      duration: 0.6,
      ease: "power2.out"
    });
    // Fade description text to white
    gsap.to(cardsRef.current[index].querySelectorAll('.ach-card__desc, .ach-card__num'), {
      color: '#ffffff',
      duration: 0.6
    });
  };

  const onMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      backgroundColor: ACHIEVEMENTS[index].type === 'blue' ? '#ffffff' : '#0d0d0b',
      color: 'inherit',
      y: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });
    // Reset text colors
    gsap.to(cardsRef.current[index].querySelector('.ach-card__num'), {
      color: ACHIEVEMENTS[index].type === 'blue' ? '#0d0d0b' : '#ffffff',
      duration: 0.6
    });
    gsap.to(cardsRef.current[index].querySelector('.ach-card__desc'), {
      color: ACHIEVEMENTS[index].type === 'blue' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)',
      duration: 0.6
    });
  };

  return (
    <div className="ach-outer" ref={containerRef}>
      <div className="ach-sec">
        <div className="ach-header">
          <SectionTag>Milestones</SectionTag>
          <h2 className="ach-h">Every Number is a <em>Chapter</em></h2>
        </div>

        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div 
              key={a.title} 
              ref={el => cardsRef.current[i] = el}
              className={`ach-card ach-card--${a.type}`}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={() => onMouseLeave(i)}
            >
              <div className="ach-card__icon">{a.icon}</div>
              <div className="ach-card__num">{a.num}</div>
              <div className="ach-card__title">{a.title}</div>
              <p className="ach-card__desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}