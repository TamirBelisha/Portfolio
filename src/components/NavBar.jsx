import { NavLink } from 'react-router-dom'
import React, { useRef, useState } from 'react'

export default function NavBar() {
  const logoTB = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const activeStyle = {
    borderBottom: '1px solid #11a5ff',
    textShadow: '0px 0px 9px #0a5c8d, -7px 7px 20px rgba(5, 48, 74, 0.32), -1px -1px 4px rgba(17, 165, 255, 0.62)',
  }
  if (window.innerWidth < 840) {
    window.addEventListener('click', (ev) => {
      if (ev.x < window.innerWidth - 160) setOpenModal(false)
    })
  }
  const addBlink = () => {
    logoTB.current.className = 'logo blink-1'
  }
  const removeBlink = () => {
    logoTB.current.className = 'logo'
  }
  const openNav = (ev) => {
    if (window.innerWidth < 840) {
      if (openModal) {
        setOpenModal(false)
      } else {
        ev.preventDefault()
        setOpenModal(true)
      }
    }
  }
  const closeNav = (ev) => {
    if (window.innerWidth < 840) {
      setOpenModal(false)
    }
  }
  return (
    <nav onMouseOver={addBlink} onMouseLeave={removeBlink} className={window.innerWidth < 840 ? (openModal ? 'navbar' : 'navbar hide') : 'navbar'}>
      <div className="logo-box">
        <NavLink onClick={openNav} to="/" ref={logoTB} className="logo">
          <span>T</span> B
        </NavLink>
      </div>
      <div className="triangle ">
        <div className="l-bottom"></div>
        <div className="r-bottom"></div>
      </div>
      <NavLink onClick={closeNav} to="about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>
      <NavLink onClick={closeNav} to="skills" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        My skills
      </NavLink>
      <NavLink onClick={closeNav} to="projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        My projects
      </NavLink>
      <NavLink onClick={closeNav} to="contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contact
      </NavLink>
      <div className="links-container">
        <a onClick={closeNav} href="https://www.linkedin.com/in/tamir-belisha/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a onClick={closeNav} href="https://github.com/TamirBelisha" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </nav>
  )
}
