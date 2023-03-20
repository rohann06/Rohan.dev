import Image from "next/image";
import React from "react";
import img from "../public/about.webp";
import img2 from "../public/about2.svg";
import dev from "../public/dev.png";

const About = () => {
  return (
    <div className=" mx-3 h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 py-[5rem] lg:py-[10rem] z-0">
      <div className=" relative">
        <Image
          src={img}
          height={200}
          width={500}
          alt="about img"
          className=" rounded-2xl"
        />
        <div className=" bg-white animate-spin-slow rounded-full hidden lg:block absolute -bottom-1/4 -right-12 ">
          <Image src={img2} height={200} width={170} alt="about img" />
        </div>
        <p className=" hidden lg:block text-[4rem] absolute -bottom-5 right-1">
          <Image src={dev} height={20} width={60} alt='devImg' />
        </p>
      </div>
      <div className=" text-center lg:text-left lg:px-10 lg:w-[600px]">
        <p className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]">
          About
        </p>
        <h1 className=" text-[25px] font-bold mb-[1rem]">
          A dedicated Front-end Developer based in surat, India 📍
        </h1>
        <p className=" text-[#8e8e8e]">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in{" "}
          <span className=" text-black font-medium">
            Next.js , JavaScript , Typescript, Prisma, supabase, Tailwind CSS and PostgreSQL
          </span>{" "}
          . I excel in build and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
