import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function Sidebar({ isOpen, handleSidebar }) {
  return (
    <div
      className={`p-20 w-3/4 md:w-1/2 h-screen absolute top-0 right-0 bg-white rounded-s-md ${
        isOpen ? "animate-slide-in" : "animate-slide-out"
      }`}
    >
      <div className="flex justify-end items-center">
        <IoMdClose
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={() => handleSidebar(false)}
        />
      </div>
      <ul className="flex flex-col gap-5 mt-5">
        <Link href="/">
          <li className="bg-gray-200 p-3 styles.blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out rounded-md text-lg">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="bg-gray-200 p-3 styles.blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out rounded-md text-lg">
            About
          </li>
        </Link>
        <Link href="/projects">
          <li className="bg-gray-200 p-3 styles.blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out rounded-md text-lg">
            Projects
          </li>
        </Link>
        <Link href="/contact">
          <li className="bg-gray-200 p-3 styles.blinker hover:border-2 hover:border-gray-400 border-2 border-gray-200 transition-all duration-300 ease-in-out rounded-md text-lg">
            Contact Me
          </li>
        </Link>
      </ul>
    </div>
  );
}
