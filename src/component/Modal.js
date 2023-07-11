import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { addCategory } from "../api/categories";

import React, { useState } from "react";

const Modal = ({ show, setShow }) => {
  const onClose = () => setShow(true);
  const queryClient = useQueryClient();
  const { mutate: addCategory } = useMutation({
    mutationFn: () =>
      addCategory({
        // name: categoryTitle,
        // categoryImage: categoryImage,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      // onClose();
    },
  });
  const Categories = () => {
    const [picture, setPicture] = useState(null);

    const onChangePicture = (e) => {
      console.log("picture: ", picture);
      setPicture(e.target.files[0]);
    };

    const handleSubmit = (e) => {
      addCategory();
    };

    if (show) {
      console.log("test");
    }
    return (
      <div className="container">
        <h1>test</h1>

        <div className="modal">
          <div className="modal-header">
            <p className="close">&times;</p>
          </div>
          <div className="modal-content">
            <h1>Add your category</h1>
          </div>
          <input placeholder="categoryTitle"></input>
          {/* Adding categoryImage */}
          <input id="categoryImage" type="file" onChange={onChangePicture} />

          <div className="modal-footer">
            <button className="btn btn-submit" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
};

export default Modal;

// import React from "react";

// const Modal = ({ show, setShow }) => {
//   if (!show) return "";
//   return (
//     <div className="absolute inset-0 flex justify-center items-center">
//       <div className="absolute bg-black z-0 opacity-75 w-full h-full"></div>
//       <div className="z-10 pt-[50pt] border-b-2 relative w-[50%] h-[50%] bg-whight border-2 border-black">
//         <input placeholder="recipeTitle"></input>
//         <input>ghgjkgkggjg</input>
//         <button
//           onClick={() => {
//             setShow(false);
//           }}
//           className="bg-red-300 absolute top-5 right-5"
//         >
//           close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
