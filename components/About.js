/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../public/about.webp";
import img2 from "../public/about2.svg";
import dev from "../public/dev.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      id="about"
      className=" mx-3 py-24 lg:py-0  lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-3 lg:px-80 z-0"
    >
      <div className=" relative">
        <Image
          data-aos="fade-in"
          src={img}
          height={200}
          width={500}
          alt="about img"
          className=" rounded-2xl"
        />
        <div className=" bg-white animate-spin-slow rounded-full hidden lg:block absolute -bottom-1/4 -right-12 ">
          <Image src={img2} height={200} width={170} alt="about img" />
        </div>
        <p
          data-aos="fade-in"
          data-aos-duration="1500"
          className=" hidden lg:block text-[4rem] absolute -bottom-5 right-1"
        >
          <Image src={dev} height={20} width={60} alt="devImg" />
        </p>
      </div>

      <div
        data-aos="fade-in"
        className=" text-center lg:text-left lg:px-10 lg:w-[600px]"
      >
        <p
          data-aos="fade-right"
          className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]"
        >
          About
        </p>
        <h1 data-aos="fade-right" className=" text-[25px] font-bold mb-[1rem]">
          A dev who loves to build.
        </h1>
        <p
          data-aos="fade-right"
          className=" text-[#8e8e8e] font-Mulish text-justify"
        >
          I'm a developer who enjoys building and contributing to open source,
          currently active in{" "}
          <a
            className=" font-bold text-blue-500"
            target="_blank"
            href="https://x.com/buidlguidl"
          >
            {" "}
            BuidlGuidl{" "}
          </a>{" "}
          and{" "}
          <a
            className=" font-bold text-blue-500"
            target="_blank"
            href="https://x.com/developer_dao"
          >
            {" "}
            DeveloperDAO
          </a>
          . I build responsive websites using tools like{" "}
          <span className=" text-black font-medium">
            {" "}
            JavaScript, TypeScript, Next.js, Solidity, and Hardhat.
          </span>{" "}
          I'm skilled in crafting dynamic interfaces with clean code and have
          experience with DevOps tools like Docker and AWS. I thrive in team
          settings, collaborating to create great web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
