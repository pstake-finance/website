import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { useState } from "react";
import {
  fetchCrescentPoolInfo,
  fetchDexterPoolInfo,
  fetchOsmosisPoolInfo,
  fetchShadeCollateral,
  fetchShadeInfo,
  fetchUmeeInfo,
} from "../../../pages/api/api";
import { useEffect } from "react";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const EcosystemSlider = ({ deviceType }) => {
  const [osmosisInfo, setOsmosisInfo] = useState({ tvl: 0, apy: 0 });
  const [crescentInfo, setCrescentInfo] = useState({ tvl: 0, apy: 0 });
  const [dexterInfo, setDexterInfo] = useState({ tvl: 0, fees: 0 });
  const [shadeInfo, setShadeInfo] = useState({
    stkATOMSilk: { apy: 0, tvl: 0 },
    atomStkAtom: { apy: 0, tvl: 0 },
  });
  const [shadeLendingInfo, setShadeLendingInfo] = useState({
    tvl: 0,
    apy: 0,
  });
  const [umeeInfo, setUmeeInfo] = useState({ borrow_apy: 0, total_supply: 0 });

  useEffect(() => {
    const fetchApi = async () => {
      const [osmosis, crescent, dexter, umee, shade, shadeLending] =
        await Promise.all([
          fetchOsmosisPoolInfo(),
          fetchCrescentPoolInfo(),
          fetchDexterPoolInfo(),
          fetchUmeeInfo(),
          fetchShadeInfo(),
          fetchShadeCollateral(),
        ]);
      setOsmosisInfo(osmosis);
      setCrescentInfo(crescent);
      setDexterInfo(dexter);
      setUmeeInfo(umee);
      setShadeLendingInfo(shadeLending),
        setShadeInfo({
          stkATOMSilk: {
            apy: shade.stkATOMSilk.apy,
            tvl: shade.stkATOMSilk.tvl,
          },
          atomStkAtom: {
            apy: shade.atomStkAtom.apy,
            tvl: shade.atomStkAtom.tvl,
          },
        });
    };
    fetchApi();
  }, []);
  const list = [
    {
      name: "Osmosis",
      tag: "DEX",
      logoUrl: "/images/integrations/osmosis.svg",
      content: (
        <span className="block">
          Provide liquidity in the stkATOM/ATOM Stableswap pool to earn trading
          fees and $ATOM external incentives
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://app.osmosis.zone/?from=stkATOM&to=ATOM`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl: "https://app.osmosis.zone/pool/886",
      tvl: (
        <>
          ${parseInt(osmosisInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {osmosisInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "Crescent",
      tag: "DEX",
      logoUrl: "/images/integrations/crescent.svg",
      content: (
        <span className="block mb-4">
          Provide liquidity in the stkATOM/ATOM Ranged pool to farm $ATOM & $CRE
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://app.crescent.network/swap?from=stkatom&to=atom`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl:
        "https://app.crescent.network/farm?open_modal_pool_id=57",
      tvl: (
        <>
          ${parseInt(crescentInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {crescentInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "Dexter",
      tag: "DEX",
      logoUrl: "/images/integrations/dexter.svg",
      content: (
        <span className="block">
          {" "}
          Provide liquidity in the stkATOM/ATOM Metastable pool to earn trading
          fees and $ATOM, $stkATOM, & $XPRT external incentives
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://app.dexter.zone/`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl:
        "https://app.dexter.zone/pools/persistence1335rlmhujm0gj5e9gh7at9jpqvqckz0mpe4v284ar4lw5mlkryzszkpfrs",
      tvl: (
        <>
          ${parseInt(dexterInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {dexterInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "Umee",
      tag: "Borrowing/Lending",
      logoUrl: "/images/integrations/umee.svg",
      content: (
        <span className="block">
          {" "}
          Provide liquidity in the stkATOM/ATOM Metastable pool to earn trading
          fees and $ATOM, $stkATOM, & $XPRT external incentives
        </span>
      ),
      primaryButtonText: "Add Collateral",
      primaryButtonUrl: `https://app.umee.cc/#/markets`,
      secondaryButtonText: "Borrow",
      secondaryButtonUrl: "https://app.umee.cc/#/markets",
      tvl: (
        <>
          ${parseInt(umeeInfo.total_supply).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">Total Supplied</span>
        </>
      ),
      apy: (
        <>
          {umeeInfo.borrow_apy}%{" "}
          <span className="text-[12px] text-[#70747c]">Borrowing APY</span>
        </>
      ),
    },
    {
      name: "Shade",
      tag: "DEX",
      logoUrl: "/images/integrations/shade.svg",
      content: (
        <span className="block">
          {" "}
          Provide liquidity in the stkATOM/ATOM pool to earn extra rewards
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://app.shadeprotocol.io/swap?input=stkATOM&output=ATOM`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl: "https://app.shadeprotocol.io/swap/pools",
      tvl: (
        <>
          ${parseInt(shadeInfo.atomStkAtom.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">Total Supplied</span>
        </>
      ),
      apy: (
        <>
          {shadeInfo.atomStkAtom.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APR</span>
        </>
      ),
    },
    {
      name: "Shade",
      tag: "DEX",
      logoUrl: "/images/integrations/shade.svg",
      content: (
        <span className="block">
          {" "}
          Provide liquidity in the stkATOM/SILK pool to earn extra rewards
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://app.shadeprotocol.io/swap?input=stkATOM&output=SILK`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl: "https://app.shadeprotocol.io/swap/pools",
      tvl: (
        <>
          ${parseInt(shadeInfo.stkATOMSilk.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">Total Supplied</span>
        </>
      ),
      apy: (
        <>
          {shadeInfo.stkATOMSilk.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APR</span>
        </>
      ),
    },
    {
      name: "Shade",
      tag: "Borrowing/Lending",
      logoUrl: "/images/integrations/shade.svg",
      content: <span className="block"> stkATOM collateral</span>,
      primaryButtonText: "Add Collateral",
      primaryButtonUrl: `https://app.shadeprotocol.io/borrow`,
      secondaryButtonText: "Borrow",
      secondaryButtonUrl: "https://app.shadeprotocol.io/borrow",
      tvl: (
        <>
          ${parseInt(shadeLendingInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">Total Supplied</span>
        </>
      ),
      apy: (
        <>
          {shadeLendingInfo.fees}%{" "}
          <span className="text-[12px] text-[#70747c]">Fee</span>
        </>
      ),
    },
  ];

  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 max-w-[900px] mx-auto">
          Put your stkATOM to work in the Cosmos DeFi Ecosystem
        </h3>
        <Carousel
          ssr
          className={`flex items-center ${
            list.length <= 2 ? "-md:justify-center" : ""
          }`}
          partialVisbile
          deviceType={deviceType}
          itemClass="pr-6"
          responsive={responsive}
          autoPlay={false}
        >
          {list.slice(0, list.length).map((item, index) => {
            return item.name !== "Coming Soon" ? (
              <div key={index} className="h-[430px] lg:h-auto">
                <div
                  className="bg-black-emphasis opacity-90 rounded-lg p-8
                relative w-full border border-solid border-[#2a2c31] h-full flex flex-col justify-between"
                >
                  <div
                    className="absolute font-bold text-[12px] text-center
                   text-[#25252a] py-[10px] pr-[22px] pl-[14px] bg-white-full left-0
                   rounded-tr-[50px] rounded-br-[50px]"
                  >
                    <p>{item.tag}</p>
                  </div>
                  <div>
                    <div className="mt-6">
                      <img
                        className="py-4 w-[58px] mx-auto"
                        src={item.logoUrl}
                        title="Asset"
                        alt="Asset"
                      />
                    </div>
                    <div className="content">
                      <p className="font-bold text-base text-light-full text-center mb-4">
                        {item.name}
                      </p>
                      <p
                        className="text-light-emphasis text-sm font-medium
                    text-center leading-loose md:pb-2 pb-4"
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap justify-center mb-4">
                      <p className="text-green font-semibold text-3xl mx-2 lg:text-lg">
                        {item.apy}
                      </p>
                      <p className="text-green font-semibold text-3xl mx-2 lg:text-lg">
                        {item.tvl}
                      </p>
                    </div>
                    <div className="flex items-center flex-wrap justify-center">
                      <ButtonLink
                        className={`w-[170px] flex-1 mr-2 md:text-sm`}
                        variant={"custom"}
                        href={item.primaryButtonUrl}
                        scale="md"
                        customButtonClass="bg-[#5064fb] text-light-high"
                        target={"_blank"}
                        isDisabled={false}
                        focusEffect={true}
                      >
                        {item.primaryButtonText}
                      </ButtonLink>
                      <ButtonLink
                        className={`w-[170px] flex-1 ml-2 md:text-sm`}
                        variant={"custom"}
                        href={item.secondaryButtonUrl}
                        scale="md"
                        customButtonClass="bg-[#2e2e34] text-light-high"
                        target={"_blank"}
                        isDisabled={false}
                        focusEffect={true}
                      >
                        {item.secondaryButtonText}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="bg-black-emphasis opacity-90 rounded-lg p-8
                relative w-full border border-solid border-[#2a2c31]"
                >
                  <p className="font-bold text-base text-light-full text-center mb-4">
                    Coming soon!
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default EcosystemSlider;
