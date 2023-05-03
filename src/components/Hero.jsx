import React from 'react'

export default function Hero({ rubberBand }) {
  const heroHeader = `Hi,&I'm Tamir,&Web developer`
  const lettersArray = heroHeader.split('')
  return (
    <header className="hero">
      <div className="html-tag"></div>
      <div className="body-tag"></div>
      <h1>
        {lettersArray.map((l, idx) => {
          if (l === ' ')
            return (
              <span key={idx} style={{ display: 'inline' }}>
                {' '}
              </span>
            )
          if (l === '&') return <br key={idx} />
          else
            return (
              <span key={idx} onMouseOver={rubberBand}>
                {l}
              </span>
            )
        })}
      </h1>
      <p>Full-stack developer</p>
    </header>
  )
}
