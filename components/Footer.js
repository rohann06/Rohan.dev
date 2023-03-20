import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#2d2e32] text-white flex flex-col lg:flex-row items-center lg:justify-around font-bold py-[50px] gap-y-5">
      <p>Rohan Ahire © 2023</p>

      <div className=" flex items-center gap-5 text-[23px] ">
        <a
          href="https://github.com/rohanA6"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-125 duration-150 ease-in-out"
        >
          <FaGithub />
        </a>

        <a
          href="https://twitter.com/rohanahire06"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-125 duration-150 ease-in-out"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/rohan-ahire-652001/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:scale-125 duration-150 ease-in-out"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
