import React, { useState } from "react";
import slide1 from "../assets/1.jpg";
import slide2 from "../assets/2.jpg";
const Slider = () => {
  const image_url = [slide1, slide2, slide1, slide2];
  const [url, setUrl] = useState(0);
  const previousSlide = (e) => {
    if (url > 0) setUrl(url - 1);
    else setUrl(image_url.length - 1);
  };
  const nextSlide = (e) => {
    if (url < image_url.length - 1) setUrl(url + 1);
    else setUrl(0);
  };
  console.log(url);
  return (
    <div className="h-[600px] max-w-[100vw]  mb-12 ml-[0.59rem] ">
      <div className="flex h-full w-full ">
        <button
          onClick={previousSlide}
          className="h-[50px] w-[50px] self-center mr-[-60px] z-10 rounded-[50%]"
        >
          {`<`}
        </button>
        <div className="flex flex-col w-full ">
          <img
            src={image_url[url]}
            alt="first "
            className=" max-w-[100vw]  h-full"
          />
          <div className="flex self-center  gap-6 mt-[-80px] ">
            <button className="h-[20px] w-[20px]  z-10 rounded-[50%]"></button>
            <button className="h-[20px] w-[20px]  z-10 rounded-[50%]"></button>
            <button className="h-[20px] w-[20px]  z-10 rounded-[50%]"></button>
            <button className="h-[20px] w-[20px]  z-10 rounded-[50%]"></button>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="h-[50px] w-[50px] self-center ml-[-60px] rounded-[50%]"
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default Slider;
