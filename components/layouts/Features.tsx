import React from "react";
import { Card, Bitcoin, Book } from "iconsax-react";
import circle from "@/public/green-circle.png";
import cards from "@/public/cards.png";
import woman from "@/public/woman.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: <Card color="#FFFFFF" />,
    title: "Add Card",
    description: "Add a card of any bank",
  },
  {
    id: 2,
    icon: <Bitcoin color="#FFFFFF" />,
    title: "Add crypto wallet",
    description: "Connect your crypto wallet",
  },
  {
    id: 3,
    icon: <Book color="#FFFFFF" />,
    title: "Add unipay account",
    description: "Hold all payments  via the app",
  },
];

const Features = () => {
  return (
    <div className="py-[94px] lg:px-[147px] max-[1128px]:!px-[57px] flex flex-col gap-y-[72px]">
      <div className="flex md:flex-row flex-col md:justify-between w-full">
        <div className="lg:w-7/12">
          <div className="shadow-[10px_13px_32px_0px_#00000017] bg-white md:px-[25px] max-[1128px]:!px-5 px-[14px] md:py-[37px] py-5 rounded-lg flex gap-y-[49px] flex-col relative">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center md:gap-x-[122px] gap-x-[20px] w-full"
              >
                <div className="flex md:gap-x-[20px] gap-x-[10px]">
                  <div
                    className={`flex justify-center items-center lg:w-[64px] lg:h-[64px] w-[36px] h-[36px] rounded-xl ${
                      item.id === 1
                        ? "bg-[#328CE0]"
                        : item.id === 2
                        ? "bg-[#E0C432]"
                        : "bg-[#CE2A2A]"
                    }`}
                  >
                    <div className="flex justify-center items-center md:w-[32px] md:h-[32px] w-[22px] h-[22px]">
                      {item.icon}
                    </div>
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
              <h6 className="font-plus-jakarta-sans text-[#2D2D2D] md:text-base text-[9px] font-bold md:mb-5 mb-[10px]">
                Cashback
              </h6>
              <div className="flex items-center gap-x-5 font-plus-jakarta-sans font-bold md:mb-4 mb-2">
                <h6 className="md:text-2xl text-sm">$1,354</h6>
                <p className="md:text-base text-[9px] text-[#35BA1F]">+4.5%</p>
              </div>
              <p className="text-[#7E7E7E] font-inter md:text-base text-[8px] font-medium">
                COmpared to $890 last month
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-4/12">
          <div className="flex flex-col items-end gap-y-[19px] w-full md:mt-0 mt-16">
            <h5 className="font-plus-jakarta-sans text-[#2e2e2e] lg:text-[31px] max-[1128px]:!text-[23px] font-bold md:w-3/4 w-full">
              Lorem ipsum dolor sit amet consectetur.
            </h5>
            <p className="font-inter lg:text-[17px] max-[1128px]:!text-[13px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate{" "}
            </p>
            <p className="font-inter lg:text-[15px] max-[1128px]:!text-[11px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate molestiae magni aspernatur aliquid, consectetur enim
              deleniti ipsam
            </p>
          </div>
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
        <div className="flex flex-col md:items-start gap-y-[35px] md:w-1/2 w-full md:mt-0 mt-16 md:order-first">
          <div className="flex flex-col md:items-start gap-y-[19px] w-full md:mt-0">
            <h5 className="font-plus-jakarta-sans text-[#2e2e2e] md:text-[31px] text-[23px] font-bold md:w-3/4 w-full">
              Lorem ipsum dolor sit amet consectetur.
            </h5>
            <p className="font-inter md:text-[17px] text-[13px] text-[#4f4f4f] font-semibold md:w-3/4 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              cupiditate{" "}
            </p>
          </div>
          <div className="flex flex-col md:items-start gap-y-[21px] w-full">
            <p className="font-inter md:text-[15px] text-[11px] italic text-[#4f4f4f] font-semibold w-full">
              “simply the best.better than all the rest.recommend this product
              to beginner and advanced user”
            </p>
            <div className="flex flex-row gap-x-[9px]">
              <div className="w-11 h-11 rounded-full overflow-hidden">
                <Image
                  src={woman}
                  alt="hero-image"
                  className="object-cover"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col items-start gap-y-1 font-inter">
                <h6 className="text-[#313131] md:text-[15px] text-[13px] font-medium">Theresa Webb</h6>
                <p className="text-[#626262] md:text-[15px] text-[13px] font-normal">Director of technology .creativegig</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
