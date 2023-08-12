import instance from ".";

const getAllRecpies = async () => {
  try {
    const res = await instance.get("/recipe");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getRecipe = async (recipeId) => {
  try {
    const res = await instance.get(`/recipe/${recipeId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addRecipe = async (recipeInfo) => {
  const { data } = await instance.post("/recipe", recipeInfo);
  return data;
};

const updateRecipe = async (recipeInfo) => {
  try {
    const { data } = await instance.put(
      `/recipes/${recipeInfo._id}`,
      recipeInfo
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteRecipe = async (recipeId) => {
  const { data } = await instance.delete(`/recipe/delete/${recipeId}`);
  return data;
};

export { getAllRecpies, getRecipe, addRecipe, updateRecipe, deleteRecipe };
