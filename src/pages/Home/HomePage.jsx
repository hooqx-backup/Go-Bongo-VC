import React from "react";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import MetricsSection from "./Sections/Metrics/Metrics";
import LeadershipSection from "./Sections/Leadership/Leadership";
import WhyUsSection from "./Sections/WhyUs/WhyUs";
import WorkWithUsSection from "./Sections/WorkWithUs/WorkWithUs";
import PortfolioSection from "./Sections/Portfolio/PortfolioSection";
import SectorsSection from "./Sections/Sectors/Sectors";
const HomePage = () => {
  return (
    <>
      <div className="[max-w-1140px]">
        <Hero />
        <About />
        <PortfolioSection />
        <SectorsSection />
        <WhyUsSection />
        <MetricsSection />
        <LeadershipSection />
        <WorkWithUsSection />
      </div>
    </>
  );
};

export default HomePage;
