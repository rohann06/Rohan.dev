/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className=" bg-[#f9f9f9] px-3 lg:px-96 h-screen w-screen flex justify-center items-center">
      <div>
        <div className=" pt-24 lg:pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
            <div>
              <h1 className=" text-[2.5rem] lg:text-[3.6rem] leading-[3rem] lg:leading-[4.4rem] font-bold my-[2rem]">
                Front-End NextJs Developer 👋🏼
              </h1>
              <p className=" text-lg text-[#767676] font-Mulish w-[100%] lg:w-[85%]">
                Hi, I'm Rohan Ahire. A passionate Front-end React/Next.js
                Developer based in Gujarat, India. 📍
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
                  href="https://www.linkedin.com/in/rohan-ahire-652001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#147efb] duration-300  ease-in-out text-[1.8rem]"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className=" relative h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[40rem]">
              <img
                src={"/mypic.png"}
                fill={true}
                alt={"mtpic"}
                className="my-img"
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
              
              <div className=" shadow-md rounded-full">
                <img
                  src={"/react.svg"}
                  alt={"react"}
                  className=" w-16 p-3 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/next-js.svg"}
                  alt={"react"}
                  className=" w-16 p-3 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/tw.svg"}
                  alt={"react"}
                  className=" w-16 p-3 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/js.svg"}
                  alt={"react"}
                  className=" w-16 p-4 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/ts.svg"}
                  alt={"react"}
                  className=" w-16 p-4 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/postgresql.svg"}
                  alt={"react"}
                  className=" w-16 p-4 "
                />
              </div>
              <div className=" shadow-md rounded-full">
                <img
                  src={"/prisma.svg"}
                  alt={"react"}
                  className=" w-16 p-4 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
