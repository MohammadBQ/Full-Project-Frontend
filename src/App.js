import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Categories from "./component/pages/Categories";
import Recipies from "./component/pages/Recipies";
import Navbar from "./component/Navbar";

import Signup from "./component/pages/Signup";
import UserSignin from "./component/pages/Signin";
import UserContext from "./component/context/userContext";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setUser(true);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipes" element={<Recipies />} />
          <Route path="/signin" element={<UserSignin />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
