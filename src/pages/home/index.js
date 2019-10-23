import React, { Fragment } from 'react'

import style from './Home.css'
import ContactForm from '../../components/ContactForm'
import { brainIcon, cloudIcon, computerIcon, targetIcon } from '../../../public/images/technologyIcons'
import { audezeLogo, borisfxLogo, levitezerLogo, mettleLogo, nvidiaLogo, rshiftLogo, spatialLogo } from '../../../public/images/sponsorLogos'

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
              <img className={style.techonology_image} src={computerIcon} />
            </div>
            <p className={style.technology_paragraph}>Cross-platform integration with 3D platforms (i.e. Sketchfab, Facebook, Adobe Aero).</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img className={style.techonology_image} src={cloudIcon} />
            </div>
            <p className={style.technology_paragraph}>Fast processing with scalable cloud-based rendering systems.</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img className={style.techonology_image} src={brainIcon} />
            </div>
            <p className={style.technology_paragraph}>Using a novel pre-trained neural net to enhance data with machine learning.</p>
          </div>
          <div className={style.technology_group}>
            <div className={style.technology_image_container}>
              <img className={style.techonology_image} src={targetIcon} />
            </div>
            <p className={style.technology_paragraph}>Dynamic compression enables device agnostic cross compatibility. Mobile/VR/AR.</p>
          </div>
        </div>
      </div>

      <div className={style.summary}>
        <h3 className={style.h3}>Why Choose Us?</h3>
        <ul className={style.summary_list}>
          <li className={style.summary_list_item}>Faster and cheaper to use than all other capture stage systems on the market.</li>
          <li className={style.summary_list_item}>Fully portable volumetric cameras, allow for true freedom to capture your vision.</li>
          <li className={style.summary_list_item}>Shoot anywhere with cinematic quality, no green screen is needed.</li>
          <li className={style.summary_list_item}>No large crew needed to operate.</li>
          <li className={style.summary_list_item}>"Frontal only" or "Complete 360 fullbody" capture options available.</li>
          <li className={style.summary_list_item}>No need to bring your actors to a capture studio.</li>
          <li className={style.summary_list_item}>Field operation compatible with battery options for remote usage.</li>
        </ul>
      </div>

      <div className={style.sponsors}>
        <h3 className={style.h3}>Our Partners & Sponsors</h3>
        <div className={style.sponsors_container}>
          <img className={style.sponsors_logo} src={audezeLogo} />
          <img className={style.sponsors_logo} src={borisfxLogo} />
          <img className={style.sponsors_logo} src={levitezerLogo} />
          <img className={style.sponsors_logo} src={mettleLogo} />
          <img className={style.sponsors_logo} src={levitezerLogo} />
          <img className={style.sponsors_logo} src={mettleLogo} />
          <img className={style.sponsors_logo} src={nvidiaLogo} />
          <img className={style.sponsors_logo} src={rshiftLogo} />
          <img className={style.sponsors_logo} src={spatialLogo} />
        </div>
      </div>

      <ContactForm />
    </Fragment>
  )
}

export default Home