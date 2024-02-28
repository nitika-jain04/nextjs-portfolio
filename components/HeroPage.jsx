import React from "react";
import "animate.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";

export default function HeroPage() {
  return (
    <div className="bg-[#111111] bg-opacity-95 max-h-full flex">
      <div className="px-40">
        <h3 className="animate__animated animate__hinge text-white ml-80 text-4xl">
          Namaste 🙏🏻
        </h3>
        <h2 className="text-6xl mt-40 font-bold tracking-wide text-white leading-tight">
          Front-End React<br></br> <span className="">Developer</span> 👋🏻
        </h2>
        <p className="text-base mt-2 text-gray-400 max-w-lg leading-7">
          Hi, I'm{" "}
          <span className="text-[#d0d4e8] text-lg italic tracking-wide hover:cursor-pointer">
            Nitika Jain
          </span>
          . A passionate and dedicated Front-End React Developer based in
          India.📍
        </p>

        <div className="flex text-2xl mt-40">
          <h1 className="text-gray-400 mt-1">Tech Stack |</h1>
          <h2 className="flex gap-3 ml-2">
            <FaReact
              size={35}
              className="text-blue-500 font-bold transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
            <TbBrandNextjs
              size={35}
              className="transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
            <IoLogoJavascript
              size={35}
              className="text-yellow-500 transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
            <SiTailwindcss
              size={35}
              className="text-blue-800 transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
            <FaCss3
              size={35}
              className="text-blue-800 transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
            <FaHtml5
              size={35}
              className="text-orange-600 transition-all ease-in-out duration-200 hover:-translate-y-3"
            />
          </h2>
          <h2 className="mb-[170px]"></h2>
        </div>
      </div>

      <div className="">
        <img
          src="/photo.png"
          alt=""
          className="flex justify-center items-center mt-32 hero-img"
        />
      </div>
    </div>
  );
}
