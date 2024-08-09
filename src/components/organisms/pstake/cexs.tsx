import React from "react";
import { useTranslation } from "next-export-i18n";
import Marquee from "react-fast-marquee";

const Cexs = () => {
  const { t } = useTranslation("common");
  const cexList = [
    {
      logoUrl: "/images/cexs/bingx.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/bitget.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/bitmart.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/bybit.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/coinex.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/coinw.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/crypto.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/hotcoin.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/htx.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/kraken.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/kucoin.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/okx.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/tapbit.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/gate.svg",
      link: "/",
    },
    {
      logoUrl: "/images/cexs/uniswap.svg",
      link: "https://app.uniswap.org/explore/tokens/ethereum/0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
    },
    {
      logoUrl: "/images/cexs/thruster.svg",
      link: "https://app.thruster.finance/",
    },
    {
      logoUrl: "/images/cexs/aerodrome.svg",
      link: "https://aerodrome.finance/liquidity?query=PSTAKE",
    },
    {
      logoUrl: "/images/cexs/velodrome.svg",
      link: "https://velodrome.finance/liquidity?query=PSTAKE",
    },
    {
      logoUrl: "/images/cexs/pancake.svg",
      link: "https://pancakeswap.finance/info/v3/pairs/0xb9f47c14b945915badb1217af781aa7de6f6569f",
    },
    {
      logoUrl: "/images/cexs/fenix.svg",
      link: "https://www.fenixfinance.io/liquidity?query=PSTAKE",
    },
    {
      logoUrl: "/images/cexs/thena.svg",
      link: "https://thena.fi/pools/0x67e51f1de32318f3a27265287ed766839a62cf13",
    },
    {
      logoUrl: "/images/cexs/osmosis.svg",
      link: "https://app.osmosis.zone/assets/PSTAKE",
    },
    {
      logoUrl: "/images/cexs/persistence.svg",
      link: "https://app.persistence.one/pools/persistence1g3acw7aumaj3r348cqn4kazrehlmn822w9p46sqwztnke27h3lyshald7p",
    },
  ];

  return (
    <div className="">
      <div className="container py-[60px] md:py-[35px]">
        <h3 className="text-[40px] leading-[60px] text-center text-light-high font-bold mb-[44px] md:mb-6 max-w-[1060px] mx-auto">
          {t("EXCHANGES")}
        </h3>
        <div className="">
          <Marquee className={"flex mb-4"}>
            {cexList.slice(0, 7).map((item, index) => (
              <p
                className={
                  "mx-3 rounded-[32px] bg-[#202020] flex items-center justify-center w-[207px] h-[70px]"
                }
                key={index}
              >
                <img
                  key={index}
                  className={"w-max"}
                  src={item.logoUrl}
                  alt={item.logoUrl}
                />
              </p>
            ))}
          </Marquee>
          <Marquee className={"flex gap-4 mb-4"} direction={"right"}>
            {cexList.slice(7, 15).map((item, index) => (
              <p
                className={
                  "mx-3 rounded-[32px] bg-[#202020] flex items-center justify-center w-[207px] h-[70px]"
                }
                key={index}
              >
                <img
                  key={index}
                  className={"w-max"}
                  src={item.logoUrl}
                  alt={item.logoUrl}
                />
              </p>
            ))}
          </Marquee>
          <Marquee className={"flex gap-4"} direction={"left"}>
            {cexList.slice(15, cexList.length).map((item, index) => (
              <p
                className={
                  "mx-3 rounded-[32px] bg-[#202020] flex items-center justify-center w-[207px] h-[70px]"
                }
                key={index}
              >
                <img
                  key={index}
                  className={"w-max"}
                  src={item.logoUrl}
                  alt={item.logoUrl}
                />
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Cexs;
