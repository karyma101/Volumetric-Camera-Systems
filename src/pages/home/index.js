import React, { Fragment } from 'react'

import style from './Home.css'
import brainImg from '../../../public/images/brain.png'

const Home = () => {
  return (
    <Fragment>
      <div className={style.hero}>
        <div className={style.hero_header}>
          <h1 className={style.h1}>Photo-Real Hologram Capture Services</h1>
          <h2 className={style.h2}>"Capturing cinematic quality holograms to make the virtual world indistinguishable from the real world"</h2>
        </div>
      </div>

      <div className={style.about}>
        <h3 className={style.h3}>Photo Real Hologram Capture Service</h3>
        <div className={style.about_container}>
          <div className={style.about_left}>
            <iframe
              className={style.about_video}
              src="https://www.youtube.com/embed/y2u0ZVWddRs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
          </div>
          <div className={style.about_right}>
            <p className={style.about_paragraph}>
              What we offer is the culminated result of a dedicated team who bring years of experience
              to the table. We have staff that have worked as both artists and skilled technicians in
              feature film production, fulldome, CG animation, advanced 3D graphics software development,
              special photographic camera hardware fabrication, and on writing tools core to VFX studio
              pipelines for films and series like "Rogue One: A Star Wars Story", Guillermo del Toro's
              "Crimson Peak" and "Game of Thrones".
            </p>
          </div>
        </div>
      </div>

      <div className={style.technology}>
        <h3 className={style.h3}>Core Technology</h3>
        <div>
          <img src={brainImg}></img>
          <p></p>
        </div>
      </div>

      <div>
        <h3 className={style.h3}>Our Partners & Sponsors</h3>
      </div>
    </Fragment>
  )
}

export default Home