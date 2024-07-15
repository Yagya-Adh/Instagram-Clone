import React from "react";
import Insta from "../../assets/imgs/instagram.jpeg";
const LoginForm = () => {
  return (
    <div className="flex flex-col justify- items-center border border-gray-400 w-1/4 h-2/5">
      <img src={Insta} alt="" />

      <div className=" ">
        <input
          type="text"
          className="border px-2 py-1 "
          placeholder="Phone number,username, or email"
        />
      </div>

      <div className="">
        <input
          type="text"
          className="border px-2 py-1 "
          placeholder="Password"
        />
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
