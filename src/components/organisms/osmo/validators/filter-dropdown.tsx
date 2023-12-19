import Image from "next/image";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../../../customHooks/useOnClickOutside";
import Icon from "../../../molecules/Icon";

const list = [
  {
    name: "stkATOM",
    logoUrl: "/images/stkAtom.svg",
  },
];

const FilterDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropDownRef, () => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div
        className={`text-white-100 mb-8 filter-dropdown relative inline-block dropDown dropDownClick`}
        ref={dropDownRef}
      >
        <button
          className={`bg-[#1F1F1F] !text-light-high rounded-[48px] w-max 
            font-medium w-full md:text-sm flex items-center w-[180px] h-[46px]`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <>
            <div
              className={`flex items-center !justify-between px-4 flex-1 h-[40px]`}
            >
              <Image
                width={24}
                height={24}
                src={"/images/stkOsmo.svg"}
                alt="stkATOM logo"
              />
              <span className="text-[20px] leading-normal md:text-xsm px-2">
                stkOSMO
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
          </>
        </button>

        <div
          className={`bg-[#3e3e3e] round-md md:p-0 dropDownContent min-w-full w-fit absolute opacity-0 transition-opacity transform ease duration-200 left-0 ${
            dropdownOpen ? `visible translate-y-[4px] opacity-100` : `invisible`
          } rounded-md z-10`}
        >
          {list.map((item, index) => (
            <div
              className={`pointer-events-none opacity-50 px-4 py-3 flex items-center md:py-3 hover:cursor-pointer hover:rounded-md hover:bg-[#2828288a] !text-light-high whitespace-nowrap`}
              key={index}
            >
              <div className={"flex justify-between flex-1"}>
                <div className="flex items-center">
                  <Image
                    width={26}
                    height={26}
                    className="mr-2"
                    src={item.logoUrl}
                    alt="stkATOM logo"
                  />
                  <span
                    className="font-medium text-white-200
                  leading-normal md:text-xsm md:ml-2 "
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterDropdown;
