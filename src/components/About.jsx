import {NavLink} from 'react-router-dom'
import React from 'react'

export default function About({rubberBand}) {
  const aboutHeader = 'Little about me'
  const lettersArray = aboutHeader.split('')
  return (
    <article className="about">
      <div className="article-tag"></div>
      <h2>{lettersArray.map(l => {
        if (l === ' ') return <span style={{display: 'inline'}}> </span>
        else return <span onMouseOver={rubberBand}>{l}</span>
      })}</h2>
      <div className="p1">
        <p>
          My name is Tamir Belisha, front-end / full-stack developer located in Jerusalem, IL.
          <br />
          Since I were young, I had this passion for computers and internet, and a big dream to establish an innovative startup using the most advanced technologies.{' '}
        </p>
      </div>
      <div className="p2">
        <p>
          {' '}
          Lately, my journey to fulfill this dream has begun! I've graduated of Coding-Academy's code bootcamp, and mastered the web programming language - Javascript.
          <br />
          During the bootcamp I learned how to build end to end applications, using the latest WEB technologies and frameworks, such as React.js, Vue.js, Angular and Node.js.{' '}
        </p>
      </div>
      <div className="p3">
        <p>
          I'm a Positive person with can-do attitude, fast-learner, well organized and a team player. I have a serious passion for code problem-solving, as well as for design, animations and creating intuitive, dynamic user experiences.
        </p>
      </div>
      <NavLink to="contact">Contact me for further information</NavLink>
      <div className="article-closing-tag"></div>
    </article>
  )
}
