import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { fetchOsmosisPoolInfo } from "../../../actions/api";
import { useEffect } from "react";
import { ATOM_URL } from "../../../constants/config";
import Icon from "../../Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 10,
  },
};

const EcosystemSlider = ({ deviceType }) => {
  const [osmosisInfo, setOsmosisInfo] = useState({ tvl: 0 });
  useEffect(() => {
    const fetchApi = async () => {
      const [osmosis] = await Promise.all([fetchOsmosisPoolInfo()]);

      setOsmosisInfo(osmosis);
    };
    fetchApi();
  }, []);
  const list = [
    {
      name: "Osmosis",
      tag: "DEX",
      logoUrl: "/images/integrations/osmosis.svg",
      content: (
        <span className="d-block">
          Provide liquidity in the stkATOM/ATOM Stableswap pool to earn trading
          fees and $ATOM external incentives
        </span>
      ),
      primaryButtonText: "Swap",
      primaryButtonUrl: `https://frontier.osmosis.zone/?from=stkATOM&to=ATOM`,
      secondaryButtonText: "Add Liquidity",
      secondaryButtonUrl: "https://frontier.osmosis.zone/pool/886",
      tvl: (
        <>
          ${parseInt(osmosisInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      // apy: (
      //   <>
      //     <span>upto </span>0% <span>APY</span>
      //   </>
      // )
    },
  ];

  return (
    <div className="bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 max-w-[900px] mx-auto">
          Put your stkATOM to work in the Cosmos DeFi Ecosystem
        </h3>
        <Carousel
          ssr
          className="flex items-center justify-center"
          partialVisbile
          deviceType={deviceType}
          itemClass="!w-[420px]"
          responsive={responsive}
          autoPlay={false}
        >
          {list.slice(0, list.length).map((item, index) => {
            return item.name !== "Coming Soon" ? (
              <div key={index} className="h-auto">
                <div
                  className="bg-black-emphasis opacity-90 rounded-lg p-8
                relative w-full border border-solid border-[#2a2c31]"
                >
                  <div
                    className="absolute font-bold text-[12px] text-center
                   text-[#25252a] py-[10px] pr-[22px] pl-[14px] bg-white-full left-0
                   rounded-tr-[50px] rounded-br-[50px]"
                  >
                    <p>{item.tag}</p>
                  </div>
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
                    <p className="text-light-emphasis text-sm font-medium text-center leading-loose mb-4">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap justify-center mb-4">
                    <p className="text-green font-semibold text-3xl mx-2">
                      {item.apy}
                    </p>
                    <p className="text-green font-semibold text-3xl mx-2">
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
