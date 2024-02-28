import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="px-40 flex items-center justify-between py-5 border-b border-gray-400 drop-shadow-lg shadow-md">
      <div>
        <h3 className="text-xl font-bold">Nitika.dev</h3>
        <RxHamburgerMenu size={25} className="font-bold hidden" />
      </div>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Me</Link>
      </div>
    </div>
  );
}
