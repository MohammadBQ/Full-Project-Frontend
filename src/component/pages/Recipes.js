// import React, { useState } from "react";
import RecipeList from "../../component/RecipeList";
import SearchBar from "../SearchBar";
// import Modal from "../Modal";
import "../../assets/css/style.css";

const recipe = () => {
  // const [show, setShow] = useState(false);
  return (
    <>
      <div>
        {/* <label>Search your recipe</label> */}
        <input type="text" placeholder="Search your recipe"></input>
        <searchBar />
        {/* // listing recipe cards */}
        <RecipeList />

        {/* <Modal show={show} setShow={setShow} /> */}
        <div className="btn">
          <button
          //   onClick={() => {
          //     setShow(true);
          //   }}
          >
            <a>Add Recipe</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default recipe;
