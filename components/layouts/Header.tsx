import React from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import Button from "@/components/Button";
import circle from "@/public/green-circle.png";
import man from "@/public/man.png";
import card from "@/public/card.png";

const Header = () => {
  return (
    <header className="w-full lg:h-screen">
      <Navbar />
      <MobileNav />
      <div className="w-full md:px-[72px] px-[26px] border flex flex-col lg:flex-row items-center justify-center ">
        <div className="flex flex-col gap-y-[72px]">
          <div className="lg:text-left text-center">
            <h1 className="font-plus-jakarta-sans text-[50px] text-[#2B2B2B] mb-[21px] font-bold lg:w-6/12">
              The next gen payment method.
            </h1>
            <p className="text-base text-[#5A5A5A] font-medium font-inter lg:w-7/12 mb-12">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est n
            </p>
            <Button>Get Your Card</Button>
          </div>
          <div className="flex lg:flex-row justify-center items-center flex-col md:w-full lg:mt-[72px] md:mt-12 font-plus-jakarta-sans mb-4">
            <div className="lg:border-r-[0.5px] flex gap-x-[22px] items-center lg:pr-[51px]">
              <p className="text-[#232323] font-bold text-[43px]">2943</p>
              <p className="text-[#969696] font-medium text-xl w-3/12">
                Cards delivered
              </p>
            </div>
            <div className="lg:border-l-[0.5px] flex gap-x-[22px] items-center lg:pl-[51px]">
              <p className="text-[#232323] font-bold text-[43px]">$1M+</p>
              <p className="text-[#969696] font-medium text-xl w-3/12">
              Transaction
              completed
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image
            src={circle}
            alt="hero-image"
            className="md:w-[600px] md:h-[600px] w-[450px] h-[450px] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <Image
            src={man}
            alt="hero-image"
            className="z-10 object-contain lg:w-11/12 md:w-10/12 relative"
            objectFit="contain"
          />
          <Image
            src={card}
            alt="hero-image"
            className="md:w-[850px] md:h-[650px] absolute top-[45%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
