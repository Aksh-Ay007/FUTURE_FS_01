import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Projects/Project'
import TechnicalExpertise from './Components/Skills/TechnicalExpertise'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <TechnicalExpertise />
      <Project/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App