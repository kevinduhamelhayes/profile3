import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Proyecs from "./components/Proyecs"
import Stack from "./components/Stack"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Stack />
      <Body />
      <Proyecs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
