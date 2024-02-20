/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SkillsLogo from "./SkillsLogo";
import { data } from "../utils/_db";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className=" bg-[#f9f9f9] px-3 lg:px-96 py-10 lg:py-0 lg:h-screen flex justify-center items-center"
    >
      <div>
        <div className=" pt-24 lg:pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
            <div className=" md:pr-14">
              <h1 className=" text-[1.9rem] lg:text-[3.6rem] leading-[3rem] lg:leading-[4.4rem] font-bold my-[1.1rem] md:my-[2rem]">
                Front-End Developer 👋🏼
              </h1>
              <p className=" md:text-lg p-2 text-[#767676] font-Mulish w-[100%] lg:w-[85%]">
                Hi, I'm{" "}
                <span className=" text-[#4f4f4f] font-bold">Rohan Ahire</span>.
                A passionate Front-end Developer based in <br /> India📍
              </p>
              <div className=" flex items-center justify-center lg:justify-start gap-5 text-[20px] lg:text-[23px] my-5 lg:my-10 ">
                <a
                  href="https://github.com/rohanA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#147efb] duration-300 ease-in-out text-[1.8rem]"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://twitter.com/rohanahire06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#147efb] duration-300  ease-in-out text-[1.8rem]"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#147efb] duration-300  ease-in-out text-[1.8rem]"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className=" relative ">
              <Image
                src={"/mypic.png"}
                width={400}
                height={400}
                alt={"mtpic"}
                className="my-img h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem] "
              />
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row items-center gap-5 py-10 lg:pt-16">
            <div>
              <h1 className=" text-[1.2rem] font-black font-Mulish lg:pr-5">
                Tech Stack :
              </h1>
            </div>
            <div className=" flex flex-wrap justify-center items-center  gap-6 lg:gap-7">
              {data.map((logo) => {
                return (
                  <>
                    <SkillsLogo
                      src={logo.src}
                      alt={"react"}
                      className={logo.Animation}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
