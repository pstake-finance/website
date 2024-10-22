import React, { useEffect } from "react";
import { useTranslation } from "next-export-i18n";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { numberFormat } from "../../../utils/helpers";
import Tooltip from "rc-tooltip";
import { shallow } from "zustand/shallow";
import { useAppStore } from "../../../store/store";
import Image from "next/image";

const netWorkList = [
  {
    logoUrl: "/images/networks/btc.svg",
    tooltip: "Bitcoin",
    link: "https://app.pstake.finance/",
  },
  {
    logoUrl: "/images/more.svg",
    tooltip: "ATOM, OSMO, XPRT",
    link: "https://app.pstake.finance/",
  },
];

const Banner = () => {
  const [fetchTokenPrices, fetchTVLList, tvlList, tokenPrices] = useAppStore(
    (state) => [
      state.fetchTokenPrices,
      state.fetchTVLList,
      state.tvlList,
      state.tokenPrices,
    ],
    shallow
  );

  //fetching pstake info
  useEffect(() => {
    const fetch = async () => {
      fetchTVLList();
      fetchTokenPrices();
    };
    fetch();
  }, []);

  const { t } = useTranslation("common");
  return (
    <div className="text-center aos-init aos-animate bg-[#141414] bg-cover bg-center bg-no-repeat ">
      <div className="pt-[140px] -2xl:pt-[200px] pb-[80px] max-w-[1200px] container mx-auto">
        <div className={"flex items-center"}>
          <div className={"flex-1"}>
            <h1 className="max-w-[616px] break-words text-[60px] leading-[74px] md:text-[20px] md:leading-[34px] lg:text-[72px] font-bold  text-left text-[#FCFCFC] mb-3">
              Democraticizing
              <br />
              Bitcoin Yields
            </h1>
            <h6 className="text-[16px] md:text-[14px] text-[#ADADAD] text-left mb-10 max-w-[600px] break-words">
              pSTAKE offers a secure and reliable BTC yield experience by
              partnering with the leading teams in the Bitcoin landscape.
            </h6>
          </div>
          <div className={"w-[533px]"}>
            <Image
              src={"/images/ecosystem-hero.svg"}
              alt={"hero"}
              width={533}
              height={415}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
