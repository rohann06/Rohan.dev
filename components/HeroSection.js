/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className=" bg-[#f9f9f9] px-3 lg:px-96 h-screen w-screen flex justify-center items-center">
      <div>
        <div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div>
              <h1 className=" text-[2.5rem] lg:text-[4rem] leading-[3rem] lg:leading-[5rem] font-bold my-[2rem]">
                Front-End NextJs Developer 👋🏼
              </h1>
              <p className=" text-lg text-[#767676] w-[100%] lg:w-[80%]">
                Hi, I'm Rohan Ahire. A passionate Front-end React/Next.js
                Developer based in Gujarat, India. 📍
              </p>
              <div className=" flex items-center justify-center lg:justify-start gap-5 text-[23px] my-10 ">
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

            <div className=" relative h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[40rem]">
              <img
                src={"/mypic.png"}
                fill={true}
                alt={"mtpic"}
                className="my-img"
              />
            </div>
          </div>
          <div>Tech stack</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
