import React from "react";

const NavOption = ({ href, name, setNavOpen, navOpen }) => {
  return (
    <p className=" mt-40 my-10 lg:my-0">
      <a
        href={href}
        onClick={() => setNavOpen(!navOpen)}
        className=" cursor-pointer hover:text-[#147efb] duration-300"
      >
        {name}
      </a>
    </p>
  );
};

export default NavOption;
