import React, { useContext, useState } from "react";
import { signup } from "../../api/user";

import UserContext from "../context/userContext";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const [user, setUser] = useContext(UserContext);

  const { mutate: signupFun } = useMutation({
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        setUser(true);
        navigate("/");
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signupFun();
  };

  return (
    <div className="bg-white-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-orange-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Signup</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4"></div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6"></div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
