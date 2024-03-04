"use client";

import React, { useEffect } from "react";
import "animate.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function HeroPage() {
  const display = {
    display: "inline-block",
  };

  useEffect(() => {
    // Initialize AOS when the component mounts
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  return (
    <div className="bg-[#111111] bg-opacity-95 max-h-full flex flex-col xl:flex-row">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex justify-center xl:hidden"
      >
        <img
          src="/photo.png"
          alt=""
          className="flex justify-center items-center mt-10 hero-img"
        />
      </div>
      <div className="px-5 mt-5 xl:px-52 xl:mt-48 flex flex-col items-center text-center">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Front-End React<br></br> Developer{" "}
          <span
            style={display}
            className="animate__animated animate__swing animate__duration-4s"
          >
            👋🏻
          </span>
        </h2>
        <p
          className="text-base md:text-lg lg:text-base mt-5 lg:mt-8 text-gray-400 md:max-w-md xl:max-w-lg leading-7 md:leading-8 tracking-wider md:tracking-widest"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Hi, I'm{" "}
          <span className="text-[#d0d4e8] text-lg italic tracking-wide hover:cursor-pointer">
            Nitika Jain
          </span>
          . A passionate and dedicated Front-End React Developer based in
          India.📍
        </p>

        <div
          className="flex gap-5 mt-5 lg:mt-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <a
            href="https://github.com/nitika-jain04?tab=repositories"
            target="_blank"
          >
            <FaGithub
              size={30}
              className="text-gray-200 hover:scale-105 transition-transform duration-200 ease-in hover:shadow-md hover:shadow-gray-200"
            />
          </a>
          <a href="https://www.linkedin.com/in/nitika-jain04/" target="_blank">
            <FaLinkedin
              size={30}
              className="text-gray-200 hover:scale-105 transition-transform duration-200 ease-in hover:shadow-md hover:shadow-gray-200"
            />
          </a>
        </div>

        <div
          className="flex text-2xl mt-24 md:mt-36 xl:mt-20 text-center flex-col xl:flex-row xl:items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-gray-400 mt-1 hidden xl:flex xl:items-center xl:justify-center">
            Tech Stack |
          </h1>
          <h1 className="text-gray-400 mt-1 lg:mt-20 xl:hidden text-lg md:text-xl underline underline-offset-4">
            Tech Stack
          </h1>
          <h2 className="flex gap-3 ml-2 mt-5 xl:mt-0">
            <div className="hover-translate">
              <FaReact
                size={35}
                className="text-blue-500 font-bold transition-all ease-in-out duration-200"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="300"
              />
            </div>
            <div className="hover-translate">
              <TbBrandNextjs
                size={35}
                className="transition-all ease-in-out duration-200 hover:translate-y-3 text-white"
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-delay="400"
              />
            </div>
            <div className="hover-translate">
              <IoLogoJavascript
                size={35}
                className="text-yellow-500 transition-all ease-in-out duration-200 hover:-translate-y-3"
                data-aos="fade-right"
                data-aos-duration="1700"
                data-aos-delay="500"
              />
            </div>
            <div className="hover-translate">
              <SiTailwindcss
                size={35}
                className="text-blue-800 transition-all ease-in-out duration-200
              hover:-translate-y-3"
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-delay="600"
              />
            </div>

            <div className="hover-translate">
              <FaCss3
                size={35}
                className="text-blue-800 transition-all ease-in-out duration-200 hover:-translate-y-3"
                data-aos="fade-right"
                data-aos-duration="1900"
                data-aos-delay="700"
              />
            </div>

            <div className="hover-translate">
              <FaHtml5
                size={35}
                className="text-orange-600 transition-all ease-in-out duration-200 hover:-translate-y-3"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="800"
              />
            </div>
          </h2>
          <h2 className="mb-[116px] md:mb-[138px] lg:mb-[219px] xl:mb-[222px]"></h2>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="hidden xl:inline-flex"
      >
        <img src="/photo.png" alt="image" className="flex mt-32 hero-img" />
      </div>
    </div>
  );
}
