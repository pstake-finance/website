import React, { useState, useEffect, useRef } from "react";
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
  GOV_URL,
} from "../../../utils/config";
import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale,
} from "next-export-i18n";
import Icon from "../Icon";
import ButtonLink from "../../atoms/buttonLink/ButtonLink";
import { useOnClickOutside } from "../../../customHooks/useOnClickOutside";
import { useWindowSize } from "../../../customHooks/useWindowSize";
import Button from "../../atoms/button/Button";
import OsmoHeader from ".././osmo-header";
import GeofenceNotice from ".././geofence-banner";
import { useAppStore } from "../../../store/store";
import NetworkDropdown from "./network-dropdown";
import LearnDropdown from "./learn-dropdown";
import CommunityDropdown from "./community-dropdown";
import BridgeDropdown from "./bridge-dropdown";
import MobileHeader from "./mobile-header";
import LangDropdown from "./lang-dropdown";
import Link from "next/link";

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
    name: "Discord",
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
    name: "Governance",
    url: GOV_URL,
    image: "governance_full",
    text: "Join Discussions",
  },
  {
    name: "Community Forum",
    url: PSTAKE_FORUM_URL,
    image: "forum_full",
    text: "Join Discussions",
  },
];

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [banner, setBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [chevronChange, setChevronChange] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const { isMobile, isLandScape } = useWindowSize();

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
      optionName: "Bitcoin",
      optionLink: "/btc",
      imgUrl: "/images/networks/btc.svg",
      symbol: "BTC",
    },
    {
      optionName: "Cosmos",
      optionLink: "/atom",
      imgUrl: "/images/networks/atom.svg",
      symbol: "ATOM",
    },
    {
      optionName: "Osmosis",
      optionLink: "/osmo",
      imgUrl: "/images/networks/osmo.svg",
      symbol: "OSMO",
    },
    {
      optionName: "dYdX",
      optionLink: "/dydx",
      imgUrl: "/images/networks/dydx.svg",
      symbol: "DYDX",
    },
    {
      optionName: "Persistence",
      optionLink: "",
      imgUrl: "/images/networks/persistence.svg",
      symbol: "XPRT",
    },
    {
      optionName: "BNB",
      optionLink: "/bnb",
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
      optionName: t("FAQS"),
      icon: "faq",
      optionLink: faqURL,
      iconType: "stroke",
    },
    {
      optionName: t("BLOGS"),
      icon: "blog",
      iconType: "stroke",
      optionLink: "https://blog.pstake.finance/",
    },
  ];

  const bridgeList = [
    {
      imgUrl: "/images/networks/bnb.svg",
      optionName: t("ETH_TO_BSC_BRIDGE"),
      optionLink: BSC_BRIDGE_URL,
      subText: t("ETH_TO_BSC_BRIDGE_HELPER_TEXT"),
    },
    {
      imgUrl: "/images/networks/atom.svg",
      optionName: t("ETH_TO_COSMOS_BRIDGE"),
      optionLink: PSTAKE_BRIDGE_URL,
      subText: t("ETH_TO_COSMOS_BRIDGE_HELPER_TEXT"),
    },
  ];

  const langList = [
    {
      imgUrl: "/images/lang/en.png",
      code: "en",
      name: "ENGLISH",
    },
    {
      imgUrl: "/images/lang/cn.png",
      code: "cn",
      name: "CHINESE",
    },
    {
      imgUrl: "/images/lang/kr.png",
      code: "ko",
      name: "한국어",
    },
  ];

  const handleRouter = (link: string) => {
    router.push(link);
  };

  const fetchXprtValidatorsData = useAppStore(
    (state) => state.fetchXprtValidatorsData
  );

  useEffect(() => {
    fetchXprtValidatorsData("core-1", "Mainnet");
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
              router.pathname !== "/eth/testnet" &&
              router.pathname !== "/btc"
                ? "bg-white-emphasis"
                : ""
            } ${router.pathname.split("/")[1]}
          `}
            id="nav-bar"
          >
            <div className="container max-w-[1280px] mx-auto px-4 flex flex-wrap items-center justify-between ">
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
                } -lg:hidden md:py-2 !py-2.5 md:text-sm`}
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
                  isOpen ? "lg:transform-none" : "lg:-translate-x-full"
                } lg:fixed lg:top-0 lg:left-0 md:z-40 lg:w-[100%] lg:h-screen lg:transition-transform lg:bg-[#141414]
               lg:basis-auto lg:basis-full lg:grow menu-open
               `}
                id="navbarCollapse"
              >
                {isLandScape ? (
                  <MobileHeader
                    networks={networks}
                    learnList={learnList}
                    communityList={socialList}
                    bridgeList={bridgeList}
                    closeMenu={() => {
                      setIsOpen(false);
                    }}
                    className={"-lg:hidden"}
                  />
                ) : (
                  <ul
                    className={`flex gap-10 items-center md:flex-row -md:ml-auto md:flex-col 
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-2`}
                  >
                    <li className="nav-item nav__menu-item lg:hidden">
                      <NetworkDropdown
                        networks={networks}
                        isTablet={isLandScape}
                      />
                    </li>
                    <li className="nav-item nav__menu-item lg:hidden">
                      <LearnDropdown
                        learnList={learnList}
                        isTablet={isLandScape}
                      />
                    </li>
                    <li className="nav-item nav__menu-item lg:hidden">
                      <CommunityDropdown
                        communityList={socialList}
                        isTablet={isLandScape}
                      />
                    </li>
                    {router.pathname === "/" ? (
                      <li className="nav-item nav__menu-item lg:hidden">
                        <BridgeDropdown
                          list={bridgeList}
                          isTablet={isLandScape}
                        />
                      </li>
                    ) : null}
                    {router.pathname === "/bnb" ||
                    router.pathname === "/atom" ? (
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
                        router.pathname === "/btc" ? (
                          <ButtonLink
                            className={`[.is-sticky_&]:!text-light-high !bg-[#EE972C4D] border !border-[#EE972C] !text-[#181818] !w-[190px] !h-[44px] md:py-2 !py-2 md:text-sm md:!text-[12px] !text-[12px] !font-semibold`}
                            variant={"solid"}
                            href={appURL}
                            scale="lg"
                            target={"_blank"}
                            isDisabled={false}
                          >
                            <span className="nav-link pophover tooltip-multiline app-btn">
                              {t("LIQUID_STAKE_NOW")}
                            </span>
                          </ButtonLink>
                        ) : (
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
                              {t("LIQUID_STAKE_NOW")}
                            </span>
                          </ButtonLink>
                        )
                      ) : (
                        <ButtonLink
                          className={`hover:!bg-[#E509134D] dropDownButton md:!w-[170px] -md:!w-[193px] md:py-2 !py-2 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
                          variant={"outline"}
                          href={appURL}
                          scale="lg"
                          target={"_blank"}
                          isDisabled={false}
                        >
                          <span className="nav-link pophover tooltip-multiline app-btn">
                            {t("LIQUID_STAKE_NOW")}
                          </span>
                        </ButtonLink>
                      )}
                    </li>
                    <li className="nav-item nav__menu-item lg:hidden">
                      <LangDropdown
                        langList={langList}
                        isTablet={isLandScape}
                      />
                    </li>
                  </ul>
                )}
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
