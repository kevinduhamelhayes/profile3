import Body from "./components/Body"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projecs from "./components/Projecs"
import Stack from "./components/Stack"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "./index.css"

function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Header />
      <Stack />
      <Body />
      <Projecs />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
