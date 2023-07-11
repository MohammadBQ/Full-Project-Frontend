import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../api/categories";
import CategoryCard from "../component/CategoryCard";

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  // const [show, setShow] = useState(false);
  // const onClose = () => setShow(false);
  // const onOpen = () => setShow(true);

  const categoryList = categories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
    // const categoryList = categories?.map((category) => <CategoryCard key={category._id} {...category} />);
  ));

  return (
    <div className="flex flex-wrap gap-[30px] justify-center">
      {categoryList}
    </div>
  );
};

export default CategoryList;
