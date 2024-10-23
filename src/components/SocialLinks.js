import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const SocialLinks = () => {
//   return (
//     <div className="flex flex-wrap justify-between md:justify-start">
//       <Link className="relative px-6 group flex items-center  group">
//         <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
//           gith
//         </span>
//         <FaGithub
//           className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
//           style={{
//             transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
//           }}
//         />
//       </Link>
//       <Link className="relative px-6 group flex items-center">
//         <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
//           lin
//         </span>
//         <FaLinkedin
//           className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
//           style={{
//             transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
//           }}
//         />
//       </Link>
//       <Link className="relative px-6 group flex items-center">
//         <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
//           twit
//         </span>
//         <FaTwitter
//           className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
//           style={{
//             transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
//           }}
//         />
//       </Link>
//     </div>
//   );
// };




const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-between md:justify-start">
      <a href="https://github.com/Benayo" target="_blank" rel="noopener noreferrer" className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">gith</span>
        <FaGithub
          className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
        />
      </a>
      <a href="https://www.linkedin.com/in/odeleye-benjamin" target="_blank" rel="noopener noreferrer" className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">lin</span>
        <FaLinkedin
          className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
        />
      </a>
      <a href="https://x.com/benodeleye" target="_blank" rel="noopener noreferrer" className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">twit</span>
        <div className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY">
          {/* X Logo SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M23 3a10.8 10.8 0 01-3.1.8A4.7 4.7 0 0022 2a9.6 9.6 0 01-3 1.1A4.7 4.7 0 0016.5 0c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.1A13.3 13.3 0 011.7.6a4.7 4.7 0 00-.6 2.4c0 1.7.9 3.2 2.2 4.1A4.6 4.6 0 01.9 7.1v.1c0 2.2 1.5 4.1 3.5 4.5a4.7 4.7 0 01-2.1.1c.6 1.8 2.3 3.1 4.3 3.2A9.4 9.4 0 010 18.8c2.7 1.7 5.9 2.7 9.3 2.7a13.3 13.3 0 0013.5-13.5c0-.2 0-.5-.1-.7A9.4 9.4 0 0023 3z"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
