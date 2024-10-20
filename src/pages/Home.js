import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import arrow from "../assests/Svg/arrow-down.svg";
import arrowSide from "../assests/Svg/arrow-side.svg";
import Navbar from "../components/navigation/Navbar";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      <div className="bg-hero-mobile-background sm:bg-hero-tab-background lg:bg-hero-desktop-background bg-cover min-h-screen flex flex-col ">
        <Navbar IsMenu={menu} onMenuToggle={menuHandler} />

        {menu && (
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>
        )}

        {!menu ? (
          <main className="flex-grow p-8 md:px-16 flex flex-col justify-between text-center md:text-left z-20">
            <div className="text-[6rem] leading-tight md:leading-normal md:text-[11rem] font-main text-white relative flex flex-col justify-start xl:flex-row items-center">
              <span className="animate-moveInLeft">BENJAMIN</span>
              <span
                style={{
                  display: "inline-block",
                  height: "12px",
                  backgroundColor: "white",
                  margin: "0 1rem",
                  width: "20%",
                  maxWidth: "150px",
                  animation: "roll 2s ease-in-out forwards",
                }}
              ></span>
              <span className="animate-moveInRight">ODELEYE</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-white my-4 xl:my-0">
              <div className="p-4 rounded-md font-sub w-full md:w-[24rem] bg-dark-gray bg-opacity-40 mb-4 md:mb-0">
                <div className="flex justify-start items-center">
                  <span className="w-2 h-2 bg-tertiary-100 rounded-full bg-white"></span>
                  <span className="px-1">info</span>
                </div>

                <div className="py-4 text-left">
                  Combining aesthetics and usefulness, I create solid user
                  interfaces in an artistic way. I love to spend time improving
                  the aesthetics of digital products without forgetting about
                  usability.
                </div>

                <div className="text-left flex">
                  <span className="mr-1">explore</span>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>

              <SocialLinks />
            </div>
          </main>
        ) : (
          <div className=" flex-grow p-8 md:py-16 md:px-16 grid md:grid-cols-10 w-full font-body text-white z-20">
            <div className="col-span-6 flex flex-col justify-start">
              <NavLink
                onClick={menuHandler}
                className="flex items-center mb-4 relative group"
              >
                <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
                <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  HOME
                </span>
              </NavLink>
              <NavLink className="flex items-center mb-4 relative group">
                <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
                <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  ABOUT
                </span>
              </NavLink>
              <NavLink className="flex items-center mb-4 relative group">
                <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
                <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  WORK
                </span>
              </NavLink>
              <NavLink className="flex items-center mb-4 relative group">
                <span className="inline-block h-[12px] bg-white mr-2 transition-all duration-300 ease-in-out transform origin-left w-0 group-hover:w-[20%] group-hover:max-w-[60px] group-hover:bg-[#1DA1F2]"></span>
                <span className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  CONTACT
                </span>
              </NavLink>
            </div>
            <div className="flex flex-col font-sub">
              <Link className="pb-6 text-left flex justify-between relative group">
                <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  github
                </span>
                <img src={arrowSide} alt="arrow" className="w-4" />
              </Link>
              <Link className="pb-6 text-left flex justify-between relative group">
                <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  linkedIn
                </span>
                <img src={arrowSide} alt="arrow" className="w-4" />
              </Link>
              <Link className="pb-6 text-left flex justify-between relative group">
                <span className="mr-1 text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  twitter
                </span>
                <img src={arrowSide} alt="arrow" className="w-4" />
              </Link>
              <Link className="py-32 text-left relative group">
                <span className="block">email</span>
                <span className="py-1 underline text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                  benjaminodeleye1@gmail.com
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
