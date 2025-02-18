import React from "react";
import { useTranslation } from "next-export-i18n";

const featuresList = [
  {
    title: `Minimize Risk, Maximize Returns`,
    description:
      "YBTC is staked directly on the Bitcoin Network, helping institutions reduce trust assumptions and smart contract risks.",
    image: "/images/institutions/minimize-risks.svg",
  },
  {
    title: "Retain Full Custody",
    description:
      "Our self-custody solution is designed for minimal friction and seamless adoption, allowing you to hold your own keys",
    image: "/images/institutions/retain-full-custody.svg",
  },
  {
    title: "Interoperable Across Chains",
    description:
      "Easily move YBTC across EVM-compatible blockchains, Ethereum Layer 2s, and Bitcoin Layer 2s — powered by LayerZero’s cross-chain infrastructure.",
    image: "/images/institutions/interoperable.svg",
  },
  {
    title: "Leverage BTCFI Opportunities",
    description:
      "Generate additional yields through re-staking, liquidity farming, and DeFi integrations with partners like Pell and Satlayer.",
    image: "/images/institutions/leverage-btcfi-opportunities.svg",
  },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="sectionContainer py-[40px] md:py-[40px]">
      <h2 className="text-[40px] md:text-[32px] text-center font-bold mb-[60px] md:mb-[40px] text-[#FEFEFE]">
        Institutional Bitcoin Staking
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1B1B1B] rounded-xl flex flex-col hover:border hover:border-[#EE972C] border border-[#1B1B1B] transition-all overflow-hidden"
          >
            <div className="w-full h-[240px] bg-[#0F0F0F]">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[20px] h-[60px] font-semibold mb-4 text-[#FEFEFE]">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#E0E0E0] leading-[21px] font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
