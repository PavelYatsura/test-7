import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/test-7" className="nav__title">
          <h1 className="nav__title">НАДЕЖДА ЯЦУРА</h1>
        </Link>
        <div>
          <NavLink to="/test-7" className="nav__link">
            Работы
          </NavLink>
          <NavLink to="/test-7/personal" className="nav__link">
            Личное
          </NavLink>
          <NavLink to="/test-7/retouche" className="nav__link">
            Ретушь
          </NavLink>
          <NavLink to="/test-7/about" className="nav__link">
            О себе
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
