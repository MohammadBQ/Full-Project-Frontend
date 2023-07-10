import instance from "../api/index";

// getting all recipes  -- get("recipes") endpoint === recipesList
const getRecipes = async () => {
  const recipes = await instance.get("recipes"); // "recipes "npmm
  return recipes;
};

// getRecipe by Id
const getRecipe = async (id) => {
  const response = await instance.get(`recipes/${id}`);
  return response.data;
};
//to update my backend my input will be name, image, as given from the
//backend developer(in example: table) and the response will contain also the object that will be updated

const addRecipe = async (recipe) => {
  const FormData = new FormData();
  for (const key in recipe) FormData.append(key, recipe[key]);

  const response = await instance.post(`recipes/`, FormData);
  return response.data;
};

const updateRecipe = async (
  recipeId,
  categoryImage,
  name,
  ingredients,
  instructions
) => {
  const recipe = {
    categoryImage: categoryImage,
    name: name,
    ingredients: ingredients,
    instructions: instructions,
  };

  const FormData = new FormData();
  for (const key in recipe) FormData.append(key, recipe[key]);

  const response = await instance.put(`categories/${recipe.id}`, FormData);
  return response.data;
};

const deleteRecipe = async (recipeId) => {
  const response = await instance.delete(`/recipes/${recipe.id}`);
};

export { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe };
