import React from "react";

export interface TeamMemberCardInterface {
  image: string;
  name: string;
  info: string;
  role: string;
  socialLinks: {
    name: string;
    link: string;
    icon: string;
    color: string;
    iconBg: string
  }[];
}

const People = () => {
  return (
    <div className="bg-[#141414] aos-init aos-animate"  data-aos="zoom-in-right">
      <div className="max-w-[1220px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
        <h3 className="text-[40px] leading-[60px] text-light-high font-bold mb-3 md:mb-4 text-center">
          Meet the Brains
        </h3>
        <p className="text-[20px] leading-[25px] text-[#ADADAD] mb-[60px] md:mb-[20px[ text-center">
          Lorem ipsum dolor sit amet consectetur. Orci sit sodales sit viverra. Amet dui pretium orci.
        </p>
      </div>
    </div>
  );
};

export default People;
