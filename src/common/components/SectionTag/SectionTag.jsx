import './SectionTag.css';

/**
 * SectionTag — reusable section label with ::before accent bar.
 * Props:
 *   color  "blue" | "gold"   default: "blue"
 */
export default function SectionTag({ children, color = 'blue' }) {
  return (
    <div className={`section-tag section-tag--${color}`}>
      {children}
    </div>
  );
}
