import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LuMail, LuRocket, LuNewspaper, LuSend,
  LuUser, LuAtSign, LuBuilding2, LuBriefcase,
  LuGlobe, LuMessageSquare,
} from 'react-icons/lu';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactForm.css';

const SUBJECTS = [
  'Pitching a startup',
  'Partnership',
  'Press / Media',
  'General enquiry',
];

const CONTACT_INFO = [
  {
    id: 'general',
    variant: 'blue',
    Icon: LuMail,
    iconColor: 'var(--brand-blue)',
    label: 'General Enquiries',
    value: 'hello@gobongo.vc',
    sub: "For everything that doesn't fit a category",
  },
  {
    id: 'pitch',
    variant: 'gold',
    Icon: LuRocket,
    iconColor: 'var(--gold)',
    label: 'Founder Pitches',
    value: 'ventures@gobongo.com',
    sub: 'Reviewed by a partner, not a junior analyst',
  },
  {
    id: 'press',
    variant: 'teal',
    Icon: LuNewspaper,
    iconColor: '#0D9488',
    label: 'Press & Media',
    value: 'press@gobongo.vc',
    sub: 'Response within 24 hours for breaking news',
  },
];

// Parent: triggers staggered reveal of all child rows
const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

// Each row slides in from the right, one after the previous
const formRowVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function ContactForm({ activeSubject }) {
  const [selectedSubject, setSelectedSubject] = useState('Pitching a startup');

  useEffect(() => {
    if (activeSubject) setSelectedSubject(activeSubject);
  }, [activeSubject]);

  return (
    <div className="cf-outer" id="contact-form">
      {/* Background orbs */}
      <div className="cf-orb cf-orb--1" />
      <div className="cf-orb cf-orb--2" />

      <div className="cf-sec">
        {/* ── Left column ── */}
        <RevealWrapper className="cf-left">
          <SectionTag>Write to Us</SectionTag>
          <h2 className="cf-heading">
            We Read<br /><em className="shimmer-blue">Every Message.</em>
          </h2>
          <p className="cf-sub">
            Fill in the form and our team will route your message to the right person. No
            gatekeeping &mdash; just a genuine review by someone who cares about what
            you&apos;re building.
          </p>

          <div className="cf-info-list">
            {CONTACT_INFO.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`cf-info-item cf-info-item--${item.variant}`}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: idx * 0.13, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
              >
                <motion.div
                  className={`cf-info-icon cf-info-icon--${item.variant}`}
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                >
                  <item.Icon size={20} color={item.iconColor} />
                </motion.div>
                <div>
                  <div className="cf-info-label">{item.label}</div>
                  <div className="cf-info-value">{item.value}</div>
                  <div className="cf-info-sub">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        {/* ── Form card ── */}
        <motion.div
          className="cf-form-wrap"
          initial={{ opacity: 0, x: 48, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.div
            className="cf-form"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >

            {/* Row 1 — header */}
            <motion.div variants={formRowVariants} className="cf-form-header">
              <div className="cf-form-title">Send us a message</div>
              <div className="cf-form-note-top">
                All fields marked <span className="cf-required">*</span> are required.
              </div>
            </motion.div>

            {/* Row 2 — subject pills */}
            <motion.div variants={formRowVariants} className="cf-field cf-field--full">
              <label className="cf-label">
                I&apos;m reaching out about <span className="cf-required">*</span>
              </label>
              <div className="cf-subjects">
                {SUBJECTS.map((s) => (
                  <motion.button
                    key={s}
                    type="button"
                    className={`cf-subject-btn${selectedSubject === s ? ' cf-subject-btn--on' : ''}`}
                    onClick={() => setSelectedSubject(s)}
                    whileTap={{ scale: 0.94 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                  >
                    {selectedSubject === s && (
                      <motion.span
                        layoutId="subject-pill-bg"
                        className="cf-subject-active-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="cf-subject-text">{s}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Row 3 — names */}
            <motion.div variants={formRowVariants} className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-fname">
                  <LuUser size={12} className="cf-label-icon" />
                  First Name <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-fname" type="text" placeholder="Sarah" />
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-lname">
                  <LuUser size={12} className="cf-label-icon" />
                  Last Name <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-lname" type="text" placeholder="Al-Hassan" />
              </div>
            </motion.div>

            {/* Row 4 — email + company */}
            <motion.div variants={formRowVariants} className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-email">
                  <LuAtSign size={12} className="cf-label-icon" />
                  Email Address <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-email" type="email" placeholder="sarah@company.com" />
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-company">
                  <LuBuilding2 size={12} className="cf-label-icon" />
                  Company / Startup
                </label>
                <input className="cf-input" id="cf-company" type="text" placeholder="Your company name" />
              </div>
            </motion.div>

            {/* Row 5 — role + country */}
            <motion.div variants={formRowVariants} className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-role">
                  <LuBriefcase size={12} className="cf-label-icon" />
                  Your Role
                </label>
                <select className="cf-select" id="cf-role" defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option>Founder / Co-founder</option>
                  <option>Investor / LP</option>
                  <option>Corporate Partner</option>
                  <option>Journalist / Researcher</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-country">
                  <LuGlobe size={12} className="cf-label-icon" />
                  Country
                </label>
                <select className="cf-select" id="cf-country" defaultValue="">
                  <option value="" disabled>Select country</option>
                  <option>United Arab Emirates</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>
            </motion.div>

            {/* Row 6 — message */}
            <motion.div variants={formRowVariants} className="cf-field cf-field--full">
              <label className="cf-label" htmlFor="cf-message">
                <LuMessageSquare size={12} className="cf-label-icon" />
                Your Message <span className="cf-required">*</span>
              </label>
              <textarea
                className="cf-textarea"
                id="cf-message"
                placeholder="Tell us about what you're building, what you're looking for, or what you'd like to discuss."
              />
            </motion.div>

            {/* Row 7 — submit */}
            <motion.div variants={formRowVariants} className="cf-submit-row">
              <div className="cf-privacy-note">
                By submitting, you agree to our Privacy Policy. We do not share your info.
              </div>
              <motion.button
                type="submit"
                className="cf-submit-btn"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              >
                Send Message
                <motion.span
                  className="cf-submit-icon"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <LuSend size={16} />
                </motion.span>
              </motion.button>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
