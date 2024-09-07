

import Skills from './pages/Skills/Skills'
import NavBar  from './Components/NavBar/NavBar'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

import { BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import BackToTop from './Components/BackToTop/BackToTop'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App;