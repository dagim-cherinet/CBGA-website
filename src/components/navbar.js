import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import { useState } from "react";
import { ReactComponent as CBGA_LOGO } from "../assets/cbga-logo-without-name-241x173.jpg.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleBtn = () => setDropdown(!dropdown);
  return (
    <div className="navbar-container  w-screen h-[70px] md:h-[96px] z-10 bg-[#FFFFFF] fixed drop-shadow-lg">
      <div className="menu-items px-2 flex justify-between items-center w-full h-full ">
        {/* <div className="flex items-center"> */}
        <div className="w-full md:mt-14 md:flex md:flex-col ">
          {/* <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1> */}
          <div className="flex items-center ">
            <h1
              className="text-2xl font-bold mr-4 sm:text-4xl"
              style={{ "text-align": "center" }}
            >
              <CBGA_LOGO className="md:ml-3 w-[70px] h-[50px] md:w-[120px] md:h-[90px]" />
            </h1>
            <div className="company-title w-full flex justify-between items-center">
              <h1 className="text-[16px] font-bold mr-4  md:text-2xl lg:text-3xl">
                Center for Budgetary Governance Advocacy
                <span className="hidden ml-2 md:inline lg:block lg:ml-0">
                  የበጀት አስተዳደር አድቮኬሲ ማዕከል
                </span>
              </h1>
              <h1 className="hidden md:block mr-12 ">EN</h1>
            </div>
          </div>

          <ul className="hidden md:flex md:self-end md:items-center mr-6">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={0} duration={500}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="platform" smooth={true} offset={-120} duration={500}>
                E-Learning
              </Link>
            </li>

            <li>
              <button className="border-none bg-transparent text-black mr-4">
                Sign in
              </button>
            </li>
            <li>
              <button className="px-6 py-2">Sign up</button>
            </li>
          </ul>
        </div>
        {/* <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button className="px-6 py-2">Sign up</button>
        </div> */}
        {/* dropdown menu */}
        <div className="md:hidden mr-4" onClick={toggleBtn}>
          {!dropdown ? <MenuIcon className="w-8" /> : <XIcon className="w-7" />}
        </div>
      </div>

      <ul
        className={!dropdown ? "hidden" : " absolute bg-inherit px-8  w-full"}
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="home" smooth={true} duration={500} onClick={toggleBtn}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={toggleBtn}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="support"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleBtn}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="platform"
            smooth={true}
            offset={-120}
            duration={500}
            onClick={toggleBtn}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={toggleBtn}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-black px-6 py-2 mb-4">
            Sign in
          </button>
          <button className="px-6 py-2">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
