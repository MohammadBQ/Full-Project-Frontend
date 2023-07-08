import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Categories from "./component/pages/Categories";
import Recipes from "./component/pages/Recipes";
import Navbar from "./component/Navbar";

import Signup from "./component/pages/Signup";
import UserSignin from "./component/pages/UserSignin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/signin" element={<UserSignin />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
