import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useTranslation, LinkWithLocale } from "next-export-i18n";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  PSTAKE_YOUTUBE_URL,
  PERSISTENCE_ONE_URL,
  PSTAKE_MEDIUM_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  STK_ETH_TWITTER,
  pstake_cosmos_twitter_url,
  PSTAKE_DISCORD,
  GITHUB_URL,
  PSTAKE_FORUM_URL,
  PSTAKE_AUDITS_URL,
  GUIDES_FAQ_URL,
  GUIDES_URL,
  GOV_URL,
  DOCS_URL,
} from "../../utils/config";

const FooterBottom = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const iconFooterList = [
    {
      name: "Telegram",
      url: PSTAKE_TELEGRAM_URL,
      icon: "telegram-plane",
      text: "Chat with the community",
    },
    {
      name: "X (Formerly Twitter)",
      url: PSTAKE_TWITTER_URL,
      icon: "twitter-logo",
      text: "Stay updated",
    },
    {
      name: "Blogs",
      url: PSTAKE_MEDIUM_URL,
      icon: "medium-m",
      text: "Learn about pSTAKE",
    },
    {
      name: "Discord",
      url: PSTAKE_DISCORD,
      icon: "discord",
      text: "Subscribe for tutorials",
    },
  ];

  const liveNetworks = [
    {
      externLink: false,
      link: "",
      text: `BTC (${t("COMING_SOON")})`,
    },
    {
      externLink: false,
      link: "/atom",
      text: "ATOM",
    },
    {
      externLink: false,
      link: "/bnb",
      text: "BNB",
    },

    {
      externLink: false,
      link: "/dydx",
      text: "DYDX",
    },
  ];

  const learnList = [
    {
      externLink: true,
      link: PSTAKE_MEDIUM_URL,
      text: t("BLOGS"),
    },
    {
      externLink: true,
      link: PSTAKE_AUDITS_URL,
      text: t("SECURITY_AUDITS"),
    },
    {
      externLink: true,
      link: GUIDES_FAQ_URL,
      text: t("FAQS"),
    },
    {
      externLink: true,
      link: GUIDES_URL,
      text: t("GUIDES_TUTORIALS"),
    },
    {
      externLink: true,
      link: DOCS_URL,
      text: t("DOCS"),
    },
  ];

  const communityList = [
    {
      externLink: true,
      link: GOV_URL,
      text: t("GOVERNANCE"),
    },
    {
      externLink: true,
      link: PSTAKE_FORUM_URL,
      text: t("COMMUNITY_FORUM"),
    },
  ];
  return (
    <>
      <div className={`aos-init aos-animate ${router.pathname}`}>
        <div className="container py-[50px] md:py-[30px]">
          <div>
            <div className="max-w-[1240px] mx-auto flex items-center md:block">
              <div className="flex flex-wrap justify-between w-full">
                <div className={"w-[500px] md:mb-4"}>
                  <img
                    src={"/images/logo.svg"}
                    alt={"logo"}
                    className="w-[172px] md:w-[160px] mb-2"
                  />
                  <p className={"text-[12px] text-[#D5D5D5B0] mb-4 "}>
                    {t("FOOTER_MANAGED_TEXT")}
                  </p>
                  <a
                    href={
                      "https://short-stool-639.notion.site/pSTAKE-Brand-Press-Kit-388bb93bd0c947d6a225d5058d3f9acc"
                    }
                    className={
                      "font-semibold text-[#FCFCFC] flex items-center mb-8 md:mb-3 hover:text-[#C73238] group"
                    }
                    rel="noopener noreferrer"
                  >
                    {t("FOOTER_VIEW_PRESS_KIT")}
                    <Icon
                      viewClass="socialIcon ml-2 !w-[16px] !h-[16px] stroke-[#F8EAEA] fill-transparent group-hover:stroke-[#C73238]"
                      icon={"right-arrow2"}
                    />
                  </a>
                  <div className={"flex items-center justify-start lg:hidden"}>
                    {iconFooterList.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        className={`flex items-center rounded-full group`}
                        rel="noopener noreferrer"
                      >
                        <div
                          className={`w-[24px] h-[24px] bg-[#434343] flex 
                        items-center justify-center rounded-full mr-3`}
                        >
                          <Icon
                            viewClass="socialIcon fill-[#000] !w-[12px] !h-[12px]"
                            icon={item.icon}
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    "flex-1 flex justify-end md:justify-start md:flex-wrap"
                  }
                >
                  <div className={"mr-[80px] md:mr-4 md:mb-3"}>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      {t("NETWORKS")}
                    </p>
                    {liveNetworks.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={"text-[#D5D5D5B0] mb-[6px]"}
                        >
                          <Link
                            href={item.link}
                            className="nav-link group flex items-center text-base md:text-sm md:mb-3"
                            passHref
                          >
                            {item.text}
                            {item.link !== "" ? (
                              <Icon
                                viewClass="arrow-right w-[14px] stroke-[#D5D5D5B2] ml-1 group-hover:stroke-[#C73238] fill-transparent"
                                icon="external-link"
                              />
                            ) : (
                              ""
                            )}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className={"mr-[80px] md:mr-0 md:mb-3"}>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      {t("LEARN")}
                    </p>
                    {learnList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            "text-[#D5D5D5B0] mb-[6px] flex items-center"
                          }
                        >
                          <Link
                            href={item.link}
                            className="nav-link group flex items-center text-base md:text-sm md:mb-3"
                            passHref
                            target={item.externLink ? "_blank" : "_self"}
                          >
                            {item.text}
                            {item.externLink ? (
                              <Icon
                                viewClass="fill-transparent stroke-[#D5D5D5B2] !w-[14px] !h-[16px] ml-1 mt-[3px] group-hover:stroke-[#C73238]"
                                icon="external-link"
                              />
                            ) : null}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className={"md:mr-0 md:mb-3"}>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      {t("COMMUNITY")}
                    </p>
                    {communityList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={"text-[#D5D5D5B0]  mb-[6px]  "}
                        >
                          <Link
                            href={item.link}
                            className="nav-link group flex items-center text-base md:text-sm md:mb-3"
                            passHref
                            target={item.externLink ? "_blank" : "_self"}
                          >
                            {item.text}
                            {item.externLink ? (
                              <Icon
                                viewClass="fill-transparent stroke-[#D5D5D5B2] !w-[14px] !h-[16px] ml-1 group-hover:stroke-[#C73238]"
                                icon="external-link"
                              />
                            ) : null}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={"flex items-center justify-start -lg:hidden"}>
                {iconFooterList.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    className={`flex items-center rounded-full group`}
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`w-[24px] h-[24px] bg-[#434343] flex 
                        items-center justify-center rounded-full mr-3`}
                    >
                      <Icon
                        viewClass="socialIcon fill-[#000] !w-[12px] !h-[12px]"
                        icon={item.icon}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-[1240px] mx-auto flex items-center justify-between flex-wrap sm:block sm:text-center
        pb-[60px] md:px-4 pt-[20px] border-t border-[#D5D5D533] md:pb-4"
        >
          <p className="text-[#70747c] text-[12px] sm:mb-4 md:text-center">
            © Copyright
            {new Date().getFullYear()} PSTAKE Finance. {t("RIGHTS_RESERVE")}
          </p>
          <div className={"flex items-center md:justify-between md:px-4"}>
            <LinkWithLocale
              href="/terms"
              className="text-[#70747c] text-[12px] mx-4 block md:m-0"
            >
              {t("TERMS_OF_USE")}
            </LinkWithLocale>
            <LinkWithLocale
              href="/privacy"
              className="text-[#70747c] text-[12px] sm:mb-4 block"
            >
              {t("PRIVACY_POLICY")}
            </LinkWithLocale>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
