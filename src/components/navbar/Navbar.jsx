import React from 'react'
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}><h1>CMS</h1><h5>Client Management System</h5></div>
        <div className={style.menu}>
            <NavLink className={style.menu_item} to="/">Home</NavLink>
            <NavLink  className={style.menu_item}to="/login">Login</NavLink>
            <NavLink className={style.menu_item} to="/signup">Signup</NavLink>
        </div>
    </nav>
  )
}

export default Navbar