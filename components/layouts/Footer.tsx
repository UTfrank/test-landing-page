import React from "react";
import { Location, Sms } from "iconsax-react";
import Link from "next/link";

const data = [
  {
    id: 1,
    icon: <Location color="#292D32" variant="Bold" />,
    text: "8502 presston Rd.inglewood maine 98380 usa",
  },
  {
    id: 2,
    icon: <Sms color="#292D32" variant="Bold" />,
    text: "Support@fintech.co",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] md:px-[97px] md:py-10 p-9 flex flex-col gap-y-[30px]">
      <div className="flex md:flex-row flex-col justify-between items-center w-full pb-9 border-b border-[#B4B4B4] md:gap-y-0 gap-y-10">
        <h2 className="md:w-5/12 font-plus-jakarta-sans text-[#2E2E2E] text-[31px] font-bold">
          Make secure payment & grow your online business
        </h2>
        <ul className="md:w-4/12 flex flex-col items-start">
          {data.map((item) => (
            <li key={item.id} className="flex gap-x-6 justify-center items-center">
              <div className="h-6 w-6">
                <div className="w-6 h-6">{item.icon}</div>
              </div>
              <p className="font-inter font-medium text-[#7E7E7E] text-[15px]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex md:gap-x-10 gap-x-[30px] *:font-inter *:text-[#343434] *:text-base *:font-medium">
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
    </footer>
  );
};

export default Footer;
