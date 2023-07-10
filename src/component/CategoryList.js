import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../api/categories";
import CategoryCard from "../component/CategoryCard";

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const categoryList = categories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));

  return (
    <div className="flex flex-wrap gap-[30px] justify-center">
      {categoryList}
    </div>
  );
};

export default CategoryList;
