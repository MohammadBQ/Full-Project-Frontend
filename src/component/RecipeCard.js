import React from "react";
import "../../src/assets/css";
import "../../src/assets/images";

const RecipeCard = ({recipeImage,recipeTitle,recipeIngredients,recipeInstructions }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={recipeImage} alt=""></img>
      </div>
       <div className="card-content">
         <div className="card-title">
           <h3>{recipeTitle}</h3>
         </div>
 {
    <div className="card-title">
  <h3>{recipeTitle}</h3>
   {" "}
 </div>;
 }
        <div className="card-body">
           <p>{recipeInstructions}</p>
         </div>
         <div className="btn">
           <button>
             <a>View More</a>
           </button>
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
