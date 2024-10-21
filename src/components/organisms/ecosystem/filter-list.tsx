import React, { useEffect, useState } from "react";
import Icon from "../../molecules/Icon";

const FilterList = ({
  activeFilterList,
  setActiveFilterList,
  dropDownList,
}: any) => {
  console.log(activeFilterList, "activeFilterList");
  const handleDropdown = (sortKey: string) => {
    const sortList = activeFilterList;
    for (const key in sortList) {
      if (key === sortKey) {
        activeFilterList[key] = !activeFilterList[key];
      }
      setActiveFilterList({ ...activeFilterList });
    }
  };
  return (
    <div className={"w-[240px]"}>
      <div className={"p-6 rounded-[10px] bg-[#1B1B1B]"}>
        <p className={"text-[#D5D5D5] text-sm font-medium mb-3"}>Category</p>
        {dropDownList.map((item: any, key: number) => (
          <div
            key={key}
            onClick={() => {
              handleDropdown(item.key);
            }}
            className={"flex items-center mb-4 cursor-pointer"}
          >
            {activeFilterList[item.key] ? (
              <div
                className={
                  "w-[20px] h-[20px] border-[#F6931A] border-[2px] rounded-[2px] bg-transparent flex items-center justify-center"
                }
              >
                {" "}
                <Icon viewClass=" !w-[20px] !h-[20px]" icon="check" />
              </div>
            ) : (
              <div className={"w-[20px] h-[20px] rounded-[2px] bg-[#FFFFFF]"} />
            )}
            <p className={"ml-3 text-[#D5D5D5] text-xsm"}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterList;
