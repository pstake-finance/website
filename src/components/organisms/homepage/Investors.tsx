import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const Investors = () => {
  const investorList = [
    {
      image: "spartan",
      url:"/images/investors/spartan.svg",
    },
    {
      image: "coinbase_ventures",
      url: "/images/investors/coinbase_ventures.svg",
    },
    {
      image: "bnb_labs",
      url: "/images/investors/bnb_labs.svg",
    },
    {
      image: "defi_capital",
      url: "/images/investors/defi_capital.svg",
    },

    {
      image: "mraken",
      url: "/images/investors/mraken.svg",
    },
    {
      image: "galaxy",
      url: "/images/investors/galaxy.svg",
    },
    {
      image: "lattice",
      url: "/images/investors/lattice.svg",
    },
  ];

  const { t } = useTranslation("common");
  return (
    <div className="pt-9 pb-8">
      <div className="container">
        <p className="text-[20px] md:text-[18px] text-[#D5D5D5] text-center mb-8">
          {t("HOME_INVESTORS_TITLE")}
        </p>
        <div className="">
          <Marquee className={"flex"}>
            {investorList.map((item, index) => (
              <div key={index}>
                <img
                  key={index}
                  src={item.url}
                  title={item.image}
                  className="w-[207px] h-[70px] sm:w-[160px] md:w-[180px] mr-[25px]"
                  alt={item.image}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Investors;
