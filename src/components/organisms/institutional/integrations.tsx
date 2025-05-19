import React from "react";
import { useTranslation } from "next-export-i18n";

const Integrations = () => {
  const { t } = useTranslation();

  const integrationsList = [
    {
      name: "PELL",
      description: t("INSTITUTIONAL_INTEGRATIONS_PELL_DESCRIPTION"),
      image: "/images/institutions/integrations/pell.svg",
      link: "https://pell.network/",
      width: "130px",
      height: "42px",
    },
    {
      name: "SATLAYER",
      description: t("INSTITUTIONAL_INTEGRATIONS_SATLAYER_DESCRIPTION"),
      image: "/images/institutions/integrations/satlayer.svg",
      link: "https://satlayer.xyz/",
      width: "220px",
      height: "44px",
    },
    {
      name: "Binance Smart Chain",
      description: t("INSTITUTIONAL_INTEGRATIONS_BINANCE_DESCRIPTION"),
      image: "/images/institutions/integrations/binance.svg",
      link: "https://www.bnbchain.org/",
      width: "336px",
      height: "32px",
    },
    {
      name: "BASE",
      description: t("INSTITUTIONAL_INTEGRATIONS_BASE_DESCRIPTION"),
      image: "/images/institutions/integrations/base.svg",
      link: "https://base.org",
      width: "109px",
      height: "29px",
    },
    {
      name: "Corn",
      description: t("INSTITUTIONAL_INTEGRATIONS_CORN_DESCRIPTION"),
      image: "/images/institutions/integrations/corn.svg",
      link: "https://usecorn.com/",
      width: "300px",
      height: "32px",
    },
    {
      name: "Ethereum",
      description: t("INSTITUTIONAL_INTEGRATIONS_ETHEREUM_DESCRIPTION"),
      image: "/images/institutions/integrations/ethereum.svg",
      link: "https://ethereum.org",
      width: "138px",
      height: "34px",
    },
    {
      name: "Soneium",
      description: t("INSTITUTIONAL_INTEGRATIONS_SONEIUM_DESCRIPTION"),
      image: "/images/institutions/integrations/soneium.svg",
      link: "https://soneium.org",
      width: "147px",
      height: "32px",
    },
  ];

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
      <div className={`mb-6`}>
        <img
          src={integration.image}
          alt={integration.name}
          // className="h-full object-contain"
          width={integration.width}
          height={integration.height}
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
        {t("INSTITUTIONAL_INTEGRATIONS_TITLE")}
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
        {t("INSTITUTIONAL_INTEGRATIONS_MORE_COMING_SOON")}
      </p>
    </div>
  );
};

export default Integrations;
