import SectionTag from "../../../../common/components/SectionTag/SectionTag";
import RevealWrapper from "../../../../common/components/RevealWrapper/RevealWrapper";
import "./OurStory.css";
import { motion } from "framer-motion";
import { Globe, Settings, Share2, Building2 } from "lucide-react";

const STORY_CARDS = [
  {
    variant: "blue",
    icon: <Globe size={24} strokeWidth={1.5} />,
    title: "Global from Day One",
    desc: "We never thought small. From our first venture, we designed for cross-border scale UAE, India, Bangladesh, USA, Canada, UK, Germany.",
  },
  {
    variant: "",
    icon: <Settings size={24} strokeWidth={1.5} />,
    title: "Operators, Not Observers",
    desc: "Every founding partner has built a company before. We don't theorise about scale we've lived it, failed at parts of it, and learned what actually works.",
  },
  {
    variant: "gold",
    icon: <Share2 size={24} strokeWidth={1.5} />,
    title: "Ecosystem Over Portfolio",
    desc: "We structure our investments so companies create value for each other shared supply chains, shared customers, shared knowledge.",
  },
  {
    variant: "",
    icon: <Building2 size={24} strokeWidth={1.5} />,
    title: "Dubai as a Key Hub",
    desc: "Our Dubai office isn't just an address. Dubai's 0% tax and position between East and West is a structural advantage we leverage for every portfolio company.",
  },
];

// Animation Variants
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 30, rotateY: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};
export default function OurStory() {
  return (
    <div className="story-outer" id="story">
      <div className="story-sec">
        {/* ── Left ── */}
        <RevealWrapper className="story-left">
          <SectionTag>Our Story</SectionTag>
          <div className="story-year">2017</div>
          <h2 className="story-h">
            Founded in Delaware.
            <br />
            Built for the <em>World.</em>
          </h2>
          <blockquote className="story-pull">
            "Founded with a conviction that the next wave of global companies
            would be built outside Silicon Valley in markets that move faster,
            operate leaner, and hunger harder."
          </blockquote>
          <p className="story-p">
            GoBongo Venture was incorporated in Delaware in 2017 by a team of operators who
            had already built, scaled, and navigated companies across South
            Asia, the Middle East, and Europe. We knew firsthand what founders
            actually need not just capital, but embedded operational support
            from people who've been in the trenches.
          </p>
          <p className="story-p">
            We started with a simple belief: that the most valuable companies of
            the next decade wouldn't come from the usual places. They'd come
            from markets that most investors overlooked, where digital
            transformation was still early, where operational excellence was
            rare, and where the founders building were hungrier and more
            resilient than anywhere else.
          </p>
          <p className="story-p">
            Three years in, we've built 11 ventures across 7 countries spanning 6
            industries. What began as a holding group has become a genuine
            ecosystem, where each company makes the others stronger.
          </p>
        </RevealWrapper>

        {/* ── Right ── */}
        <motion.div
          className="story-right"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STORY_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={cardItemVariants}
              whileHover={{
                x: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className={`story-card${card.variant ? " story-card--" + card.variant : ""}`}
            >
              <div className="card-shine" /> {/* New Shine Layer */}
              <div className="story-card__icon">{card.icon}</div>
              <div className="story-card__title">{card.title}</div>
              <div className="story-card__desc">{card.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
