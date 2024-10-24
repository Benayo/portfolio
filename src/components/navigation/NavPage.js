import React from "react";
import {  NavLink } from "react-router-dom";

import arrowSide from "../../assests/Svg/arrow-side.svg";

const NavPage = ({ onMenuToggle }) => {
  return (
    <>
      <div className=" flex-grow p-8 md:py-16 md:px-16 grid md:grid-cols-10 gap-y-8 md:gap-y-0 w-full font-body text-white z-20">
        <div className="col-span-6 flex flex-col justify-start">
          <NavLink
            to="/"
            onClick={onMenuToggle}
            className="flex items-center mb-4 relative group"
          >
            <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
            <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              HOME
            </span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={onMenuToggle}
            className="flex items-center mb-4 relative group"
          >
            <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
            <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              ABOUT
            </span>
          </NavLink>
          <NavLink to="/work"  onClick={onMenuToggle} className="flex items-center mb-4 relative group">
            <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
            <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              WORK
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={onMenuToggle}
            className="flex items-center mb-4 relative group"
          >
            <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
            <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              CONTACT
            </span>
          </NavLink>
        </div>
        <div className="flex flex-col font-sub p-4 md:p-0">
          <a href="https://github.com/Benayo" target="_blank" rel="noopener noreferrer" className="pb-6 text-left flex justify-between relative group">
            <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              github
            </span>
            <img src={arrowSide} alt="arrow" className="w-4" />
          </a>
          <a href="https://www.linkedin.com/in/odeleye-benjamin" target="_blank" rel="noopener noreferrer" className="pb-6 text-left flex justify-between relative group">
            <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              linkedIn
            </span>
            <img src={arrowSide} alt="arrow" className="w-4" />
          </a>
          <a href="https://x.com/benodeleye" target="_blank" rel="noopener noreferrer" className="pb-6 text-left flex justify-between relative group">
            <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
              twitter
            </span>
            <img src={arrowSide} alt="arrow" className="w-4" />
          </a>
          <div  className="py-32 text-left relative group">
            <span className="block">email</span>
            <a href="mailto:benjaminodeleye1@gmail.com" className="py-1 underline text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2] cursor-pointer">
              benjaminodeleye1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPage;
