import React, { useContext } from "react";
import { NavLink, useInRouterContext } from "react-router-dom";
import ANM from "../../src/assets/images/ANM.png";
import "../assets/css/style.css";
import Home from "../component/Home";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  const handleSignout = () => {
    Signout();
    setUser(false);
  };

  return (
    <div className="bigBox">
      <div>
        <div>
          <nav>
            <img src={ANM.png} alt="LogoImage" className="logo-Styling" />
          </nav>
        </div>
        <div>
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          <NavLink to="/Recipes">
            <div>All Recipes</div>
          </NavLink>
          <NavLink to="/Shows">
            <div>Shows</div>
          </NavLink>
          <NavLink to="/Chefs">
            <div>Chefs</div>
          </NavLink>
          {user ? (
            <button onClick={handleSignout}>
              <NavLink to="/sigin">
                <div>sigout</div>
              </NavLink>
            </button>
          ) : (
            <div>
              <NavLink to="/signin">
                <div>signin</div>
              </NavLink>
              <NavLink>
                <div>signup</div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
