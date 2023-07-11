import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { categories } from "../../api/categories";
import CategoryList from "../../component/CategoryList";
import { Link } from "react-router-dom";
import Modal from "../Modal";
// import {user} from "../../api/user";

const Categories = () => {
  const [showModal, setShowModal] = useState(true);
  const handleShowModal = () => {
    setShowModal(true);
  };
  //   const [picture, setPicture] = useState(null);

  //   const onChangePicture = (e) => {
  //     console.log("picture: ", picture);
  //     setPicture(e.target.files[0]);
  //   };
  return (
    <div>
      <div>
        {/* add category selector */}

        <lable>Choose your category</lable>
        <select>
          <option disabled selected>
            Choose category:
          </option>
          <option value="categories">Burger</option>
          <option value="categories">Pasta</option>
          <option value="categories">Pizza</option>
          {/* <option value="categories"></option> */}
        </select>
      </div>
      {/* Adding categoryImage
      <input id="categoryImage" type="file" onChange={onChangePicture} /> */}

      <CategoryList />
      {/* <Modal show={showModal} setShow={setShowModal} /> */}

      {/* {user ? ( */}

      <div className="btn">
        {/* <button onClick={handleShowModal}> */}
        <button>
          <a>Add Category</a>
        </button>
      </div>
      {/* add category Modal */}
      <addCategoryModal show={showModal} onClose={onClose} onSave={() => {}} />

      {/* ) : ( */}
      {/* <div>
        <h2>not authorize to add category</h2>
      </div> */}
      {/* )} */}
    </div>
  );
};

export default Categories;
