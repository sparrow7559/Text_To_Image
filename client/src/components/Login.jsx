import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Login");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        action=""
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.profile_icon} alt="" width={30} className="" />
          <input
            type="text"
            placeholder="Full Name"
            required
            className="outline-none text-sm"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" width={20} className="" />
          <input
            type="email"
            placeholder="Email id"
            required
            className="outline-none text-sm"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" width={15} className="" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm"
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          Create Account
        </button>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>

        <p className="mt-5 text-center">
          Already have an account?
          <span className="text-blue-600 cursor-pointer">Login</span>
        </p>
        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;
