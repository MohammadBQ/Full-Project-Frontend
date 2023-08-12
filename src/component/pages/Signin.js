import React, { useContext, useState } from "react";
import { signin } from "../../api/user";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [user, setUser] = useContext(UserContext);

  const { mutate: SiginFun } = useMutation({
    mutationFn: () => signin(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        setUser(true);
        navigate("/");
      } else {
        setUser(false);
        alert("The Username or Password is wrong");
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    SiginFun();
  };
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">Signin</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="Username"
              className="block text-gray-800 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-gray-800 rounded-md hover:bg-blue-600 transition-colors"
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
