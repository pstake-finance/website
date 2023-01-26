import React, { useState, useEffect } from "react";
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

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [banner, setBanner] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [chevronChange, setChevronChange] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
  }, []);

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 50) {
      setChevronChange(true);
      document.getElementById("nav-bar").classList.add("sticky-dark");
      document.getElementById("is-sticky").classList.add("is-sticky");
    } else {
      setChevronChange(false);

      document.getElementById("nav-bar").classList.remove("sticky-dark");
      document.getElementById("is-sticky").classList.remove("is-sticky");
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

  return (
    <React.Fragment>
      <div id="is-sticky" className="top-bar fixed top-0 right-0 left-0 w-full">
        {router.pathname !== "/bnb" ? (
          <div className={!banner ? "d-none" : "top-banner-section"}>
            <p className="content">
              <img
                src={"/images/stkAtom.svg"}
                alt={"stkAtom"}
                className="logo"
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
              <Icon viewClass="close" icon="close" />
            </div>
          </div>
        ) : null}
        <nav
          className={
            "px-8 py-0 flex relative items-center navbar navbar-expand-lg navbar-custom sticky " +
            router.pathname.split("/")[1]
          }
          id="nav-bar"
        >
          <div className="container mb-pad">
            <Link className="navbar-brand logo text-uppercase" href="/"></Link>
            <button
              className="navbar-toggler"
              onClick={toggleMenu}
              type="button"
            >
              <Icon viewClass="social_icon_img" icon="hamberger" />
            </button>
            <div
              className={
                isOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              style={{ display: isOpen ? "inline-grid" : "" }}
              id="navbarCollapse"
            >
              <ul
                className={
                  isOpen
                    ? "navbar-nav navbar-left"
                    : "navbar-nav ml-auto navbar-left"
                }
                id="mySidenav"
              >
                <li className="nav-item nav__menu-item">
                  <p className="nav-link chevron m-0">
                    {t("LEARN")}
                    {!chevronChange ? (
                      <Icon viewClass="social_icon_img" icon="chevron" />
                    ) : (
                      <Icon
                        viewClass="social_icon_img"
                        icon="chevroncolorchange"
                      />
                    )}
                  </p>
                  <ul className="dropdown">
                    <li>
                      <a
                        href={auditURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {t("SECURITY_AUDITS")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          router.pathname === "/atom"
                            ? STKATOM_BLOG_URL
                            : GUIDES_URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {router.pathname === "/atom"
                          ? t("Blog")
                          : t("GUIDES_TUTORIALS")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={docsURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {t("DOCS")}
                      </a>
                    </li>
                    <li>
                      {router.pathname !== "/atom" ? (
                        <a
                          href={faqURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                        >
                          {t("FAQs")}
                        </a>
                      ) : (
                        <a href={faqURL} className="nav-link">
                          {t("FAQs")}
                        </a>
                      )}
                    </li>
                  </ul>
                </li>

                <li className="nav-item nav__menu-item">
                  <p className="nav-link chevron m-0">
                    {t("COMMUNITY")}
                    {!chevronChange ? (
                      <Icon viewClass="social_icon_img" icon="chevron" />
                    ) : (
                      <Icon
                        viewClass="social_icon_img"
                        icon="chevroncolorchange"
                      />
                    )}
                  </p>
                  <ul className="dropdown">
                    <li>
                      <a
                        href={PSTAKE_FORUM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {t("FORUM")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={SNANPSHOT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        {t("GOVERNANCE")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={CREW3_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                      >
                        Crew3
                      </a>
                    </li>

                    <ul className="socialicons">
                      <li>
                        <a
                          href={twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon
                            viewClass="social_icon_img"
                            icon="twitter-logo"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href={PSTAKE_TELEGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon
                            viewClass="social_icon_ig"
                            icon="telegram-plane"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href={DISCORD_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon viewClass="social_icon_img" icon="discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={PSTAKE_REDDIT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon viewClass="social_icon_img" icon="reddit" />
                        </a>
                      </li>
                    </ul>
                  </ul>
                </li>

                {router.pathname === "/" ? (
                  <li className="nav-item nav__menu-item">
                    <p className="nav-link chevron m-0">
                      {t("BRIDGE")}
                      {!chevronChange ? (
                        <Icon viewClass="social_icon_img" icon="chevron" />
                      ) : (
                        <Icon
                          viewClass="social_icon_img"
                          icon="chevroncolorchange"
                        />
                      )}
                    </p>
                    <ul className="dropdown">
                      <li>
                        <a
                          href={PSTAKE_BRIDGE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                        >
                          Bridge to Ethereum
                        </a>
                      </li>
                      <li>
                        <a
                          href={BSC_BRIDGE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                        >
                          Bridge to BSC
                        </a>
                      </li>
                    </ul>
                  </li>
                ) : (
                  ""
                )}

                {router.pathname === "/bnb" ? (
                  <li
                    className="nav-item"
                    style={{ marginLeft: "10px", marginRight: "0" }}
                  >
                    <a
                      style={{ padding: "0" }}
                      href={IMMUNEFI_WEB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      <div className="nav-link pophover tooltip-multiline app-btn immunefi p-l-3"></div>
                    </a>
                  </li>
                ) : (
                  ""
                )}

                <li
                  className="nav-item"
                  style={{ marginLeft: "10px", marginRight: "0" }}
                >
                  <a
                    style={{ padding: "0" }}
                    onClick={onClickNavApp}
                    href={appURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <span className="nav-link pophover tooltip-multiline app-btn">
                      {t("GO_TO_APP")}
                    </span>
                  </a>
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
