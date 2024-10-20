import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-between md:justify-start">
      <Link className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
          gith
        </span>
        <FaGithub
          className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </Link>
      <Link className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
          lin
        </span>
        <FaLinkedin
          className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </Link>
      <Link className="relative px-6 group flex items-center">
        <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 xl:block hidden">
          twit
        </span>
        <FaTwitter
          className="absolute top-0 text-xl md:text-3xl transition-transform duration-300 ease-in-out xl:opacity-0 transform group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-flipInY"
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
