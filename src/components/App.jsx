import Navbar from "./Navbar"
import Home from "./Home"
import Links from "./Links"
import About from "./About"
import Portfolio from "./Portfolio"
import Tech from "./Tech"
import Contact from "./Contact"
function App() {


  return <div className="bg-black">
    <Navbar></Navbar>
    <Home />
    <About />
    <Portfolio />
    <Tech />
    <Contact />
    <Links />
  </div>

}

export default App
