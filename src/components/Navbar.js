import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import style from './Navbar.css'
import logo from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link className={style.logo_container} to="/">
        <img className={style.logo} src={logo} alt="Logo" />
        <h1 className={style.title}>Volumetric Camera Systems</h1>
      </Link>
      <ul className={style.navlinks}>
        <NavLink to="/" exact className={style.navlinks_item} activeClassName={style.active}>Home</NavLink>
        |
        <NavLink to="/team" className={style.navlinks_item} activeClassName={style.active}>Team</NavLink>
        |
        <NavLink to="/contact" className={style.navlinks_item} activeClassName={style.active}>Contact</NavLink>
      </ul>
    </div>
  )
}

export default Navbar