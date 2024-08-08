import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";

interface Props {
  learnList: any[];
  isTablet: boolean;
}

export const learnDropDownContent = (learnList: any[]) => {
  return (
    <div
      className={
        "!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2 w-[340px]"
      }
    >
      {learnList.map((item, index) => (
        <a
          className="mx-[16px] my-2 p-3 rounded-md flex items-center md:py-3 hover:cursor-pointer text-light-high group hover:bg-[#F6931A1A]"
          href={item.optionLink}
          key={index}
          target={"_blank"}
          rel="noreferrer"
        >
          <span
            className={
              "w-[44px] h-[44px] justify-center items-center flex rounded-full bg-[#FFFFFF0D] group-hover:fill-[#F6931A33] mr-[14px]"
            }
          >
            {item.icon.startsWith("/images") ? (
              <img
                src={item.icon}
                alt={item.icon}
                className={"w-[44px] h-[44px]"}
              />
            ) : (
              <Icon
                viewClass={` !w-[22px] ${
                  item.iconType === "stroke"
                    ? "stroke-[#FFFFFF] fill-transparent group-hover:stroke-[#F6931A]"
                    : item.iconType !== ""
                    ? "fill-[#FFFFFF] group-hover:fill-[#F6931A]"
                    : ""
                } `}
                icon={item.icon}
              />
            )}
          </span>
          <span className={"flex-1"}>
            <span className={"flex items-center"}>
              <span
                className="text-[#F5F5F5] text-base md:text-sm
                        font-medium leading-normal md:text-xsm"
              >
                {item.optionName}
              </span>
              <Icon
                viewClass="dropDownIcon !w-[10px] ml-1 fill-[#fff] group-hover:fill-[#F6931A]"
                icon="chevroncolorchange"
              />
            </span>
            <span className="text-[#D5D5D5] text-xsm font-light">
              {item.subText}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
};

const LearnDropdown = ({ learnList, isTablet }: Props) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <Dropdown
        overlay={learnDropDownContent(learnList)}
        placement={isTablet ? "bottomRight" : "bottom"}
        trigger={isTablet ? "click" : "hover"}
      >
        <button
          className={` [.is-sticky_&]:text-[#D5D5D5] !block  ${
            (router.pathname === "/" || router.pathname === "/pstake" ||  router.pathname === "/team")
              ? "text-[#D5D5D5] hover:!bg-[#EE972C4D] hover:text-light-high"
              : ""
          } ${
            router.pathname === "/btc"
              ? "text-[#000] hover:!bg-[#EE972C33]"
              : ""
          } !py-2 !px-3 rounded-md text-[18px] !font-normal md:!hidden`}
        >
          {t("LEARN")}
        </button>
      </Dropdown>
      <div className={"hidden md:!block "}>
        {learnDropDownContent(learnList)}
      </div>
    </>
  );
};
export default LearnDropdown;
