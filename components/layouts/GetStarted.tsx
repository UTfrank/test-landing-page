import React from "react";
import Button from "@/components/Button";
import { CloudPlus, Share } from "iconsax-react";

const data = [
  {
    id: 1,
    icon: <CloudPlus color="#ffffff" />,
    title: "Store date on cloud",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste libero sit, ",
  },
  {
    id: 2,
    icon: <Share color="#ffffff" />,
    title: "Connect dots smartly",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste libero sit, ",
  },
];

const GetStarted = () => {
  return (
    <section className="bg-white px-[68px] py-[75px] md:grid grid-cols-12 grid-rows-1">
      <div className="col-span-4 flex flex-col gap-y-[30px]">
        <div className="flex flex-col gap-y-[19px]">
          <h4 className="text-[#2E2E2E] text-[27px] font-bold font-plus-jakarta-sans">
            Ready to get started ?
          </h4>
          <p className="text-[#7E7E7E] font-inter md:text-[15px] text-[13px] font-medium">
            Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
            viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet
            ut ante ut eu. Id viverra libero est n
          </p>
        </div>
        <div className="flex justify-between gap-x-[19px]">
          <Button variant="bold">Join now</Button>
          <Button variant="inline">Learn more</Button>
        </div>
      </div>
      <div className="col-span-7 col-end-13 flex md:flex-row flex-col md:gap-x-[35px] gap-y-[30px] *:border *:border-[#CFCFCF] *:px-4 *:py-[19px] *:rounded-[8px] md:mt-0 mt-[57px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-y-5"
          >
            <div className="flex justify-center items-center w-[62px] h-[62px] rounded-xl bg-[#1D1D1D]">
              <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] w-[35px] h-[35px]">
                {item.icon}
              </div>
            </div>
            <h5 className="font-plus-jakarta-sans text-[#2E2E2E] md:text-[20px] text-[17px] font-bold">
              {item.title}
            </h5>
            <p className="font-inter font-medium text-[#7E7E7E] md:text-[15px] text-[12px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
