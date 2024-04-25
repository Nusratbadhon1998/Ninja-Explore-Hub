import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/register.mp4";
import { HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";

function Register() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="w-full  md:w-[75%] lg:w-[80%] min-h-screen relative">
        <video
          autoPlay
          loop
          muted
          className="absolute min-h-dvh object-cover inset-0 "
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className=" w-full md:w-[55%] lg:w-[45%] p-8 space-y-3 rounded-xl bg-stone-100 text-stone-700 "
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Name" className="block text-gray-600 font-bold">
              Username
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-stone-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block text-gray-600 font-bold">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-stone-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600 font-bold">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-stone-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block text-gray-600 font-bold">
              Password
            </label>
            <input
              type={showPass? "text":"password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-stone-800 focus:border-violet-600 "
            />
            <div className="absolute right-3 bottom-4" onClick={() => setShowPass(!showPass)}>
              {showPass ? <HiOutlineEye /> : <HiOutlineEyeOff />    }
            </div>
          </div>

          <input
            className="block w-full p-3 text-center rounded-lg text-stone-100 bg-stone-600 hover:bg-stone-500 hover:text-stone-50 font-semibold"
            type="submit"
            value="Sign Up"
          />
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link to="/login" className="underline text-gray-800">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
