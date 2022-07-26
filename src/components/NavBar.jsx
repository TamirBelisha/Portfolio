import { NavLink } from 'react-router-dom'
import React, { useRef } from 'react'

export default function NavBar() {
  const logoTB = useRef(null)

  const activeStyle = {
    borderBottom: '1px solid #11a5ff',
    textShadow: '0px 0px 9px #0a5c8d, -7px 7px 20px rgba(5, 48, 74, 0.32), -1px -1px 4px rgba(17, 165, 255, 0.62)'

  }

  const addBlink = () => {
    logoTB.current.className = 'logo blink-1'
  }
  const removeBlink = () => {
    logoTB.current.className = 'logo'
  }
  return (
    <nav onMouseOver={addBlink} onMouseLeave={removeBlink} className="navbar">
      <div className="logo-box">
        <NavLink to="/" ref={logoTB} className="logo">
          <span>T</span> B
        </NavLink>
      </div>
      <div className="triangle ">
        <div className="l-bottom"></div>
        <div className="r-bottom"></div>
      </div>
      <NavLink to="about" style={({isActive}) => isActive ? activeStyle : undefined}>About</NavLink>
      <NavLink to="skills" style={({isActive}) => isActive ? activeStyle : undefined}>My skills</NavLink>
      <NavLink to="projects" style={({isActive}) => isActive ? activeStyle : undefined}>My projects</NavLink>
      <NavLink to="contact" style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
      <div className="links-container">
        <a href="https://www.linkedin.com/in/tamir-belisha/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/TamirBelisha" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </nav>
  )
}
