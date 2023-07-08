import React from "react";
import { NavLink } from "react-router-dom";
import ANM from "../../src/assets/images/ANM.png";
import "../assets/css/style.css";
import Home from "../component/Home";

const Navbar = () => {
  return (
    <div className="bigBox">
      <div>
        <div>
          <nav>
            <img src={ANM.png} alt="LogoImage" className="logo-Styling" />
          </nav>
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Recipes">All Recipes</NavLink>
          <NavLink to="/Shows">Shows</NavLink>
          <NavLink to="/Chefs">Chefs</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
