import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import NavOption from "./NavOption";
import { navOptions } from "../utils/_navdb";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <nav className=" fixed bg-white lg:flex justify-between items-center shadow-md w-full py-[18px] px-[40px] z-10">
      <div className=" flex gap-48 items-center">
        <Link href={"/"}>
          <h1 className=" text-[1.3rem] lg:text-[1.5rem] cursor-pointer font-bold">
            Rohan.dev
          </h1>
        </Link>
        <p onClick={() => setNavOpen(!navOpen)} className=" lg:hidden text-2xl">
          <GiHamburgerMenu />
        </p>
      </div>

      <div
        className={` ${
          navOpen ? "-translate-x-full" : "-translate-x-0"
        } lg:translate-x-0 bg-white absolute left-0 top-0 text-center w-screen h-screen overflow-y-hidden  lg:w-auto lg:h-auto  lg:static lg:flex items-center gap-8 font-semibold text-lg  transition-all duration-500 ease-in-out lg:p-0 `}
      >
        <p
          onClick={() => setNavOpen(!navOpen)}
          className=" lg:hidden  text-3xl flex justify-end py-[20px] px-[40px]"
        >
          <RxCross2 />
        </p>

        {navOptions?.map((navOption, i) => {
          return (
            <NavOption
              key={i}
              name={navOption.name}
              href={navOption.href}
              setNavOpen={setNavOpen}
              navOpen={navOpen}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
