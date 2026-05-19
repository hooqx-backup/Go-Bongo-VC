import { motion } from 'framer-motion';

/**
 * RevealWrapper - scroll-triggered fade-up reveal.
 * Wraps any content with a whileInView animation.
 *
 * Props:
 *   delay      number   animation delay in seconds (default: 0)
 *   amount     number   viewport threshold to trigger (default: 0.08)
 *   className  string   forwarded to the motion.div
 *   style      object   forwarded to the motion.div
 */
export default function RevealWrapper({ children, delay = 0, amount = 0.08, className = '', style, ...props }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
