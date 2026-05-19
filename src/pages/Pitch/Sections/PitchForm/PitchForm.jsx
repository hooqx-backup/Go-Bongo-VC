import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuArrowRight, LuCheck, LuMail, LuLink, LuBuilding2, LuUsers, LuClock, LuTrendingUp, LuShieldCheck, LuPhone } from 'react-icons/lu';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PitchForm.css';

const SECTORS = ['E-Commerce', 'Logistics', 'IT & Digital', 'B2B Trade', 'Communications', 'Commodities', 'Other'];
const STAGES  = ['Pre-seed', 'Seed', 'Series A', 'Other'];
const SOURCES = ['LinkedIn', 'Twitter / X', 'Google Search', 'GoBongo Portfolio Company', 'Event or Conference', 'Referral', 'Other'];

/* Negative delays = already mid-rise on page load → fills full div immediately */
const BUBBLES = [
  { size: 8,  left: 5,  delay: -2.0, dur: 5, drift:  10 },
  { size: 5,  left: 18, delay: -4.5, dur: 7, drift:  -8 },
  { size: 12, left: 32, delay: -1.5, dur: 6, drift:  14 },
  { size: 7,  left: 48, delay: -3.8, dur: 5, drift: -12 },
  { size: 4,  left: 62, delay: -0.8, dur: 6, drift:   8 },
  { size: 10, left: 75, delay: -5.2, dur: 7, drift: -10 },
  { size: 6,  left: 88, delay: -2.5, dur: 5, drift:  12 },
  { size: 9,  left: 25, delay: -4.0, dur: 6, drift:  -6 },
  { size: 5,  left: 55, delay: -1.2, dur: 7, drift:  16 },
  { size: 13, left: 70, delay: -3.2, dur: 5, drift: -14 },
  { size: 7,  left: 10, delay: 0,    dur: 6, drift:   8 },
  { size: 5,  left: 38, delay: 1.2,  dur: 5, drift: -10 },
  { size: 11, left: 52, delay: 0.6,  dur: 7, drift:  12 },
  { size: 6,  left: 65, delay: 2.0,  dur: 6, drift:  -8 },
  { size: 4,  left: 80, delay: 0.4,  dur: 5, drift:  14 },
  { size: 9,  left: 93, delay: 1.8,  dur: 7, drift: -12 },
  { size: 7,  left: 28, delay: 3.0,  dur: 6, drift:   6 },
  { size: 5,  left: 42, delay: 1.5,  dur: 5, drift: -16 },
  { size: 8,  left: 58, delay: 2.5,  dur: 7, drift:  10 },
  { size: 6,  left: 72, delay: 0.8,  dur: 6, drift:  -8 },
  { size: 10, left: 15, delay: 3.5,  dur: 5, drift:  12 },
  { size: 4,  left: 85, delay: 2.2,  dur: 6, drift: -14 },
];

const INFO_ITEMS = [
  { icon: <LuMail size={18} />, label: 'Email', value: 'pitch@gobongo.vc' },
  { icon: <LuBuilding2 size={18} />, label: 'HQ', value: 'Delaware, USA' },
  { icon: <LuUsers size={18} />, label: 'Response', value: 'Founding team reviews every application' },
];

const PROMISE_ITEMS = [
  'Every application gets read no triage team, no filter.',
  'We respond to every submission, even if it is a pass.',
  'We do not share your information without your permission.',
  'Our decision timeline is 4–6 weeks from first message.',
];

