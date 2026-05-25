import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Globe2,
  Layers3,
  Users,
  MapPin,
} from 'lucide-react';
import { useInView, useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PortfolioMetrics.css';

const METRICS = [
  { Icon: Building2, value: 11, suffix: '+', label: 'Portfolio Companies', accent: '#1A56E8' },
  { Icon: Globe2, value: 7, suffix: '', label: 'Countries of Operation', accent: '#B8892A' },
  { Icon: Layers3, value: 6, suffix: '', label: 'Industry Sectors', accent: '#0D9488' },
  { Icon: Users, value: 200, suffix: '+', label: 'Team Members Across Group', accent: '#E85D26' },
  { Icon: MapPin, value: 2017, suffix: '', label: 'Year Founded, Delaware USA', accent: '#16A34A' },
];

const CELL_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function CountUpNumber({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 58, damping: 22, mass: 0.9 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      raw.set(value);
    }
  }, [isInView, raw, value]);

  useMotionValueEvent(smooth, 'change', (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <span ref={ref}>
      {prefix}{displayValue}<em>{suffix}</em>
    </span>
  );
}

export default function PortfolioMetrics() {
  return (
    <section className="pmet-root">
      <div className="pmet-inner">
        <div className="pmet-top">
          <RevealWrapper>
            <div>
              <SectionTag color="gold">By the Numbers</SectionTag>
              <div className="pmet-title">
                The Numbers Behind<br /><em className='shimmer-blue'>the Vision</em>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.15}>
            <p className="pmet-desc">
              Every metric is a milestone. Every milestone is a step toward a
              portfolio that outlasts a generation.
            </p>
          </RevealWrapper>
        </div>

        <div className="pmet-grid">
          {METRICS.map((m, i) => (
            <RevealWrapper key={m.label} delay={i * 0.06}>
              <motion.div
                className="pmet-cell"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={CELL_VARIANTS}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ '--accent': m.accent }}
              >
                <span className="pmet-cell__glow" aria-hidden="true" />
                <span className="pmet-cell__icon" aria-hidden="true">
                  <m.Icon size={20} strokeWidth={2} />
                </span>
                <div className="pmet-cell__n">
                  <CountUpNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="pmet-cell__l">{m.label}</div>
                <div className="pmet-cell__line" />
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
