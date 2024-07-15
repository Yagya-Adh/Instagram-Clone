import React from "react";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-white dark:bg-white">
      <LoginForm />
      <SignUpCard />
    </div>
  );
};

export default Login;

const SignUpCard = () => {
  return (
    <div className=" p-3 my-3 relative shadow-lg flex justify-center items-center border text-center border-gray-400 w-1/4 h-auto bg-white dark:bg-white">
      <h2 className="text-sm mx-1">Don't have an account?</h2>
      <a href="" className="text-blue-500 font-bold ">
        Signup
      </a>
    </div>
  );
};
