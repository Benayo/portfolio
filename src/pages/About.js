import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavPage from "../components/navigation/NavPage";
import SocialLinks from "../components/SocialLinks";

const About = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="bg-[#151118] min-h-screen ">
      <Navbar IsMenu={menu} onMenuToggle={menuHandler} />

      {!menu ? (
        <div className=" p-8 md:px-16 z-20 ">
          <div className="font-sub pb-4 border-b border-white text-white ">
            About me
          </div>

          <div className="flex flex-col justify-between">
            <div className=" flex-grow  grid grid-cols-10 gap-y-6 md:gap-y-0 w-full  text-white">
              <div className="col-span-10 md:col-span-6 flex flex-grow  flex-col justify-between ">
                <div className="py-6">
                  <div className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                    BENJAMIN ODELEYE
                  </div>

                  <div className="font-sub">Frontend Developer</div>
                </div>

                <div className="text-left text-xl md:text-4xl leading-normal py-8">
                  I’m a collaborative and detail-oriented Frontend Engineer with a knack for creating elegant, user-friendly solutions. Proficient in HTML, CSS, JavaScript, React, and Vue, I enjoy crafting pixel-perfect designs in Figma while ensuring cross-browser compatibility. My goal is to combine aesthetics with functionality to deliver production-ready designs that enhance the user experience.
                  <br /> <br />
                  I’ve collaborated with agencies and startups worldwide, tackling complex projects that require both creativity and technical expertise. I’m always eager to learn and grow, continually pushing the boundaries of what’s possible in frontend development.
                </div>
              </div>

              <div className=" col-span-10 md:col-span-2 md:col-start-9 py-16 flex flex-col space-y-6">
                <div className="underline">Interest</div>

                <div>Frontend Development</div>

                <div>UI/UX</div>

                <div>Creative Development</div>

                <div>Web Technologies</div>

              </div>
            </div>


<div className="text-white flex flex-col md:flex-row justify-between items-end space-y-6 md:space-y-0">          <a href="mailto:benjaminodeleye1@gmail.com"  className=" hover:text-[#1DA1F2] underline text-white pt-8 md:pt-16 cursor-pointer">benjaminodeleye1@gmail.com</a>

<SocialLinks/></div>
  
          </div>
        </div>
      ) : (
        <NavPage onMenuToggle={menuHandler} />
      )}
    </div>
  );
};

export default About;
