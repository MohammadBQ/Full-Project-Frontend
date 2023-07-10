import React from "react";
import { useQuery } from "@tanstack/react-query";
import { categories } from "../../api/categories";
// import { CategoryList } from "../../component/CategoryList";

const Categories = () => {
  return (
    <div>
      <lable>Choose your category</lable>
      <select>
        <option value="categories"></option>
      </select>

      {/* <CategoryList /> */}

      <div className="btn">
        <button>
          <a>Add Category</a>
        </button>
      </div>
    </div>
  );
};

export default Categories;
