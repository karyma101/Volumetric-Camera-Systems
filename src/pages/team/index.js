import React from 'react'

import style from './Team.css'
import { alejandro, alexander, andrew, bodhi, chris, deanan, herbert, issey, jeremy, katharine, kary, kim, mike, russel, sankar, scott, sho, tobias } from '../../../public/images/team'

const Team = () => {
  return (
    <div className={style.team}>
      <h3 className={style.h3}>Team</h3>
      <div className={style.group}>
        <div className={style.profile}>
          <img className={style.image} src={tobias} alt="Tobias Chen" />
          <h4 className={style.h4}>Tobias Chen</h4>
          <h5 className={style.h5}>System Architect / Founder</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={bodhi} alt="Bodhi Donellar" />
          <h4 className={style.h4}>Bodhi Donellar</h4>
          <h5 className={style.h5}>Unity Developer</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={andrew} alt="Andrew Hazelden" />
          <h4 className={style.h4}>Andrew Hazelden</h4>
          <h5 className={style.h5}>Pipeline TD</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={alexander} alt="Alexander Regeffe" />
          <h4 className={style.h4}>Alexander Regeffe</h4>
          <h5 className={style.h5}>Senior Producer</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={issey} alt="Issey Roquet" />
          <h4 className={style.h4}>Issey Roquet</h4>
          <h5 className={style.h5}>Product Designer</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={scott} alt="Scott Adaland" />
          <h4 className={style.h4}>Scott Adaland</h4>
          <h5 className={style.h5}>Industrial Designer / Prototyping</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={kary} alt="Kary Ma" />
          <h4 className={style.h4}>Kary Ma</h4>
          <h5 className={style.h5}>Full Stack Developer</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={kim} alt="Kim Janson" />
          <h4 className={style.h4}>Kim Janson</h4>
          <h5 className={style.h5}>3D Modeler</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={sho} alt="Sho Conte" />
          <h4 className={style.h4}>Sho Conte</h4>
          <h5 className={style.h5}>Graphic Designer</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={mike} alt="Mike Dopsa" />
          <h4 className={style.h4}>Mike Dopsa</h4>
          <h5 className={style.h5}>Technical Artist</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={russel} alt="Russel Wu" />
          <h4 className={style.h4}>Russel Wu</h4>
          <h5 className={style.h5}>Technical Artist</h5>
        </div>

        <div className={style.profile}>
          <img className={style.image} src={jeremy} alt="Jeremy Bot" />
          <h4 className={style.h4}>Jeremy Bot</h4>
          <h5 className={style.h5}>3D Animation / Technical Artist</h5>
        </div>
      </div>

      <div>
        <h3 className={style.h3}>Advisors</h3>
        <div className={style.group}>
          <div className={style.profile}>
            <img className={style.image} src={deanan} alt="Deanan Dasilva" />
            <h4 className={style.h4}>Deanan Dasilva</h4>
            <h5 className={style.h5}>Lunagent / RED / Teledyne DALSA </h5>
          </div>

          <div className={style.profile}>
            <img className={style.image} src={katharine} alt="Katharine Watford Cook" />
            <h4 className={style.h4}>Katharine Watford Cook</h4>
            <h5 className={style.h5}>Universal Music / MCA Records / Generate Enterainment & Productions Inc.</h5>
          </div>

          <div className={style.profile}>
            <img className={style.image} src={chris} alt="Chris Bobotis" />
            <h4 className={style.h4}>Chris Bobotis</h4>
            <h5 className={style.h5}>Adobe / Mettle</h5>
          </div>

          <div className={style.profile}>
            <img className={style.image} src={sankar} alt="Sankar Thiagasamudram" />
            <h4 className={style.h4}>Sankar Thiagasamudram</h4>
            <h5 className={style.h5}>Audeze / Rohde & Schwarz</h5>
          </div>

          <div className={style.profile}>
            <img className={style.image} src={alejandro} alt="Alejandro Franceschi" />
            <h4 className={style.h4}>Alejandro Franceschi</h4>
            <h5 className={style.h5}>Facebook / Visual Effects Spcoety / Tempest Digital Inc.</h5>
          </div>

          <div className={style.profile}>
            <img className={style.image} src={herbert} alt="Herbert Lui" />
            <h4 className={style.h4}>Herbert Lui</h4>
            <h5 className={style.h5}>Shopify / Intuit Inc. / Twillo / Wonder Shuttle</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team