import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const project = async () => {
      const { data, error } = await supabase.from("Projects").select();

      if (data) {
        setProjects(data);
      }
      if (error) {
        console.log(error);
      }
    };
    project();

    Aos.init({
      duration: 1000,
      offset: 220
    });
  }, []);

  return (
    <div data-aos="fade-in" id="project" className=" bg-[#f9f9f9] px-3 lg:px-96 py-[5rem] lg:py-[5rem]">
      <div>
        <p className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]">
          Projects
        </p>
        <h1 className=" text-[1.5rem] font-bold mb-[6rem]">
          Each project is a unique piece of development 🧩
        </h1>
      </div>

      <div>
        {projects &&
          projects.map((project) => {
            return (
              <div key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  repoLink={project.githubUrl}
                  appLink={project.appUrl}
                  image={project.projectImageUrl}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
