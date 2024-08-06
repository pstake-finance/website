import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const Cexs = () => {
  const { t } = useTranslation("common");
  const cexList = [
    {
      logoUrl:"/images/cexs/thruster.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/aerodrome.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/velodrome.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/pancake.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/thena.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/osmosis.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/fenix.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/persistence.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/uniswap.svg",
      link:"/"
    },
  ]

  return (
    <div className="">
      <div className="container py-[60px] md:py-[35px]">
        <h3 className="text-[40px] leading-[60px] text-center text-light-high font-bold mb-[44px] md:mb-6 max-w-[1060px] mx-auto">
          {t("EXCHANGES")}
        </h3>
        <div className="">
          <Marquee className={"flex mb-4"}>
            {cexList.map((item, index) => (
              <a
                className={"cursor-pointer mx-3 rounded-[32px] bg-[#202020] flex items-center justify-center w-[207px] h-[70px]"}
                key={index}>

                <img
                  key={index}
                  className={"w-max"}
                  src={item.logoUrl}
                  alt={item.logoUrl}
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Cexs;
