import React from "react";
import RecipeList from "../../component/RecipeList";

const recipe = () => {
  return (
    <div>
      {/* <label>Search your recipe</label> */}
      <input type="text" placeholder="Search your recipe"></input>
      <RecipeList />
      <div className="btn">
        <button>
          <a>Add Recipe</a>
        </button>
      </div>
    </div>
  );
};

export default recipe;
