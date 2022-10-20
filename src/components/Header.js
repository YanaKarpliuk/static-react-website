import React from "react";
import img from "../images/React-icon.png";
import { NavLink, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img className="img-nav" src={img} alt="react logo" />
        </Link>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={(navData) =>
                navData.isActive ? "active" : "nav-link"
              }
            >
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/facts"
              className={(navData) =>
                navData.isActive ? "active" : "nav-link"
              }
            >
              React Facts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? "active" : "nav-link"
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={props.darkMode ? "toggler dark" : "toggler"}>
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </header>
  );
}
