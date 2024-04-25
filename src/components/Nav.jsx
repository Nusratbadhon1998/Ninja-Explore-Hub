import { SlPlane } from "react-icons/sl";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-around items-center px-1 md:px-5 lg:px-7 pt-5 mb-5 bg-stone-800 py-5">
   
      <div className=" hidden *:font-bold lg:navbar-start lg:block w-0 md:w-0 lg:w-[25%]">
        <ul className="space-x-5  *:hover:text-stone-50">
          <NavLink className={({ isActive }) =>
          isActive
            ? "text-stone-300 border-b border-stone-300 pb-1"
            : "text-stone-200"
        } to="/">Home</NavLink>
          <NavLink className={({ isActive }) =>
          isActive
            ? "text-stone-300 border-b border-stone-300 pb-1"
            : "text-stone-200"
        } to="/all-tourist-spot">All Tourist spot</NavLink>
          <NavLink className={({ isActive }) =>
          isActive
            ? "text-stone-300 border-b border-stone-300 pb-1"
            : "text-stone-200"
        } to="/add-tourist-spot">Add Tourist Spot</NavLink>
        </ul>
      </div>
      
      <div className=" navbar-start md:px-0 lg:navbar-center flex w-[60%] items-center justify-center lg:mr-10">
        <div className="dropdown text-stone-300">
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
        <SlPlane className="w-8 h-8  text-stone-300 hidden md:flex lg:flex"  />
        <a className=" text-base lg:text-3xl font-bold text-stone-300">Ninja Explore Hub</a>

        </div>
      </div>
      <div className=" space-x-2 lg:space-x-5 *:font-bold">
        <NavLink className={({ isActive }) =>
          isActive
            ? "text-stone-300 border-b border-stone-300 pb-1"
            : "text-stone-200"
        } to="/login">Login  /</NavLink>
        <NavLink className={({ isActive }) =>
          isActive
            ? "text-stone-300 border-b border-stone-300 pb-1"
            : "text-stone-200"
        } to="/register">Register</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
