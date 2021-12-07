import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom'


const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="container" onClick={toTheTop}>
        <NavLink to="/" className="btn btn-outline-dark">LittleBrainMath</NavLink>
        <NavLink to="/formulario" className="btn btn-outline-dark">Formulario</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;