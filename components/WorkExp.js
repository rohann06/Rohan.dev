import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Aos from "aos";
import "aos/dist/aos.css";
import JobCrad from "./JobCrad";

const WorkExp = () => {
  return (
    <div
      data-aos="fade-in"
      id="work"
      className=" bg-[#f9f9f9] px-3 lg:px-96 py-[5rem] lg:py-[5rem]"
    >
      <div>
        <p className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]">
          Work Experience
        </p>
        <h1 className=" text-[1.5rem] font-bold mb-[6rem]">
          companies In wich I contributed ⚒️
        </h1>
      </div>

      <JobCrad
        title={"Web Analyst"}
        company={"Frontuser"}
        url={"https://www.linkedin.com/company/frontuser/about/"}
        desceription={
          "I transitioned from data analysis to web development, previously working as a web analyst t Frontier, a Surat-based startup focused on  boosting B2C business growth. This shift marked a pivotal moment in my journey, propelling me into the dynamic field of web development."
        }
      />

      <JobCrad
        title={"Frontend Developer"}
        company={"Social3"}
        url={"https://app.social3.club/"}
        desceription={
          "After Swithching and learning a web development skils I started working as a frontend developer at social3, Socila3 is also a  startup  based in Banglore, it's a greate hiring plateform for web3 falks the team was very good and supportive, I learned and grow a lot there"
        }
      />
    </div>
  );
};

export default WorkExp;
