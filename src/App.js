import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Main from './components/Main'

function App() {
  const rubberBand = (ev) => {
    ev.target.className = 'rubberBand animated'
    setTimeout(() => {
      ev.target.className = ''
    }, 1000)
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index element={<Main rubberBand={rubberBand}/>} />
          <Route path="/about" element={<About rubberBand={rubberBand}/>} />
          <Route path="/skills" element={<Skills rubberBand={rubberBand}/>} />
          <Route path="/projects" element={<Projects rubberBand={rubberBand}/>} />
          <Route path="/contact" element={<Contact rubberBand={rubberBand}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
