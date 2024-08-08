import React from "react";
import { useTranslation } from "next-export-i18n";
import Icon from "../../molecules/Icon";
import Link from "next/link";
import Image from "next/image";

const list = [
  {
    name: "",
    data: {
      logoUrl: "/images/bridges/ethereum.svg",
      icon: "ethereum",
      viewBox: "0 0 122 29",
      class: "w-[122px]",
      link: "/",
      child: [
        {
          networkLogo: "/images/bridges/uniswap.svg",
          logoWidth: 103,
          networkLink: "",
          poolComposition: "pstake/usdc",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/usdt.svg",
          link: "https://app.uniswap.org/explore/tokens/ethereum/0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
        },
      ],
    },
  },
  {
    name: "SuperBridge",
    data: {
      logoUrl: "/images/bridges/base.svg",
      icon: "base",
      viewBox: "0 0 84 23",
      class: "w-[84px]",
      link: "https://superbridge.app/base",
      child: [
        {
          networkLogo: "/images/bridges/aerodrome.svg",
          logoWidth: 115,
          networkLink: "",
          poolComposition: "pstake/USDC",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/usdt.svg",
          link: "https://aerodrome.finance/liquidity?query=PSTAKE",
        },
      ],
    },
  },
  {
    name: "SuperBridge",
    data: {
      logoUrl: "/images/bridges/optimism.svg",
      icon: "optimism",
      viewBox: "0 0 118 25",
      class: "w-[118px]",
      link: "https://superbridge.app/optimism",
      child: [
        {
          networkLogo: "/images/bridges/velodrome.svg",
          logoWidth: 109,
          networkLink: "",
          poolComposition: "pstake/USDC",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/usdt.svg",
          link: "https://velodrome.finance/liquidity?query=PSTAKE",
        },
      ],
    },
  },
  {
    name: "Celer",
    data: {
      logoUrl: "/images/bridges/blast.svg",
      icon: "blast",
      viewBox: "0 0 104 23",
      class: "w-[104px]",
      link: "https://cbridge.celer.network/1/81457/PSTAKE",
      child: [
        {
          networkLogo: "/images/bridges/thruster.svg",
          networkLink: "",
          logoWidth: 115,
          poolComposition: "pstake/weth",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/eth.svg",
          link: "https://app.thruster.finance/",
        },
        {
          networkLogo: "/images/bridges/fenix.svg",
          networkLink: "",
          logoWidth: 93,
          poolComposition: "pstake/weth",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/eth.svg",
          link: "https://www.fenixfinance.io/liquidity?query=PSTAKE",
        },
      ],
    },
  },
  {
    name: "Celer",
    data: {
      logoUrl: "/images/bridges/binance.svg",
      icon: "binance",
      viewBox: "0 0 112 31",
      class: "w-[112px]",
      link: "https://cbridge.celer.network/56/1/PSTAKE",
      child: [
        {
          networkLogo: "/images/bridges/thena.svg",
          networkLink: "",
          logoWidth: 65,
          poolComposition: "pstake/bsud",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/bsud.svg",
          link: "https://thena.fi/pools/0x67e51f1de32318f3a27265287ed766839a62cf13",
        },
        {
          networkLogo: "/images/bridges/pancake.svg",
          networkLink: "/images/bridges/logo.svg",
          logoWidth: 119,
          poolComposition: "pstake/cake",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/cake.svg",
          link: "https://pancakeswap.finance/info/v3/pairs/0xb9f47c14b945915badb1217af781aa7de6f6569f",
        },
      ],
    },
  },
  {
    name: "Gravity Bridge",
    data: {
      logoUrl: "/images/bridges/cosmos.svg",
      icon: "cosmos-network",
      viewBox: "0 0 122 29",
      class: "w-[122px]",
      link: "https://bridge.persistence.one/",
      child: [
        {
          networkLogo: "/images/bridges/osmosis.svg",
          logoWidth: 116,
          networkLink: "",
          poolComposition: "pstake/osmo",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/osmo.svg",
          link: "https://app.osmosis.zone/assets/PSTAKE",
        },
        {
          networkLogo: "/images/bridges/persistence.svg",
          networkLink: "",
          logoWidth: 116,
          poolComposition: "pstake/xprt",
          poolLogoOne: "/images/bridges/pstake.svg",
          poolLogoTwo: "/images/bridges/xprt.svg",
          link: "https://app.persistence.one/pools/persistence1g3acw7aumaj3r348cqn4kazrehlmn822w9p46sqwztnke27h3lyshald7p\n",
        },
      ],
    },
  },
  {
    name: "Celer",
    data: {
      logoUrl: "/images/bridges/sui.svg",
      viewBox: "0 0 56 29",
      class: "w-[56px]",
      icon: "sui",
      link: "https://cbridge.celer.network/1/12370001/PSTAKE",
      child: [],
    },
  },
];

