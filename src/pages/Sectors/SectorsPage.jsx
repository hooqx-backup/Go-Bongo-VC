import React from "react";
import SectorsHero from "./Sections/Hero/SectorsHero";
import MetricsStrip from "./Sections/MetricsStrip/MetricsStrip";
import DeepDive from "./Sections/DeepDive/DeepDive";
import Thesis from "./Sections/Thesis/Thesis";
import WhyNow from "./Sections/WhyNow/WhyNow";
import BySector from "./Sections/BySector/BySector";
import SectorCTA from "./Sections/SectorCTA/SectorCTA";

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <MetricsStrip />
      <DeepDive />
      <Thesis />
      <WhyNow />
      <BySector />
      <SectorCTA />
    </>
  );
}
