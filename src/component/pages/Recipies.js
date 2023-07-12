import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addRecipe, getAllRecpies } from "../../api/Recipes";
import ErrorMsg from "../ErrorMsg";

const Recipies = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecpies(),
  });
  const { mutate: addRecipeFun, error: addingRecipeError } = useMutation({
    mutationFn: () => {
      return addRecipe(recipeInfo);
    },
    onSuccess: () => {
      setAdded(true);
      queryClient.invalidateQueries(["recipes"]);
      setTimeout(() => {
        setAdded(false);
        setOpen(false);
      }, 1000);
    },
  });

  const handleChange = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };
  // console.log(recipe);
  if (!recipes) return <div>Not found!</div>;
  console.log(recipes);

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
        Add Recipe
      </button>
      <div className="mt-[100px]  flex flex-wrap items-center justify-center gap-[15px]">
        {recipes?.length > 0 ? (
          recipes.map((recipe) => {
            return (
              <div className="w-[250px] min-h-[100px] bg-white rounded-md flex flex-col items-center p-5">
                <div> {recipe.name}</div>
                <div>{recipe.instructions}</div>
              </div>
            );
          })
        ) : (
          <div>
            <div className="w-[250px] min-h-[100px] bg-gray-800 rounded-md flex flex-col items-center p-5">
              <div> No recipes added yet</div>
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
                addRecipeFun();
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
              <h3 className="font-bold text-lg">Add Recipe</h3>
              <div className="flex flex-col min-h-[150px] gap-[15px]">
                <input
                  className="input input-bordered"
                  placeholder="name"
                  name="name"
                  onChange={handleChange}
                />
                <input
                  className="input input-bordered"
                  placeholder="instructions"
                  name="instructions"
                  onChange={handleChange}
                />
                {added && (
                  <div className="bg-green-300 px-5 p-2 text-black rounded-md max-h-[100px] overflow-scroll mb-5">
                    Added successfully!
                  </div>
                )}
                <ErrorMsg error={addingRecipeError} />
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

export default Recipies;
