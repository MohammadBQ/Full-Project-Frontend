import instance from "../api/index";

// getting all the categories  -- get("categories") endpoint === categoriesList
const getCategories = async () => {
  const categories = await instance.get("/categories"); // "categories"npmm
  return categories;
};

// getCategory by Id
const getCategory = async (id) => {
  const response = await instance.get(`/categories/${id}`);
  return response.data;
};
//to update my backend my input will be name, type, image,adopted as given from the
//backend developer(in example: table) and the response will contain also the object that will be updated

const addCategory = async (category) => {
  const FormData = new FormData();
  for (const key in category) FormData.append(key, category[key]);

  const response = await instance.post(`/categories/`, FormData);
  return response.data;
};

const updateCategory = async (categoryId, name, categoryImage) => {
  const category = {
    name: name,
    categoryImage: categoryImage,
  };

  const FormData = new FormData();
  for (const key in category) FormData.append(key, category[key]);

  const response = await instance.put(`/categories/${category.id}`, FormData);
  return response.data;
};

const deleteCategory = async (categoryId) => {
  const response = await instance.delete(`/categories/${categoryId}`);
  response.data;
};

export {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
