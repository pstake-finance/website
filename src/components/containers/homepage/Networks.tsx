import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import useTranslation from "next-translate/useTranslation";
import {
  APR_DEFAULT,
  PSTAKE_APP_STKETH_URL,
  PSTAKE_APP_URL,
} from "../../../constants/config";
import Link from "next/link";
import { getAPY } from "../../../actions/api";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import Button from "../../atoms/button/Button";

const Networks = () => {
  const { t } = useTranslation("common");

  const [cosmosApy, setCosmosApy] = useState(APR_DEFAULT);

  const networkList = [
    {
      asset: "Cosmos",
      network: "cosmos",
      imageUrl: "/images/networks/atom.svg",
      apy: cosmosApy === -1 ? APR_DEFAULT : cosmosApy.toFixed(2),
      buttonText: "Start Staking",
      buttonUrl: "/atom",
      hoverBg: "hover:bg-cosmosCard",
    },
    {
      asset: "BNB",
      network: "binance",
      imageUrl: "/images/networks/bnb.svg",
      apy: t("BNB_APY"),
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

  useEffect(() => {
    const fetchValues = async () => {
      setCosmosApy(await getAPY());
    };
    fetchValues();
  }, []);
  return (
    <div className="bg-black-high">
      <div className="sectionContainer py-[100px]">
        <p className="sectionTitle">{t("SUPPORTED_NETWORKS")}</p>
        <p className="sectionSubTitle m-auto">
          pSTAKE offers liquid staking for the following networks
        </p>
        <div className="pt-8">
          <div className="flex flex-wrap items-center justify-center">
            {networkList.slice(0, 2).map((item, index) => (
              <div
                className={`${item.hoverBg} p-8 bg-[#26262b] m-4 min-w-[300px] max-w-[500px] rounded-xl`}
                key={index}
              >
                <div className="mb-2">
                  <div className={"text-center mb-2"}>
                    <img
                      src={item.imageUrl}
                      alt={item.asset}
                      className="w-[40px] h-[40px] m-auto"
                    />
                  </div>
                  <div>
                    <h5 className="text-light-high text-lg font-semibold leading-normal text-center">
                      {item.asset}
                    </h5>
                    <h4 className="text-green text-lg font-semibold leading-normal text-center">
                      {item.apy}% APY
                    </h4>
                  </div>
                </div>
                <ButtonLink
                  className={`w-full md:py-2 !py-2.5 md:text-sm`}
                  variant={"custom"}
                  href={item.buttonUrl}
                  scale="lg"
                  target={"_self"}
                  isDisabled={false}
                  customButtonClass={
                    "bg-[#8c8c8c4f] text-light-high text-[12px] transition ease-in-out duration-200 hover:bg-[#262626]"
                  }
                >
                  {item.buttonText}
                </ButtonLink>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center pt-8">
            {networkList.slice(2, networkList.length + 1).map((item, index) => (
              <div
                className={`${item.hoverBg} p-8 bg-[#26262b] m-4 min-w-[300px] max-w-[500px] rounded-xl`}
                key={index}
              >
                <div className="mb-2">
                  <div className={"text-center mb-2"}>
                    <img
                      src={item.imageUrl}
                      alt={item.asset}
                      className="w-[40px] h-[40px] m-auto"
                    />
                  </div>
                  <div>
                    <h5 className="text-light-high text-lg font-semibold leading-normal text-center">
                      {item.asset}
                      <span className="text-light-emphasis text-xsm">
                        (ERC20)
                      </span>
                    </h5>
                    {item.network === "ethereum" &&
                    (item.asset === "Persistence" ||
                      item.asset === "Cosmos") ? (
                      <h4 className="text-light-mid text-xsm font-medium leading-normal text-center">
                        (Deprecated)
                      </h4>
                    ) : (
                      <h4 className="text-green text-lg font-semibold leading-normal text-center">
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
                        leading-normal hover:underline hover:cursor-pointer mb-3"
                          href={item.buttonUrl}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                      <Button
                        className={`button w-full md:py-2 md:text-sm after:content-['Migrate_to_Persistence']
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
                      className={`dropDownButton [.is-sticky_&]:bg-red
                       w-full md:py-2 !py-2.5 md:text-sm`}
                      variant={"custom"}
                      href={item.buttonUrl}
                      scale="lg"
                      isDisabled={false}
                      customButtonClass={
                        "mt-9 bg-[#8c8c8c4f] text-light-high text-[12px] transition ease-in-out duration-200 hover:bg-[#262626]"
                      }
                    >
                      {item.buttonText}
                    </ButtonLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*<div className="row justify-content-center">*/}
        {/*  <Card className="col-md-4 col-xs-6">*/}
        {/*    <Card.Body className="cosmos m-auto justify-content-center">*/}
        {/*      <div className="text-center">*/}
        {/*        <img*/}
        {/*          className="pt-4 pb-4 logo"*/}
        {/*          src={"/images/networks/atom.svg"}*/}
        {/*          title="Asset"*/}
        {/*          alt="Asset"*/}
        {/*        />*/}
        {/*        <Card.Title>{t("COSMOS")}</Card.Title>*/}
        {/*      </div>*/}
        {/*      <div className="apr text-center m-0">*/}
        {/*        <h1 className="main-text">*/}
        {/*          ~{cosmosApy === -1 ? APR_DEFAULT : cosmosApy.toFixed(2)}%{" "}*/}
        {/*          <span className="helper-text">{t("APY")}</span>*/}
        {/*        </h1>*/}
        {/*        <Link href="/atom">*/}
        {/*          <p className="link">{t("STAKE_NOW")}</p>*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*  <Card className="col-md-4 col-xs-6">*/}
        {/*    <Card.Body className="bnb m-auto justify-content-center">*/}
        {/*      <div className="text-center">*/}
        {/*        <img*/}
        {/*          className="pt-4 pb-4 logo"*/}
        {/*          src={"/images/networks/bnb.svg"}*/}
        {/*          title="Asset"*/}
        {/*          alt="Asset"*/}
        {/*        />*/}
        {/*        <Card.Title>{t("BNB")}</Card.Title>*/}
        {/*      </div>*/}
        {/*      <div className="apr text-center m-0">*/}
        {/*        <h1 className="main-text">*/}
        {/*          {t("BNB_APY")} <span className="helper-text">{t("APY")}</span>*/}
        {/*        </h1>*/}
        {/*        <Link href="/bnb">*/}
        {/*          <p className="link">{t("STAKE_NOW")}</p>*/}
        {/*        </Link>*/}
        {/*      </div>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*</div>*/}
        {/*<div className="row justify-content-center">*/}
        {/*  <Card className="col-md-4  col-xs-6">*/}
        {/*    <Card.Body className="ethereum m-auto justify-content-center">*/}
        {/*      <div className="text-center">*/}
        {/*        <img*/}
        {/*          className="pt-4 pb-4 logo"*/}
        {/*          src={"/images/networks/ethereum.svg"}*/}
        {/*          title="Asset"*/}
        {/*          alt="Asset"*/}
        {/*        />*/}
        {/*        <Card.Title>{t("ETHEREUM")}</Card.Title>*/}
        {/*        <span className="helper-text">{t("(ERC20)")}</span>*/}
        {/*      </div>*/}
        {/*      <div className="apr text-center m-0">*/}
        {/*        <h1 className="main-text">*/}
        {/*          {t("ETH_APR")} <span className="helper-text">{t("APY")}</span>*/}
        {/*        </h1>*/}
        {/*        <a*/}
        {/*          href={PSTAKE_APP_STKETH_URL}*/}
        {/*          rel="noopener noreferrer"*/}
        {/*          target="_blank"*/}
        {/*        >*/}
        {/*          <p className="link">{t("STAKE_NOW")}</p>*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*  <Card className="col-md-4  col-xs-6">*/}
        {/*    <Card.Body className="persistence m-auto justify-content-center">*/}
        {/*      <div className="text-center">*/}
        {/*        <img*/}
        {/*          className="pt-4 pb-4 logo"*/}
        {/*          src={"/images/networks/persistence.svg"}*/}
        {/*          title="Asset"*/}
        {/*          alt="Asset"*/}
        {/*        />*/}
        {/*        <Card.Title>*/}
        {/*          {t("PERSISTENCE")}&nbsp;*/}
        {/*          <span className="helper-text font-weight-normal">*/}
        {/*            {t("(ERC20)")}*/}
        {/*          </span>*/}
        {/*        </Card.Title>*/}
        {/*        <span className="helper-text">(Deprecated)</span>*/}
        {/*      </div>*/}
        {/*      <div className="apr text-center m-0">*/}
        {/*        <h1 className="main-text">*/}
        {/*          {t("XPRT_APR")}{" "}*/}
        {/*          <span className="helper-text">{t("APY")}</span>*/}
        {/*        </h1>*/}
        {/*        <a*/}
        {/*          href={PSTAKE_APP_URL}*/}
        {/*          rel="noopener noreferrer"*/}
        {/*          target="_blank"*/}
        {/*        >*/}
        {/*          <p className="link">{t("WITHDRAW_ASSETS")}</p>*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*  <Card className="col-md-4 col-xs-6">*/}
        {/*    <Card.Body className="cosmos m-auto justify-content-center">*/}
        {/*      <div className="text-center">*/}
        {/*        <img*/}
        {/*          className="pt-4 pb-4 logo"*/}
        {/*          src={"/images/networks/atom.svg"}*/}
        {/*          title="Asset"*/}
        {/*          alt="Asset"*/}
        {/*        />*/}
        {/*        <Card.Title>*/}
        {/*          {t("COSMOS")}&nbsp;*/}
        {/*          <span className="helper-text font-weight-normal">*/}
        {/*            {t("(ERC20)")}*/}
        {/*          </span>*/}
        {/*        </Card.Title>*/}
        {/*        <span className="helper-text">(Deprecated)</span>*/}
        {/*      </div>*/}
        {/*      <div className="apr text-center m-0">*/}
        {/*        <h1 className="main-text">*/}
        {/*          {t("ATOM_APR")}{" "}*/}
        {/*          <span className="helper-text">{t("APY")}</span>*/}
        {/*        </h1>*/}
        {/*        <a*/}
        {/*          href={PSTAKE_APP_URL}*/}
        {/*          rel="noopener noreferrer"*/}
        {/*          target="_blank"*/}
        {/*        >*/}
        {/*          <p className="link">{t("WITHDRAW_ASSETS")}</p>*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Networks;
