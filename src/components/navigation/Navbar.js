import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onMenuToggle, IsMenu }) => {
  return (
    <>
      <nav className="grid grid-cols-10 p-8 md:px-16 w-full font-body shadow-sm text-white z-20 bg-transparent">
        <Link
          onClick={onMenuToggle}
          to="/"
          className="col-span-6 flex items-baseline cursor-pointer relative group"
        >
          <div className="font-sub text-4xl md:text-5xl font-normal cursor-pointer no-underline text-secondary-100">
            BA
          </div>
          <span className="w-4 h-4 bg-tertiary-100 rounded-full bg-[#1DA1F2] transition-colors duration-300 ease-in-out group-hover:bg-[#1DA1F2]"></span>
        </Link>

        <div className="col-span-2 hidden md:flex flex-col font-light font-sub text-center md:text-left">
          <div>currently living in</div>
          <div>Lagos, Nigeria</div>
        </div>

        <Link
          onClick={onMenuToggle}
          className="col-span-4 sm:col-span-2 flex justify-end items-center mt-2 md:mt-0 relative group cursor-pointer"
        >
          <span className="w-2 h-2 bg-tertiary-100 rounded-full bg-white text-white transition-colors duration-300 ease-in-out group-hover:bg-[#1DA1F2]"></span>
          <span className="px-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
            {!IsMenu ? "menu" : "close"}
          </span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
