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
    <header className="w-full">
      <Navbar />
      <MobileNav />
      <div className="w-full md:px-[72px] px-[26px] flex flex-col lg:flex-row items-center justify-center ">
        <div className="flex flex-col lg:gap-y-[72px] max-[1128px]:!gap-y-[47px] lg:w-1/2">
          <div className="lg:text-left text-center">
            <h1 className="font-plus-jakarta-sans lg:text-[80px] max-[1128px]:!text-[50px] leading-normal text-[#2B2B2B] mb-[21px] font-bold">
              The next gen payment method.
            </h1>
            <p className="text-base text-[#5A5A5A] font-medium font-inter mb-12 lg:w-8/12">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est n
            </p>
            <Button>Get Your Card</Button>
          </div>
          <div className="flex lg:flex-row justify-center items-center flex-col md:w-full font-plus-jakarta-sans mb-4">
            <div className="lg:border-r-[0.5px] flex gap-x-[22px] items-center lg:pr-[51px]">
              <p className="text-[#232323] font-bold lg:text-[43px] max-[1128px]:!text-[28px]">2943</p>
              <p className="text-[#969696] font-medium lg:text-xl max-[1128px]:!text-[13px] w-3/12">
                Cards delivered
              </p>
            </div>
            <div className="lg:border-l-[0.5px] flex gap-x-[22px] items-center lg:pl-[51px]">
              <p className="text-[#232323] font-bold lg:text-[43px] max-[1128px]:!text-[28px]">$1M+</p>
              <p className="text-[#969696] font-medium lg:text-xl max-[1128px]:!text-[13px] w-3/12">
              Transaction
              completed
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:w-1/2">
          <Image
            src={circle}
            alt="hero-image"
            className="lg:w-[600px] lg:h-[600px] max-[1128px]:!w-[450px] max-[1128px]:!h-[450px] absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            objectFit="contain"
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
            className="lg:w-[850px] lg:h-[650px] max-[1128px]:!w-[604px] max-[1128px]:!h-[520px] absolute top-[46%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
