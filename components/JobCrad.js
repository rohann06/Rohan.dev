import React from "react";

const JobCrad = ({ title, company, desceription, url }) => {
  return (
    <div className=" bg-white flex lg:flex-row flex-col justify-between items-center  gap-5  shadow-lg py-6 px-5 my-10 lg:my-12 rounded-xl">
      <div>
        <p className=" mb-5 text-[1.5rem] font-bold">
          {title} at{" "}{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span className=" text-gray-400 hover:text-[#147efb] underline">
              ({company})
            </span>
          </a>
        </p>
        <p className=" text-lg text-[#767676] text-justify">{desceription}</p>
      </div>
    </div>
  );
};

export default JobCrad;
