import React from "react";
// import "../../src/assets/css";
// import "../../src/assets/images";
import { useQuery } from "@tanstack/react-query";
// import { deleteCategory } from "../api/categories";
import { useParams } from "react-router-dom";
import { getCategory } from "../api/categories";

const CategoryCard = () => {
  const { categoryId } = useParams();
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getCategory(categoryId),
  });

  // }
  //   mutate: deleteTheCategory,
  //   isLoading,
  //   error,
  // } = useMutation({
  //   mutationFn: () => deleteCategory(category.id),
  // });

  // const handleDelete = () => {
  //   deleteTheCategory();
  // };
  if (!category) return <div>Category Not Found!</div>;
  const { categoryImage, categoryTitle } = category;
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={category.categoryImage} alt="categoryImage"></img>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{category.categoryTitle} </h3>
        </div>

        <div className="btn">
          <button>
            <a>Edit</a>
          </button>
        </div>
        <div className="btn">
          {/* <button onClick={handleDelete}> */}
          <button>
            <a>Delete</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
//https://www.w3schools.com/howto/howto_css_product_card.asp
