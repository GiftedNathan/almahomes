import { Box, } from "@chakra-ui/react"

import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import PropertiesSection from "./components/PropertiesSection"

function App() {

  return (
    <>
      <Navbar />
      <Hero height={"100vh"} />
      <PropertiesSection />
    </>
  )
}

export default App
