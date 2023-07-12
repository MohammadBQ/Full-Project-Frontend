import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { getCategories } from "../api/categories";
import Categories from "./pages/Categories";
import CategoryCard from "./CategoryCard";

const AddCategoryModal = ({ modalOpen, setModalOpen }) => {
  const queryClient = useQueryClient();
  const [picture, setPicture] = useState(null);

  const { mutate: addCategory } = useMutation({
    mutationFn: () =>
      addCategory({
        name: categoryTitle,
        categoryimage: picture,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      onClose();
    },
  });
  // const onClose = () => setModalOpen(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const onChangeTitle = (e) => {
    setCategoryTitle(e.target.value);
  };
  const handleButtonClick = () => {
    setModalOpen(false);
  };
  const onClose = () => setModalOpen(false);
  const onChangePicture = (e) => {
    console.log("picture: ", picture);
    setPicture(e.target.files[0]);
  };
  const [categoryTitle, setCategoryTitle] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCategory();
    setCategoryTitle("");
    setPicture("");
  };
  console.log(modalOpen);
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-header">
          <p
            className="close"
            onClick={() => {
              setModalOpen(false);
            }}
            // add close x button: &times
          >
            &times;
          </p>
        </div>

        <div className="modal-content">
          <h1>Add your category</h1>
        </div>

        <input
          type="text"
          id="categoryTitle"
          placeholder="categoryTitle"
          value={categoryTitle}
          onChange={onChangeTitle}
          required
        />
        {/* Adding categoryImage */}
        <input
          id="categoryImage"
          type="file"
          onChange={onChangePicture}
          required
        />

        <div className="modal-footer">
          <button className="btn btn-submit" onClick={handleFormSubmit}>
            Submit
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
//npm install --save react-images-uploading
