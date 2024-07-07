import React from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useApp } from "../../../context/appContext/AppContext";
import * as net from "node:net";

const list = [
  {
    name: "Celer",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          },
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          }
        ]
      }
  },
  {
    name: "SuperBridge",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          },
        ]
      }
  },
  {
    name: "SuperBridge",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          },
        ]
      }
  },
  {
    name: "Celer",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[

        ]
      }
  },
  {
    name: "Celer",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          },
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          }
        ]
      }
  },
  {
    name: "Gravity Bridge",
    data:
      {
        logoUrl: "/images/logo.svg",
        link: "/",
        child:[
          {
            networkLogo: "/images/logo.svg",
            networkLink: "/images/logo.svg",
            poolComposition: "pstake/weth",
            poolLogoOne: "/images/pstake_icon_light.svg",
            poolLogoTwo: "/images/pstake_icon_light.svg",
            logoUrl: "/images/logo.svg",
            link: "/",
          },
        ]
      }
  },
]
const EveryWhere = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#141414] aos-init aos-animate"  data-aos="zoom-in-right">
      <div className="max-w-[1220px] mx-auto  md:mx-4 py-[65px] md:py-[35px]">
        <h3 className="text-[64px] leading-[80px] text-light-full mb-6 md:mb-4 text-center">
          {t('PSTAKE_EVERYWHERE_TITLE1')} &nbsp;
          {t('PSTAKE_EVERYWHERE_TITLE2')}
        </h3>
        <p className="text-[20px] leading-[25px] text-[#ADADAD] mb-[60px] md:mb-[20px[ text-center">
          {t('PSTAKE_EVERYWHERE_CONTENT')}
        </p>
          <div className={"h-[730px] flex mb-8"}>
            <div className={"flex flex-col justify-center items-center w-[200px] h-full border-r border-[#292929]"}>
              <img
                src={"/images/logo.svg"}
                alt={"pstake-logo"}
                className="w-[148px] h-[36px] mx-2 "
              />
            </div>
            <div className={"pl-4"}>
              {
                list.map((item, index) => (
                  <div key={index} className={`flex items-center p-4 ${index + 1 !== list.length ? 'mb-5' : ''}`}>
                    <div className={"px-1 mx-2"}>
                      <p className={"text-light-emphasis"}>{item.name}</p>
                      <img
                        src={"/images/single_arrow.svg"}
                        alt={"pstake-logo"}
                        className="w-[160px]"
                      />
                    </div>
                    <div>
                      <div
                        className={"px-1 rounded-[8px] bg-[#FFFFFF0D] w-[254px] h-[50px] mx-2 flex flex-col justify-center items-center"}>
                        <img
                          src={item.data.logoUrl}
                          alt={"pstake-logo"}
                          className="w-[102px] h-[36px] mx-2 "
                        />
                      </div>
                    </div>
                    {item.data.child.length > 0 ?
                      <div className={"px-1"}>
                        <img
                          src={item.data.child.length > 1 ? "/images/double_arrow.svg" : "/images/single_arrow.svg"}
                          alt={"pstake-logo"}
                          className="w-[100px] h-[48px] mx-2 "
                        />
                      </div>
                      : null}
                    <div className={"px-1"}>
                      {
                        item.data.child.length > 0 ?
                          item.data.child.map((networkItem, nIndex) => (
                            <div key={nIndex} className={"flex items-center"}>
                              <div>
                                <img
                                  src={networkItem.logoUrl}
                                  alt={"pstake-logo"}
                                  className="w-[100px] h-[40px] mx-2 "
                                />
                              </div>
                              <div
                                className={`${nIndex + 1 !== item.data.child.length ? 'mb-2 ' : ''} rounded-[8px] x-1 bg-[#FFFFFF0D] border border-[#292929] w-[254px] h-[50px] mx-2 flex justify-center items-center`}>
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
                                <p className={"text-light-emphasis uppercase"}>{networkItem.poolComposition}</p>
                              </div>
                            </div>
                          ))
                          : null
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        <div className={"flex w-full justify-between"}>
          <div className={"border border-[#292929] rounded-lg text-center px-[32px] flex flex-1 items-center max-w-[662px] just"}>
            <p className={"text-[#ADADAD]"}>Trade Route support</p>
            <div className={"p-[14px] flex"}>
              <img
                src={"/images/cexs/bitget.png"}
                alt={"pstake-logo"}
                className="w-[130px] mx-2"
              />
              <img
                src={"/images/cexs/bitget.png"}
                alt={"pstake-logo"}
                className="w-[130px] px-[40px] border-x border-[#5B5B5B]"
              />
              <img
                src={"/images/cexs/bitget.png"}
                alt={"pstake-logo"}
                className="w-[106px] mx-2 "
              />
            </div>
          </div>
          <div className={"w-[426px] border border-[#292929] rounded-lg text-center flex justify-center items-center"}>
            <p className={"text-[#ADADAD]"}>pstake.finance</p>
          </div>
        </div>
      </div>
    </div>
);
};

export default EveryWhere;
