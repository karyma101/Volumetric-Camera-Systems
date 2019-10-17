import React from 'react'

import style from './Contact.css'

const Contact = () => {
  return (
    <div className={style.contact}>
      <h3 className={style.h3}>Contact Us</h3>
      <form className={style.form}>
        <div className={style.form_group}>
          <label>Name:</label>
          <input className={style.form_input} type="text" placeholder="Enter Your Name" />
        </div>
        <div className={style.form_group}>
          <label>Email:</label>
          <input className={style.form_input} type="email" placeholder="Enter Your Email" />
        </div>
        <div className={style.form_group}>
          <label>Message:</label>
          <textarea className={style.form_text_area} placeholder="Enter Your Message" />
        </div>
        <div>
          <input className={style.form_submit} type="submit" value="Send Message"></input>
        </div>
      </form>
    </div>
  )
}

export default Contact