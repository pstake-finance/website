import React from "react";
import { useTranslation } from "next-export-i18n";

const integrationsList = [
  {
    name: "PELL",
    description:
      "A BTC restaking network offering an omnichain decentralized validated service (DVS) network, enabling businesses to secure decentralized applications via Proof of Stake without creating their own validator networks.",
    image: "/images/institutions/integrations/pell.svg",
    link: "https://pell.network/",
  },
  {
    name: "SATLAYER",
    description:
      "A Bitcoin Validated Service (BVS) solution built on Babylon, leveraging Bitcoin's economic collateral to secure decentralized applications and protocols, enhancing security across the crypto ecosystem.",
    image: "/images/institutions/integrations/satlayer.svg",
    link: "https://satlayer.xyz/",
  },
  {
    name: "Binance Smart Chain",
    description:
      "A parallel blockchain to Binance Chain, enabling smart contracts and EVM compatibility for dApps and token creation.",
    image: "/images/institutions/integrations/binance.svg",
    link: "https://www.bnbchain.org/",
  },
  {
    name: "BASE",
    description:
      "A secure, low-cost Ethereum Layer 2 network enhancing accessibility and affordability for on-chain transactions.",
    image: "/images/institutions/integrations/base.svg",
    link: "https://base.org",
  },
  {
    name: "Corn",
    description:
      "A DeFi project focused on yield farming and liquidity provision, rewarding users for staking tokens.",
    image: "/images/institutions/integrations/corn.svg",
    link: "https://usecorn.com/",
  },
  {
    name: "Ethereum",
    description:
      "A decentralized, open-source blockchain featuring smart contract functionality, enabling developers to build and deploy decentralized applications (dApps) across various industries.",
    image: "/images/institutions/integrations/ethereum.svg",
    link: "https://ethereum.org",
  },
  {
    name: "Soneium",
    description:
      "A blockchain-based platform aiming to revolutionize the entertainment industry by providing decentralized solutions for content creators and consumers, enhancing transparency and monetization.",
    image: "/images/institutions/integrations/soneium.svg",
    link: "https://soneium.org",
  },
];

const Integrations = () => {
  const { t } = useTranslation();

  // Split the list into rows
  const firstRow = integrationsList.slice(0, 2);
  const secondRow = integrationsList.slice(2, 5);
  const thirdRow = integrationsList.slice(5);

  const renderCard = (
    integration: (typeof integrationsList)[0],
    isLargeCard: boolean
  ) => (
    <a
      href={integration.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#1B1B1B] rounded-xl ${
        isLargeCard ? "p-8" : "p-6"
      } flex flex-col hover:border hover:border-[#EE972C] border border-[#1B1B1B] transition-all cursor-pointer`}
    >
      <div className={`mb-6 ${isLargeCard ? "h-[60px]" : "h-[40px]"}`}>
        <img
          src={integration.image}
          alt={integration.name}
          className="h-full object-contain"
        />
      </div>
      <p className={`${"text-[14px]"} text-[#D5D5D5] font-light`}>
        {integration.description}
      </p>
    </a>
  );

  return (
    <div className="sectionContainer py-[80px] md:py-[40px]">
      <h2 className="text-[40px] md:text-[32px] text-center font-bold mb-[60px] md:mb-[40px] text-[#FEFEFE]">
        Integrations with YBTC
      </h2>
      <div className="flex flex-col gap-6">
        {/* First row - 2 cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {firstRow.map((integration) => renderCard(integration, true))}
        </div>

        {/* Second row - 3 cards */}
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {secondRow.map((integration) => renderCard(integration, false))}
        </div>

        {/* Third row - 2 cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {thirdRow.map((integration) => renderCard(integration, true))}
        </div>
      </div>
      <p className="text-center text-[#D5D5D5] mt-8 text-[18px] italic">
        More Coming Soon
      </p>
    </div>
  );
};

export default Integrations;
