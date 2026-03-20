import { useState, useEffect } from 'react';
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
    icon: '✉',
    label: 'General Enquiries',
    value: 'hello@gobongo.vc',
    sub: "For everything that doesn't fit a category",
  },
  {
    id: 'pitch',
    variant: 'gold',
    icon: '🚀',
    label: 'Founder Pitches',
    value: 'ventures@gobongo.com',
    sub: 'Reviewed by a partner, not a junior analyst',
  },
  {
    id: 'press',
    variant: 'teal',
    icon: '📰',
    label: 'Press & Media',
    value: 'press@gobongo.vc',
    sub: 'Response within 24 hours for breaking news',
  },
];

export default function ContactForm({ activeSubject }) {
  const [selectedSubject, setSelectedSubject] = useState('Pitching a startup');

  useEffect(() => {
    if (activeSubject) setSelectedSubject(activeSubject);
  }, [activeSubject]);

  return (
    <div className="cf-outer" id="contact-form">
      <div className="cf-sec">
        <RevealWrapper className="cf-left">
          <SectionTag>Write to Us</SectionTag>
          <h2 className="cf-heading">
            We Read<br /><em>Every Message.</em>
          </h2>
          <p className="cf-sub">
            Fill in the form and our team will route your message to the right person. No
            gatekeeping &mdash; just a genuine review by someone who cares about what
            you&apos;re building.
          </p>
          <div className="cf-info-list">
            {CONTACT_INFO.map((item) => (
              <div key={item.id} className="cf-info-item">
                <div className={`cf-info-icon cf-info-icon--${item.variant}`}>{item.icon}</div>
                <div>
                  <div className="cf-info-label">{item.label}</div>
                  <div className="cf-info-value">{item.value}</div>
                  <div className="cf-info-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="cf-form-wrap" delay={0.2}>
          <div className="cf-form">
            <div className="cf-form-header">
              <div className="cf-form-title">Send us a message</div>
              <div className="cf-form-note-top">
                All fields marked <span className="cf-required">*</span> are required.
              </div>
            </div>

            <div className="cf-field cf-field--full">
              <label className="cf-label">
                I&apos;m reaching out about <span className="cf-required">*</span>
              </label>
              <div className="cf-subjects">
                {SUBJECTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`cf-subject-btn${selectedSubject === s ? ' cf-subject-btn--on' : ''}`}
                    onClick={() => setSelectedSubject(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-fname">
                  First Name <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-fname" type="text" placeholder="Sarah" />
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-lname">
                  Last Name <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-lname" type="text" placeholder="Al-Hassan" />
              </div>
            </div>

            <div className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-email">
                  Email Address <span className="cf-required">*</span>
                </label>
                <input className="cf-input" id="cf-email" type="email" placeholder="sarah@company.com" />
              </div>
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-company">Company / Startup</label>
                <input className="cf-input" id="cf-company" type="text" placeholder="Your company name" />
              </div>
            </div>

            <div className="cf-grid-2">
              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-role">Your Role</label>
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
                <label className="cf-label" htmlFor="cf-country">Country</label>
                <select className="cf-select" id="cf-country" defaultValue="">
                  <option value="" disabled>Select country</option>
                  <option>United Arab Emirates</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="cf-field cf-field--full">
              <label className="cf-label" htmlFor="cf-message">
                Your Message <span className="cf-required">*</span>
              </label>
              <textarea
                className="cf-textarea"
                id="cf-message"
                placeholder="Tell us about what you're building, what you're looking for, or what you'd like to discuss."
              />
            </div>

            <div className="cf-submit-row">
              <div className="cf-privacy-note">
                By submitting, you agree to our Privacy Policy. We do not share your info.
              </div>
              <button type="submit" className="cf-submit-btn">Send Message →</button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}
