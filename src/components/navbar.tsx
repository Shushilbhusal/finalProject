import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0">
      <div className="Navbar-Container h-24 bg-[#000435]">
        {/* Navigation Links */}
        <ul className="Navbar-Items h-10 w-full flex flex-wrap justify-end gap-4 p-2 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-zinc-600" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-zinc-600" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-zinc-600" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-zinc-600" : "text-white"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-zinc-600" : "text-white"
              }
            >
              Sign up
            </NavLink>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="searchbar w-full h-14 flex flex-wrap items-center">
          <div className="w-[20%]">
            <img src="/logo.png" alt="Logo" className="logo h-9 cursor-pointer" />
          </div>
          <div className="w-[50%] flex gap-1 items-center">
            <input
              type="text"
              placeholder="Search"
              className="textbox w-[95%] h-10 rounded-md p-2 bg-white"
            />
            <IoSearchOutline className="text-white text-3xl cursor-pointer" />
          </div>
          <div className="w-[30%] flex justify-center h-8">
            <BsCart className="cart text-3xl cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
