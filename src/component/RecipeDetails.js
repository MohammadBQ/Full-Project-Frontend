import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipes";
import RecipeCard from "./RecipeCard";
const RecipeDetails = () => {
  const { recipeId } = useParams;

  const {
    data: recipe,
    isloading,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  return (
    <div>
      RecipeDetails <RecipeCard recipe={recipeId} />
    </div>
  );
};

export default RecipeDetails;
