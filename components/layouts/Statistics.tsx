import React from "react";

const data = [
  {
    id: 1,
    title: "1.5M",
    description:
      "Wich is appraximately 56% of the consumer population of the us",
  },
  {
    id: 2,
    title: "41%",
    description: "The lagest adopter due to being comfortable with technology",
  },
  {
    id: 3,
    title: "3964+",
    description:
      "The online payment system offer electronic alternatives yo traditional",
  },
];

const Statistics = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-10 bg-[#DDF472] py-[53px]">
      <h4 className="text-center text-[#232323] text-3xl font-bold leading-normal font-plus-jakarta-sans">
        Join millions getting secured payment
      </h4>
      <div className="w-10/12 flex md:flex-row flex-col md:gap-x-[70px] gap-y-[62px] justify-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:gap-y-[22px] gap-y-[19px] font-plus-jakarta-sans"
          >
            <h5 className="md:text-[43px] text-[38px] font-bold text-[#232323]">
              {item.title}
            </h5>
            <p className="text-[#969696] md:text-xl text-base font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
