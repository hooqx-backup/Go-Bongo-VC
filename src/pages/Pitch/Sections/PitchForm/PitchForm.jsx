import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuArrowRight, LuCheck, LuMail, LuLink, LuBuilding2, LuUsers } from 'react-icons/lu';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PitchForm.css';

const SECTORS = ['E-Commerce', 'Logistics', 'IT & Digital', 'B2B Trade', 'Communications', 'Commodities', 'Other'];
const STAGES  = ['Pre-seed', 'Seed', 'Series A', 'Other'];
const SOURCES = ['LinkedIn', 'Twitter / X', 'Google Search', 'GoBongo Portfolio Company', 'Event or Conference', 'Referral', 'Other'];

const INFO_ITEMS = [
  { icon: <LuMail size={18} />, label: 'Email', value: 'pitch@gobongo.vc' },
  { icon: <LuBuilding2 size={18} />, label: 'Office', value: 'Dubai, UAE' },
  { icon: <LuUsers size={18} />, label: 'Response', value: 'Founding team reads every pitch' },
];

const PROMISE_ITEMS = [
  'Every pitch gets read — no triage team, no filter.',
  'We respond to every submission, even if it is a pass.',
  'We do not share your information without your permission.',
  'Our decision timeline is 4–6 weeks from first message.',
];

export default function PitchForm() {
  const [form, setForm] = useState({
    company: '', website: '', location: '', stage: '',
    sector: '', description: '', traction: '', whyYou: '',
    raise: '', founders: '', email: '', source: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <section className="pf-form" id="pitch-form">
      <div className="pf-form__inner">

        {/* ── Left info panel ── */}
        <RevealWrapper className="pf-left">
          <SectionTag color="gold">The Application</SectionTag>
          <h2 className="pf-left__heading">
            Start Your <em>Pitch</em>
          </h2>
          <p className="pf-left__sub">
            Fill in as much or as little as you have. We prefer a direct, honest message over a polished deck — tell us what you are building, what the traction looks like, and why you are the right team to build it.
          </p>

          <div className="pf-left__info">
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className="pf-info-item">
                <div className="pf-info-item__icon">{item.icon}</div>
                <div>
                  <div className="pf-info-item__label">{item.label}</div>
                  <div className="pf-info-item__val">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pf-left__promise">
            <div className="pf-promise__heading">What happens after you submit</div>
            <ul className="pf-promise__list">
              {PROMISE_ITEMS.map((p, i) => (
                <li key={i}>
                  <LuCheck size={13} className="pf-promise__icon" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        {/* ── Right form card ── */}
        <RevealWrapper delay={0.15} className="pf-right">
          <div className="pf-card">

            <AnimatePresence mode="wait">

              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="pf-form-body"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* ── Group 1: Company ── */}
                  <div className="pf-group">
                    <div className="pf-group__label">Company Details</div>
                    <div className="pf-row pf-row--2">
                      <div className="pf-field">
                        <label className="pf-label">Company Name <span className="pf-req">*</span></label>
                        <input className="pf-input" value={form.company} onChange={set('company')} placeholder="e.g. Tezz Logistics" required />
                      </div>
                      <div className="pf-field">
                        <label className="pf-label">HQ Location <span className="pf-req">*</span></label>
                        <input className="pf-input" value={form.location} onChange={set('location')} placeholder="e.g. Dubai, UAE" required />
                      </div>
                    </div>
                    <div className="pf-row pf-row--2">
                      <div className="pf-field">
                        <label className="pf-label">Website or Pitch Deck URL</label>
                        <div className="pf-input-wrap">
                          <LuLink size={14} className="pf-input-icon" />
                          <input className="pf-input pf-input--icon" value={form.website} onChange={set('website')} placeholder="https://" type="url" />
                        </div>
                      </div>
                      <div className="pf-field">
                        <label className="pf-label">Stage <span className="pf-req">*</span></label>
                        <select className="pf-input pf-select" value={form.stage} onChange={set('stage')} required>
                          <option value="">Select stage</option>
                          {STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">Sector <span className="pf-req">*</span></label>
                      <select className="pf-input pf-select" value={form.sector} onChange={set('sector')} required>
                        <option value="">Select primary sector</option>
                        {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* ── Group 2: The Pitch ── */}
                  <div className="pf-group">
                    <div className="pf-group__label">The Pitch</div>
                    <div className="pf-field">
                      <label className="pf-label">What are you building? <span className="pf-req">*</span></label>
                      <textarea
                        className="pf-textarea"
                        value={form.description}
                        onChange={set('description')}
                        placeholder="Problem + solution in one paragraph. Be specific."
                        rows={4}
                        required
                      />
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">What is your traction? <span className="pf-req">*</span></label>
                      <textarea
                        className="pf-textarea"
                        value={form.traction}
                        onChange={set('traction')}
                        placeholder="Revenue, users, GMV, signed contracts — give us numbers."
                        rows={3}
                        required
                      />
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">Why are you the right team to build this?</label>
                      <textarea
                        className="pf-textarea"
                        value={form.whyYou}
                        onChange={set('whyYou')}
                        placeholder="Relevant operator experience, domain knowledge, lived problem."
                        rows={3}
                      />
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">How much are you raising?</label>
                      <input className="pf-input" value={form.raise} onChange={set('raise')} placeholder="e.g. $250,000 pre-seed" />
                    </div>
                  </div>

                  {/* ── Group 3: Contact ── */}
                  <div className="pf-group pf-group--last">
                    <div className="pf-group__label">Contact</div>
                    <div className="pf-row pf-row--2">
                      <div className="pf-field">
                        <label className="pf-label">Founder Name(s) <span className="pf-req">*</span></label>
                        <div className="pf-input-wrap">
                          <LuUsers size={14} className="pf-input-icon" />
                          <input className="pf-input pf-input--icon" value={form.founders} onChange={set('founders')} placeholder="Full names" required />
                        </div>
                      </div>
                      <div className="pf-field">
                        <label className="pf-label">Email <span className="pf-req">*</span></label>
                        <div className="pf-input-wrap">
                          <LuMail size={14} className="pf-input-icon" />
                          <input className="pf-input pf-input--icon" value={form.email} onChange={set('email')} placeholder="you@company.com" type="email" required />
                        </div>
                      </div>
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">How did you hear about us?</label>
                      <select className="pf-input pf-select" value={form.source} onChange={set('source')}>
                        <option value="">Select an option</option>
                        {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="pf-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="pf-submit__loading" />
                    ) : (
                      <>Submit Your Pitch <LuArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="pf-form__note">
                    <span className="pf-req">*</span> Required fields. We will respond within 5 business days.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="pf-success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="pf-success__icon">
                    <LuCheck size={28} />
                  </div>
                  <h3 className="pf-success__title">Pitch Received</h3>
                  <p className="pf-success__sub">
                    We have received your submission. The founding team reads every pitch personally.
                    You will hear from us within 5 business days — even if the answer is a pass.
                  </p>
                  <p className="pf-success__email">{form.email}</p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}
