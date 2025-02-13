import React from "react";
import logo from "../assets/logo1.png";

const Logo = ({ width = "50px", height = "50px" }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt="Logo"
        className="rounded-full object-cover border border-[#c3bef0]"
        style={{ width, height }}
      />
    </div>
  );
};

export default Logo;
