import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Icon from "../Icon";
import { useRouter } from "next/router";

const networks = [
  {
    optionName: "Cosmos",
    optionLink: "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos",
    imgUrl: "/images/networks/atom.svg",
    symbol: "ATOM",
  },
  {
    optionName: "Osmosis",
    optionLink: "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis",
    imgUrl: "/images/networks/osmo.svg",
    symbol: "OSMO",
  },
  {
    optionName: "Solana",
    optionLink: "",
    imgUrl: "/images/networks/sol.svg",
    symbol: "SOL",
  },
  {
    optionName: "Dydx",
    optionLink: "https://app.pstake.finance/cosmos?token=DYDX&chain=Dydx",
    imgUrl: "/images/networks/dydx.svg",
    symbol: "DYDX",
  },
  {
    optionName: "Stargaze",
    optionLink: "https://app.pstake.finance/cosmos?token=STARS&chain=Stargaze",
    imgUrl: "/images/stars.svg",
    symbol: "STARS",
  },
  // {
  //   optionName: "Agoric",
  //   optionLink:
  //     "https://staging.app.pstake.finance/cosmos?token=BLD&chain=persistence",
  //   imgUrl: "/images/networks/bld.svg",
  //   symbol: "BLD",
  // },
  {
    optionName: "Chihuahua",
    optionLink:
      "https://app.pstake.finance/cosmos?token=HUAHUA&chain=persistence",
    imgUrl: "/images/networks/huahua.svg",
    symbol: "HUAHUA",
  },
  {
    optionName: "BNB",
    optionLink: "https://app.pstake.finance/bnb",
    imgUrl: "/images/networks/bnb.svg",
    symbol: "BNB",
  },
];

interface Props {
  networks: any[];
  isTablet: boolean;
}

export const networkDropdownContent = (networks: any[]) => {
  return (
    <div
      className={
        "flex flex-wrap !bg-[#1B1B1B] drop-shadow-md rounded-md py-2 md:visible md:relative md:opacity-100 md:p-0 " +
        "!w-[420px] md:!w-[100%] rounded-tr-0 md:!flex md:!justify-center md:flex-wrap"
      }
    >
      {networks.map((item, index) => (
        <a
          className={`px-6 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap w-[50%] md:w-[100%] group ${
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
            className={
              "mr-4 md:mr-2 w-[28px] h-[28px] md:w-[20px] md:h-[20px] "
            }
          />
          <span className={"flex flex-col"}>
            <span className="text-light-high font-medium leading-normal text-base md:text-xsm flex items-center">
              {item.optionName}
              {item.optionLink === "" ? (
                <span
                  className={
                    "border-[0.5px] rounded-[80px] px-2 py-1 font-medium text-[6px] border-[#0C8B8B] ml-2 text-light-high bg-[#0C8B8B1A]"
                  }
                >
                  Coming Soon
                </span>
              ) : (
                <Icon
                  viewClass="dropDownIcon !w-[10px] ml-2 fill-[#fff] group-hover:fill-[#C73238]"
                  icon="chevroncolorchange"
                />
              )}
            </span>
            <span className="text-[#D5D5D5] text-xsm font-light leading-normal ">
              {item.symbol}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
};

const NetworkDropdown = ({ networks, isTablet }: Props) => {
  const router = useRouter();

  return (
    <Dropdown
      overlay={networkDropdownContent(networks)}
      placement={isTablet ? "bottomLeft" : "bottom"}
      trigger={isTablet ? "click" : "hover"}
    >
      <button
        className={` [.is-sticky_&]:text-[#D5D5D5] !block ${
          router.pathname === "/" ? "text-[#D5D5D5]" : ""
        } !py-2 !px-3 rounded-md text-[18px] hover:!bg-[#C732381A] hover:text-light-high !font-normal`}
      >
        Live Networks
      </button>
    </Dropdown>
  );
};
export default NetworkDropdown;
