import { SlPlane } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Nav() {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleTheme = (e) => {
    const box = e.target;
    const checked = box.checked;
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <nav className="flex justify-around items-center px-1 md:px-5 lg:px-6 pt-5  py-5 ">
      {/* Navbar start */}
      <div className=" hidden *:font-bold lg:navbar-start lg:block w-0 md:w-0 lg:w-[40%]">
        <ul
          className={`space-x-5 ${
            theme === "dark" ? "text-white" : "text-stone-100"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${
                    theme === "dark" ? "text-stone-100" : "text-stone-50"
                  } border-b border-stone-300 pb-1`
                : `${theme === "dark" ? "text-white" : "text-stone-100"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${
                    theme === "dark" ? "text-stone-100" : "text-stone-50"
                  } border-b border-stone-300 pb-1`
                : `${theme === "dark" ? "text-white" : "text-stone-100"}`
            }
            to="/all-tourist-spot"
          >
            All Tourist spot
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${
                    theme === "dark" ? "text-stone-100" : "text-stone-50"
                  } border-b border-stone-300 pb-1`
                : `${theme === "dark" ? "text-white" : "text-stone-100"}`
            }
            to="/add-tourist-spot"
          >
            Add Tourist Spot
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${
                    theme === "dark" ? "text-stone-100" : "text-stone-50"
                  } border-b border-stone-300 pb-1`
                : `${theme === "dark" ? "text-white" : "text-stone-100"}`
            }
            to={`/lists`}
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
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <SlPlane className={`w-8 h-8  ${theme === "dark" ? "text-white" : "text-stone-100"} hidden md:flex lg:flex`} />
          <a className={ `lg:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-stone-100"} `}>
            Ninja Explore Hub
          </a>
        </div>
      </div>
      {/* navbar end */}
      <div className="*:font-bold lg:w-[30%] flex items-center navbar-end  gap-3">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller hidden"
            name="theme"
            onChange={handleTheme}
          />
          {/* sun icon */}
          <svg
            className="swap-off fill-white w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          {/* moon icon */}
          <svg
            className="swap-on fill-white w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
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

            <button onClick={logOut} className={` ${theme === "dark" ? "text-white" : "text-stone-100"}`}>
              LogOut
            </button>
          </>
        ) : (
          <div className="*:font-bold flex items-center justify-between gap-3">
            <FaRegUser className={`w-5 h-5 ${theme === "dark" ? "text-white" : "text-stone-100"}`} />

            <NavLink
              className={({ isActive }) =>
              isActive
              ? `${
                  theme === "dark" ? "text-stone-100" : "text-stone-50"
                } border-b border-stone-300 pb-1`
              : `${theme === "dark" ? "text-white" : "text-stone-100"}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <p className="font-semibold text-stone-800">/</p>
            <NavLink
              className={({ isActive }) =>
                isActive
                ? `${
                    theme === "dark" ? "text-stone-100" : "text-stone-50"
                  } border-b border-stone-300 pb-1`
                : `${theme === "dark" ? "text-white" : "text-stone-100"}`
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
