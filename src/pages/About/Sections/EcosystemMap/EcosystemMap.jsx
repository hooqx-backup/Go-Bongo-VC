import { motion } from 'framer-motion';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './EcosystemMap.css';

const VENTURES = [
  { num: '01', logo: '/logos/scoodalogo.png', name: 'Thescooda', sector: 'E-Commerce', geo: 'Global', dir: { x: -50, y: -50 } },
  { num: '02', logo: '/logos/tezzlogo.png', name: 'Tezz Logistics', sector: 'Logistics', geo: 'India', dir: { x: 0, y: -60 } },
  { num: '03', logo: '/logos/hooqxlogo.png', name: 'Hooqx LLC', sector: 'IT & Digital', geo: 'USA', dir: { x: 0, y: -60 } },
  { num: '04', logo: '/logos/bongologo.png', name: 'GoBongo Shop', sector: 'D2C Retail', geo: 'UAE', dir: { x: 50, y: -50 } },
  { num: '05', logo: '/logos/tradeflinklogo.png', name: 'Tradeflink', sector: 'B2B Trade', geo: 'ME & Asia', dir: { x: -50, y: 50 } },
  { num: '06', logo: '/logos/calltawklogo.png', name: 'CallTawk', sector: 'Comms Tech', geo: 'Global', dir: { x: 0, y: 60 } },
  { num: '07', logo: '/logos/gmilogo.png', name: 'GMI Trading', sector: 'Commodity Trading', geo: 'Dubai, UAE', dir: { x: 0, y: 60 } },
  { num: '08', logo: '/logos/stratigi360logo.png', name: 'Stratigi 360', sector: 'Strategy', geo: 'Global', dir: { x: 50, y: 50 } },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 }
  }
};

const puzzlePiece = (dir) => ({
  hidden: { 
    opacity: 0, 
    x: dir.x, 
    y: dir.y,
    scale: 0.8,
    rotate: dir.x > 0 ? 5 : -5 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 } 
  }
});

export default function EcosystemMap() {
  return (
    <div className="eco-outer">
      <div className="eco-sec">
        <motion.div 
          className="eco-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <SectionTag>Our Ecosystem</SectionTag>
            <h2 className="eco-h">
              One Group. Eight Ventures.<br /><em>Infinite Synergies.</em>
            </h2>
          </div>
          <p className="eco-sub">
            GoBongo Venture is the parent brand. Each venture below operates independently
            while benefiting from shared infrastructure... It's not a portfolio — it's an ecosystem.
          </p>
        </motion.div>

        <motion.div 
          className="eco-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Parent Row - Drops from Top */}
          <motion.div 
            className="eco-parent"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eco-parent__left">
              <img src="/logos/gobongoventureslogo.png" alt="GoBongo Venture" className="eco-parent__logo" />
              <div>
                <div className="eco-parent__name">GoBongo Venture</div>
                <div className="eco-parent__sub">Parent Holding Company · Delaware, USA · Est. 2017</div>
              </div>
            </div>
            <div className="eco-parent__badge">8 Active Ventures · 7 Countries</div>
          </motion.div>

          {/* Child cells - Puzzle Logic */}
          {VENTURES.map((v) => (
            <motion.div 
              key={v.num} 
              className="eco-child"
              variants={puzzlePiece(v.dir)}
              whileHover={{ 
                backgroundColor: "var(--brand-blue-l)",
                zIndex: 10,
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              <div className="eco-child__num">{v.num}</div>
              <div className="eco-child__logo-wrap">
                <motion.img 
                  src={v.logo} 
                  alt={v.name} 
                  className="eco-child__logo" 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="eco-child__name">{v.name}</div>
              <div className="eco-child__sector">{v.sector}</div>
              <div className="eco-child__geo">
                <span className="eco-child__dot" />
                {v.geo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}