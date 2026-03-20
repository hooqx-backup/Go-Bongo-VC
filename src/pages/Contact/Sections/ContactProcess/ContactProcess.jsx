import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactProcess.css';

const STEPS = [
  {
    num: '01',
    icon: '💬',
    title: 'We Read Your Message',
    desc: "Every submission is reviewed by a human — not an auto-responder. We route it to the most relevant partner.",
    time: 'Within 48 hours',
  },
  {
    num: '02',
    icon: '📨',
    title: 'Initial Response',
    desc: "You'll receive a personal response with follow-up questions or a calendar link to schedule a conversation.",
    time: 'Within 5 business days',
  },
  {
    num: '03',
    icon: '🤝',
    title: 'First Conversation',
    desc: "The first call is 30 minutes with a partner directly. We come prepared. If there's a fit, you'll know fast.",
    time: 'Week 1–2',
  },
];

export default function ContactProcess() {
  return (
    <div className="cpr-outer">
      <div className="cpr-sec">
        <RevealWrapper style={{ maxWidth: 600 }}>
          <SectionTag>What Happens Next</SectionTag>
          <h2 className="cpr-heading">
            We Move <em>Fast.</em><br />Here&apos;s How.
          </h2>
        </RevealWrapper>

        <RevealWrapper className="cpr-steps" delay={0.2}>
          {STEPS.map((step) => (
            <div key={step.num} className="cpr-step">
              <div className="cpr-step__num">{step.num}</div>
              <div className="cpr-step__icon">{step.icon}</div>
              <div className="cpr-step__title">{step.title}</div>
              <p className="cpr-step__desc">{step.desc}</p>
              <div className="cpr-step__time">⏱ {step.time}</div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
