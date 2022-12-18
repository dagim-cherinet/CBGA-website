import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-32">
      <div className="absolute w-full h-[700px] bg-slate-900 mix-blend-overlay"></div>
      <div className="max-w-[1100px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className=" text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            The right price for your research
          </h3>
          <p className="text-2xl sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 text-slate-900 m-4 p-4 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                49$
                <span className="text-lg text-slate-500 flex flex-col  justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <div className="text-2xl relative ">
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <button className="w-full py-3 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-gray-50 text-slate-900 m-4 p-4 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                99$
                <span className="text-lg text-slate-500 flex flex-col  justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <div className="text-2xl relative ">
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <p className="flex py-2 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum
                dolor sit
              </p>
              <button className="w-full py-3 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
