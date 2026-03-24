import RevealWrapper from '../../../../common/components/RevealWrapper/RevealWrapper';
import Button from '../../../../common/components/Button/Button';
import './PitchCTA.css';

export default function PitchCTA() {
  return (
    <section className="pctx-cta">
      <div className="pctx-cta__mesh" />

      <div className="pctx-cta__inner">

        <RevealWrapper className="pctx-cta__content">

          <div className="pctx-cta__eyebrow">A Note From the Founders</div>

          <blockquote className="pctx-cta__quote">
            <div className="pctx-cta__quote-mark" aria-hidden="true">&ldquo;</div>
            <p>
              A pass from us is not a no forever. We pass on many great companies — sometimes the sector does not
              fit our current thesis, sometimes the timing is wrong, sometimes we simply do not have the bandwidth
              to be the partner a company deserves. If we pass, try again. We mean it.
            </p>
            <cite className="pctx-cta__cite">
              <img src="/gobongoventureslogo.png" className="pctx-cta__logo" alt="GoBongo Ventures" />
              <span>The GoBongo Ventures Team</span>
            </cite>
          </blockquote>

          <div className="pctx-cta__actions">
            <a href="#pitch-form" className="pctx-btn-primary">
              Submit Your Pitch →
            </a>
            <Button variant="ghost" to="/contact">Reach Out Directly</Button>
          </div>

        </RevealWrapper>

      </div>
    </section>
  );
}
