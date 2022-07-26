import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import NavBar from './NavBar'
import Projects from './Projects'
import Skills from './Skills'

export default function Main({rubberBand}) {
    const logRub = () => {
        console.log(rubberBand);
    }
    logRub()
  return (
    <div>
        <NavBar/>
        <Hero rubberBand={rubberBand} />
        <About rubberBand={rubberBand} />
        <Skills rubberBand={rubberBand} />
        <Projects rubberBand={rubberBand} />
        <Contact rubberBand={rubberBand} />
    </div>
  )
}
