import "./assets/css/style.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
