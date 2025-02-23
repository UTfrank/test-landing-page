import React from "react";
import { Card, Bitcoin, Book } from "iconsax-react";
import circle from "@/public/green-circle.png";
import cards from "@/public/cards.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: <Card size="32" color="#FFFFFF" />,
    title: "Add Card",
    description: "Add a card of any bank",
  },
  {
    id: 2,
    icon: <Bitcoin size="32" color="#FFFFFF" />,
    title: "Add crypto wallet",
    description: "Connect your crypto wallet",
  },
  {
    id: 3,
    icon: <Book size="32" color="#FFFFFF" />,
    title: "Add unipay account",
    description: "Hold all payments  via the app",
  },
];

const Features = () => {
  return (
    <div className="py-[94px] lg:px-[147px] px-[17px] flex flex-col gap-y-[72px]">
      <div className="flex md:flex-row flex-col md:justify-between w-full">
        <div className="shadow-[10px_13px_32px_0px_#00000017] bg-white md:px-[25px] px-[14px] md:py-[37px] py-5 rounded-lg flex gap-y-[49px] flex-col relative">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center md:gap-x-[122px] gap-x-[20px] w-full"
            >
              <div className="flex md:gap-x-[25px] gap-x-[10px]">
                <div
                  className={`flex justify-center items-center md:w-[62px] md:h-[62px] w-[34px] h-[34px] rounded-xl ${
                    item.id === 1
                      ? "bg-[#328CE0]"
                      : item.id === 2
                      ? "bg-[#E0C432]"
                      : "bg-[#CE2A2A]"
                  }`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col gap-y-[10px] w-full">
                  <h5 className="font-plus-jakarta-sans text-[#2D2D2D] md:text-xl text-sm font-bold">
                    {item.title}
                  </h5>
                  <p className="font-inter font-medium text-[#7E7E7E] md:text-base text-[9px]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className={`md:w-[27px] md:h-[27px] w-[14px] h-[14px] rounded-full ${
                    item.id === 3 ? "bg-[#35BA1F]" : "border border-[#7C7C7C]"
                  } `}
                />
              </div>
            </div>
          ))}
          <div className="absolute md:top-6 top-[17px] lg:-right-32 md:-right-14 -right-3 z-10 p-3 shadow-[10px_13px_32px_0px_#00000017] bg-white rounded-lg">
            <h6 className="font-plus-jakarta-sans text-[#2D2D2D] md:text-base text-[9px] font-bold md:mb-5 mb-[10px]">Cashback</h6>
            <div className="flex items-center gap-x-5 font-plus-jakarta-sans font-bold md:mb-4 mb-2">
              <h6 className="md:text-2xl text-sm">$1,354</h6>
              <p className="md:text-base text-[9px] text-[#35BA1F]">+4.5%</p>
            </div>
            <p className="text-[#7E7E7E] font-inter md:text-base text-[8px] font-medium">COmpared to $890 last month</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-[19px] md:w-1/2 w-full md:mt-0 mt-16">
          <h5 className="font-plus-jakarta-sans text-[#2e2e2e] md:text-[31px] text-[23px] font-bold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="font-inter md:text-[17px] text-[13px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate </p>
          <p className="font-inter md:text-[15px] text-[11px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate molestiae magni aspernatur aliquid, consectetur enim deleniti ipsam</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between w-full">
        <div className="relative flex justify-center">
        <Image
            src={circle}
            alt="hero-image"
            className="w-[280px] h-[280px]"
          />
          <Image
            src={cards}
            alt="hero-image"
            className="md:w-[300px] md:h-[300px] absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
        <div className="flex flex-col md:items-start gap-y-[19px] md:w-1/2 w-full md:mt-0 mt-16 md:order-first">
          <h5 className="font-plus-jakarta-sans text-[#2e2e2e] md:text-[31px] text-[23px] font-bold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="font-inter md:text-[17px] text-[13px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate </p>
          <p className="font-inter md:text-[15px] text-[11px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate molestiae magni aspernatur aliquid, consectetur enim deleniti ipsam</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
