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
  const onSendMessage = async (ev) => {
    ev.preventDefault()
    try {
      await window.Email.send({
        SecureToken: process.env.REACT_APP_SMTPJS_KEY,
        To: 'tamirbelisha@gmail.com',
        From: 'tamirbelisha@gmail.com',
        Subject: `${message.name} Has messaged you through your portfolio`,
        Body: `<h2>${message.subject}</h2>\n<p style="font-size: 20px">${message.message}</p>\n<p style="font-size: 16px; font-weight: bold">${message.name}'s email address is ${message.email}</p>`,
      })
      setMessage(() => ({
        name: '',
        email: '',
        subject: '',
        message: '',
      }))
    } catch (err) {
      console.log('error', err)
    }
  }
  return (
    <div className="contact">
      <h2>
        {lettersArray.map((l, idx) => {
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
      </h2>
      <p className="my-mail">
        Mail:{' '}
        <span>
          <a href="mailto:tamirbelisha@gmail.com">tamirbelisha@gmail.com</a>
        </span>
        <br />
        Tel: <span>+972-54-263-1200</span>
        <br />
        <span className="my-options">I'm open to collaborations, freelance projects and job offers.</span>
      </p>
      <form onSubmit={onSendMessage}>
        <div>
          <input onChange={handleChange} placeholder="Name" value={message.name} type="text" name="name" id="name" required />

          <input onChange={handleChange} placeholder="Email" value={message.email} type="email" name="email" id="email" required />
        </div>

        <input onChange={handleChange} placeholder="Subject" value={message.subject} type="subject" name="subject" id="subject" required />

        <textarea className="message" onChange={handleChange} placeholder="Message" value={message.message} type="message" name="message" id="message" required />

        <div className="btn-box box-3">
          <button>
            <div className="btn btn-three">
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
