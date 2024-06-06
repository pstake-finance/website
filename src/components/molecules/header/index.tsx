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
import LearnDropdown from "./learn-dropdown";
import CommunityDropdown from "./community-dropdown";
import BridgeDropdown from "./bridge-dropdown";
import MobileHeader from "./mobile-header";
import LangDropdown from "./lang-dropdown";
import AboutDropdown from "./about-dropdown";
import GoveranaceDropdown from "./governanace-dropdown";

const socialList = [
  {
    optionName: "X (Twitter)",
    optionLink: "https://x.com/intent/follow?screen_name=pStakeFinance",
    icon: "twitter-logo",
    iconType: "fill",
    text: "Follow pSTAKE Finance",
  },
  {
    optionName: "Telegram",
    optionLink: "https://t.me/pstakefinancechat",
    icon: "telegram-plane",
    iconType: "fill",
    text: "Join the Community Chat",
  },
  {
    optionName: "Discord",
    optionLink: "https://discord.com/invite/2ek5rUyT8x",
    icon: "discord",
    iconType: "fill",
    text: "Join Our Community",
  },
  {
    optionName: "Governance Forum",
    optionLink: "https://forum.pstake.finance/",
    icon: "pstake",
    iconType: "",
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

  const learnList = [
    {
      optionName: t("NAV_LEARN_1_TITLE"),
      subText: t("NAV_LEARN_1_SUB_TITLE"),
      icon: "btc-icon",
      iconType: "",
      optionLink: "https://blog.pstake.finance/category/bitcoin/",
    },
    {
      optionName: t("NAV_LEARN_2_TITLE"),
      subText: t("NAV_LEARN_2_SUB_TITLE"),
      icon: "circle_info",
      iconType: "stroke",
      optionLink: "https://blog.pstake.finance/category/bitcoin-101/",
    },
    {
      optionName: t("NAV_LEARN_3_TITLE"),
      subText: t("NAV_LEARN_3_SUB_TITLE"),
      icon: "guides",
      optionLink: "https://blog.pstake.finance/category/guides/",
      iconType: "stroke",
    },
    {
      optionName: t("NAV_LEARN_4_TITLE"),
      subText: t("NAV_LEARN_4_SUB_TITLE"),
      icon: "code",
      optionLink: "https://github.com/persistenceOne/pStake-auditReports",
      iconType: "stroke",
    },
  ];

  const governanceList = [
    {
      optionName: t("NAV_GOVERNANCE_1_TITLE"),
      subText: t("NAV_GOVERNANCE_1_SUB_TITLE"),
      icon: "pstake",
      iconType: "",
      optionLink: "https://forum.pstake.finance/",
    },
    {
      optionName: t("NAV_GOVERNANCE_2_TITLE"),
      subText: t("NAV_GOVERNANCE_2_SUB_TITLE"),
      icon: "governance_process",
      iconType: "stroke",
      optionLink:
        "https://blog.pstake.finance/2022/03/24/introducing-pstake-community-governance/",
    },
    {
      optionName: t("NAV_GOVERNANCE_3_TITLE"),
      subText: t("NAV_GOVERNANCE_3_SUB_TITLE"),
      icon: "snapshot",
      optionLink: "https://snapshot.org/#/pstakefinance.eth",
      iconType: "stroke",
    },
  ];

  const aboutList = [
    {
      optionName: t("NAV_ABOUT_1_TITLE"),
      subText: t("NAV_ABOUT_1_SUB_TITLE"),
      icon: "blog",
      iconType: "stroke",
      optionLink: "https://blog.pstake.finance/",
    },
    {
      optionName: t("NAV_ABOUT_3_TITLE"),
      subText: t("NAV_ABOUT_3_SUB_TITLE"),
      icon: "bug_bounty",
      optionLink: "https://immunefi.com/bug-bounty/pstakeoncosmos/",
      iconType: "fill",
    },
    {
      optionName: t("NAV_ABOUT_4_TITLE"),
      subText: t("NAV_ABOUT_4_SUB_TITLE"),
      icon: "careers",
      optionLink: "https://www.linkedin.com/company/pstake/jobs/",
      iconType: "stroke",
    },
    {
      optionName: t("NAV_ABOUT_5_TITLE"),
      subText: t("NAV_ABOUT_5_SUB_TITLE"),
      icon: "download",
      iconType: "fill",
      optionLink:
        "https://persistence.notion.site/pSTAKE-Media-Kit-a2190b24b1194a24934677c7272d1cf8",
    },
  ];

  const bridgeList = [
    {
      imgUrl: "/images/networks/base.svg",
      optionName: t("ETH_TO_BASE_BRIDGE"),
      optionLink: "https://superbridge.app/base",
      subText: t("ETH_TO_BASE_BRIDGE_HELPER_TEXT"),
    },
    {
      imgUrl: "/images/networks/atom.svg",
      optionName: t("ETH_TO_COSMOS_BRIDGE"),
      optionLink: PSTAKE_BRIDGE_URL,
      subText: t("ETH_TO_COSMOS_BRIDGE_HELPER_TEXT"),
    },
    {
      imgUrl: "/images/networks/bnb.svg",
      optionName: t("ETH_TO_BSC_BRIDGE"),
      optionLink: BSC_BRIDGE_URL,
      subText: t("ETH_TO_BSC_BRIDGE_HELPER_TEXT"),
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
    process.env.NEXT_PUBLIC_DEPLOYMENT !== "production" && {
      imgUrl: "/images/lang/kr.png",
      code: "ko",
      name: "한국어",
    },
  ];

  console.log(langList, "langList");

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
                <LinkWithLocale
                  className="bg-logoLight
                      [.is-sticky_&]:bg-logoLight bg-[length:150px] w-[150px] h-[36px] bg-no-repeat bg-center"
                  href="/"
                />
              ) : (
                <LinkWithLocale
                  className="bg-logoDark
                      [.is-sticky_&]:bg-logoLight  bg-[length:150px] w-[150px] h-[36px]  bg-no-repeat bg-center"
                  href="/"
                />
              )}

              <Button
                className={`${
                  router.pathname === "/"
                    ? "[.is-sticky_&]:bg-[#EE972C]"
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
                    aboutList={aboutList}
                    learnList={learnList}
                    governanceList={governanceList}
                    communityList={socialList}
                    bridgeList={bridgeList}
                    closeMenu={() => {
                      setIsOpen(false);
                    }}
                    className={"-lg:hidden"}
                  />
                ) : (
                  <ul
                    className={`flex gap-[24px] items-center md:flex-row -md:ml-auto md:flex-col 
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-2`}
                  >
                    <li className="nav-item nav__menu-item lg:hidden">
                      <LearnDropdown
                        learnList={learnList}
                        isTablet={isLandScape}
                      />
                    </li>
                    <li className="nav-item nav__menu-item lg:hidden">
                      <AboutDropdown
                        aboutList={aboutList}
                        isTablet={isLandScape}
                      />
                    </li>
                    <li className="nav-item nav__menu-item lg:hidden">
                      <GoveranaceDropdown
                        govList={governanceList}
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
                          className={`!bg-[#EE972C4D] border !border-[#EE972C] !text-[#FEFEFE] dropDownButton md:!w-[170px] -md:!w-[193px] md:py-2 !py-2 md:text-sm md:!text-[12px] !text-[18px] !font-normal`}
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
                        langList={langList.filter((item) => item)}
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
