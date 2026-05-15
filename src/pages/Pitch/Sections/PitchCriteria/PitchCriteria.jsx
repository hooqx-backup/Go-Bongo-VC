import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PitchCriteria.css';

const CRITERIA = [
  {
    num: '01',
    title: 'Founder-Market Fit',
    color: 'blue',
    icon: '🧠',
    body: 'Every founder we back has to be the only person in the world who could build this. We look for operators, not theorists people who have spent years inside the problem they are solving before they decided to solve it.',
  },
  {
    num: '02',
    title: 'A Clear, Provable Problem',
    color: 'gold',
    icon: '🎯',
    body: 'We do not fund ideas. We fund solutions to problems with evidence. If you cannot show us the problem is real, large, and structurally unsolved, we cannot get excited about the solution no matter how elegant.',
  },
  {
    num: '03',
    title: 'Early Evidence of Pull',
    color: 'blue',
    icon: '📈',
    body: 'Revenue, users, signed contracts, letters of intent something that proves the market is already responding. We back founders who have started before they have funding, not those who need funding to start.',
  },
  {
    num: '04',
    title: 'A Realistic Capital Plan',
    color: 'gold',
    icon: '💡',
    body: 'You do not need all the answers, but you need to know what you are raising, why that amount, and what milestones it buys you. We value radical honesty over polished optimism every time.',
  },
];

const SPRING       = { stiffness: 280, damping: 26, mass: 0.6 };
const SPRING_SLOW  = { stiffness: 180, damping: 22, mass: 0.8 };

function TiltCard({ c, i }) {
  const ref = useRef(null);

  /* Mouse position — starts flat (0,0) */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const sX = useSpring(rawX, SPRING);
  const sY = useSpring(rawY, SPRING);

  /* Tilt */
  const rotateY = useTransform(sX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sY, [-0.5, 0.5], [ 10, -10]);

  /* Scale */
  const scaleRaw = useMotionValue(1);
  const scale    = useSpring(scaleRaw, SPRING);

  /* Sheen follows cursor */
  const sheenX = useTransform(sX, [-0.5, 0.5], [15, 85]);
  const sheenY = useTransform(sY, [-0.5, 0.5], [15, 85]);
  const sheen  = useMotionTemplate`radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.30), transparent 58%)`;

  /*
    Moving top bar — mouse left → bar drifts left,
    mouse right → bar drifts right, from center.
    Uses a slower spring so it trails behind the tilt.
  */
  const barSX  = useSpring(rawX, SPRING_SLOW);
  const barX   = useTransform(barSX, [-0.5, 0.5], [-28, 28]);

  /* Icon float — opposite direction (parallax) */
  const iconX  = useTransform(sX, [-0.5, 0.5], [ 6, -6]);
  const iconY  = useTransform(sY, [-0.5, 0.5], [ 6, -6]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onEnter = () => scaleRaw.set(1.03);
  const onLeave = () => { rawX.set(0); rawY.set(0); scaleRaw.set(1); };

  return (
    <motion.div
      ref={ref}
      className={`pc-card pc-card--${c.color}`}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* ── Sliding top accent bar ── */}
      <motion.div
        className={`pc-card__bar pc-card__bar--${c.color}`}
        style={{ x: barX }}
      />

      {/* Cursor sheen */}
      <motion.div className="pc-card__sheen" style={{ background: sheen }} />

      <div className="pc-card__inner">

        {/* ── 3D floating icon badge ── */}
        <motion.div
          className={`pc-card__icon-wrap pc-card__icon-wrap--${c.color}`}
          style={{ x: iconX, y: iconY }}
        >
          <span className="pc-card__icon">{c.icon}</span>
        </motion.div>

        <div className="pc-card__num">{c.num}</div>
        <h3 className="pc-card__title">{c.title}</h3>
        <p className="pc-card__body">{c.body}</p>
      </div>
    </motion.div>
  );
}

export default function PitchCriteria() {
  return (
    <section className="pc-criteria">
      <div className="pc-criteria__inner">
        <RevealWrapper className="pc-criteria__header">
          <SectionTag color="gold">What We Look For</SectionTag>
          <h2 className="pc-criteria__heading">
            Four <em className="shimmer-gold">Non-Negotiables</em>
          </h2>
          <p className="pc-criteria__sub">
            These are not preferences. Every company in our portfolio passed all four. If your
            answer to any of these is &ldquo;we&rsquo;re still figuring it out&rdquo; we
            respect the honesty, but it is too early for us.
          </p>
        </RevealWrapper>

        <div className="pc-criteria__grid">
          {CRITERIA.map((c, i) => (
            <TiltCard key={c.num} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
