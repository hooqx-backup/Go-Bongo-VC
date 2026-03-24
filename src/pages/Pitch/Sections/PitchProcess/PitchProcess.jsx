import { motion } from 'framer-motion';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import './PitchProcess.css';

const STEPS = [
  {
    num: '01',
    title: 'First Message',
    time: 'Day 0 – 3',
    color: 'blue',
    body: 'Every pitch that comes through gets read by the founding team directly. We look for three things: a clear problem + solution (one paragraph), a number that proves something, and evidence the founder knows their sector.',
  },
  {
    num: '02',
    title: 'First Call',
    time: 'Week 1 – 2',
    color: 'gold',
    body: 'A 45-minute conversation, not a pitch rehearsal. We ask uncomfortable questions on purpose — we want to understand how you think about your market, not how polished your narrative is.',
  },
  {
    num: '03',
    title: 'Deep Dive',
    time: 'Week 2 – 4',
    color: 'blue',
    body: 'We speak to 3–5 of your customers or users directly, without you present. We review all available financials and speak to domain experts in your sector before forming a view.',
  },
  {
    num: '04',
    title: 'Term Sheet',
    time: 'Week 4 – 6',
    color: 'gold',
    body: 'If diligence is clean, we move to a term sheet within the same week. We do not believe in extended exclusivity or prolonged negotiations. Founders deserve to know quickly.',
  },
];

export default function PitchProcess() {
  return (
    <section className="ppr-process">
      <div className="ppr-process__inner">

        <RevealWrapper className="ppr-process__header">
          <SectionTag color="blue">How We Decide</SectionTag>
          <h2 className="ppr-process__heading">
            From Message to <em>Term Sheet</em>
          </h2>
          <p className="ppr-process__sub">
            We have a structured, four-stage process designed to be transparent and fast. Most decisions happen within 4–6 weeks of your first message. Here is exactly what to expect.
          </p>
        </RevealWrapper>

        {/* Step grid */}
        <div className="ppr-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={`ppr-step ppr-step--${step.color}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Connector — arrow between steps */}
              {i < STEPS.length - 1 && (
                <div className="ppr-connector" aria-hidden="true">→</div>
              )}

              <div className="ppr-step__top">
                <span className="ppr-step__num">{step.num}</span>
                <span className="ppr-step__time">{step.time}</span>
              </div>
              <h3 className="ppr-step__title">{step.title}</h3>
              <p className="ppr-step__body">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <RevealWrapper delay={0.3} className="ppr-note">
          <p>
            We pass on many great companies. Sometimes the sector does not fit our thesis. Sometimes timing is wrong.
            A pass from GoBongo is almost always a constraint on our side&nbsp;—&nbsp;not a judgement on your idea.
          </p>
        </RevealWrapper>

      </div>
    </section>
  );
}
