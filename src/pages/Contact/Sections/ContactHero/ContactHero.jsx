import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiZap, FiUsers, FiFileText, FiArrowRight } from 'react-icons/fi';
import './ContactHero.css';

const MotionLink = motion.create(Link);

const PATHS = [
  {
    id: 'pitch',
    subject: 'Creating a Unicorn',
    iconBg: 'var(--brand-blue-l)',
    iconColor: 'var(--brand-blue)',
    Icon: FiZap,
    label: 'Founders',
    labelColor: 'var(--brand-blue)',
    title: 'Create a Unicorn',
    desc: 'Building in our sectors? Tell us about your vision.',
    variant: 'blue',
    to: '/pitch',
  },
  {
    id: 'partnership',
    subject: 'Partnership',
    iconBg: 'var(--gold-bg)',
    iconColor: 'var(--gold)',
    Icon: FiUsers,
    label: 'Partners',
    labelColor: 'var(--gold)',
    title: 'Explore Partnership',
    desc: "Investors, corporates, and co-investors — let's find synergies.",
    variant: 'gold',
    to: '/sectors',
  },
  {
    id: 'press',
    subject: 'Press / Media',
    iconBg: '#F0FDFB',
    iconColor: '#0D9488',
    Icon: FiFileText,
    label: 'Media',
    labelColor: '#0D9488',
    title: 'Press & Media Enquiries',
    desc: 'Journalists, researchers, and content creators.',
    variant: 'teal',
    to: '/blog',
  },
];

export default function ContactHero({ onSelectSubject }) {
  const handlePathClick = (subject) => {
    onSelectSubject(subject);
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="ch-outer">
      <div className="ch-mesh" />
      <div className="ch-dots" />
      <div className="ch-orb ch-orb--1" />
      <div className="ch-orb ch-orb--2" />
      <div className="ch-orb ch-orb--3" />

      <div className="ch-inner">
        <div className="ch-left">
          <motion.div
            className="ch-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="ch-kicker__dot">✦</div>
            <span>We respond within 5 business days</span>
          </motion.div>

          <motion.h1
            className="ch-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Let&apos;s Start a<br />
            <em className="shimmer-gold">Conversation.</em>
          </motion.h1>

          <motion.p
            className="ch-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          >
            Whether you&apos;re a founder with a bold idea, a strategic partner, or a journalist
            covering the Dubai startup ecosystem &mdash; we want to hear from you. Choose the right
            path below.
          </motion.p>
        </div>

        <div className="ch-paths">
          {PATHS.map((p, i) => {
            const motionProps = {
              key: p.id,
              className: `ch-path ch-path--${p.variant}`,
              initial: { opacity: 0, rotateX: -80, y: -16 },
              whileInView: { opacity: 1, rotateX: 0, y: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.75, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
              style: { transformOrigin: 'top center', transformPerspective: 1000 },
            };
            const inner = (
              <>
                <div className="ch-path__icon" style={{ background: p.iconBg, color: p.iconColor }}>
                  <p.Icon size={22} />
                </div>
                <div className="ch-path__body">
                  <div className="ch-path__label" style={{ color: p.labelColor }}>{p.label}</div>
                  <div className="ch-path__title">{p.title}</div>
                  <div className="ch-path__desc">{p.desc}</div>
                </div>
                <div className="ch-path__arrow"><FiArrowRight size={18} /></div>
              </>
            );
            return p.to ? (
              <MotionLink to={p.to} {...motionProps}>{inner}</MotionLink>
            ) : (
              <motion.button onClick={() => handlePathClick(p.subject)} {...motionProps}>{inner}</motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
