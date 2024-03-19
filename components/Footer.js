import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socials } from "../utils/_socialdb";

const Footer = () => {
  return (
    <div className=" bg-[#2d2e32] text-white flex flex-col lg:flex-row items-center lg:justify-around font-bold py-[50px] gap-y-5">
      <p>Rohan Ahire © 2023</p>

      <div className=" flex items-center gap-5 text-[23px] ">
        {socials.map((social) => (
          <>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-125 duration-150 ease-in-out"
            >
              {social.logo}
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
