import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/1.jpg";
const Support = () => {
  return (
    <div name="support" className="w-full  mt-24 mb-24">
      <div className="w-full h-[600px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="support"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-2">
          <h2 className="text-3xl md:text-4xl pt-8 text-slate-300 uppercase text-center"></h2>
          <h3 className="text-3xl md:text-4xl font-bold py-6 text-center">
            What We Do
          </h3>
          <p className="py-2 text-xl sm:text-2xl text-center text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat mollitia, molestiae
          </p>
        </div>
        <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <PhoneIcon className="w-16  p-4 bg-[#078e45] text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 ">Lorem ip</h3>
              <p className="text-gray-800 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-[#078e45]">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <SupportIcon className="w-16  p-4 bg-[#078e45] text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 ">Lorem ip</h3>
              <p className="text-gray-800 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-[#078e45]">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <ChipIcon className="w-16  p-4 bg-[#078e45] text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 ">Lorem ip</h3>
              <p className="text-gray-800 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-[#078e45]">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
