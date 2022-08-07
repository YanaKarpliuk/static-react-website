import React from 'react';
import img from './React-icon.png'
import { NavLink, Link } from "react-router-dom"

export default function Header(){
  return (
    <header>
      <nav className="nav">
        <Link to='/'><img className="img-nav" src={img} alt="react logo"/></Link>
        <ul className="nav-items">
          <li className="nav-item"><NavLink to="/" activeClassName="active" className='nav-link'>Main</NavLink></li>
          <li className="nav-item"><NavLink to="/facts" activeClassName="active" className='nav-link'>React Facts</NavLink></li>
          <li className="nav-item"><NavLink className='nav-link' activeClassName="active" to="/about">About me</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}