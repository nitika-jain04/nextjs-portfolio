"use client";

import React, { useEffect, useState } from "react";
import "animate.css";
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getImageSource = (index, defaultImage, hoverImage) => {
    return hoveredIndex === index ? hoverImage : defaultImage;
  };

  useEffect(() => {
    // Initialize AOS when the component mounts
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  const projectsData = [
    {
      title: "Minimalist e-Commerce",
      description:
        "An e-commerce website built using NextJS, Tailwind CSS and Firebase. CRUD operations along with cart functionality & login using phone number.",
      githubLink: "https://github.com/nitika-jain04/minimalist-ecommerce",
      projectLink: "https://minimalist-ecommerce-app.vercel.app/",
      defaultImage: "e-commerce.png",
      hoverImage: "e-commerce2.png",
    },
    {
      title: "Car Rental App",
      description:
        "A car rental app built using NextJS, Tailwind CSS and Firebase.Provides sign-up and sign-in and seamless for submission functionality.",
      githubLink: "https://github.com/nitika-jain04/car-rental",
      projectLink: "https://car-rental-app-rouge.vercel.app/",
      defaultImage: "car-rental.png",
      hoverImage: "car-rental2.png",
    },
    {
      title: "ToDo App",
      description:
        "A simple ToDo app built using ReactJS and TailwindCSS. Cache and CRUD functionality for tasks. Dark and light mode.",
      githubLink: "https://github.com/nitika-jain04/to-do-app",
      projectLink: "https://to-do-app-ruddy-five.vercel.app/",
      defaultImage: "todo.png",
      hoverImage: "todo2.png",
    },
    {
      title: "Recipe Book",
      description:
        "A recipe guide app built using vanilla JavaScript and CSS. Allows recipe search along with bookmark functionality. Users can add their own recipes and increase portion size.",
      githubLink: "https://github.com/nitika-jain04/forkify-app",
      projectLink: "https://your-recipe-guide.vercel.app/",
      defaultImage: "forkify.png",
      hoverImage: "forkify2.png",
    },
  ];

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
        {projectsData.map((project, index) => (
          <article
            key={index}
            className="grid grid-cols-1 gap-10 min-h-[200px] bg-yellow-200"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <figure>
              <img
                src={getImageSource(
                  index,
                  project.defaultImage,
                  project.hoverImage
                )}
                className="border-x-[10px] border-t-[10px] border-b-2 rounded-md border-[#a9bebe] hover01 column"
                alt="Image"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
              />
            </figure>
            <div className="grid grid-cols-1 gap-3 px-5 md:px-10">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-base">{project.description}</p>
              <div className="flex gap-5 pt-1 bg-green-300">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex gap-1 items-center px-3 py-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#6a6868] rounded-2xl hover:shadow-md hover:shadow-gray-200 transition-all duration-500 ease-linear"
                >
                  <h3 className="">Code</h3>
                  <FaGithub />
                </a>
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="px-3 py-1 flex items-center gap-1 text-[#b1b1b1] bg-[#323232] hover:bg-[#363636] rounded-2xl hover:shadow-md hover:shadow-gray-200 transition-all duration-500 ease-linear"
                >
                  <h3 className="">Project</h3>
                  <IoMdOpen />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
