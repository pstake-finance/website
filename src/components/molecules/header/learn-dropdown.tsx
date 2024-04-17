import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";

interface Props {
  learnList: any[];
  isTablet: boolean;
}

const LearnDropdown = ({ learnList, isTablet }: Props) => {
  const router = useRouter();
  const menu = (
    <div className={"!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2"}>
      {learnList.map((item, index) => (
        <a
          className="px-6 md:px-3 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap group"
          href={item.optionLink}
          key={index}
          target={"_blank"}
          rel="noreferrer"
        >
          <span
            className={
              "w-[40px] h-[40px] justify-center items-center flex rounded-full bg-[#FFFFFF0D]"
            }
          >
            <Icon
              viewClass={` !w-[22px] ${
                item.iconType === "stroke"
                  ? "stroke-[#C73238] fill-transparent"
                  : "fill-[#C73238]"
              }`}
              icon={item.icon}
            />
          </span>
          <span
            className="ml-4 text-light-high text-sm
                        font-medium leading-normal md:text-xsm md:ml-2 group-hover:text-[#C73238]"
          >
            {item.optionName}
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        placement={isTablet ? "bottomRight" : "bottom"}
        trigger={"hover"}
      >
        <button
          className={` [.is-sticky_&]:text-[#D5D5D5] !block ${
            router.pathname === "/" ? "text-[#D5D5D5]" : ""
          } !py-2 !px-3 rounded-md text-[18px] hover:!bg-[#C732381A] hover:text-light-high !font-normal md:!hidden`}
        >
          Learn
        </button>
      </Dropdown>
      <div className={"hidden md:!block "}>{menu}</div>
    </>
  );
};
export default LearnDropdown;
