import { useState } from 'react';
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
    body: 'Every application that comes through gets read by the founding team directly. We look for a clear problem and solution in one paragraph, a number that proves real traction, and evidence the founder knows their sector.',
    bullets: [
      'One paragraph: clear problem + solution',
      'A number that proves real traction',
      'Evidence you know your sector deeply',
    ],
    next: 'You hear back within 3 business days — always.',
  },
  {
    num: '02',
    title: 'First Call',
    time: 'Week 1 – 2',
    color: 'gold',
    body: 'A 45-minute conversation, not a rehearsal. We ask uncomfortable questions on purpose — we want to understand how you think about your market, not how polished your narrative is.',
    bullets: [
      '45 minutes, no slides required',
      'We challenge your market assumptions',
      'We share our honest first read openly',
    ],
    next: 'We decide on deep dive within 48 hours of the call.',
  },
  {
    num: '03',
    title: 'Deep Dive',
    time: 'Week 2 – 4',
    color: 'blue',
    body: 'We speak to 3–5 of your customers or users directly, without you present. We review all available financials and speak to domain experts in your sector before forming a view.',
    bullets: [
      '3–5 customer or user interviews',
      'Full financial model review',
      'Domain expert calls in your sector',
    ],
    next: 'We share our full diligence summary with you.',
  },
  {
    num: '04',
    title: 'Term Sheet',
    time: 'Week 4 – 6',
    color: 'gold',
    body: 'If diligence is clean, we move to a term sheet within the same week. We do not believe in extended exclusivity or prolonged negotiations. Founders deserve to know quickly.',
    bullets: [
      'Term sheet issued same week as decision',
      'No extended exclusivity periods',
      'Plain-language terms, no surprises',
    ],
    next: 'Close typically within 2–3 weeks of term sheet.',
  },
];

export default function PitchProcess() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="ppr-process">
      <div className="ppr-process__inner">

        <RevealWrapper className="ppr-process__header">
          <SectionTag color="blue">How We Decide</SectionTag>
          <h2 className="ppr-process__heading">
            From Message to <em className="shimmer-blue">Term Sheet</em>
          </h2>
          <p className="ppr-process__sub">
            We have a structured, four-stage process designed to be transparent and fast. Most decisions happen within 4–6 weeks of your first message. Here is exactly what to expect.
          </p>
        </RevealWrapper>

        {/* Accordion */}
        <div className="ppr-accordion" onMouseLeave={() => setHovered(null)}>
          {STEPS.map((step, i) => {
            const isActive   = hovered === i;
            const isInactive = hovered !== null && !isActive;
            /* reverse stagger + alternating up/down:
               card 04 (reverseIdx=0) → from bottom, delay 0s
               card 03 (reverseIdx=1) → from top,   delay 0.13s
               card 02 (reverseIdx=2) → from bottom, delay 0.26s
               card 01 (reverseIdx=3) → from top,   delay 0.39s */
            const reverseIdx = STEPS.length - 1 - i;
            const yDir       = reverseIdx % 2 === 0 ? 80 : -80;
            const delay      = reverseIdx * 0.13;

            return (
              <motion.div
                key={step.num}
                className={`ppr-panel ppr-panel--${step.color}${isActive ? ' ppr-panel--active' : ''}${isInactive ? ' ppr-panel--inactive' : ''}`}
                onMouseEnter={() => setHovered(i)}
                initial={{ opacity: 0, y: yDir }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Collapsed strip */}
                <div className="ppr-panel__collapsed">
                  <span className={`ppr-panel__dot ppr-panel__dot--${step.color}`} />
                  <span className="ppr-panel__num-bg">{step.num}</span>
                  <span className="ppr-panel__label-vert">{step.title}</span>
                </div>

                {/* Expanded content */}
                <div className="ppr-panel__expanded">
                  <div className="ppr-panel__top">
                    <span className="ppr-panel__num">{step.num}</span>
                    <span className="ppr-panel__time">{step.time}</span>
                  </div>
                  <h3 className="ppr-panel__title">{step.title}</h3>
                  <p className="ppr-panel__body">{step.body}</p>
                  <ul className="ppr-panel__bullets">
                    {step.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="ppr-panel__next">
                    <span className="ppr-panel__next-label">What&apos;s next</span>
                    <span className="ppr-panel__next-text">{step.next}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
