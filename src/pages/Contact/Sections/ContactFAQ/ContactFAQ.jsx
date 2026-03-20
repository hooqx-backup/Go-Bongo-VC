import { useState } from 'react';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../../common/components/Button/Button';
import './ContactFAQ.css';

const FAQS = [
  {
    q: 'What stage do you invest at?',
    a: 'We invest from the idea stage through Series A. Our sweet spot is pre-seed and seed — where operational support makes the biggest difference.',
  },
  {
    q: 'Do I need a warm introduction?',
    a: "No. We actively review cold inbounds. If your pitch fits our thesis, a warm intro won't change our decision. Submit through the form.",
  },
  {
    q: 'Do you only invest in UAE-based companies?',
    a: 'No. We have portfolio companies across 7 countries. Geographic location is less important than market opportunity.',
  },
  {
    q: 'What sectors do you focus on?',
    a: 'We invest across e-commerce, logistics, fintech, digital services, communication tech, and trading — sectors where we have deep operational experience.',
  },
  {
    q: 'How long does the evaluation process take?',
    a: 'From first message to a decision typically takes 4–6 weeks for founders who are a strong fit. We move fast when we see something we like.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <div className="cfaq-outer">
      <div className="cfaq-sec">
        <RevealWrapper className="cfaq-left">
          <SectionTag color="gold">Common Questions</SectionTag>
          <h2 className="cfaq-heading">
            Things People<br />Ask <em>Us</em>
          </h2>
          <p className="cfaq-sub">
            Before reaching out, check if your question is already answered here. If not, the
            form above is the fastest path to a real answer.
          </p>
          <Button variant="blue" to="/pitch">Go to Pitch Page →</Button>
        </RevealWrapper>

        <RevealWrapper className="cfaq-right" delay={0.2}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`cfaq-item${openIndex === i ? ' cfaq-item--open' : ''}`}
            >
              <button className="cfaq-q" onClick={() => toggle(i)}>
                <span className="cfaq-q__text">{faq.q}</span>
                <div className="cfaq-q__icon">+</div>
              </button>
              <div className="cfaq-a">{faq.a}</div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
