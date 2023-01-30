import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactGa from "react-ga4";

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
} from "../constants/config";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";
import Dropdown from "./atoms/dropdown/Dropdown";
import ButtonLink from "./atoms/buttonLink/ButtonLink";
import { useOnClickOutside } from "../customHooks/useOnClickOutside";

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [banner, setBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [chevronChange, setChevronChange] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

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

  const onClickNavApp = () => {
    ReactGa.event({
      category: "App",
      action: "Clicked on Navigation App",
    });
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
  }

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
    {
      optionName: "Crew3",
      optionLink: CREW3_URL,
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

  return (
    <React.Fragment>
      <div id="is-sticky" className="top-bar w-full fixed">
        {router.pathname !== "/bnb" ? (
          <div
            className={
              !banner
                ? "hidden"
                : "top-banner-section bg-atomBanner bg-contain bg-no-repeat py-2.5 pr-12 pl-4"
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
              stkATOM is now live on the Persistence Mainnet! -&nbsp;
              <a
                className="link"
                href={COSMOS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Liquid Stake ATOM Now</b>
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
          className={
            "[.topBar_&]:bg-black-900 py-6 px-0 flex relative items-center navbar navbar-expand-lg" +
            " navbar-custom flex-column md:flex-wrap justify-start " +
            router.pathname.split("/")[1]
          }
          id="nav-bar"
        >
          <div className="container  mx-auto px-4 flex flex-wrap items-center justify-between ">
            <Link
              className="bg-logoDark
                      [.is-sticky_&]:bg-logoLight w-[108px] h-[26px] bg-no-repeat bg-center"
              href="/"
            />
            <button
              className="md:text-center -md:hidden bg-red px-3 py-1 text-lg cursor-pointer"
              onClick={toggleMenu}
              id={"toggleButton"}
            >
              <Icon
                viewClass="w-[14px] h-[14px] fill-[#fff]"
                icon="hamberger"
              />
            </button>
            <div
              className={`${
                isOpen ? "md:opacity-100" : "md:opacity-0"
              } md:basis-auto md:basis-full md:grow menu-open transition ease-in-out duration-200
               `}
              id="navbarCollapse"
            >
              <div
                className={`${
                  isOpen ? "md:fixed" : "md:relative"
                } -md:hidden md:left-0 md:right-0 md:bottom-0
              md:top-0 md:h-full md:w-full md:bg-black-full md:opacity-50`}
              />
              <div className="md:fixed md:z-40">
                <ul
                  className={`flex items-center md:flex-row -md:ml-auto md:flex-col md:w-[200px] md:bg-white-mid 
                md:items-baseline md:fixed md:h-full md:left-0 md:bottom-0 md:p-4`}
                  id="mySidenav"
                  ref={sideBarRef}
                >
                  <li className="nav-item nav__menu-item">
                    <Dropdown
                      className="[.is-sticky_&]:text-light-high"
                      dropDownVariant="custom"
                      dropDownVariantBg="bg-transparent text-[12px]"
                      dropdownLabel={t("LEARN")}
                      dropDownIcon={true}
                      dropdownType={"hover"}
                      dropDownContentClass="!bg-white-high drop-shadow-md round-md py-4"
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
                      dropDownVariantBg="bg-transparent text-[12px]"
                      dropdownLabel={t("COMMUNITY")}
                      dropdownType={"hover"}
                      dropDownIcon={true}
                      dropDownContentClass="!bg-white-high drop-shadow-md round-md py-4"
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
                        dropDownVariantBg="bg-transparent text-[12px]"
                        dropdownLabel={t("BRIDGE")}
                        dropDownIcon={true}
                        dropdownType={"hover"}
                        dropDownContentClass="!bg-white-high drop-shadow-md round-md py-4"
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

                  {router.pathname === "/bnb" ? (
                    <li className="nav-item">
                      <ButtonLink
                        className={`dropDownButton [.is-sticky_&]:bg-bnbPrimary
                       w-full md:py-2 md:text-sm`}
                        variant={"custom"}
                        href={IMMUNEFI_WEB_URL}
                        scale="lg"
                        target={"_blank"}
                        isDisabled={false}
                        customButtonClass={"bg-black-800 text-light-high"}
                      >
                        <div
                          className="bg-immunefiWhite
                      [.is-sticky_&]:bg-immunifyBlack w-[100px] h-[20px] bg-no-repeat bg-center"
                        />
                      </ButtonLink>
                    </li>
                  ) : (
                    ""
                  )}

                  <li
                    className="nav-item"
                    style={{ marginLeft: "10px", marginRight: "0" }}
                  >
                    <ButtonLink
                      className={`dropDownButton [.is-sticky_&]:bg-red
                       w-full md:py-2 !py-2.5 md:text-sm`}
                      variant={"custom"}
                      href={appURL}
                      scale="lg"
                      target={"_blank"}
                      isDisabled={false}
                      customButtonClass={
                        "bg-black-800 text-light-high text-[12px]"
                      }
                    >
                      <span className="nav-link pophover tooltip-multiline app-btn">
                        {t("GO_TO_APP")}
                      </span>
                    </ButtonLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
