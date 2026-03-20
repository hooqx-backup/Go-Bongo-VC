import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import './ContactSocial.css';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Twitter / X', icon: 'X', href: '#' },
];

export default function ContactSocial() {
  return (
    <div className="csoc-outer">
      <RevealWrapper className="csoc-sec">
        <div className="csoc-text">
          <div className="csoc-label">Follow the Journey</div>
          <div className="csoc-title">We share our thinking publicly.</div>
        </div>
        <div className="csoc-icons">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="csoc-btn">
              <span className="csoc-btn__icon">{s.icon}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </RevealWrapper>
    </div>
  );
}
