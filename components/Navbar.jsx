"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [clicked, setClicked] = useState(null);

  function handleClick(link) {
    setClicked(link);
  }

  return (
    <div className="px-40 flex items-center justify-between py-5 border-b border-gray-400 drop-shadow-lg shadow-md">
      <div>
        <h3 className="text-xl font-bold">Nitika.dev</h3>
        <RxHamburgerMenu size={25} className="font-bold hidden" />
      </div>

      <div className="flex gap-5 items-center">
        <Link
          href="/"
          className={`p-2 text-[#111111] ${
            clicked === "/" ? "bg-gray-300 rounded-lg" : ""
          }`}
          onClick={() => handleClick("/")}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`p-2 text-[#111111] ${
            clicked === "/about" ? "bg-gray-300 rounded-lg" : ""
          }`}
          onClick={() => handleClick("/about")}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`p-2 text-[#111111] ${
            clicked === "/projects" ? "bg-gray-300 rounded-lg" : ""
          }`}
          onClick={() => handleClick("/projects")}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`p-2 text-[#111111] ${
            clicked === "/contact" ? "bg-gray-300 rounded-lg" : ""
          }`}
          onClick={() => handleClick("/contact")}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
