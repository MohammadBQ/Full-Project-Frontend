import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import ErrorMsg from "../ErrorMsg";
import { addCategory, getCategories } from "../../api/categories";
import { BASEURL } from "../../api";

const Categories = () => {
  const [categoryInfo, setCategoryInfo] = useState({});
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  const { mutate: addCategoryFun, error: addingCategoryError } = useMutation({
    mutationFn: () => {
      return addCategory(categoryInfo);
    },
    onSuccess: () => {
      setAdded(true);
      queryClient.invalidateQueries(["categories"]);
      setTimeout(() => {
        setAdded(false);
        setOpen(false);
      }, 1000);
    },
  });

  const handleChange = (e) => {
    if (e.target.files) {
      setCategoryInfo({ ...categoryInfo, [e.target.name]: e.target.files[0] });
    } else {
      setCategoryInfo({ ...categoryInfo, [e.target.name]: e.target.value });
    }
  };
  // console.log(recipe);
  if (!categories) return <div>Not found!</div>;
  console.log(categories);

  return (
    <div className="h-screen bg-gray-800">
      <button
        className="btn"
        onClick={() => {
          setOpen(true);
          setTimeout(() => {
            window.my_modal_3.showModal();
          }, 100);
        }}
      >
        Add Category
      </button>
      <div className="mt-[100px]  flex flex-wrap items-center justify-center gap-[15px]">
        {categories?.length > 0 ? (
          categories?.map((category) => {
            return (
              <div className="w-[250px] min-h-[200px] bg-white rounded-md flex flex-col items-center justify-between p-5 gap-[15px]">
                <div> {category.name}</div>
                <img
                  alt={category.name}
                  src={`${BASEURL}/${category.categoryimage}`}
                  height={"300px"}
                />
              </div>
            );
          })
        ) : (
          <div>
            <div className="w-[250px] min-h-[100px] bg-gray-800 rounded-md flex flex-col items-center p-5">
              <div> No categories added yet</div>
              <div>Please add some to view</div>
            </div>
          </div>
        )}
        {open && (
          <dialog id="my_modal_3" className="modal">
            <form
              method="dialog"
              className="modal-box"
              onSubmit={(e) => {
                e.preventDefault();
                addCategoryFun();
              }}
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Add Category</h3>
              <div className="flex flex-col min-h-[150px] gap-[15px]">
                <input
                  className="input input-bordered"
                  placeholder="name"
                  name="name"
                  onChange={handleChange}
                />
                <input
                  className="input input-bordered flex justify-center items-center p-2"
                  type="file"
                  name="categoryimage"
                  onChange={handleChange}
                />
                {added && (
                  <div className="bg-green-300 px-5 p-2 text-black rounded-md max-h-[100px] overflow-scroll mb-5">
                    Added successfully!
                  </div>
                )}
                <ErrorMsg error={addingCategoryError} />
                <button
                  className="btn btn-sm  btn-ghost absolute right-2 bottom-2 "
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Categories;
