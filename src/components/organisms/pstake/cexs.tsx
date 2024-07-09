import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const Cexs = () => {
  const { t } = useTranslation("common");
  const cexList = [
    {
      logoUrl:"/images/cexs/bingx.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bitget.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/bitmart.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/bybit.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/coinex.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/coinw.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/crypto.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/gate.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/hotcoin.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/htx.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/kraken.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/kucoin.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/mexc.svg",
      link:"/"
    },
    {
      logoUrl:"/images/cexs/okx.svg",
      link:"/"
    }, {
      logoUrl:"/images/cexs/tapbit.svg",
      link:"/"
    },

  ]
  return (
    <div className="">
      <div className="container py-[60px] md:py-[35px]">
        <h3 className="sectionTitle mb-[44px] md:mb-6 max-w-[1060px] mx-auto">
          CEXs
        </h3>
        <div
          className={"flex gap-4 max-w-[1220px] mx-auto items-center flex-wrap lg:hidden"}
        >
          {
            cexList.map((cex, index) => (
              <a
                className={"cursor-pointer rounded-lg border border-[#292929] flex items-center justify-center w-[231px] h-[80px]"}
                key={index}>
                <img
                  src={cex.logoUrl}
                  alt={"pstake-logo"}
                  className="w-auto h-auto mx-2 "
                />
              </a>
            ))
          }
        </div>
        <div className="hidden lg:block">
          <Marquee className={"flex gap-4 mb-4"}>
            {cexList.slice(0, cexList.length /2).map((item, index) => (
              <a
                className={"cursor-pointer mx-4 rounded-lg border border-[#292929] flex items-center justify-center w-[231px] h-[80px]"}
                key={index}>

                <img
                  key={index}
                  src={item.logoUrl}
                  alt={item.logoUrl}
                />
              </a>
            ))}
          </Marquee>
          <Marquee className={"flex gap-4"}>
            {cexList.slice(cexList.length/2 , cexList.length).map((item, index) => (
              <a
                className={"cursor-pointer mx-4 rounded-lg border border-[#292929] flex items-center justify-center w-[231px] h-[80px]"}
                key={index}>

                <img
                  key={index}
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
