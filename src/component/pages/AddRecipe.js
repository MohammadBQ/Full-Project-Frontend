import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addRecipe } from "../../api/Recipes";

const AddRecipe = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState([]);

  const queryClient = useQueryClient();
  const { mutate: addRecipe } = useMutation({
    mutationFn: () =>
      addRecipe({
        title,
        desc: desc,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipe"]);
      onClose();
    },
  });
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicChange = (e, index) => {
    const updatedTopics = [...desc];
    updatedTopics[index] = e.target.value;
    setdesc(updatedTopics);
  };

  const handleAddTopic = () => {
    setdesc([...desc, ""]);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...desc];
    updatedTopics.splice(index, 1);
    setdesc(updatedTopics);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addRecipe();
    setTitle("");
    setdesc([]);
  };

  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-gray-800 rounded-md shadow-md w-full max-w-md p-6 overflow-scroll max-h-[70%]">
        <h2 className="text-3xl text-white font-semibold mb-6">Add Recipe</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="topics"
              className="block text-white text-sm font-medium mb-2"
            >
              desc
            </label>
            {desc.map((topic, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => handleTopicChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTopic(index)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddTopic}
              className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add Topic
            </button>
          </div>
          <div className="mb-6"></div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
