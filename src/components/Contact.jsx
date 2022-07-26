import React, { useState } from 'react'

export default function Contact({ rubberBand }) {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const contactHeader = 'Contact me'
  const lettersArray = contactHeader.split('')
  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setMessage((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }
  const onSendMessage = (ev) => {
    ev.preventDefault()
    console.log(message)
  }
  return (
    <div className="contact">
      <h2>
        {lettersArray.map((l) => {
          if (l === ' ') return <span style={{ display: 'inline' }}> </span>
          else return <span onMouseOver={rubberBand}>{l}</span>
        })}
      </h2>
      <p className="my-mail">Mail: <span><a href="mailto:tamirbelisha@gmail.com">tamirbelisha@gmail.com</a></span>
      <br />
      Tel: <span>+972-54-263-1200</span>
      <br />
      <span className="my-options">I'm open to collaborations, freelance projects and frontend / fullstack job offer.</span>
      </p>
      <form onSubmit={onSendMessage}>
        <div>
          <input onChange={handleChange} placeholder="Name" value={message.name} type="text" name="name" id="name" required />

          <input onChange={handleChange} placeholder="Email" value={message.email} type="email" name="email" id="email" required />
        </div>

        <input onChange={handleChange} placeholder="Subject" value={message.subject} type="subject" name="subject" id="subject" required />

        <textarea className="message" onChange={handleChange} placeholder="Message" value={message.message} type="message" name="message" id="message" required />

        <div class="btn-box box-3">
          <button>
            <div class="btn btn-three">
              <span>SEND MESSAGE</span>
            </div>
          </button>
        </div>
      </form>
      <div className="body-tag"></div>
      <div className="html-tag"></div>
    </div>
  )
}
