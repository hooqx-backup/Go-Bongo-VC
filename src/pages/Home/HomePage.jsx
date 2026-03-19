import React from 'react'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import PortfolioSection from './Sections/Portfolio/PortfolioSection'
const HomePage = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full">
      <Hero />
      <About />
      <PortfolioSection />
    </div>
  )
}

export default HomePage
