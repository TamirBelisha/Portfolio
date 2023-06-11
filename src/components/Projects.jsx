import React, { useRef, useState } from 'react'
import trelloxPreview from '../assets/imgs/Trellox_preview2.png'
import misterBTCAngularPreview from '../assets/imgs/Misterbitcoin_angular.png'
import misterBTCReactPreview from '../assets/imgs/Misterbitcoin_react.png'
// import bloginPreview from '../assets/imgs/Blogin_preview.png'
// import memeGeneratorPreview from '../assets/imgs/MemeGenerator_preview.png'

export default function Projects({ rubberBand }) {
  const modalRef = useRef(null)
  const screenRef = useRef(null)
  const [modalProject, setModalProject] = useState(null)

  const projectsHeader = 'My Projects'
  const projectsLettersArray = projectsHeader.split('')

  const modalStyle = modalProject ? { opacity: 0.4, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }

  const trelloxDetails = {
    name: 'Trellox',
    description: 'Trello based application for project management. Final project of my coding bootcamp, developed in a team of three programmers within 10 days.',
    type: 'End to end',
    tools: ['Vue.js', 'Vuex', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'PWA', 'SASS'],
    img: trelloxPreview,
    url: 'https://trellox-api.onrender.com/#/',
  }
  const misterBTCAngularDetails = {
    name: 'MisterBITCoin',
    description: 'Bitcoin rates, money transfer and contact list CRUDL. Written as part of the Angular workshop',
    type: 'Front-end',
    tools: ['Angular', 'NgRx', 'SASS'],
    img: misterBTCAngularPreview,
    url: 'https://tamirbelisha.github.io/angular-mister-bitcoin/#/',
  }
  const misterBTCReactDetails = {
    name: 'MisterBITCoin',
    description: 'Bitcoin rates, money transfer and contact list CRUDL. Written as part of the React workshop',
    type: 'Front-end',
    tools: ['React.js', 'Redux', 'SASS'],
    img: misterBTCReactPreview,
    url: 'https://tamirbelisha.github.io/mister-bitcoin/#/',
  }
  // const bloginDetails = {
  //   name: 'Blogin',
  //   description: 'Pixel-perfect excersice. Written as part of CSS workshop, with high attention to the details and responsive design.',
  //   type: 'Web design',
  //   tools: ['HTML', 'CSS'],
  //   img: bloginPreview,
  //   url: 'https://tamirbelisha.github.io/blogin/',
  // }
  // const memeGeneratorDetails = {
  //   name: 'Meme Generator',
  //   description: 'Second sprint of the coding course, written using vanilla JS and Canvas element. i18n support for Hebrew.',
  //   type: 'Front-end',
  //   tools: ['HTML', 'CSS', 'Javascript'],
  //   img: memeGeneratorPreview,
  //   url: 'https://tamirbelisha.github.io/meme-generator/#',
  // }

  const scaleUp = (ev) => {
    ev.target.nextSibling.className = 'clickme scale-up-hor-center'
  }

  const scaleUpLeave = (ev) => {
    ev.target.nextSibling.className = 'clickme'
  }

  const toggleModal = (project, ev) => {
    switch (project) {
      case 'trellox':
        setModalProject(trelloxDetails)
        break
      case 'misterBTCAngular':
        setModalProject(misterBTCAngularDetails)
        break
      case 'misterBTCReact':
        setModalProject(misterBTCReactDetails)
        break
      // case 'blogin':
      //   setModalProject(bloginDetails)
      //   break
      // case 'memeGenerator':
      //   setModalProject(memeGeneratorDetails)
      //   break

      default:
        break
    }
    ev.target.className = 'clickme'
  }

  return (
    <main className="projects">
      <h1>
        {projectsLettersArray.map((l, idx) => {
          if (l === ' ')
            return (
              <span key={idx} style={{ display: 'inline' }}>
                {' '}
              </span>
            )
          else
            return (
              <span key={idx} onMouseOver={rubberBand}>
                {l}
              </span>
            )
        })}
      </h1>
      <section className="cards-container">
        <div onMouseLeave={scaleUpLeave} onMouseEnter={scaleUp} className="card trellox">
          <img src={trelloxPreview} alt="" />
          <div className="overlay"></div>
          <div onClick={(ev) => toggleModal('trellox', ev)} className="clickme">
            View project
          </div>
        </div>
        <div onMouseLeave={scaleUpLeave} onMouseEnter={scaleUp} className="card">
          <img src={misterBTCAngularPreview} alt="" />
          <div className="overlay"></div>
          <div onClick={(ev) => toggleModal('misterBTCAngular', ev)} className="clickme">
            View project
          </div>
        </div>
        <div onMouseLeave={scaleUpLeave} onMouseEnter={scaleUp} className="card">
          <img src={misterBTCReactPreview} alt="" />
          <div className="overlay"></div>
          <div onClick={(ev) => toggleModal('misterBTCReact', ev)} className="clickme">
            View project
          </div>
        </div>
        {/* <div onMouseLeave={scaleUpLeave} onMouseEnter={scaleUp} className="card">
          <img src={bloginPreview} alt="" />
          <div className="overlay"></div>
          <div onClick={(ev) => toggleModal('blogin', ev)} className="clickme">
            View project
          </div>
        </div>
        <div onMouseLeave={scaleUpLeave} onMouseEnter={scaleUp} className="card">
          <img src={memeGeneratorPreview} alt="" />
          <div className="overlay"></div>
          <div onClick={(ev) => toggleModal('memeGenerator', ev)} className="clickme">
            View project
          </div>
        </div> */}
      </section>
      <div ref={modalRef} hidden={!modalProject} className={modalProject ? 'slit-in-horizontal modal' : 'modal'}>
        {modalProject && (
          <a href={modalProject.url} target="_blank" rel="noreferrer">
            <img src={modalProject.img} alt="" />
          </a>
        )}
        <div className="project-details">
          {modalProject && (
            <a href={modalProject.url} target="_blank" rel="noreferrer">
              <h2 className="proj-name">{modalProject.name}</h2>
            </a>
          )}
          {modalProject && <p className="proj-type">{modalProject.type}</p>}
          {modalProject && <p className="proj-desc">{modalProject.description}</p>}
          {modalProject && (
            <p className="proj-tools">
              Tools used:{' '}
              <span>
                {modalProject.tools.map((t) => {
                  if (modalProject.tools[modalProject.tools.length - 1] === t) return t + '.'
                  return t + ', '
                })}
              </span>
            </p>
          )}
        </div>
        {modalProject && (
          <div className="btn-box box-3">
            <a href={modalProject.url} target="_blank" rel="noreferrer">
              <div className="btn btn-three">
                <span>TO THE PROJECT</span>
              </div>
            </a>
          </div>
        )}
      </div>
      <div ref={screenRef} onClick={() => setModalProject(null)} style={modalStyle} className="screen-overlay"></div>
    </main>
  )
}
