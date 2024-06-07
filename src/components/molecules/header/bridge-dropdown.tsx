import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";
import { useTranslation } from "next-export-i18n";

interface Props {
  list: any[];
  isTablet: boolean;
}

export const bridgeDropdownContent = (list: any[]) => {
  return (
    <div
      className={
        "!bg-[#1B1B1B] md:!block drop-shadow-md rounded-md py-2 w-[340px]"
      }
    >
      {list.map((item, index) => (
        <a
          className={`mx-[16px] my-2 p-3 rounded-md flex items-center md:py-3 hover:cursor-pointer text-light-high group hover:bg-[#F6931A1A] ${
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
          <span className={"flex flex-col text-base"}>
            <span className="text-light-high font-medium leading-normal md:text-xsm flex items-center">
              {item.optionName}
              <Icon
                viewClass="dropDownIcon !w-[10px] ml-2 fill-[#fff] group-hover:fill-[#F6931A]"
                icon="chevroncolorchange"
              />
            </span>
            <span className={"text-[#D5D5D5] text-xsm"}>{item.subText}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

const BridgeDropdown = ({ list, isTablet }: Props) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Dropdown
      overlay={bridgeDropdownContent(list)}
      placement={isTablet ? "bottomRight" : "bottom"}
      trigger={isTablet ? "click" : "hover"}
    >
      <button
        className={` [.is-sticky_&]:text-[#D5D5D5] !block  ${
          router.pathname === "/"
            ? "text-[#D5D5D5] hover:!bg-[#EE972C4D] hover:text-light-high"
            : ""
        } ${
          router.pathname === "/btc" ? "text-[#000] hover:!bg-[#EE972C33]" : ""
        }  !py-2 !px-3 rounded-md text-[18px] !font-normal`}
      >
        {t("BRIDGES")}
      </button>
    </Dropdown>
  );
};
export default BridgeDropdown;
