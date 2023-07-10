import React from "react";
import "../../src/assets/css";
import "../../src/assets/images";

const CategoryCard = ({ categoryImage, categoryTitle }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={categoryImage} alt="categoryImage"></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{categoryTitle} </h3>
        </div>

        <div className="btn">
          <button>
            <a>Edit</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
