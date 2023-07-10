import React, { useState } from "react";
import RecipeList from "../../component/RecipeList";
// import Modal from "../Modal";

const recipe = () => {
  // const [show, setShow] = useState(false);
  return (
    <div>
      {/* <label>Search your recipe</label> */}
      <input type="text" placeholder="Search your recipe"></input>
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
  );
};

export default recipe;
