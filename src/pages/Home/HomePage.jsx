import React from 'react'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import PortfolioSection from './Sections/Portfolio/PortfolioSection'
import SectorsSection from './Sections/Sectors/Sectors'
const HomePage = () => {
  return (
    <>
    <div className='[max-w-1140px]'>
<Hero />
      <About />
      <PortfolioSection />
      <SectorsSection />

    </div>
          </>
  )
}

export default HomePage
