import PortfolioHero from './Sections/PortfolioHero/PortfolioHero';
import PortfolioMarquee from './Sections/PortfolioMarquee/PortfolioMarquee';
import PortfolioMetrics from './Sections/PortfolioMetrics/PortfolioMetrics';
import PortfolioGrid from './Sections/PortfolioGrid/PortfolioGrid';
import PortfolioThesis from './Sections/PortfolioThesis/PortfolioThesis';
import PortfolioSectors from './Sections/PortfolioSectors/PortfolioSectors';
import PortfolioGeo from './Sections/PortfolioGeo/PortfolioGeo';
import PortfolioTestimonials from './Sections/PortfolioTestimonials/PortfolioTestimonials';
import PortfolioCTA from './Sections/PortfolioCTA/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioMarquee />
      <PortfolioMetrics />
      <PortfolioGrid />
      <PortfolioThesis />
      <PortfolioSectors />
      <PortfolioGeo />
      <PortfolioTestimonials />
      <PortfolioCTA />
    </>
  );
}
