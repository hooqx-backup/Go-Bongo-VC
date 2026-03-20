import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Building2,
  Globe,
  Users,
  CalendarDays,
  Trophy,
} from "lucide-react";
import "./MetricsStrip.css";

const METRICS = [
  { Icon: LayoutGrid,   value: "6",    suffix: "",  label: "Active Sectors",      color: "#1A56E8" },
  { Icon: Building2,    value: "8",    suffix: "+", label: "Portfolio Companies", color: "#0D9488" },
  { Icon: Globe,        value: "7",    suffix: "",  label: "Countries",           color: "#7C3AED" },
  { Icon: Users,        value: "200",  suffix: "+", label: "Team Members",        color: "#B8892A" },
  { Icon: CalendarDays, value: "2022", suffix: "",  label: "Founded",             color: "#E85D26" },
  { Icon: Trophy,       value: "#1",   suffix: "",  label: "UAE Startup Group",   color: "#16A34A" },
];

export default function MetricsStrip() {
  return (
    <div className="mst-outer">
      <div className="mst-grid">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            className="mst-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div
              className="mst-icon-wrap"
              style={{ background: `${m.color}12`, border: `1px solid ${m.color}25` }}
            >
              <m.Icon size={16} color={m.color} strokeWidth={2} />
            </div>
            <div className="mst-number" style={{ color: m.color }}>
              {m.value}
              {m.suffix && <span className="mst-suffix">{m.suffix}</span>}
            </div>
            <div className="mst-label">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
