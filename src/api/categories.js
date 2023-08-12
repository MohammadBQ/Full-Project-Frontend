import instance from "../api/index";

// getting all the categories  -- get("categories") endpoint === categoriesList
const getCategories = async () => {
  const categories = await instance.get("/category"); // "categories"npmm
  return categories.data;
};

// getCategory by Id
const getCategory = async (id) => {
  const response = await instance.get(`categories/${id}`);
  return response.data;
};
//to update my backend my input will be name, type, image,adopted as given from the
//backend developer(in example: table) and the response will contain also the object that will be updated

const addCategory = async (data) => {
  // categoryimage
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  const response = await instance.post("/category", formData);
  return response.data;
};

const updateCategory = async (categoryId, name) => {
  await instance.put(`categories/${categoryId}`, {
    name: name,
  });
};

const deleteCategory = async (categoryId) => {
  const response = await instance.delete(`/categories/${categoryId}`);
};

export {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
