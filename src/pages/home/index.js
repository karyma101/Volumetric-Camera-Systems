import React, { Fragment } from 'react'

import style from './Home.css'
import { brainIcon, cloudIcon, computerIcon, targetIcon } from '../../../public/images/technologyIcons'

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
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen">
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
        <div className={style.technology_container}>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img src={computerIcon}></img>
            </div>
            <p>Cross-platform integration with 3D platforms (i.e. Sketchfab, Facebook, Adobe Aero).</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img src={cloudIcon}></img>
            </div>
            <p>Fast processing with scalable cloud-based rendering systems.</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img src={brainIcon}></img>
            </div>
            <p>Using a novel pre-trained neural net to enhance data with machine learning.</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img src={targetIcon}></img>
            </div>
            <p>Dynamic compression enables device agnostic cross compatibility. Mobile/VR/AR.</p>
          </div>
        </div>
      </div>

      <div className={style.summary}>
        <h3 className={style.h3}>Why Choose Us?</h3>
        <ul>
          <li>Faster and cheaper to use than all other capture stage systems on the market.</li>
          <li></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Home