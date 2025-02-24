import React from "react";
import { Clock, Lock, Headphone } from "iconsax-react";

const data = [
  {
    id: 1,
    icon: <Clock color="#292D32" />,
    title: "Solve problem real time",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste libero sit, ",
  },
  {
    id: 2,
    icon: <Lock color="#292D32" />,
    title: "Secured & safe Payments",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste libero sit, ",
  },
  {
    id: 3,
    icon: <Headphone color="#292D32" />,
    title: "24/7 Customer support",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iste libero sit, ",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#212121] py-[66px] lg:px-[72px] md:px-[20px] px-7 flex md:flex-row flex-col">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-y-5 px-[25px] md:mb-0 mb-8 relative before:content-[''] md:before:border-r-[0.5px] md:before:border-b-none before:border-b-[0.5px] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[5px] before:h-[124px] before:w-[0.5px] before:border-[#7E7E7E] before:first-of-type:border-none"
        >
          <div className="flex justify-center items-center w-[62px] h-[62px] rounded-full bg-[#DDF472]">
            <div className="flex justify-center items-center lg:w-[40px] lg:h-[40px] w-[35px] h-[35px]">
              {item.icon}
            </div>
          </div>
          <h5 className="font-plus-jakarta-sans text-[#DBDBDB] md:text-[19px] text-[15px] font-bold">
            {item.title}
          </h5>
          <p className="font-inter font-medium text-[#7E7E7E] md:text-[15px] text-[12px]">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default WhyChoose;
