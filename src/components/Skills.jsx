import React from 'react'

export default function Skills({ rubberBand }) {
  const skillsHeader = 'My skills'
  const skillsLettersArray = skillsHeader.split('')
  const technoHeader = 'Technologies'
  const technoLettersArray = technoHeader.split('')
  return (
    <section className="skills-container">
      <div className="my-skills">
      <section className="section-tag"></section>
        <h2>
          {skillsLettersArray.map((l) => {
            if (l === ' ') return <span style={{ display: 'inline' }}> </span>
            else return <span onMouseOver={rubberBand}>{l}</span>
          })}
        </h2>
        <p className="p-tag">
          During the coding bootcamp, I got to know lots of technologies, libraries, frameworks, design patterns and data structures.
          <br />I learned to pay attention to the details when it comes to pixel-perfect design, to develop progressive web applications (PWA), single and multi page applications, how to build server side and manage large data transfer,
          using SQL and no-SQL databases, and global store for state management in the frontend.
        </p>
        <br />
        <p className="p-closing-tag">Personal skills - problem solving, team work, adaptability, goals achiever, fast & self learner, independent, sociable, honest, creative.</p>
      <section className="section-closing-tag"></section>
      </div>
      <div className="skills-preview">
        <div className="technologies">
          <p>
            {technoLettersArray.map((l) => {
              if (l === ' ') return <span style={{ display: 'inline' }}> </span>
              else return <span onMouseOver={rubberBand}>{l}</span>
            })}
          </p>
        </div>
        <div className="vue">
          <p>Vue.js</p>
          <p>Vuex</p>
          <p>Vite</p>
        </div>
        <div className="react">
          <p>React.js</p>
          <p>Redux</p>
        </div>
        <div className="angular">
          <p>Angular 2</p>
          <p>NgRx</p>
        </div>
        <div className="html">
          <p className="javascript">Javascript</p>
          <p>HTML5</p>
          <p className="sass">CSS & SASS</p>
        </div>
        <div className="node">
          <p>Node.js</p>
          <p>Express</p>
          <p>Socket.io</p>
        </div>
        <div className="db">
          <p className="mongo">MongoDB</p>
          <p className="sql">MySQL</p>
        </div>
      </div>
    </section>
  )
}
