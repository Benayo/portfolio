import React from "react";

import arrow from "../assests/Svg/arrow-down.svg";
import Nav from "../components/navigation/Nav";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <>
      <div className="bg-hero-mobile-background sm:bg-hero-tab-background lg:bg-hero-desktop-background bg-cover min-h-screen flex flex-col justify-between  ">
        <Nav />

        <main className="flex-grow p-8 md:px-16 flex flex-col justify-between min-h-screen text-center md:text-left">
          <div className="text-[6rem] leading-tight md:leading-normal md:text-[11rem] font-main text-white relative flex flex-col justify-start xl:flex-row items-center">
            <span className=" animate-moveInLeft">BENJAMIN</span>
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
            <span className=" animate-moveInRight">ODELEYE</span>
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
                <span className="mr-1">explore</span>{" "}
                <img src={arrow} alt="arrow" />
              </div>
            </div>

            <SocialLinks />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
