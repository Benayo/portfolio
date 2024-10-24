import React, { useState } from "react";



import arrow from "../assests/Svg/arrow-down.svg";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/navigation/Navbar";
import NavPage from "../components/navigation/NavPage";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
       <div className="bg-hero-mobile-background sm:bg-hero-tab-background lg:bg-hero-desktop-background bg-cover min-h-screen flex flex-col relative">
        <Navbar IsMenu={menu} onMenuToggle={menuHandler} />
        {menu && (
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>
        )}

{!menu? <main className="flex-grow p-8 md:px-16 flex flex-col justify-between text-center md:text-left z-20">
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
                Detail-oriented Frontend Engineer focused on creating elegant, user-friendly designs with cross-browser compatibility. Dedicated to delivering production-ready solutions that balance aesthetics and functionality.                </div>

                <Link to='/about' className="text-left flex hover:text-[#1DA1F2]">
                  <span className="mr-1">explore</span>
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>

              <SocialLinks />
            </div>
          </main> : (<NavPage onMenuToggle={menuHandler}/>)}
          

      </div>
    </>
  );
};
export default Home;
