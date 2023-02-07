import React from "react";
import useTranslation from "next-translate/useTranslation";
import { APR_DEFAULT } from "../../../utils/config";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import Button from "../../atoms/button/Button";
import { useApp } from "../../../context/appContext/AppContext";
import { useWindowSize } from "../../../customHooks/useWindowSize";
import Icon from "../../molecules/Icon";

const Networks = () => {
  const { t } = useTranslation("common");

  const { cosmosData, bnbData } = useApp();
  const { isMobile } = useWindowSize();
  const networkList = [
    {
      asset: "Cosmos",
      network: "cosmos",
      imageUrl: "/images/networks/atom.svg",
      apy: cosmosData!.apy === -1 ? APR_DEFAULT : cosmosData!.apy,
      buttonText: "Start Staking",
      buttonUrl: "/atom",
      hoverBg: "hover:bg-cosmosCard",
    },
    {
      asset: "BNB",
      network: "binance",
      imageUrl: "/images/networks/bnb.svg",
      apy: bnbData!.apy,
      buttonText: "Start Staking",
      buttonUrl: "/bnb",
      hoverBg: "hover:bg-bnbCard",
    },
    {
      asset: "Ethereum",
      network: "ethereum",
      imageUrl: "/images/networks/ethereum.svg",
      apy: t("ETH_APR"),
      buttonText: "Start Staking",
      buttonUrl: "https://eth.pstake.finance",
      hoverBg: "hover:bg-ethCard",
    },
    {
      asset: "Persistence",
      network: "ethereum",
      imageUrl: "/images/networks/persistence.svg",
      apy: "0",
      buttonText: "Withdraw Assets",
      buttonUrl: "https://app.pstake.finance/",
      hoverBg: "hover:bg-xprtCard",
    },
    {
      asset: "Cosmos",
      network: "ethereum",
      imageUrl: "/images/networks/atom.svg",
      apy: "0",
      buttonText: "Withdraw Assets",
      buttonUrl: "https://app.pstake.finance/",
      hoverBg: "hover:bg-cosmosCard",
    },
  ];
  return (
    <div className="bg-black-high aos-init aos-animate" data-aos="fade-up">
      <div className="sectionContainer py-[65px] md:py-[35px]">
        <p className="sectionTitle mb-4">{t("SUPPORTED_NETWORKS")}</p>
        <p className="sectionSubTitle m-auto">
          pSTAKE offers liquid staking for the following networks
        </p>
        <div className="pt-8">
          <div className="flex flex-wrap items-center justify-center">
            {networkList.slice(0, 2).map((item, index) => (
              <div
                className={`${item.hoverBg} p-8 bg-[#26262b] m-4 md:mx-2 min-w-[300px] 
                md:max-w-full md:min-w-full md:w-auto max-w-[500px] rounded-xl 
                md:flex md:items-center md:py-4 md:px-6
                 md:justify-between`}
                key={index}
              >
                <div className="mb-2 md:flex md:items-center md:m-0">
                  <div className={"text-center mb-2 md:m-0"}>
                    <img
                      src={item.imageUrl}
                      alt={item.asset}
                      className="w-[40px] h-[40px] m-auto"
                    />
                  </div>
                  <div className="md:px-4">
                    <h5
                      className="text-light-high text-lg font-semibold
                    leading-normal text-center md:text-base"
                    >
                      {item.asset}
                    </h5>
                    <h4
                      className="text-green text-lg font-semibold
                    leading-normal text-center md:text-sm"
                    >
                      {item.apy}% APY
                    </h4>
                  </div>
                </div>
                <ButtonLink
                  className={`w-full md:p-2 !py-2.5 md:text-sm md:p-0 md:w-auto md:bg-transparent`}
                  variant={"custom"}
                  href={item.buttonUrl}
                  scale="lg"
                  target={"_self"}
                  isDisabled={false}
                  customButtonClass={
                    "bg-[#8c8c8c4f] text-light-high text-[12px] transition ease-in-out duration-200 hover:bg-[#262626]"
                  }
                >
                  {isMobile ? (
                    <Icon
                      viewClass="dropDownIcon !w-[14px] ease-in duration-200 rotate-360
                group-hover:rotate-90 fill-[#ECECEC]"
                      icon="chevron"
                    />
                  ) : (
                    item.buttonText
                  )}
                </ButtonLink>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center pt-8 md:pt-2">
            {networkList.slice(2, networkList.length + 1).map((item, index) => (
              <div
                className={`${item.hoverBg} p-8 bg-[#26262b] m-4 md:mx-2 min-w-[300px] 
                md:max-w-full md:min-w-full md:w-automax-w-[500px] rounded-xl
                 md:flex md:items-center md:py-4 md:px-6
                 md:justify-between`}
                key={index}
              >
                <div className="mb-2 md:flex md:items-center md:m-0">
                  <div className={"text-center mb-2 md:m-0"}>
                    <img
                      src={item.imageUrl}
                      alt={item.asset}
                      className="w-[40px] h-[40px] m-auto"
                    />
                  </div>
                  <div className="md:px-4">
                    <h5
                      className="text-light-high text-lg font-semibold
                    leading-normal text-center md:text-base"
                    >
                      {item.asset}
                      <span className="text-light-emphasis text-xsm">
                        (ERC20)
                      </span>
                    </h5>
                    {item.network === "ethereum" &&
                    (item.asset === "Persistence" ||
                      item.asset === "Cosmos") ? (
                      <h4
                        className="text-light-mid text-xsm md:text-sm
                      font-medium leading-normal text-center"
                      >
                        (Deprecated)
                      </h4>
                    ) : (
                      <h4
                        className="text-green text-lg font-semibold
                    leading-normal text-center md:text-sm"
                      >
                        {item.apy}% APY
                      </h4>
                    )}
                  </div>
                </div>
                <div className="">
                  {item.network === "ethereum" &&
                  (item.asset === "Persistence" || item.asset === "Cosmos") ? (
                    <>
                      <div className={"text-center"}>
                        <a
                          className="inline-block text-light-high text-center text-xsm font-medium
                        leading-normal hover:underline hover:cursor-pointer mb-3 md:m-0"
                          href={item.buttonUrl}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {isMobile ? (
                            <Icon
                              viewClass="dropDownIcon !w-[14px] ease-in duration-200 rotate-360
                group-hover:rotate-90 fill-[#ECECEC]"
                              icon="chevron"
                            />
                          ) : (
                            item.buttonText
                          )}
                        </a>
                      </div>
                      <Button
                        className={`button w-full md:p-2 md:m-0 md:hidden md:text-sm after:content-['Migrate_to_Persistence']
                      hover:after:content-['Coming_soon']`}
                        variant={"custom"}
                        scale="lg"
                        isDisabled={false}
                        customButtonClass={
                          "bg-[#8c8c8c4f] text-light-high text-[12px] transition ease-in-out duration-200 hover:bg-[#262626]"
                        }
                      >
                        {""}
                      </Button>
                    </>
                  ) : (
                    <ButtonLink
                      className={`w-full md:p-2 !py-2.5 md:m-0 md:text-sm md:w-auto md:bg-transparent`}
                      variant={"custom"}
                      href={item.buttonUrl}
                      scale="lg"
                      isDisabled={false}
                      customButtonClass={
                        "mt-9 bg-[#8c8c8c4f] text-light-high text-[12px] transition ease-in-out duration-200 hover:bg-[#262626]"
                      }
                    >
                      {isMobile ? (
                        <Icon
                          viewClass="dropDownIcon !w-[14px] ease-in duration-200 rotate-360
                group-hover:rotate-90 fill-[#ECECEC]"
                          icon="chevron"
                        />
                      ) : (
                        item.buttonText
                      )}
                    </ButtonLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networks;
