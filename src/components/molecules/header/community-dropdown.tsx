import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/social_icons/${logoName}.svg`;
};

interface Props {
  communityList: any[];
  isTablet: boolean;
}

const CommunityDropdown = ({ communityList, isTablet }: Props) => {
  const router = useRouter();
  const menu = (
    <div
      className={
        "!grid !grid-cols-2 !bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2 md:visible md:relative md:opacity-100 md:!bg-transparent md:p-0 md:flex-wrap"
      }
    >
      {communityList.map((item, index) => (
        <a
          className={`px-5 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap w-max group${
                          item.url === "" ? "pointer-events-none" : ""
                        }`}
          key={index}
          href={item.url}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={getLogoUrl(item.image)}
            alt={item.name}
            className={"mr-4 md:mr-2 w-[39px] h-[39px] md:w-[20px] md:h-[20px]"}
          />
          <span className={"flex flex-col md:hidden text-base md:text-sm"}>
            <span className="text-light-high font-medium leading-normal flex items-center">
              {item.name}
              <Icon
                viewClass="dropDownIcon !w-[10px] ml-1 fill-[#fff] group-hover:fill-[#C73238]"
                icon="chevroncolorchange"
              />
            </span>
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <Dropdown
      overlay={menu}
      placement={isTablet ? "bottomRight" : "bottom"}
      trigger={"hover"}
    >
      <button
        className={` [.is-sticky_&]:text-[#D5D5D5] !block ${
          router.pathname === "/" ? "text-[#D5D5D5]" : ""
        } !py-2 !px-3 rounded-md text-[18px] hover:!bg-[#C732381A] hover:text-light-high !font-normal`}
      >
        Community
      </button>
    </Dropdown>
  );
};
export default CommunityDropdown;
