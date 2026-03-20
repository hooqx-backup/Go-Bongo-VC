import AboutHero from './Sections/AboutHero/AboutHero';
import OurStory from './Sections/OurStory/OurStory';
import MissionVision from './Sections/MissionVision/MissionVision';
import EcosystemMap from './Sections/EcosystemMap/EcosystemMap';
import LeadershipTeam from './Sections/LeadershipTeam/LeadershipTeam';
import InvestmentTimeline from './Sections/InvestmentTimeline/InvestmentTimeline';
import Achievements from './Sections/Achievements/Achievements';
import CultureValues from './Sections/CultureValues/CultureValues';
import AboutCTA from './Sections/AboutCTA/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <EcosystemMap />
      <LeadershipTeam />
      <InvestmentTimeline />
      <Achievements />
      <CultureValues />
      <AboutCTA />
    </>
  );
}
