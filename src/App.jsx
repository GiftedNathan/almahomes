import { Box, } from "@chakra-ui/react"

import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import PropertiesSection from "./components/PropertiesSection"
import Carousel from "./components/Carousel"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero height={"100vh"} />
      <PropertiesSection />
      <Carousel />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
