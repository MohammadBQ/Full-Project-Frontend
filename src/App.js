import React from "react";
import "./assets/css/style.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signout";
import Signout from "./pages/Signout";
import Users from "./pages/Users";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/Users/:userId" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
