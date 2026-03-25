import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RotateCcw, Search } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="nf-wrapper">
      <div className="nf-grid-bg" />

      <div className="nf-blob nf-blob-1" />
      <div className="nf-blob nf-blob-2" />

      <div className="nf-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nf-badge"
          style={{marginTop:"-40px"}}
        >
          <span className="nf-dot" /> ERROR 404 | PAGE NOT FOUND
        </motion.div>

        <motion.h1
          className="nf-giant-text -mt-20"
          style={{marginTop:"-50px"}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="nf-subtitle">Oops, this page does not exist</h2>
          <p className="nf-description">
            The URL may have been moved, renamed, or never existed. Let us help you find your way back.
          </p>
        </motion.div>

        <motion.div
          className="nf-search-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Search size={18} className="nf-search-icon" />
          <input type="text" placeholder="Search for pages, docs, products..." />
          <div className="nf-shortcut">Ctrl+K</div>
        </motion.div>

        <motion.div
          className="nf-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/" className="nf-btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <button type="button" onClick={() => window.history.back()} className="nf-btn-secondary">
            <RotateCcw size={18} /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
