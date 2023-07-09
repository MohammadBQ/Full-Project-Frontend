import instance from ".";
import jwt_decode from "jwt-decode";

const signin = async (userInfo) => {
  try {
    const { data } = await instance.post("/user/signin", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const signup = async (userInfo) => {
  try {
    const { data } = await instance.post("user/signup", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const profile = async () => {
  try {
    const { data } = await instance.get("/user/profile");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }

    return true;
  }
  return false;
};

const signout = () => {
  localStorage.removeItem("token");
};

export { signin, signup, profile, getUser, storeToken, checkToken, signout };
