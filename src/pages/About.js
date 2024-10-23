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
            <div className=" flex-grow  grid md:grid-cols-10 w-full  text-white">
              <div className=" col-span-6 flex flex-grow  flex-col justify-between ">
                <div className="py-6">
                  <div className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
                    BENJAMIN ODELEYE
                  </div>

                  <div className="font-sub">Frontend Developer</div>
                </div>

                <div className="text-left text-xl md:text-4xl leading-normal py-8">
                  Combining aesthetics and usefulness, I create solid user
                  interfaces in an artistic way. I love to spend time improving
                  the aesthetics of digital products without forgetting about
                  usability.
                  <br /> <br /> I am is a user interface designer working with
                  agencies and startups worldwide to tackle complex projects.
                  Having collaborated with clients, Olacodes knows what it’s
                  like to create, design and develop complex user interfaces.
                </div>
              </div>

              <div className="col-span-2 col-start-9 py-16 flex flex-col space-y-6">
                <div className="underline">Interest</div>

                <div>Frontend Developer</div>

                <div>UI/UX</div>

                <div>Creative Development</div>

                <div>Webflow</div>

              </div>
            </div>


<div className="flex justify-between items-end">          <div className=" underline">benjaminodeleye1@gmail.com</div>

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
