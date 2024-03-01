"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClick(click) {
    setOpen(click);
  }

  function handleSidebar(click) {
    setSidebarOpen(click);
  }

  const links = [
    { href: "/", text: "Home", icon: "🏠" },
    { href: "/about", text: "About", icon: "👩🏻‍💻" },
    { href: "/projects", text: "Projects", icon: "🚀" },
    { href: "/contact", text: "Contact Me", icon: "📩" },
  ];

  function toggleIcon(index) {
    setActiveLink(index === activeLink ? null : index);
  }

  useEffect(() => {
    const currentLink = links.findIndex((link) => link.href === pathname);
    setActiveLink(currentLink);
  }, []);

  return (
    <div className="px-10 xl:px-40 flex items-center justify-between py-5 border-b border-gray-400 drop-shadow-lg shadow-md sticky top-0 z-40 bg-white">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-xl font-bold">Nitika.dev</h3>
        <RxHamburgerMenu
          size={25}
          className="font-bold lg:hidden"
          onClick={() => handleSidebar(true)}
        />
      </div>

      <div className="gap-2 xl:gap-5 items-center hidden lg:flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`p-2 text-[#111111] hover:bg-[#111111] hover:bg-opacity-85 hover:text-white rounded-lg shadow-lg w-28 text-sm text-center transition-all duration-200 ${
              index === activeLink ? "shadow-gray-800 shadow-inner" : ""
            }`}
            onClick={() => toggleIcon(index)}
          >
            {index === activeLink ? link.icon : link.text}
          </Link>
        ))}
      </div>

      {sidebarOpen && <Backdrop handleClick={handleSidebar} />}
      {sidebarOpen && (
        <Sidebar isOpen={sidebarOpen} handleSidebar={handleSidebar} />
      )}
    </div>
  );
}
