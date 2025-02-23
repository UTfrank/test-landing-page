import React from "react";
import { Card, Bitcoin, Book } from "iconsax-react";

const data = [
  {id: 1, icon: <Card size="32" color="#FFFFFF" />, title: "Add Card", description: "Add a card of any bank"},
  {id: 2, icon: <Bitcoin size="32" color="#FFFFFF" />, title: "Add crypto wallet", description: "Connect your crypto wallet"},
  {id: 3, icon: <Book size="32" color="#FFFFFF" />, title: "Add unipay account", description: "Hold all payments  via the app"},
]

const Features = () => {
  return (
    <div className="py-[94px] md:px-[147px] px-[17px] flex flex-col gap-y-[72px]">
      <div className="flex md:flex-row flex-col md:justify-between relative">
        <div className="shadow-[10px_13px_32px_0px_#00000017] md:px-[25px] px-[14px] md:py-[37px] py-5 rounded-lg flex gap-y-[49px] flex-col md:w-[519px] w-[261px]">
          {data.map((item) => (  
          <div key={item.id} className="flex justify-between items-center md:gap-x-[122px] gap-x-[20px] w-full">
            <div className="flex gap-x-[25px]">
              <div className={`flex justify-center items-center md:w-[62px] md:h-[62px] w-[34px] h-[34px] rounded-xl ${item.id === 1 ? "bg-[#328CE0]" : item.id === 2 ? "bg-[#E0C432]" : "bg-[#CE2A2A]"}`}>
                {item.icon}
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h5 className="font-plus-jakarta-sans text-[#2D2D2D] md:text-xl text-sm font-bold">
                  {item.title}
                </h5>
                <p className="font-inter font-medium text-[#7E7E7E] md:text-base text-[9px]">
                  {item.description}
                </p>
              </div>
            </div>
              <div className="flex justify-end items-center">
                <div className={`md:w-[27px] md:h-[27px] w-[14px] h-[14px] rounded-full ${item.id === 3 ? "bg-[#35BA1F]" : "border border-[#7C7C7C]"} `} />
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
