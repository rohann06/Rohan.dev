import "aos/dist/aos.css";
import JobCrad from "./JobCrad";
import { workData } from "../utils/_workdb";

const WorkExp = () => {
  console.log("data", workData);
  return (
    <div
      id="work"
      className=" bg-[#f9f9f9] px-3 lg:px-96 py-[5rem] lg:py-[5rem]"
    >
      <div>
        <p className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]">
          Work Experience
        </p>
        <h1 className=" text-[1.5rem] font-bold mb-[6rem]">
          Previous contributions ⚒️
        </h1>
      </div>

      {workData?.map((work, i) => (
        <JobCrad
          key={i}
          title={work.title}
          company={work.company}
          url={work.url}
          desceription={work.desceription}
        />
      ))}
    </div>
  );
};

export default WorkExp;
