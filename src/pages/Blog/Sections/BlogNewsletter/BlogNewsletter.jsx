import { useState } from 'react';
import { motion } from 'framer-motion';
import './BlogNewsletter.css';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="bn-outer">
      <div className="bn-glow" />
      <div className="bn-inner">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="bn-tag">Stay in the Loop</div>
          <h2 className="bn-heading">
            Get Our Thinking<br /><em>In Your Inbox.</em>
          </h2>
          <p className="bn-sub">
            No fluff. One email per month with our best insights on markets, portfolio companies, and the MENA startup ecosystem.
          </p>
        </motion.div>

        <motion.form
          className="bn-form"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <input
            className="bn-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button
            type="submit"
            className="bn-btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          >
            Subscribe →
          </motion.button>
        </motion.form>

        <motion.p
          className="bn-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          No spam. Unsubscribe anytime.
        </motion.p>

      </div>
    </section>
  );
}
