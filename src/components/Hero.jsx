import React from 'react'

export default function Hero({rubberBand}) {
  const heroHeader = `Hi,&I'm Tamir,&Web developer`
  const lettersArray = heroHeader.split('')
  return (
    <header className="hero">
      <div className="html-tag"></div>
      <div className="body-tag"></div>
      <h1>
      {lettersArray.map(l => {
        if (l === ' ') return <span style={{display: 'inline'}}> </span>
        if (l === '&') return <br />
        else return <span onMouseOver={rubberBand}>{l}</span>
      })}
      </h1>
      <p>Frontend / Full-stack developer</p>
    </header>
  )
}