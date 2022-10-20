import React from 'react';
import img from '../images/React-icon.png'
import { NavLink, Link } from "react-router-dom"

export default function Header(){
  return (
    <header>
      <nav className="nav">
        <Link to='/'><img className="img-nav" src={img} alt="react logo"/></Link>
        <ul className="nav-items">
          <li className="nav-item"><NavLink to="/"end className={(navData) => (navData.isActive ? "active" : "nav-link")}>Main</NavLink></li>
          <li className="nav-item"><NavLink to="/facts" className={(navData) => (navData.isActive ? "active" : "nav-link")}>React Facts</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className={(navData) => (navData.isActive ? "active" : "nav-link")}>About me</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}