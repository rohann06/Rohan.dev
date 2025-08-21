/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { SiGmail } from "react-icons/si";
import SkillsLogo from "./SkillsLogo";
import { data } from "../utils/_db";
import { socials } from "../utils/_socialdb";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className=" bg-[#f9f9f9] px-3 lg:px-96 py-10 lg:py-0 lg:h-screen flex justify-center items-center"
    >
      <div>
        <div className=" pt-24 lg:pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
            <div className=" lg:pr-14">
              <h1 className=" text-[1.9rem] lg:text-[3.6rem] leading-[3rem] lg:leading-[4.4rem] font-bold my-[1.1rem] lg:my-[2rem]">
                A Developer 👋🏼
              </h1>
              <p className=" lg:text-lg p-1 text-[#767676] font-Mulish w-[100%] lg:w-[85%]">
                Hi, I'm{" "}
                <span className=" text-[#4f4f4f] font-bold">Rohan Ahire</span>.{" "}
                <br />A developer who enjoys building ⚒️. <br /> Regardless of
                the tech stack or language.
              </p>
              <p className=" lg:text-lg p-1 pt-3 text-[#767676] font-Mulish w-[100%] lg:w-[85%]">
                My{" "}
                <a
                  href="https://drive.google.com/file/d/1yC9DH8gHlczFtG0UWsWZrZ31VbY2xNvS/view?usp=sharing"
                  target="_blank"
                  className=" text-[#147efb] font-bold underline"
                >
                  Resume
                </a>
                📄
              </p>
              <div className=" flex items-center justify-center lg:justify-start gap-5 text-[20px] lg:text-[23px] my-5 lg:my-10 ">
                {socials.map((social) => (
                  <>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-[#147efb] duration-300 ease-in-out text-[1.8rem]"
                    >
                      {social.logo}
                    </a>
                  </>
                ))}
                <a
                  href="mailto:rohanahire006@gmail.com"
                  className=" hover:text-[#147efb] duration-300 ease-in-out text-[1.8rem]"
                >
                  <SiGmail />
                </a>
              </div>
            </div>

            <div className=" relativ overflow-hidden lg:h-[23rem] lg:w-[19rem]">
              <Image
                src={"/mypic.jpg"}
                width={400}
                height={400}
                alt={"mtpic"}
                className="my-img overflow-hidden h-full w-full mask-radial-at-center rounded-full lg:h-full lg:w-full opacity-90 bg-cover"
              />
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row items-center gap-5 py-10 lg:pt-16">
            <div className=" flex flex-wrap justify-center items-center  gap-6 lg:gap-7">
              {data.map((logo) => {
                return (
                  <>
                    <SkillsLogo
                      src={logo.src}
                      alt={"react"}
                      className={logo.dataaosduration}
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
