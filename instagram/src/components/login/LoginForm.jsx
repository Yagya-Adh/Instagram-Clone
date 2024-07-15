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
    <div className="p-4 relative shadow-lg flex flex-col justify-center items-center border text-center border-gray-400 w-1/4 h-auto bg-white dark:bg-white">
      <img src={Insta} alt="logo" />

      <div className="flex flex-col -mt-6 mb-7">
        <div className="mb-1">
          <input
            type="text"
            className="text-sm font-light bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Phone number,username, or email"
          />
        </div>

        <div className="mb-3 relative">
          <input
            type={showPassword ? "text" : "password"}
            className="text-sm font-light bg-white appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
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
      </div>

      <button className="px-2 py-1 rounded bg-sky-500 text-white font-bold text-center">
        Login in
      </button>
      <div className="flex">
        <h1 className="text-center font-bold text-gray-500">OR</h1>
      </div>

      <div className="mb-3 p-1">
        <h3 className="mb-0 font-extrabold font-serif text-blue-900">
          Log in with Facebook
        </h3>
        <span className="font-serif text-blue-950">Forgot password?</span>
      </div>
    </div>
  );
};

export default LoginForm;
