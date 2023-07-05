import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Categories from "./component/pages/Categories";
import Recipes from "./component/pages/Recipes";

function App() {
  return (
    <div>
      <h1>Hello react</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
