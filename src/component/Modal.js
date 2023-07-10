import React from "react";

const Modal = ({ show, setShow }) => {
  if (!show) return "";
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="absolute bg-black z-0 opacity-75 w-full h-full"></div>
      <div className="z-10 pt-[50pt] border-b-2 relative w-[50%] h-[50%] bg-whight border-2 border-black">
        <input placeholder="recipeTitle"></input>
        <input>ghgjkgkggjg</input>
        <button
          onClick={() => {
            setShow(false);
          }}
          className="bg-red-300 absolute top-5 right-5"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
