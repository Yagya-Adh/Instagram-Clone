import React, { useState } from "react";
import Insta from "../../assets/imgs/instagram.jpeg";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisiblity = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="relative shadow-lg flex flex-col justify- items-center border border-gray-400 w-1/4 h-2/5 bg-white dark:bg-white">
      <img src={Insta} alt="" />

      <div className="mb-3">
        <input
          type="text"
          className="text-sm font-light bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
          placeholder="Phone number,username, or email"
        />
      </div>

      <div className="mb-3 relative">
        <input
          type={showPassword ? "text" : "password"}
          className="text-sm font-light bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
          placeholder="Password"
          onChange={handleChange}
        />
        {password && (
          <button
            onClick={togglePasswordVisiblity}
            type="button"
            className="absolute right-2 top-2 text-sky-400"
          >
            {showPassword ? "Hide" : "show"}
          </button>
        )}
      </div>

      <button className="px-2 py-1 rounded bg-sky-500 text-white font-bold text-center">
        Login in
      </button>
      <div className="flex">
        <h1 className="text-center font-bold text-gray-500">OR</h1>
      </div>
    </div>
  );
};

export default LoginForm;
