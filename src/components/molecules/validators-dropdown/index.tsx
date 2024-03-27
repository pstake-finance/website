import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { useOnClickOutside } from "../../../customHooks/useOnClickOutside";
import Icon from "../Icon";

const list = [
  {
    name: "stkATOM",
    logoUrl: "/images/stkAtom.svg",
    url: "/atom/validators",
  },
  {
    name: "stkOSMO",
    logoUrl: "/images/stkOsmo.svg",
    url: "/osmo/validators",
  },
  {
    name: "stkDYDX",
    logoUrl: "/images/stk_dydx.svg",
    url: "/dydx/validators",
  },
  {
    name: "stkSTARS",
    logoUrl: "/images/stk_stars.svg",
    url: "/stars/validators",
  },
  // {
  //   name: "stkBLD",
  //   logoUrl: "/images/stk_bld.svg",
  //   url: "/bld/validators",
  // },
  {
    name: "stkHUAHUA",
    logoUrl: "/images/stk_huahua.svg",
    url: "/huahua/validators",
  },
  // process.env.NODE_ENV !== "production"
  //   ? {
  //       name: "stkXPRT",
  //       logoUrl: "/images/stk_xprt.svg",
  //       url: "/xprt/validators",
  //     }
  //   : null,
];

interface Props {
  name: string;
}
const ValidatorsDropdown = ({ name }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const selectedItem = list.find((item) => item && item!.name === name);

  useOnClickOutside(dropDownRef, () => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div
        className={`text-white-100 filter-dropdown relative inline-block dropDown dropDownClick`}
        ref={dropDownRef}
      >
        <button
          className={`bg-[#383838] !text-light-high rounded-[48px] w-max 
            font-medium w-full md:text-sm flex items-center w-[180px] h-[46px]`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <>
            {selectedItem && (
              <div
                className={`flex items-center !justify-between px-4 flex-1 h-[40px]`}
              >
                <Image
                  width={24}
                  height={24}
                  src={selectedItem!.logoUrl}
                  alt={selectedItem!.name}
                />
                <span className="text-[20px] leading-normal md:text-xsm px-2">
                  {selectedItem?.name}
                </span>
                <span
                  className={`${
                    !dropdownOpen ? "rotate-90" : "-rotate-90"
                  } ease-in duration-200 flex items-center justify-center`}
                >
                  <Icon
                    viewClass={` !fill-[#FCFCFC] arrow-right !w-[10px]`}
                    icon="chevron"
                  />
                </span>
              </div>
            )}
          </>
        </button>

        <div
          className={`bg-[#383838] round-md md:p-0 dropDownContent min-w-full w-fit absolute opacity-0 transition-opacity transform ease duration-200 left-0 ${
            dropdownOpen ? `visible translate-y-[4px] opacity-100` : `invisible`
          } rounded-md z-10`}
        >
          {list.map((item, index) => {
            return item && item?.name !== name ? (
              <div
                className={`px-4 py-3 flex items-center md:py-3 hover:cursor-pointer hover:rounded-md hover:bg-[#2828288a] !text-light-high whitespace-nowrap`}
                key={index}
              >
                <Link
                  href={item!.url}
                  className={"flex justify-between flex-1 "}
                >
                  <span className="flex items-center">
                    <Image
                      width={26}
                      height={26}
                      className="mr-2"
                      src={item!.logoUrl}
                      alt="stkATOM logo"
                    />
                    <span
                      className="text-white-high
                  leading-normal md:text-xsm md:ml-2 "
                    >
                      {item?.name}
                    </span>
                  </span>
                </Link>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ValidatorsDropdown;
