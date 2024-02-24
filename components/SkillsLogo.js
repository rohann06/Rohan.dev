import Image from "next/image";
import React from "react";

const SkillsLogo = ({ src, alt, className }) => {
  return (
    <div className={`shadow-md ${className} rounded-full`}>
      <Image
        src={src}
        alt={alt}
        height={500}
        width={500}
        className=" w-16 md:w-20 p-4 md:p-5"
      />
    </div>
  );
};

export default SkillsLogo;
