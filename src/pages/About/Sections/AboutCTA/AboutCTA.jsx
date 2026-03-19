import SectionTag from '../../../../common/components/SectionTag/SectionTag';
import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../../common/components/Button/Button';
import './AboutCTA.css';

export default function AboutCTA() {
  return (
    <div className="about-cta-outer">
      <RevealWrapper className="about-cta-sec">
        <SectionTag color="gold">What's Next</SectionTag>
        <h2 className="about-cta-h">
          Ready to Build Something <em>Together?</em>
        </h2>
        <p className="about-cta-sub">
          Whether you're a founder with a bold idea, a partner looking to collaborate,
          or an investor interested in the GoBongo ecosystem — we want to hear from you.
        </p>
        <div className="about-cta-btns">
          <Button variant="blue" to="/pitch" size="lg">Pitch Your Startup →</Button>
          <Button variant="ghost" to="/contact" size="lg">Get in Touch</Button>
        </div>
      </RevealWrapper>
    </div>
  );
}
