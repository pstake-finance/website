import React, { useEffect, useState } from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useTranslation } from "next-export-i18n";
import Icon from "../../molecules/Icon";
import FilterList from "./filter-list";
import { getList } from "./list";
import Image from "next/image";
import Button from "../../atoms/button/Button";

const dropDownList = [
  {
    name: "Data & Tooling",
    key: "data_tooling",
  },
  {
    name: "Security",
    key: "security",
  },
  {
    name: "Institutions",
    key: "institutions",
  },
  {
    name: "Exchanges",
    key: "exchanges",
  },
  {
    name: "Walles",
    key: "wallets",
  },
  {
    name: "Interoperability",
    key: "interoperability",
  },
  {
    name: "Bitcoin Yields",
    key: "bitcoin_yields",
  },
];

const Explore = () => {
  const { t } = useTranslation();
  const list: any = getList(t);
  const [activeFilterList, setActiveFilterList] = useState<{
    [key in string]: boolean;
  }>({
    data_tooling: false,
    security: false,
    institutions: false,
    exchanges: false,
    wallets: false,
    interoperability: false,
    bitcoin_yields: true,
  });
  const [totalData, setTotalData] = useState<any>([]);

  useEffect(() => {
    const filteredData: any[] = [];
    const activeCountKeys = Object.keys(activeFilterList);
    let initialActiveList = [];
    activeCountKeys.map((key: string) => {
      if (activeFilterList[key]) {
        filteredData.push(...list[key]);
        initialActiveList.push(activeFilterList[key]);
      }
    });
    console.log(filteredData, "filteredData");
    setTotalData(filteredData);
  }, [list, activeFilterList]);

  const clearAllHandler = () => {
    setActiveFilterList({
      data_tooling: false,
      security: false,
      institutions: false,
      exchanges: false,
      wallets: false,
      interoperability: false,
      bitcoin_yields: true,
    });
  };

  const removeHandler = (sortKey: string) => {
    const sortList = activeFilterList;
    for (const key in sortList) {
      if (key === sortKey) {
        activeFilterList[key] = false;
      }
      setActiveFilterList({ ...activeFilterList });
    }
  };

  const showAllHandler = () => {
    const sortList = activeFilterList;
    for (const key in sortList) {
      activeFilterList[key] = true;
      setActiveFilterList({ ...activeFilterList });
    }
  };
  return (
    <div
      className="max-w-[1200px] mx-auto aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="container t">
        <h3 className="sectionTitle mb-[60px] md:mb-6 max-w-[1060px] mx-auto">
          Explore the pSTAKE Bitcoin Ecosystem
        </h3>
        <div className={"flex gap-[40px] items-star"}>
          <FilterList
            activeFilterList={activeFilterList}
            setActiveFilterList={setActiveFilterList}
            dropDownList={dropDownList}
          />
          <div className={"flex-1"}>
            <div className={"flex items-center gap-4 flex-wrap mb-4"}>
              <Button
                className={`!rounded-[8px] w-[120px] !bg-[#202020] border-0 !text-[#FEFEFE] md:py-2 !py-2 md:text-sm !text-[18px] !font-normal`}
                variant={"custom"}
                scale="lg"
                isDisabled={false}
                onClick={showAllHandler}
              >
                Show All
              </Button>
              {dropDownList.map((item: any, key) =>
                activeFilterList[item.key] ? (
                  <div
                    key={key}
                    className={
                      "w-fit flex items-center !rounded-[8px] !bg-[#F6931A] border-0 !text-[#FEFEFE] md:py-2 !py-2 md:text-sm px-4 !text-[18px] !font-normal"
                    }
                  >
                    {item.name}
                    <div
                      className={"ml-2"}
                      onClick={() => removeHandler(item.key)}
                    >
                      <Icon
                        viewClass="close w-[10px] h-[10px] fill-[#FEFEFE] cursor-pointer"
                        icon="close"
                      />
                    </div>
                  </div>
                ) : null
              )}
              <div
                className={`cursor-pointer !text-[#FEFEFE] md:!text-[12px] !p-0 !text-[18px] !font-normal`}
                onClick={clearAllHandler}
              >
                Clear All
              </div>
            </div>
            <div className={"flex-1 flex flex-wrap gap-[24px]"}>
              {totalData.map((item: any, key: number) => (
                <div
                  key={key}
                  className={
                    "w-[280px] p-6 rounded-[10px] bg-[#1B1B1B] border-[1px] border-transparent hover:border-[#EE972C]"
                  }
                >
                  <div className={"flex items-center mb-5"}>
                    <div
                      className={
                        "bg-[#202020] w-[69px] h-[69px] rounded-full flex justify-center items-center"
                      }
                    >
                      <Image
                        src={item.logoUrl}
                        width={36}
                        height={36}
                        alt="logo"
                      />
                    </div>
                    <p
                      className={
                        "ml-3 text-light-high text-[18px] font-semibold"
                      }
                    >
                      {item.title}
                    </p>
                  </div>
                  <p className={"text-[#D5D5D5] text-sm"}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
