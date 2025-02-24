import Link from "next/link";
import React from "react";
import { Chainlink } from "iconsax-react";
import Button from "@/components/Button";

const Navbar = () => {
  return (
    <nav className="w-full px-[72px] py-[30px] lg:flex justify-between items-center hidden">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="flex items-center gap-x-[26px] font-plus-jakarta-sans mr-[134px]"
        >
          <Chainlink size="24" color="#000000" variant="Bold" />
          <span className="text-base font-bold">Fintech</span>
        </Link>
        <ul className="flex gap-x-10 *:font-inter *:text-[#343434] *:text-base *:font-medium">
          <li>
            <Link href="#">Demos</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <Link href="#">Sign In</Link>
        <Button variant="bold">Get Your Card</Button>
      </div>
    </nav>
  );
};

export default Navbar;
