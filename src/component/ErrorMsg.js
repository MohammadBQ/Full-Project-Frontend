import React from "react";

const ErrorMsg = ({ error }) => {
  if (!error) return "";

  return (
    <div className="bg-red-300 p-1 text-black rounded-md max-h-[100px] overflow-scroll mb-5">
      {JSON.stringify(error?.response?.data || error)}
    </div>
  );
};

export default ErrorMsg;
