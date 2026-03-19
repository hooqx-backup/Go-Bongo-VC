import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Global Button
 *
 * Usage:
 *   <Button to="/about">Internal link</Button>        — React Router navigation
 *   <Button href="https://x.com">External</Button>   — opens in new tab
 *   <Button onClick={fn}>Action</Button>              — plain button
 *
 * Props:
 *   variant  "primary" | "ghost"   default: "primary"
 *   size     "sm" | "md" | "lg"    default: "md"
 *   to       string  — internal route (React Router Link)
 *   href     string  — external URL (anchor tag)
 *   disabled boolean
 *   className string — extra classes
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  disabled = false,
  className = "",
  ...props
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
