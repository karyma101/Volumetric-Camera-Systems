import React from 'react'

import ContactForm from '../../components/ContactForm'
import style from './Contact.css'

const Contact = () => {
  return (
    <div className={style.contact}>
      <ContactForm />
    </div>
  )
}

export default Contact