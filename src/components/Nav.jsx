import { SlPlane } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Nav() {
  const { user, logOut } = useContext(AuthContext);
  
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  console.log(user)

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setEmail(user.email ||"abc@gmail.com")
    }
  }, [user]);
  return (
    <nav className="flex justify-around items-center px-1 md:px-5 lg:px-6 pt-5 mb-6 py-5 ">
      {/* Navbar start */}
      <div className=" hidden *:font-bold lg:navbar-start lg:block w-0 md:w-0 lg:w-[40%]">
        <ul className="space-x-5 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-stone-800 border-b border-stone-300 pb-1"
                : "text-stone-900"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-stone-800 border-b border-stone-300 pb-1"
                : "text-stone-900"
            }
            to="/all-tourist-spot"
          >
            All Tourist spot
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-stone-800 border-b border-stone-300 pb-1"
                : "text-stone-900"
            }
            to="/add-tourist-spot"
          >
            Add Tourist Spot
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-stone-800 border-b border-stone-300 pb-1"
                : "text-stone-900"
            }
            to={`/lists/${email}`}
          >
            My list
          </NavLink>
        </ul>
      </div>
      {/* navbar center */}
      <div className=" navbar-start md:px-0 lg:navbar-center flex w-[40%] items-center justify-center lg:mr-8 ">
        <div className="dropdown text-stone-800">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <SlPlane className="w-8 h-8  text-stone-900 hidden md:flex lg:flex" />
          <a className=" text-base lg:text-3xl font-bold text-stone-800">
            Ninja Explore Hub
          </a>
        </div>
      </div>
      {/* navbar end */}
      <div className="*:font-bold lg:w-[30%] flex items-center  gap-3">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom mr-5"
              data-tip={displayName || "User Name not found"}
            >
              <img
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-offset-4 bg-[#fc6736] ring-[#fc6736]ring-offset-gray-100"
                src={
                  photoURL ||
                  "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                }
              />
            </div>

            <button onClick={logOut} className="text-stone-800">
              LogOut
            </button>
          </>
        ) : (
          <div className="*:font-bold flex items-center justify-between gap-3">
            <FaRegUser className="w-5 h-5 text-stone-800" />

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-stone-800 border-b border-stone-300 pb-1"
                  : "text-stone-900"
              }
              to="/login"
            >
              Login
            </NavLink>
            <p className="font-semibold text-stone-800">/</p>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-stone-800 border-b border-stone-300 pb-1"
                  : "text-stone-900"
              }
              to="/register"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
