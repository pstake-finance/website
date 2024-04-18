import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";

interface Props {
  list: any[];
  isTablet: boolean;
}

const BridgeDropdown = ({ list, isTablet }: Props) => {
  const router = useRouter();
  const menu = (
    <div className={"bg-[#1B1B1B] rounded-md py-2"}>
      {list.map((item, index) => (
        <a
          className={`px-5 py-3 flex items-center hover:cursor-pointer text-light-high whitespace-nowrap group ${
            item.optionLink === "" ? "pointer-events-none" : ""
          }`}
          key={index}
          href={item.optionLink}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={item.imgUrl}
            alt={item.optionName}
            className={"mr-4 md:mr-2 w-[40px] h-[40px] md:w-[20px] md:h-[20px]"}
          />
          <span className={"flex flex-col md:hidden text-base"}>
            <span className="text-light-high font-medium leading-normal md:text-xsm flex items-center">
              {item.optionName}
              <Icon
                viewClass="dropDownIcon !w-[10px] ml-2 fill-[#fff] group-hover:fill-[#C73238]"
                icon="chevroncolorchange"
              />
            </span>
            <span className={"text-[#D5D5D5] text-[12px]"}>{item.subText}</span>
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <Dropdown
      overlay={menu}
      placement={isTablet ? "bottomRight" : "bottom"}
      trigger={isTablet ? "click" : "hover"}
    >
      <button
        className={` [.is-sticky_&]:text-[#D5D5D5] !block ${
          router.pathname === "/" ? "text-[#D5D5D5]" : ""
        } !py-2 !px-3 rounded-md text-[18px] hover:!bg-[#C732381A] hover:text-light-high !font-normal`}
      >
        Bridges
      </button>
    </Dropdown>
  );
};
export default BridgeDropdown;
