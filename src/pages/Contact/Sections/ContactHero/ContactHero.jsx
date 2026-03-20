import { motion } from 'framer-motion';
import './ContactHero.css';

const PATHS = [
  {
    id: 'pitch',
    subject: 'Pitching a startup',
    iconBg: 'var(--brand-blue-l)',
    iconColor: 'var(--brand-blue)',
    icon: '🚀',
    label: 'Founders',
    labelColor: 'var(--brand-blue)',
    title: 'Pitch Your Startup',
    desc: 'Building in our sectors? Tell us about your vision.',
    variant: 'blue',
  },
  {
    id: 'partnership',
    subject: 'Partnership',
    iconBg: 'var(--gold-bg)',
    iconColor: 'var(--gold)',
    icon: '🤝',
    label: 'Partners',
    labelColor: 'var(--gold)',
    title: 'Explore Partnership',
    desc: "Investors, corporates, and co-investors — let's find synergies.",
    variant: 'gold',
  },
  {
    id: 'press',
    subject: 'Press / Media',
    iconBg: '#F0FDFB',
    iconColor: '#0D9488',
    icon: '📰',
    label: 'Media',
    labelColor: '#0D9488',
    title: 'Press & Media Enquiries',
    desc: 'Journalists, researchers, and content creators.',
    variant: 'teal',
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
            Let&apos;s Start a<br /><em>Conversation.</em>
          </motion.h1>

          <motion.p
            className="ch-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            Whether you&apos;re a founder with a bold idea, a strategic partner, or a journalist
            covering the Dubai startup ecosystem &mdash; we want to hear from you. Choose the right
            path below.
          </motion.p>
        </div>

        <motion.div
          className="ch-paths"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          {PATHS.map((p) => (
            <button
              key={p.id}
              className={`ch-path ch-path--${p.variant}`}
              onClick={() => handlePathClick(p.subject)}
            >
              <div
                className="ch-path__icon"
                style={{ background: p.iconBg, color: p.iconColor }}
              >
                {p.icon}
              </div>
              <div className="ch-path__body">
                <div className="ch-path__label" style={{ color: p.labelColor }}>{p.label}</div>
                <div className="ch-path__title">{p.title}</div>
                <div className="ch-path__desc">{p.desc}</div>
              </div>
              <div className="ch-path__arrow">→</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
