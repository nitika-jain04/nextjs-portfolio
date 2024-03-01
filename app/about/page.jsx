"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function About() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  return (
    <div className="px-10 xl:px-60 lg:px-40 pt-10 md:pt-28 xl:pt-16 bg-[#111111] bg-opacity-95 grid grid-cols-1 max-h-full">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <h2
          className="text-[200px] text-center md:mb-48"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          👩🏻‍💻
        </h2>

        <div className="text-base grid grid-cols-1 text-justify tracking-wide">
          <h1
            className="text-[26px] xl:text-4xl font-bold mb-4 text-white drop-shadow-md shadow-gray-500"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Hello, I'm Nitika Jain!
          </h1>
          <p
            className="leading-7 mt-4 md:text-lg text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            I'm a passionate web developer with a focus on React.js. My journey
            in web development began during my B.Tech. second year, sparked by a
            general interest in HTML and CSS. Since then, I've delved into
            JavaScript and various front-end technologies, cultivating a love
            for creating interactive and user-friendly web applications.
          </p>
          <p
            className="leading-7 mt-4 md:text-lg text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            I have hands-on experience with front-end technologies like React,
            Next.js, and Tailwind CSS. I thrive on learning new technologies and
            staying up-to-date with the latest trends in the ever-evolving field
            of web development.
          </p>
          <p
            className="leading-7 mt-4 md:text-lg text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Outside of coding, you can find me baking, in outdoor sports and
            listening to music.
          </p>
          <p
            className="leading-7 mt-4 md:text-lg text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Let's join forces and turn dull projects into coding adventures!
            Reach out, and together we'll create web magic that's so good, even
            browsers will high-five us.
          </p>
        </div>
      </div>
      <div
        className="mt-10 mb-[311px] xl:mb-[100px] ml-10 text-base bg-white text-gray-700 hover:bg-gray-600 hover:drop-shadow-md hover:shadow-inner hover:shadow-white hover:text-white hover:bg-opacity-10 w-fit rounded-lg px-3 py-2"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Link href="/contact">
          <p>Get in Touch</p>
        </Link>
      </div>
    </div>
  );
}