export default function PitchForm() {
  const [form, setForm] = useState({
    company: '', website: '', location: '', stage: '',
    sector: '', description: '', traction: '', whyYou: '',
    raise: '', founders: '', email: '', phone: '', source: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [spot, setSpot]           = useState({ x: 50, y: 50 });
  const [spotOn, setSpotOn]       = useState(false);

  function handleCardMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - r.left) / r.width)  * 100,
      y: ((e.clientY - r.top)  / r.height) * 100,
    });
  }

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const WHATSAPP_NUMBER = '917003634890';

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const now = new Date().toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    });

    const lines = [
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*GOBONGO VENTURES*`,
      `_New Pitch Application_`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `*COMPANY*`,
      `*Name:*     ${form.company}`,
      `*Location:* ${form.location}`,
      `*Stage:*    ${form.stage}`,
      `*Sector:*   ${form.sector}`,
      form.website ? `*Deck/URL:*  ${form.website}` : null,
      ``,
      `*WHAT THEY'RE BUILDING*`,
      `"${form.description}"`,
      ``,
      `*TRACTION*`,
      `"${form.traction}"`,
      form.whyYou ? `\n*WHY THIS TEAM*\n"${form.whyYou}"` : null,
      form.raise   ? `\n*RAISING*\n${form.raise}`          : null,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*CONTACT*`,
      `*Founders:* ${form.founders}`,
      `*Email:*    ${form.email}`,
      form.phone   ? `*Phone:*    ${form.phone}`   : null,
      form.source  ? `*Source:*   ${form.source}`  : null,
      ``,
      `${now}`,
      
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ].filter((l) => l !== null).join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
      '_blank',
    );

    setTimeout(() => { setLoading(false); setSubmitted(true); }, 400);
  }

  return (
    <section className="pf-form" id="pitch-form">
      <div className="pf-form__inner">

        {/* ── Left info panel ── */}
        <RevealWrapper className="pf-left">

          {/* Ocean: waves + bubbles */}
          <div className="pf-ocean" aria-hidden="true">
            <div className="pf-waves">
              <div className="pf-wave pf-wave--1" />
              <div className="pf-wave pf-wave--2" />
              <div className="pf-wave pf-wave--3" />
            </div>
            {BUBBLES.map((b, i) => (
              <div
                key={i}
                className="pf-bubble"
                style={{
                  width:  b.size,
                  height: b.size,
                  left:   `${b.left}%`,
                  animationDelay:    `${b.delay}s`,
                  animationDuration: `${b.dur}s`,
                  '--drift': `${b.drift}px`,
                }}
              />
            ))}
          </div>

          {/* Content sits above ocean layer */}
          <div className="pf-left__content">
            <SectionTag color="gold">The Application</SectionTag>
            <h2 className="pf-left__heading">
              Start Your <em className="shimmer-gold">Journey</em>
            </h2>
            <p className="pf-left__sub">
              Fill in as much or as little as you have. We prefer a direct, honest message over a polished deck tell us what you are building, what the traction looks like, and why you are the right team to build it.
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

            {/* Floating stat badges */}
            <div className="pf-left__badges">
              <motion.div
                className="pf-badge pf-badge--green"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                <span className="pf-badge__pulse" />
                Applications Open
              </motion.div>
              <motion.div
                className="pf-badge pf-badge--blue"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                <LuClock size={12} />
                5-day response
              </motion.div>
              <motion.div
                className="pf-badge pf-badge--gold"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.6 }}
              >
                <LuTrendingUp size={12} />
                8 ventures funded
              </motion.div>
              <motion.div
                className="pf-badge pf-badge--dark"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.75 }}
              >
                <LuShieldCheck size={12} />
                No data shared
              </motion.div>
            </div>
          </div>{/* end pf-left__content */}
        </RevealWrapper>

        {/* ── Right form card ── */}
        <RevealWrapper delay={0.15} className="pf-right">
          <div
            className="pf-card"
            onMouseMove={handleCardMove}
            onMouseEnter={() => setSpotOn(true)}
            onMouseLeave={() => setSpotOn(false)}
          >
            {/* cursor spotlight */}
            <div
              className="pf-card__spotlight"
              style={{
                opacity: spotOn ? 1 : 0,
                background: `radial-gradient(circle 320px at ${spot.x}% ${spot.y}%, rgba(26,86,232,0.09), transparent 70%)`,
              }}
            />

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
                        <label className="pf-label">Website or Deck URL</label>
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
                    <div className="pf-group__label">Your Vision</div>
                    <div className="pf-field">
                      <label className="pf-label">What are you building? <span className="pf-req">*</span></label>
                      <textarea
                        className="pf-textarea"
                        value={form.description}
                        onChange={set('description')}
                        placeholder="Problem + solution in one paragraph. Be specific."
                        rows={2}
                        required
                      />
                    </div>
                    <div className="pf-field">
                      <label className="pf-label">What is your traction? <span className="pf-req">*</span></label>
                      <textarea
                        className="pf-textarea"
                        value={form.traction}
                        onChange={set('traction')}
                        placeholder="Revenue, users, GMV, signed contracts - give us numbers."
                        rows={2}
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
                        rows={2}
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
                      <label className="pf-label">Phone Number</label>
                      <div className="pf-input-wrap">
                        <LuPhone size={14} className="pf-input-icon" />
                        <input className="pf-input pf-input--icon" value={form.phone} onChange={set('phone')} placeholder="+971 50 000 0000" type="tel" />
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
                      <>Create a Unicorn <LuArrowRight size={16} /></>
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
                  <h3 className="pf-success__title">Application Received</h3>
                  <p className="pf-success__sub">
                    We have received your submission. The founding team reviews every application personally.
                    You will hear from us within 5 business days even if the answer is a pass.
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
