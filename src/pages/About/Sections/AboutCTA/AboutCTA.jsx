import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import Button from '../../../../common/components/Button/Button';
import './AboutCTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef(null);
  const auraRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 1. Cinematic Content Entrance (1.8s for visibility)
    gsap.fromTo(contentRef.current.children, 
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { 
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 1.8,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // 2. Magnetic Mouse Tracking for the Background Aura
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;

      gsap.to(auraRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-cta-outer" ref={sectionRef}>
      {/* The Magnetic Gravity Field */}
      <div className="about-cta-aura" ref={auraRef} />
      
      <div className="about-cta-sec" ref={contentRef}>
        <SectionTag color="gold">What's Next</SectionTag>
        <h2 className="about-cta-h">
          Ready to Build Something <span className="cta-glow-text">Together?</span>
        </h2>
        <p className="about-cta-sub">
          Whether you're a founder with a bold idea, a partner looking to collaborate,
          or an investor interested in the GoBongo ecosystem, we want to hear from you.
        </p>
        <div className="about-cta-btns">
          <Button variant="blue" to="/pitch" size="lg">Create a Unicorn →</Button>
          <Button variant="ghost" to="/contact" size="lg">Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}