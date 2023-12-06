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
} from "../../utils/config";
import { useTranslation } from "next-export-i18n";
import Icon from "./Icon";
import Dropdown from "../atoms/dropdown/Dropdown";
import ButtonLink from "../atoms/buttonLink/ButtonLink";
import { useOnClickOutside } from "../../customHooks/useOnClickOutside";
import { useWindowSize } from "../../customHooks/useWindowSize";
import Button from "../atoms/button/Button";

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
  let appURL;

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
      optionName: "Ethereum",
      optionLink: "/eth/testnet",
      imgUrl: "/images/networks/ethereum.svg",
      symbol: "ETH",
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
      optionLink: auditURL,
    },
    {
      optionName: t("GUIDES_TUTORIALS"),
      optionLink: GUIDES_URL,
    },
    {
      optionName: t("DOCS"),
      optionLink: docsURL,
    },
    {
      optionName: t("FAQs"),
      optionLink: faqURL,
    },
    {
      optionName: "Blogs",
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
      optionName: "Bridge to Ethereum",
      optionLink: PSTAKE_BRIDGE_URL,
    },
    {
      optionName: "Bridge to BSC",
      optionLink: BSC_BRIDGE_URL,
    },
  ];

  const socialList = [
    {
      icon: "twitter-logo",
      optionLink: twitterUrl,
    },
    {
      icon: "telegram-plane",
      optionLink: PSTAKE_TELEGRAM_URL,
    },
    {
      icon: "discord",
      optionLink: DISCORD_URL,
    },
    {
      icon: "reddit",
      optionLink: PSTAKE_REDDIT_URL,
    },
  ];

  const handleRouter = (link: string) => {
    router.push(link);
  };

  return (
    <React.Fragment>
      <div id="is-sticky" className="top-bar w-full fixed z-[100]">
        {router.pathname !== "/bnb" ? (
          <div
            className={
              !banner
                ? "hidden"
                : "top-banner-section bg-topBanner bg-contain bg-no-repeat py-2.5 pr-12 pl-4"
            }
          >
            <p className="text-light-high text-[12px] flex items-center flex-wrap text-center justify-center">
              <img
                src={"/images/stkAtom.svg"}
                alt={"stkAtom"}
                width={"16px"}
                height={"16px"}
                className="logo mr-2.5"
              />
              LSM support now live on pSTAKE. Liquid stake your already staked
              ATOM&nbsp;
              <a
                className="link underline"
                href={"https://cosmos.pstake.finance/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                now.
              </a>
            </p>
            <div onClick={closeBanner}>
              <Icon
                viewClass="close w-[10px] h-[10px] fill-[#fff] absolute top-[13px] right-[20px] cursor-pointer"
                icon="close"
              />
            </div>
          </div>
        ) : null}
        <nav
          className={`[.topBar_&]:bg-black-900 py-6 px-0 flex relative 
            items-center navbar navbar-expand-lg navbar-custom flex-column 
            md:flex-wrap justify-start ${
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
          <div className="container  mx-auto px-4 flex flex-wrap items-center justify-between ">
            <Link
              className="bg-logoDark
                      [.is-sticky_&]:bg-logoLight w-[108px] h-[26px] bg-no-repeat bg-center"
              href="/"
            />
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
                className={`flex items-center md:flex-row -md:ml-auto md:flex-col md:bg-white-high 
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-4`}
                id="mySidenav"
                ref={sideBarRef}
              >
                <li className="nav-item nav__menu-item">
                  <Dropdown
                    className="[.is-sticky_&]:text-light-high"
                    dropDownVariant="custom"
                    dropDownButtonClass="md:hidden uppercase"
                    dropDownVariantBg="bg-transparent text-[12px]"
                    dropdownLabel={isMobile ? "" : t("Networks")}
                    dropDownIcon={!isMobile}
                    dropdownType={"hover"}
                    dropDownContentClass="!bg-white-high drop-shadow-md
                      round-md py-4 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0 !w-[150px] md:!flex md:!justify-center md:flex-wrap"
                  >
                    {networks.map((item, index) => (
                      <div
                        className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-dark-high whitespace-nowrap "
                        key={index}
                        onClick={() => {
                          handleRouter(item.optionLink);
                        }}
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.optionName}
                          className={
                            "mr-4 md:mr-2 w-[28px] h-[28px] md:w-[20px] md:h-[20px]"
                          }
                        />
                        <div className={"flex flex-col md:hidden"}>
                          <p className="text-dark-emphasis text-sm font-medium leading-normal md:text-xsm">
                            {item.optionName}
                          </p>
                          <span className="text-dark-low text-xsm font-medium leading-normal">
                            {item.symbol}
                          </span>
                        </div>
                      </div>
                    ))}
                  </Dropdown>
                </li>
                <li className="nav-item nav__menu-item">
                  <Dropdown
                    className="[.is-sticky_&]:text-light-high"
                    dropDownVariant="custom"
                    dropDownButtonClass="md:hidden uppercase"
                    dropDownVariantBg="bg-transparent text-[12px]"
                    dropdownLabel={isMobile ? "" : t("LEARN")}
                    dropDownIcon={!isMobile}
                    dropdownType={"hover"}
                    dropDownContentClass="!bg-white-high drop-shadow-md
                      round-md py-4 md:visible md:relative md:opacity-100
                      md:!bg-transparent md:p-0"
                  >
                    {learnList.map((item, index) => (
                      <a
                        className="px-4 py-2 flex items-center md:py-3
                        hover:cursor-pointer text-dark-high whitespace-nowrap"
                        href={item.optionLink}
                        key={index}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <span
                          className="ml-4 text-dark-emphasis text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
                        >
                          {item.optionName}
                        </span>
                      </a>
                    ))}
                  </Dropdown>
                </li>

                <li className="nav-item nav__menu-item">
                  <Dropdown
                    className="[.is-sticky_&]:text-light-high"
                    dropDownVariant="custom"
                    dropDownButtonClass="md:hidden uppercase"
                    dropDownVariantBg="bg-transparent text-[12px]"
                    dropdownLabel={isMobile ? "" : t("COMMUNITY")}
                    dropdownType={"hover"}
                    dropDownIcon={!isMobile}
                    dropDownContentClass="!bg-white-high drop-shadow-md round-md
                       py-4 md:visible md:relative md:opacity-100 md:!bg-transparent md:p-0"
                  >
                    <>
                      {communityList.map((item, index) => (
                        <a
                          className="px-4 py-2 flex items-center md:py-3
                           hover:cursor-pointer text-dark-high whitespace-nowrap"
                          href={item.optionLink}
                          key={index}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span
                            className="ml-4 text-dark-emphasis text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
                          >
                            {item.optionName}
                          </span>
                        </a>
                      ))}
                      <div className="flex items-center justify-center">
                        {socialList.map((item, index) => (
                          <a
                            key={index}
                            href={item.optionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={"px-1 py-2"}
                          >
                            <Icon
                              viewClass="social_icon_img w-[14px]"
                              icon={item.icon}
                            />
                          </a>
                        ))}
                      </div>
                    </>
                  </Dropdown>
                </li>
                {router.pathname === "/" ? (
                  <li className="nav-item nav__menu-item">
                    <Dropdown
                      className="[.is-sticky_&]:text-light-high"
                      dropDownVariant="custom"
                      dropDownButtonClass="md:hidden uppercase"
                      dropDownVariantBg="bg-transparent text-[12px]"
                      dropdownLabel={isMobile ? "" : t("BRIDGE")}
                      dropDownIcon={!isMobile}
                      dropdownType={"hover"}
                      dropDownContentClass="!bg-white-high drop-shadow-md round-md py-4
                         py-4 md:visible md:relative md:opacity-100 md:!bg-transparent md:p-0"
                    >
                      {bridgeList.map((item, index) => (
                        <a
                          className="px-4 py-2 flex items-center md:py-3
                           hover:cursor-pointer text-dark-high whitespace-nowrap"
                          href={item.optionLink}
                          key={index}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <span
                            className="ml-4 text-dark-emphasis text-sm
                        font-medium leading-normal md:text-xsm md:ml-2"
                          >
                            {item.optionName}
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
                  <ButtonLink
                    className={`dropDownButton ${
                      router.pathname === "/bnb"
                        ? "[.is-sticky_&]:bg-bnbPrimary"
                        : router.pathname === "/atom"
                        ? "[.is-sticky_&]:bg-atomPrimary"
                        : router.pathname === "/osmo"
                        ? "[.is-sticky_&]:bg-osmoPrimaryButton"
                        : "[.is-sticky_&]:bg-red"
                    }
                       w-full md:py-2 !py-2.5 md:text-sm`}
                    variant={"custom"}
                    href={appURL}
                    scale="lg"
                    target={"_blank"}
                    isDisabled={false}
                    customButtonClass={`bg-black-800 text-light-high ${
                      router.pathname === "/bnb"
                        ? "[.is-sticky_&]:text-dark-high"
                        : router.pathname === "/"
                    } text-[12px]`}
                  >
                    <span className="nav-link pophover tooltip-multiline app-btn uppercase">
                      {t("GO_TO_APP")}
                    </span>
                  </ButtonLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
