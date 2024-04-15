import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  SECURITY_AUDIT_URL,
  GUIDES_FAQ_URL,
  DOCS_URL,
  SNANPSHOT_URL,
  PSTAKE_FORUM_URL,
  PSTAKE_BRIDGE_URL,
  BSC_BRIDGE_URL,
  GUIDES_URL,
  STK_FAQ_URL,
  STK_BNB_DOCS_URL,
  DISCORD_URL,
  STK_BNB_SECURITY_AUDIT_URL,
  IMMUNEFI_WEB_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_SECURITY_AUDIT_URL,
  STK_ATOM_DOCS_URL,
  STK_ATOM_FAQ_URL,
  STKATOM_BLOG_URL,
  PSTAKE_REDDIT_URL,
  CREW3_URL,
  COSMOS_URL,
  PSTAKE_APP_URL,
  BNB_URL,
  ATOM_URL,
  IMMUNEFI_STK_ATOM_URL,
  ETH_URL,
  STK_ETH_TWITTER,
  STK_ETH_DOCS,
  STK_OSMO_FAQ_URL,
  STK_OSMO_SECURITY_AUDIT_URL,
  OSMOSIS_URL,
  STK_ODMO_TWITTER_URL,
  OSMO_URL,
  STK_DYDX_FAQ_URL,
  DYDX,
  PSTAKE_DISCORD,
  PSTAKE_MEDIUM_URL,
  GITHUB_URL,
} from "../../utils/config";
import { useTranslation } from "next-export-i18n";
import Icon from "./Icon";
import Dropdown from "../atoms/dropdown/Dropdown";
import ButtonLink from "../atoms/buttonLink/ButtonLink";
import { useOnClickOutside } from "../../customHooks/useOnClickOutside";
import { useWindowSize } from "../../customHooks/useWindowSize";
import Button from "../atoms/button/Button";
import OsmoHeader from "./osmo-header";
import GeofenceNotice from "./geofence-banner";
import { useAppStore } from "../../store/store";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/social_icons/${logoName}.svg`;
};

const socialList = [
  {
    name: "X (Formerly Twitter)",
    url: PSTAKE_TWITTER_URL,
    image: "twitter_full",
    text: "Follow pSTAKE Finance",
  },
  {
    name: "Telegram",
    url: PSTAKE_TELEGRAM_URL,
    image: "telegram_full",
    text: "Join the Community Chat",
  },
  {
    name: "Discard",
    url: PSTAKE_DISCORD,
    image: "discord_full",
    text: "Join Our Community",
  },
  {
    name: "Blogs",
    url: PSTAKE_MEDIUM_URL,
    image: "medium_full",
    text: "Learn about pSTAKE",
  },
  {
    name: "Github",
    url: GITHUB_URL,
    image: "github_full",
    text: "Contribute",
  },
  {
    name: "Community Forum",
    url: PSTAKE_FORUM_URL,
    image: "forum_full",
    text: "Join Discussions",
  },
];

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [banner, setBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [chevronChange, setChevronChange] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const { isMobile } = useWindowSize();

  const sideBarRef = useRef<HTMLUListElement>(null);
  useOnClickOutside(sideBarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    let body: any = document.getElementsByTagName("body")[0];
    body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
  }, []);

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let topbar = document.getElementById("is-sticky") as HTMLElement;
    let navBar = document.getElementById("nav-bar") as HTMLElement;
    if (top > 50) {
      setChevronChange(true);
      topbar.classList.add("topBar");
      navBar.classList.add("is-sticky");
    } else {
      setChevronChange(false);
      topbar.classList.remove("topBar");
      navBar.classList.remove("is-sticky");
    }
  };

  const closeBanner = () => {
    setBanner(false);
  };

  let auditURL;
  let docsURL;
  let faqURL;
  let twitterUrl;
  let appURL = "https://app.pstake.finance/";

  if (router.pathname === "/") {
    auditURL = SECURITY_AUDIT_URL;
    docsURL = DOCS_URL;
    faqURL = GUIDES_FAQ_URL;
    twitterUrl = PSTAKE_TWITTER_URL;
    appURL = PSTAKE_APP_URL;
  } else if (router.pathname === "/bnb") {
    auditURL = STK_BNB_SECURITY_AUDIT_URL;
    docsURL = STK_BNB_DOCS_URL;
    faqURL = STK_FAQ_URL;
    twitterUrl = STK_BNB_TWITTER_URL;
    appURL = BNB_URL;
  } else if (router.pathname === "/atom") {
    auditURL = STK_ATOM_SECURITY_AUDIT_URL;
    docsURL = STK_ATOM_DOCS_URL;
    faqURL = STK_ATOM_FAQ_URL;
    appURL = ATOM_URL;
    twitterUrl = STK_ATOM_TWITTER_URL;
  } else if (router.pathname === "/osmo") {
    auditURL = STK_OSMO_SECURITY_AUDIT_URL;
    docsURL = STK_ATOM_DOCS_URL;
    faqURL = STK_OSMO_FAQ_URL;
    appURL = OSMO_URL;
    twitterUrl = STK_ODMO_TWITTER_URL;
  } else if (router.pathname === "/dydx") {
    auditURL = STK_OSMO_SECURITY_AUDIT_URL;
    docsURL = STK_ATOM_DOCS_URL;
    faqURL = STK_DYDX_FAQ_URL;
    appURL = DYDX;
    twitterUrl = STK_ODMO_TWITTER_URL;
  } else if (router.pathname === "/eth/testnet") {
    auditURL = STK_ATOM_SECURITY_AUDIT_URL;
    docsURL = STK_ETH_DOCS;
    faqURL = STK_ATOM_FAQ_URL;
    appURL = ETH_URL;
    twitterUrl = STK_ETH_TWITTER;
  }

  const networks = [
    {
      optionName: "Cosmos",
      optionLink: "https://app.pstake.finance/cosmos?token=ATOM&chain=cosmos",
      imgUrl: "/images/networks/atom.svg",
      symbol: "ATOM",
    },
    {
      optionName: "Osmosis",
      optionLink: "https://app.pstake.finance/cosmos?token=OSMO&chain=osmosis",
      imgUrl: "/images/networks/osmo.svg",
      symbol: "OSMO",
    },
    {
      optionName: "Solana",
      optionLink: "",
      imgUrl: "/images/networks/sol.svg",
      symbol: "SOL",
    },
    {
      optionName: "Dydx",
      optionLink: "https://app.pstake.finance/cosmos?token=DYDX&chain=Dydx",
      imgUrl: "/images/networks/dydx.svg",
      symbol: "DYDX",
    },
    {
      optionName: "Stargaze",
      optionLink:
        "https://app.pstake.finance/cosmos?token=STARS&chain=Stargaze",
      imgUrl: "/images/stars.svg",
      symbol: "STARS",
    },
    // {
    //   optionName: "Agoric",
    //   optionLink:
    //     "https://staging.app.pstake.finance/cosmos?token=BLD&chain=persistence",
    //   imgUrl: "/images/networks/bld.svg",
    //   symbol: "BLD",
    // },
    {
      optionName: "Chihuahua",
      optionLink:
        "https://app.pstake.finance/cosmos?token=HUAHUA&chain=persistence",
      imgUrl: "/images/networks/huahua.svg",
      symbol: "HUAHUA",
    },
    {
      optionName: "BNB",
      optionLink: "https://app.pstake.finance/bnb",
      imgUrl: "/images/networks/bnb.svg",
      symbol: "BNB",
    },
  ];

  const learnList = [
    {
      optionName: t("SECURITY_AUDITS"),
      icon: "code",
      iconType: "stroke",
      optionLink: auditURL,
    },
    {
      optionName: t("GUIDES_TUTORIALS"),
      icon: "docs",
      optionLink: GUIDES_URL,
      iconType: "stroke",
    },
    {
      optionName: t("DOCS"),
      icon: "docs",
      iconType: "stroke",
      optionLink: docsURL,
    },
    {
      optionName: t("FAQs"),
      icon: "faq",
      optionLink: faqURL,
      iconType: "stroke",
    },
    {
      optionName: "Blogs",
      icon: "blog",
      iconType: "stroke",
      optionLink: "https://blog.pstake.finance/",
    },
  ];

  const communityList = [
    {
      optionName: t("FORUM"),
      optionLink: PSTAKE_FORUM_URL,
    },
    {
      optionName: t("GOVERNANCE"),
      optionLink: SNANPSHOT_URL,
    },
  ];

  const bridgeList = [
    {
      imgUrl: "/images/networks/ethereum.svg",
      optionName: "ETH to BSC bridge",
      optionLink: PSTAKE_BRIDGE_URL,
      subText: "Bridge PSTAKE to BSC Chain",
    },
    {
      imgUrl: "/images/networks/atom.svg",
      optionName: "ETH to Cosmos bridge",
      optionLink: BSC_BRIDGE_URL,
      subText: "Bridge PSTAKE to Persistence One",
    },
  ];

  const handleRouter = (link: string) => {
    router.push(link);
  };

  const fetchHuahuaValidatorsData = useAppStore(
    (state) => state.fetchHuahuaValidatorsData
  );

  useEffect(() => {
    fetchHuahuaValidatorsData(
      "https://rpc.core.persistence.one",
      "chihuahua-1",
      "Mainnet"
    );
  }, []);

  return (
    <React.Fragment>
      {!router.pathname.includes("/validators") ? (
        <div id="is-sticky" className="top-bar w-full fixed z-[100]">
          <GeofenceNotice />
          <nav
            className={`[.topBar_&]:bg-black-900 py-6 px-0 flex relative 
            items-center navbar navbar-expand-lg navbar-custom flex-column 
            md:flex-wrap justify-start ${
              router.pathname !== "/dydx" &&
              router.pathname !== "/stars" &&
              router.pathname !== "/osmo" &&
              router.pathname !== "/" &&
              router.pathname !== "/atom" &&
              router.pathname !== "/bnb" &&
              router.pathname !== "/eth" &&
              router.pathname !== "/eth/testnet"
                ? "bg-white-emphasis"
                : ""
            } ${router.pathname.split("/")[1]}
          `}
            id="nav-bar"
          >
            <div className="container max-w-[1300px] mx-auto px-4 flex flex-wrap items-center justify-between ">
              {router.pathname === "/" ? (
                <Link
                  className="bg-logoLight
                      [.is-sticky_&]:bg-logoLight bg-[length:150px] w-[150px] h-[36px] bg-no-repeat bg-center"
                  href="/"
                />
              ) : (
                <Link
                  className="bg-logoDark
                      [.is-sticky_&]:bg-logoLight  bg-[length:150px] w-[150px] h-[36px]  bg-no-repeat bg-center"
                  href="/"
                />
              )}

              <Button
                className={`${
                  router.pathname === "/"
                    ? "[.is-sticky_&]:bg-red"
                    : router.pathname === "/atom"
                    ? "[.is-sticky_&]:bg-atomPrimary"
                    : router.pathname === "/bnb"
                    ? "[.is-sticky_&]:bg-bnbPrimary"
                    : "[.is-sticky_&]:bg-red"
                } -md:hidden md:py-2 !py-2.5 md:text-sm`}
                variant={"custom"}
                onClick={toggleMenu}
                id={"toggleButton"}
                scale="lg"
                isDisabled={false}
                customButtonClass={`bg-black-800 text-light-high ${
                  router.pathname === "/bnb"
                    ? "[.is-sticky_&]:text-dark-high"
                    : router.pathname === "/"
                } text-[12px]`}
              >
                <Icon
                  viewClass="w-[14px] h-[14px] fill-[#fff]"
                  icon="hamberger"
                />
              </Button>
              <div
                className={`${
                  isOpen ? "md:transform-none" : "md:-translate-x-full"
                } md:fixed md:top-0 md:left-0 md:z-40 md:w-[200px] md:h-screen md:transition-transform 
               md:basis-auto md:basis-full md:grow menu-open
               `}
                id="navbarCollapse"
              >
                <div
                  className={`${
                    isOpen ? "md:fixed" : "md:relative"
                  } -md:hidden md:left-0 md:right-0 md:bottom-0
              md:top-0 md:h-full md:w-full md:bg-black-full md:opacity-50`}
                />
                <ul
                  className={`flex md:gap-10 items-center md:flex-row -md:ml-auto md:flex-col md:bg-[#141414]
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-2`}
                  id="mySidenav"
                  ref={sideBarRef}
                >
                  <li className="nav-item nav__menu-item md:hidden">
                    <Dropdown
                      className={`[.is-sticky_&]:text-[#D5D5D5] !block ${
                        router.pathname === "/" ? "text-[#D5D5D5]" : ""
                      }`}
                      dropDownVariant="custom"
                      dropDownButtonClass="md:hidden Capitalize !text-[18px] !py-2 !px-3 "
                      dropDownVariantBg="text-[18px] hover:!bg-[#C732381A] hover:text-light-high !font-normal"
                      dropdownLabel={isMobile ? "" : t("Networks")}
                      dropDownIcon={false}
                      dropdownType={"hover"}
                      dropDownContentClass="flex flex-wrap !bg-[#1B1B1B] translate-y-[1px] drop-shadow-md
                      round-md py-2 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0 !w-[420px] md:!w-[200px] md:!flex md:!justify-center md:flex-wrap"
                    >
                      {networks.map((item, index) => (
                        <a
                          className={`px-6 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap w-[50%] md:w-[100%] ${
                          item.optionLink === "" ? "pointer-events-none" : ""
                        }`}
                          key={index}
                          href={item.optionLink}
                          target={"_blank"}
                          rel="noopener noreferrer"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.optionName}
                            className={
                              "mr-4 md:mr-2 w-[28px] h-[28px] md:w-[20px] md:h-[20px]"
                            }
                          />
                          <span className={"flex flex-col md:hidden"}>
                            <span className="text-light-high font-medium leading-normal md:text-xsm flex items-center">
                              {item.optionName}
                              {item.optionLink === "" ? (
                                <span
                                  className={
                                    "border-[0.5px] rounded-[80px] px-2 py-1 font-medium text-[6px] border-[#0C8B8B] ml-2"
                                  }
                                >
                                  Coming Soon
                                </span>
                              ) : (
                                <Icon
                                  viewClass="dropDownIcon !w-[10px] ml-2"
                                  icon="chevroncolorchange"
                                />
                              )}
                            </span>
                            <span className="text-[#D5D5D5] text-xsm font-light leading-normal">
                              {item.symbol}
                            </span>
                          </span>
                        </a>
                      ))}
                    </Dropdown>
                  </li>
                  <li className="nav-item nav__menu-item">
                    <Dropdown
                      className={`[.is-sticky_&]:text-[#D5D5D5] -md:!block ${
                        router.pathname === "/" ? "text-[#D5D5D5]" : ""
                      }`}
                      dropDownVariant="custom"
                      dropDownButtonClass="md:hidden Capitalize !text-[18px] !py-2 !px-3 "
                      dropDownVariantBg="text-[18px] hover:!bg-[#C732381A] !font-normal"
                      dropdownLabel={isMobile ? "" : t("LEARN")}
                      dropDownIcon={false}
                      dropdownType={"hover"}
                      dropDownContentClass="!bg-[#1B1B1B] translate-y-[1px] drop-shadow-md
                      round-md py-2 md:visible md:relative md:opacity-100 md:p-0"
                    >
                      {learnList.map((item, index) => (
                        <a
                          className="px-6 md:px-3 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap"
                          href={item.optionLink}
                          key={index}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span
                            className={
                              "w-[40px] h-[40px] justify-center items-center flex rounded-full bg-[#FFFFFF0D]"
                            }
                          >
                            <Icon
                              viewClass={` !w-[22px] ${
                                item.iconType === "stroke"
                                  ? "stroke-[#C73238] fill-transparent"
                                  : "fill-[#C73238]"
                              }`}
                              icon={item.icon}
                            />
                          </span>
                          <span
                            className="ml-4 text-light-high text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
                          >
                            {item.optionName}
                          </span>
                        </a>
                      ))}
                    </Dropdown>
                  </li>

                  <li className="nav-item nav__menu-item md:hidden">
                    <Dropdown
                      className={`[.is-sticky_&]:text-[#D5D5D5] !block ${
                        router.pathname === "/" ? "text-[#D5D5D5]" : ""
                      }`}
                      dropDownVariant="custom"
                      dropDownButtonClass="md:hidden Capitalize !text-[18px] !py-2 !px-3 "
                      dropDownVariantBg="text-[18px] hover:!bg-[#C732381A] !font-normal"
                      dropdownLabel={isMobile ? "" : t("COMMUNITY")}
                      dropdownType={"hover"}
                      dropDownIcon={false}
                      dropDownContentClass="flex flex-wrap !bg-[#1B1B1B] translate-y-[1px] drop-shadow-md
                      round-md py-2 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0 !w-[520px] md:!w-[250px] md:!flex md:!justify-center md:flex-wrap"
                    >
                      <>
                        {socialList.map((item, index) => (
                          <a
                            className={`px-6 py-3 flex items-center md:py-3
                        hover:cursor-pointer text-light-high whitespace-nowrap w-[50%] md:w-[100%] ${
                          item.url === "" ? "pointer-events-none" : ""
                        }`}
                            key={index}
                            href={item.url}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <img
                              src={getLogoUrl(item.image)}
                              alt={item.name}
                              className={
                                "mr-4 md:mr-2 w-[28px] h-[28px] md:w-[20px] md:h-[20px]"
                              }
                            />
                            <span className={"flex flex-col md:hidden"}>
                              <span className="text-light-high font-medium leading-normal md:text-xsm flex items-center">
                                {item.name}
                                <Icon
                                  viewClass="dropDownIcon !w-[10px] ml-2"
                                  icon="chevroncolorchange"
                                />
                              </span>
                            </span>
                          </a>
                        ))}
                      </>
                    </Dropdown>
                  </li>
                  {router.pathname === "/" ? (
                    <li className="nav-item nav__menu-item md:hidden">
                      <Dropdown
                        className={`[.is-sticky_&]:text-[#D5D5D5] !block ${
                          router.pathname === "/" ? "text-[#D5D5D5]" : ""
                        }`}
                        dropDownVariant="custom"
                        dropDownButtonClass="md:hidden Capitalize !text-[18px] !py-2 !px-3 "
                        dropDownVariantBg="text-[18px] hover:!bg-[#C732381A] !font-normal"
                        dropdownLabel={isMobile ? "" : t("BRIDGE")}
                        dropDownIcon={false}
                        dropdownType={"hover"}
                        dropDownContentClass="!bg-[#1B1B1B] translate-y-[1px]  drop-shadow-md round-md py-4
                         py-2 md:visible md:relative md:opacity-100 !w-max md:!bg-transparent md:p-0"
                      >
                        {bridgeList.map((item, index) => (
                          <a
                            className={`px-6 py-2 flex items-center  hover:cursor-pointer text-light-high whitespace-nowrap ${
                              item.optionLink === ""
                                ? "pointer-events-none"
                                : ""
                            }`}
                            key={index}
                            href={item.optionLink}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <img
                              src={item.imgUrl}
                              alt={item.optionName}
                              className={
                                "mr-4 md:mr-2 w-[40px] h-[40px] md:w-[20px] md:h-[20px]"
                              }
                            />
                            <span className={"flex flex-col md:hidden"}>
                              <span className="text-light-high font-medium leading-normal md:text-xsm flex items-center">
                                {item.optionName}
                                <Icon
                                  viewClass="dropDownIcon !w-[10px] ml-2"
                                  icon="chevroncolorchange"
                                />
                              </span>
                              <span className={"text-[#D5D5D5] text-[12px]"}>
                                {item.subText}
                              </span>
                            </span>
                          </a>
                        ))}
                      </Dropdown>
                    </li>
                  ) : (
                    ""
                  )}

                  {router.pathname === "/bnb" || router.pathname === "/atom" ? (
                    <li className="nav-item md:w-full md:mb-2">
                      <ButtonLink
                        className={`${
                          router.pathname === "/bnb"
                            ? "[.is-sticky_&]:bg-bnbPrimary"
                            : " [.is-sticky_&]:bg-atomPrimary"
                        } dropDownButton w-full md:py-2 !py-2.5 md:text-sm`}
                        variant={"custom"}
                        href={
                          router.pathname === "/bnb"
                            ? IMMUNEFI_WEB_URL
                            : IMMUNEFI_STK_ATOM_URL
                        }
                        scale="lg"
                        target={"_blank"}
                        isDisabled={false}
                        customButtonClass={"bg-black-800 text-light-high"}
                      >
                        <div
                          className={`${
                            router.pathname === "/bnb"
                              ? "[.is-sticky_&]:bg-immunifyBlack"
                              : ""
                          } bg-immunefiWhite w-[90px] h-[18px] bg-no-repeat bg-center`}
                        />
                      </ButtonLink>
                    </li>
                  ) : (
                    ""
                  )}

                  <li className="nav-item md:w-full ml-2.5 md:ml-0 md:mb-2">
                    {router.pathname !== "/" ? (
                      <ButtonLink
                        className={`dropDownButton w-full md:py-2 !py-2.5 md:text-sm`}
                        variant={"custom"}
                        href={appURL}
                        scale="lg"
                        target={"_blank"}
                        isDisabled={false}
                        customButtonClass={`${
                          router.pathname === "/bnb"
                            ? "bg-bnbPrimary"
                            : router.pathname === "/atom"
                            ? "bg-atomPrimary"
                            : router.pathname === "/osmo"
                            ? "bg-osmoPrimaryButton text-light-high"
                            : router.pathname === "/dydx"
                            ? "bg-dydxPrimary text-light-high"
                            : "bg-black-800 text-light-high"
                        } ${
                          router.pathname === "/bnb"
                            ? "[.is-sticky_&]:text-dark-high"
                            : router.pathname === "/"
                        } text-[12px]`}
                      >
                        <span className="nav-link pophover tooltip-multiline app-btn uppercase">
                          Liquid Stake Now
                        </span>
                      </ButtonLink>
                    ) : (
                      <ButtonLink
                        className={`dropDownButton md:!w-[170px] -md:!w-[193px] md:py-2 !py-2 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
                        variant={"outline"}
                        href={appURL}
                        scale="lg"
                        target={"_blank"}
                        isDisabled={false}
                      >
                        <span className="nav-link pophover tooltip-multiline app-btn">
                          Liquid Stake Now
                        </span>
                      </ButtonLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <OsmoHeader />
      )}
    </React.Fragment>
  );
};

export default Header;
