// 
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../../common/components/Button/Button';
import './AboutHero.css';

// Premium Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function AboutHero() {
  const { scrollY } = useScroll();
  // Parallax effect for the right column
  const yRange = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="about-hero">
      <div className="about-hero-mesh" />
      
      <motion.div 
        className="about-hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left column ── */}
        <div className="about-hero-left">
          <motion.div className="about-breadcrumb" variants={itemVariants}>
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="about-breadcrumb__current">About Us</span>
          </motion.div>

          <motion.h1 className="about-hero-h" variants={itemVariants}>
            We Don't Just Fund<br />
            <span className="text-reveal-wrapper">
                Companies. We Build <em className="shimmer-amber">Ecosystems.</em>
            </span>
          </motion.h1>

          <motion.p className="about-hero-sub" variants={itemVariants}>
            We are a Delaware-headquartered venture firm built by operators, for
            founders, backing bold ideas across 6 industries in 7 countries with
            conviction, capital, and hands-on operational support.
          </motion.p>

          <motion.div className="about-hero-ctas" variants={itemVariants}>
            <a href="#story" className="btn btn-blue btn-md premium-btn">Our Story →</a>
            <Button variant="ghost" to="/pitch">Create a Unicorn</Button>
          </motion.div>

          <motion.div className="about-hero-stats" variants={itemVariants}>
            {[
              { n: "2017", l: "Founded" },
              { n: "11", l: "Ventures Built", plus: true },
              { n: "7", l: "Countries" }
            ].map((stat, i) => (
              <div className="ahs" key={i}>
                <div className="ahs-n">
                  {stat.n}{stat.plus && <span className="ahs-plus">+</span>}
                </div>
                <div className="ahs-l">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div 
          className="about-hero-right"
          style={{ y: yRange }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <motion.div 
            className="about-hero-quote"
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
          >
            <img src="/logos/gobongoventureslogo.png" alt="GoBongo Venture" className="ahq-brand-logo" />
            <p className="ahq-text">
              "Our portfolio companies don't just share a cap table. They share
              customers, suppliers, infrastructure, and institutional knowledge.
              That's the <em>compounding advantage</em> no single investment can create."
            </p>
            <div className="ahq-attr">GoBongo Venture · Investment Philosophy</div>
          </motion.div>

          {/* Floating Tag with Infinite Animation */}
          <motion.div 
            className="about-hero-tag"
            animate={{ 
              y: [0, -12, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="aht-dot" />
            <div>
              <div className="aht-text">11 Ventures Active</div>
              <div className="aht-sub">Growing across 7 countries</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}