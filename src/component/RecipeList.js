import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRecipes } from "../api/recipes";
import RecipeCard from "./RecipeCard";
const RecipeList = () => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const recipeList = recipes?.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return <div>{recipeList}</div>;
};

export default RecipeList;
