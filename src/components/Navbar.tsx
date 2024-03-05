import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar: FC = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-centre py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-centre max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center"> */}
          <img src={logo} alt="logo" className="w-12 h-12 bg-white object-contain"  />
          {/* </div> */}
          <p className="text-white text-[18px] font-bold cursor-pointer">Muhammad Ali Alam
          <span className="sm:block hidden">| Software Developer</span></p>
        </Link>
        <p className="text-red-500">asdasasdasd</p>
      </div>
    </nav>
  );
};

export default Navbar;
