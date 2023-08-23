/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  return (
    <div id="contact" className=" py-[10rem] px-3 lg:px-96 ">
      <div>
        <p className=" uppercase text-[#147efb] font-bold mb-[1rem] text-[17px]">
          Contact
        </p>
        <h1 className=" text-[25px] font-bold">Don't be shy! Hit me up! 👇</h1>
      </div>

      <div className=" flex flex-col lg:flex-row items-center gap-x-[8rem] gap-y-[5rem] mt-[4rem]">
        <div className=" flex flex-col lg:flex-row items-center text-center gap-4">
          <div data-aos="fade-up" className=" rounded-full shadow-lg p-5">
            <p className=" text-[#147efb] text-[30px]">
              <FaMapMarkedAlt />
            </p>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="3000"
            className=" lg:text-left text-[17px] "
          >
            <p className=" font-bold">Location</p>
            <p className=" text-[#8e8e8e] hover:text-[#147efb] duration-300 cursor-pointer">
              India
            </p>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row items-center gap-4">
          <div data-aos="fade-up" className=" rounded-full shadow-lg p-5">
            <p className=" text-[#147efb] text-[30px]">
              <IoIosMailOpen />
            </p>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="3000"
            className=" lg:before:text-left text-[17px] "
          >
            <p className=" font-bold">Email</p>
            <a
              href="mailto:rohanahire006@gmail.com"
              className=" text-[#8e8e8e] hover:text-[#147efb] duration-300"
            >
              rohanahire006@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