const bridges = [
  {
    icon: "jumpet",
    link: "https://jumper.exchange/?fromChain=1&fromToken=0x0000000000000000000000000000000000000000&toChain=1&toToken=0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
    viewBox: "0 0 131 29",
  },
  {
    icon: "squid",
    link: "https://app.squidrouter.com/",
    viewBox: "0 0 69 39",
  },
  {
    icon: "kyberswap",
    link: "https://kyberswap.com/swap/optimism/eth-to-0x023550adde4fa2f90d63a41d9282bee0294c04cd",
    viewBox: "0 0 107 36",
  },
  {
    icon: "matcha",
    link: "https://matcha.xyz/tokens/ethereum/eth?buyChain=1&buyAddress=0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
    viewBox: "0 0 116 27",
  },
  {
    icon: "1inch",
    link: "https://app.1inch.io/#/1/simple/swap/ETH/PSTAKE",
    viewBox: "0 0 95 45",
  },
  {
    icon: "skip",
    link: "https://go.skip.build/",
    viewBox: "0 0 114 34",
  },
];
const EveryWhere = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#141414] aos-init aos-animate" data-aos="zoom-in-right">
      <div className="max-w-[1220px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
        <h3 className="text-[40px] leading-[60px] text-light-high font-bold mb-3 md:mb-4 text-center">
          {t("PSTAKE_EVERYWHERE_TITLE1")} &nbsp;
          {t("PSTAKE_EVERYWHERE_TITLE2")}
        </h3>
        <p className="text-[20px] leading-[25px] text-[#ADADAD] mb-[60px] md:mb-[20px[ text-center">
          {t("PSTAKE_EVERYWHERE_CONTENT")}
        </p>
        <div className={"h-[890px] flex mb-8"}>
          <div
            className={
              "flex flex-col justify-center items-center w-[200px] h-full border-r border-[#292929]"
            }
          >
            <div>
              <img
                src={"/images/logo.svg"}
                alt={"pstake-logo"}
                className="w-[148px] h-[36px] mx-2 "
              />
              <p className={"font-bold text-[20px] text-[#ADADAD] text-center"}>
                Ethereum
              </p>
            </div>
          </div>
          <div className={"pl-4"}>
            {list.map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 ${
                  index + 1 !== list.length ? "mb-5" : ""
                }`}
              >
                <div className={"px-1 mx-2"}>
                  <p className={"text-[#ADADAD]"}>{item.name}</p>
                  <img
                    src={"/images/single_arrow.svg"}
                    alt={"pstake-logo"}
                    className="w-[144px]"
                  />
                </div>
                <div>
                  <Link
                    key={index}
                    href={item.data.link}
                    className={`px-1 rounded-[8px] cursor-pointer bg-[#FFFFFF0D]
                     hover:border hover:border-[#EE972C] w-[254px] h-[50px] 
                     mx-2 flex flex-col justify-center items-center group ${
                       item.data.link === "/" ? "pointer-events-none" : ""
                     }`}
                    target="_blank"
                  >
                    <Icon
                      viewClass={` fill-[#a0a0a0] group-hover:fill-[#FFFFFF] ${item.data.class} !h-[30px]`}
                      icon={item.data.icon}
                      viewBox={item.data.viewBox}
                    />
                  </Link>
                </div>
                {item.data.child.length > 0 ? (
                  <div className={"px-1"}>
                    <img
                      src={
                        item.data.child.length > 1
                          ? "/images/double_arrow.svg"
                          : "/images/single_arrow.svg"
                      }
                      alt={"pstake-logo"}
                      className="w-[100px] h-[48px] mx-2 "
                    />
                  </div>
                ) : null}
                <div className={"px-1"}>
                  {item.data.child.length > 0
                    ? item.data.child.map((networkItem, nIndex) => (
                        <div key={nIndex} className={"flex items-center"}>
                          <div className={"w-[140px]"}>
                            <Image
                              src={networkItem.networkLogo}
                              alt={"pstake-logo"}
                              width={networkItem.logoWidth}
                              height={40}
                              className={`w-[${networkItem.logoWidth}] h-[40px] mx-2 `}
                            />
                          </div>
                          <Link
                            key={index}
                            href={networkItem.link}
                            target="_blank"
                            className={`${
                              nIndex + 1 !== item.data.child.length
                                ? "mb-2 "
                                : ""
                            } rounded-[8px] x-1 bg-[#FFFFFF0D] 
                                border border-[#292929] hover:border-[#EE972C] cursor-pointer group w-[254px] h-[50px] mx-2 flex justify-center items-center`}
                          >
                            <div className={"flex items-center mr-2"}>
                              <img
                                src={networkItem.poolLogoOne}
                                alt={"pstake-logo"}
                                className="w-[30px] h-[30px] "
                              />
                              <img
                                src={networkItem.poolLogoTwo}
                                alt={"pstake-logo"}
                                className="w-[30px] h-[30px] -ml-2"
                              />
                            </div>
                            <p
                              className={
                                "text-[#ADADAD] uppercase group-hover:text-[#FEFEFE] pr-2"
                              }
                            >
                              {networkItem.poolComposition}
                            </p>
                            <Icon
                              viewClass="icon !w-[16px] stroke-trasparent fill-transparent group-hover:stroke-[#EE972C]"
                              icon={"right-arrow2"}
                            />
                          </Link>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"flex w-full justify-between"}>
          <div
            className={
              "border border-[#292929] rounded-lg text-center px-[32px] flex justify-between flex-1 items-center max-w-[1220px] just"
            }
          >
            <p className={"text-[#ADADAD]"}>Trade Route support</p>
            <div className={"py-[14px] flex h-[64px]"}>
              {bridges.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className={`cursor-pointer group px-[32px]  ${
                    index === 0 ? "pl-0" : ""
                  }  ${index === bridges.length - 1 ? "pr-0" : ""} ${
                    index === bridges.length - 1
                      ? ""
                      : "border-r border-[#5B5B5B]"
                  }`}
                >
                  <Icon
                    viewClass=" fill-[#a0a0a0] group-hover:fill-[#EE972C] !w-[102px] !h-[36px]"
                    icon={item.icon}
                    viewBox={item.viewBox}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryWhere;
