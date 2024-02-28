"use client";

import React, { useEffect } from "react";
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  return (
    <div className="px-16 pt-20 md:px-52 xl:px-96 bg-[#111111] pb-20 bg-opacity-95">
      <h2
        className="text-5xl text-white font-semibold"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Projects
      </h2>
      <h3
        className="mt-5 text-gray-200 font-light text-base"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Here's a curated list of projects that showcase my passion for building
        impactful solutions and pushing the boundaries of technology.
      </h3>

      <div className="flex flex-col gap-14 mt-10">
        <article
          className="grid grid-cols-1 gap-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img
            src="/e-commerce.png"
            className="border-x-[10px] border-t-[10px] border-b-2 rounded-md border-[#a9bebe]"
            alt=""
          />
          <div className="grid grid-cols-1 gap-3 px-10">
            <h3 className="text-xl font-bold text-white">
              Minimalist e-Commerce
            </h3>
            <p className="text-gray-400 text-base">
              An e-commerce website built using NextJS, Tailwind CSS and
              Firebase. CRUD operations along with cart functionality & login
              using phone number.
            </p>
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/nitika-jain04/minimalist-ecommerce"
                target="_blank"
                className="flex gap-1 items-center px-3 py-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#6a6868] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Code</h3>
                <FaGithub />
              </a>
              <a
                href="https://minimalist-ecommerce-app.vercel.app/"
                target="_blank"
                className="px-3 py-1 flex items-center gap-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#363636] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Project</h3>
                <IoMdOpen />
              </a>
            </div>
          </div>
        </article>
        {/* End of project block */}
        <article
          className="grid grid-cols-1 gap-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src="/car-rental.png"
            className="border-x-[10px] border-t-[10px] border-b-2 rounded-md border-[#a9bebe]"
            alt=""
          />{" "}
          <div className="grid grid-cols-1 gap-3 px-10">
            <h3 className="text-xl font-bold text-white">Car Rental App</h3>
            <p className="text-gray-400 text-base">
              A car rental app built using NextJS, Tailwind CSS and
              Firebase.Provides sign-up and sign-in and seamless form submission
              functionality.
            </p>
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/nitika-jain04/car-rental"
                target="_blank"
                className="flex gap-1 items-center px-3 py-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#6a6868] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Code</h3>
                <FaGithub />
              </a>
              <a
                href="https://car-rental-app-rouge.vercel.app/"
                target="_blank"
                className="px-3 py-1 flex items-center gap-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#363636] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Project</h3>
                <IoMdOpen />
              </a>
            </div>
          </div>
        </article>
        {/* End of project block */}

        <article
          className="grid grid-cols-1 gap-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src="/todo-2.png"
            className="border-x-[10px] border-t-[10px] border-b-2 rounded-md border-[#a9bebe]"
            alt=""
          />
          <div className="grid grid-cols-1 gap-3 px-10">
            <h3 className="text-xl font-bold text-white">ToDo App</h3>
            <p className="text-gray-400 text-base">
              A simple ToDo app built using ReactJS and TailwindCSS. Cache and
              CRUD functionality for tasks. Dark and light mode.
            </p>
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/nitika-jain04/to-do-app"
                target="_blank"
                className="flex gap-1 items-center px-3 py-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#6a6868] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Code</h3>
                <FaGithub />
              </a>
              <a
                href="https://to-do-app-ruddy-five.vercel.app/"
                target="_blank"
                className="px-3 py-1 flex items-center gap-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#363636] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Project</h3>
                <IoMdOpen />
              </a>
            </div>
          </div>
        </article>
        {/* End of project block */}

        <article
          className="grid grid-cols-1 gap-5"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <img
            src="/forkify.png"
            className="border-x-[10px] border-t-[10px] border-b-2 rounded-md border-[#a9bebe]"
            alt=""
          />
          <div className="grid grid-cols-1 gap-3 px-10">
            <h3 className="text-xl font-bold text-white">Recipe Book</h3>
            <p className="text-gray-400 text-base">
              A recipe guide app built using vanilla JavaScript and CSS. Allows
              recipe search along with bookmark functionality. Users can add
              their own recipes and increase portion size.
            </p>
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/nitika-jain04/forkify-app"
                target="_blank"
                className="flex gap-1 items-center px-3 py-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#6a6868] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Code</h3>
                <FaGithub />
              </a>
              <a
                href="https://your-recipe-guide.vercel.app/"
                target="_blank"
                className="px-3 py-1 flex items-center gap-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#363636] rounded-2xl hover:shadow-md hover:shadow-gray-200"
              >
                <h3 className="">Project</h3>
                <IoMdOpen />
              </a>
            </div>
          </div>
        </article>
        {/* End of project block */}
      </div>
    </div>
  );
};

export default Projects;
