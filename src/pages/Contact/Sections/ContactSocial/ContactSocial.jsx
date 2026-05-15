import { motion } from 'framer-motion';
import './ContactSocial.css';

const SOCIAL_LINKS = [
  { label: 'Twitter / X', icon: 'X', href: '#' },
];

export default function ContactSocial() {
  return (
    <div className="csoc-outer">
      <div className="csoc-sec">

        {/* Left text — slides in from left */}
        <motion.div
          className="csoc-text"
          initial={{ opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="csoc-label">Follow the Journey</div>
          <div className="csoc-title">We share our thinking publicly.</div>
        </motion.div>

        {/* Right buttons — each rotates in from right with stagger */}
        <div className="csoc-icons">
          {SOCIAL_LINKS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              className="csoc-btn"
              initial={{ opacity: 0, x: 60, rotate: 18 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                delay: i * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <span className="csoc-btn__icon">{s.icon}</span>
              <span>{s.label}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  );
}
