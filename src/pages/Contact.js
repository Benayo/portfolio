import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavPage from "../components/navigation/NavPage";

const Contact = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="bg-[#151118] min-h-screen ">
      <Navbar IsMenu={menu} onMenuToggle={menuHandler} />

      {!menu ? (
        <div className=" p-8 md:px-16 z-20">
          <div className="font-sub pb-4 border-b border-white text-white ">
            Contact me
          </div>

          <div className=" flex-grow  grid xl:grid-cols-10  text-white">
            <div className=" flex flex-col justify-between col-span-4">
              <form target="_blank"
            action="https://formspree.io/f/mdobrgwe"
            method="POST" className="py-16 flex flex-col gap-y-8">
                <input
                  name="name" 
                  className=" p-4 border-b border-white bg-transparent block w-full outline-none focus:ring-0 "
                  placeholder="Your name"
                />

                <input
                name="email"
                  className=" p-4 border-b border-white bg-transparent block w-full outline-none focus:ring-0 "
                  placeholder="Your email"
                />

                <input
                 name="phone"
                  className=" p-4 border-b border-white bg-transparent block w-full outline-none focus:ring-0 "
                  placeholder="Your phone number"
                />

                <textarea
                name="message"
                  className=" p-4 border-b border-white bg-transparent block w-full outline-none  focus:ring-0 "
                  placeholder="Your message"
                />

                <button type="submit"  className=" w-fit  flex justify-start py-8 px-24 bg-[#1E1B21] rounded-md">
                  Send message
                </button>
              </form>

              <div className=" underline pt-8 md:pt-16 ">
                benjaminodeleye1@gmail.com
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NavPage onMenuToggle={menuHandler} />
      )}
    </div>
  );
};

export default Contact;
