import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Card from "react-bootstrap/Card";
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

const EcosystemSlider = ({
  deviceType,
  openLeverageInfo,
  beefyInfo,
  alpacaInfo,
  wombatInfo,
  shieldInfo,
  thenaInfo,
}) => {
  const list = [
    {
      name: "PancakeSwap",
      tag: "DEX",
      logoUrl: "/images/integrations/pancake.svg",
      content: (
        <span className="mb-6 block">
          Provide liquidity in the stkBNB/BNB liquidity pool to earn trading
          fees and $CAKE rewards
        </span>
      ),
      primaryButtonText: "Add liquidity",
      primaryButtonUrl: `https://pancakeswap.finance/add/${process.env.NEXT_PUBLIC_STK_BNB_CONTRACT_ADDRESS}/BNB`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl:
        "https://youtube.com/clip/UgkxCZAHN3sTY8sH3FD_UoKvYZns6oZBFaza",
      tvl: (
        <span className="invisible">
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </span>
      ),
      apy: "",
    },
    {
      name: "Thena",
      tag: "DEX",
      logoUrl: "/images/integrations/thena.svg",
      content: (
        <span className="mb-6 block">
          Provide liquidity in the stkBNB/BNB liquidity pool to earn trading
          fees and $THE rewards
        </span>
      ),
      primaryButtonText: "Deposit",
      primaryButtonUrl: `https://www.thena.fi/liquidity`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl:
        "https://twitter.com/pSTAKE_stkBNB/status/1613241767469670400",
      tvl: (
        <>
          ${parseInt(thenaInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: "",
    },
    {
      name: "Wombat",
      tag: "DEX",
      logoUrl: "/images/integrations/wombat.svg",
      content: (
        <span className="mb-6 block">
          Provide single sided stkBNB liquidity to earn trading fees, $PSTAKE
          and $WOM emissions
        </span>
      ),
      primaryButtonText: "Add liquidity",
      primaryButtonUrl: "https://app.wombat.exchange/pool",
      secondaryButtonText: "Learn More",
      secondaryButtonUrl:
        "https://youtube.com/clip/UgkxCZAHN3sTY8sH3FD_UoKvYZns6oZBFaza",
      tvl: (
        <>
          ${parseInt(wombatInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {wombatInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "Beefy",
      tag: "Yield Farming",
      logoUrl: "/images/integrations/beefy.svg",
      content:
        "Earn compound interest on stkBNB/BNB pool on Pancakeswap by depositing BNB or stkBNB in Beefy vault",
      primaryButtonText: "Start farming",
      primaryButtonUrl: "https://app.beefy.finance/vault/cakev2-wbnb-stkbnb",
      secondaryButtonText: "Learn More",
      secondaryButtonUrl: "https://www.youtube.com/watch?v=UgiEqmKSOWI",
      tvl: (
        <>
          ${parseInt(beefyInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {beefyInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "OpenLeverage",
      tag: "Margin Trading",
      logoUrl: "/images/integrations/leverage.svg",
      content:
        "Earn leveraged staking yields on your stkBNB by borrowing BNB upto 6x leverage and converting it to stkBNB",
      primaryButtonText: "Leveraged Staking",
      primaryButtonUrl: `https://bnb.openleverage.finance/app/trade/pairs/345`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl: "https://www.youtube.com/watch?v=UgiEqmKSOWI",
      tvl: (
        <>
          ${parseInt(openLeverageInfo.tvl).toLocaleString()}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          <span className="text-[12px] text-[#70747c]">upto </span>
          {openLeverageInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
    {
      name: "Midas Capital",
      tag: "Borrowing/Lending",
      logoUrl: "/images/integrations/midas.svg",
      content: (
        <span className="mb-6 block ">
          Deposit stkBNB/BNB/stkBNB-BNB LP token as collateral to borrow BNB
        </span>
      ),
      primaryButtonText: "Borrow",
      primaryButtonUrl: `https://app.midascapital.xyz/56/pool/11`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl: "",
      tvl: (
        <span className="invisible">
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </span>
      ),
      apy: "",
    },
    {
      name: "Shield",
      tag: "Options",
      logoUrl: "/images/integrations/shield.svg",
      content: (
        <span className="mb-6 block ">
          Deposit stkBNB to an M-vault option pool and earn stable rewards
        </span>
      ),
      primaryButtonText: "Deposit",
      primaryButtonUrl: `https://app.shieldex.io/dds.html#/vault`,
      secondaryButtonText: "Learn More",
      secondaryButtonUrl: "",
      tvl: (
        <>
          ${shieldInfo.tvl}{" "}
          <span className="text-[12px] text-[#70747c]">TVL</span>
        </>
      ),
      apy: (
        <>
          {shieldInfo.apy}%{" "}
          <span className="text-[12px] text-[#70747c]">APY</span>
        </>
      ),
    },
  ];

  return (
    <div className="bg-black-high" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <h3 className="sectionTitle mb-8 max-w-[900px] mx-auto">
          Put your stkBNB to work in the <br /> BNB DeFi Ecosystem{" "}
        </h3>
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="pr-6"
          responsive={responsive}
          autoPlay={false}
        >
          {list.slice(0, list.length).map((item, index) => {
            return (
              <div key={index} className="h-[430px] md:h-auto">
                <div
                  className="bg-black-emphasis opacity-90 rounded-lg p-8
                relative w-full border border-solid border-[#2a2c31] h-full"
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
                      width={"58px"}
                    />
                  </div>
                  <div className="content">
                    <p className="font-bold text-base text-light-full text-center mb-4">
                      {item.name}
                    </p>
                    <p
                      className="text-light-emphasis text-sm font-medium
                    text-center leading-loose md:mb-3 mb-6 md:pb-2 pb-4"
                    >
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
                  <div className="flex md:block items-center flex-wrap justify-center">
                    <ButtonLink
                      className={`w-[170px] flex-1 mr-2 text-sm md:mb-2 md:mx-auto`}
                      variant={"custom"}
                      href={item.primaryButtonUrl}
                      scale="md"
                      customButtonClass="bg-bnbPrimary text-dark-high"
                      target={"_blank"}
                      isDisabled={false}
                      focusEffect={true}
                    >
                      {item.primaryButtonText}
                    </ButtonLink>
                    <ButtonLink
                      className={`w-[170px] flex-1 ml-2 text-sm md:mx-auto md:mb-2 ${
                        item.name === "Wombat" ||
                        item.name === "Midas Capital" ||
                        item.name === "Shield"
                          ? "pointer-events-none"
                          : ""
                      }`}
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
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default EcosystemSlider;
