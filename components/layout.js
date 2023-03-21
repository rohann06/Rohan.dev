import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" text-[#2d2e32] ">
      <Navbar />
      <div className="  text-center lg:text-left">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
