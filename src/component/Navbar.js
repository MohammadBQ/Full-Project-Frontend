import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./context/userContext";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  // user ? <></> : <></>
  return (
    <nav className="bg-orange-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">
                A Nice Meal{" "}
              </span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/recipes"
                className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Recipes
              </NavLink>
              <>
                <NavLink
                  to="/categories"
                  className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Categories
                </NavLink>

                {user ? (
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Signout
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/signup"
                      className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Signup
                    </NavLink>
                    <NavLink
                      to="/signin"
                      className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Signin
                    </NavLink>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
