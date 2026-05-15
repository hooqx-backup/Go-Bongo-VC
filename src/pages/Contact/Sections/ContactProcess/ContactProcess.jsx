import { LuMailOpen, LuReply, LuCalendarCheck, LuTrendingUp, LuClock } from 'react-icons/lu';
import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactProcess.css';

const STEPS = [
  {
    num: '01',
    Icon: LuMailOpen,
    iconVariant: 'blue',
    title: 'We Read Your Message',
    desc: "Every submission is reviewed by a human not an auto-responder. We route it to the most relevant partner.",
    time: 'Within 48 hours',
    flipAxis: 'y',   // flips on Y axis
    delay: '0s',
  },
  {
    num: '02',
    Icon: LuReply,
    iconVariant: 'blue',
    title: 'Initial Response',
    desc: "You'll receive a personal response with follow-up questions or a calendar link to schedule a conversation.",
    time: 'Within 5 business days',
    flipAxis: 'x',   // flips on X axis
    delay: '-1.75s',
  },
  {
    num: '03',
    Icon: LuCalendarCheck,
    iconVariant: 'gold',
    title: 'First Conversation',
    desc: "The first call is 30 minutes with a partner directly. We come prepared. If there's a fit, you'll know fast.",
    time: 'Week 1–2',
    flipAxis: 'y',
    delay: '-3.5s',
  },
  {
    num: '04',
    Icon: LuTrendingUp,
    iconVariant: 'gold',
    title: 'We Move Forward',
    desc: "If there's a fit, you'll hear clear next steps no ghosting. We move with conviction and respect your time.",
    time: 'Week 2–3',
    flipAxis: 'x',
    delay: '-5.25s',
  },
];

export default function ContactProcess() {
  return (
    <div className="cpr-outer">
      <div className="cpr-sec">
        <RevealWrapper style={{ maxWidth: 600 }}>
          <SectionTag>What Happens Next</SectionTag>
          <h2 className="cpr-heading">
            We Move <em className="shimmer-blue">Fast.</em><br />Here&apos;s How.
          </h2>
        </RevealWrapper>

        <RevealWrapper className="cpr-steps" delay={0.2}>
          {STEPS.map((step) => (
            <div
              key={step.num}
              className={`cpr-card cpr-card--flip-${step.flipAxis}`}
              style={{ animationDelay: step.delay }}
            >
              {/* ── Front face ── */}
              <div className="cpr-card__face cpr-card__front">
                <div className="cpr-step__num">{step.num}</div>
                <div className={`cpr-step__icon cpr-step__icon--${step.iconVariant}`}>
                  <step.Icon size={26} />
                </div>
                <div className="cpr-step__title">{step.title}</div>
              </div>

              {/* ── Back face ── */}
              <div className={`cpr-card__face cpr-card__back cpr-card__back--${step.flipAxis}`}>
                <div className="cpr-back__num">{step.num}</div>
                <p className="cpr-back__desc">{step.desc}</p>
                <div className="cpr-back__time">
                  <LuClock size={13} />
                  {step.time}
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
