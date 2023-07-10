import React from "react";
// import "../../src/assets/css";
// import "../../src/assets/images";
import { deleteRecipe } from "../api/recipes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const RecipeCard = ({ recipe }) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteTheRecipe,
    isLoading,
    error,
  } = useMutation({
    mutationFn: () => deleteRecipe(recipe.id),
    onSuccess: queryClient.invalidateQueries(["recipes"]),
  });

  const handleDelete = () => {
    deleteTheRecipe();
  };
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={recipe.recipeImage} alt=""></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{recipe.recipeTitle}</h3>
        </div>
        {
          <div className="card-title">
            <h3>{recipe.recipeTitle}</h3>{" "}
          </div>
        }
        <div className="card-body">
          <p>{recipe.recipeInstructions}</p>
        </div>
        <div className="btn">
          <link to={`/recipes/${recipe.id}`}>
            <button>
              <a>View More</a>
            </button>
          </link>
        </div>
        <div className="btn">
          <button>
            <a>Edit</a>
          </button>
        </div>
        <div className="btn">
          <button onClick={handleDelete}>
            <a>Delete</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
