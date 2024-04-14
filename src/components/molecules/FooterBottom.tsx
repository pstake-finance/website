import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
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
} from "../../utils/config";

const FooterBottom = () => {
  const { t } = useTranslation("common");
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
      link: "",
      text: "SOL (Coming Soon)",
    },
    {
      externLink: false,
      link: "/dydx",
      text: "DYDX",
    },
    {
      externLink: false,
      link: "/stars",
      text: "STARS",
    },
    {
      externLink: false,
      link: "/huahua",
      text: "HUAHUA",
    },
  ];

  const learnList = [
    {
      externLink: true,
      link: PSTAKE_MEDIUM_URL,
      text: "Blogs",
    },
    {
      externLink: true,
      link: PSTAKE_AUDITS_URL,
      text: "Security Audits",
    },
    {
      externLink: true,
      link: GUIDES_FAQ_URL,
      text: "FAQs",
    },
    {
      externLink: true,
      link: GUIDES_URL,
      text: "Guides & Tutorials",
    },
    {
      externLink: true,
      link: "DOCS_URL",
      text: "Documentation",
    },
  ];

  const communityList = [
    {
      externLink: true,
      link: GOV_URL,
      text: "Governance",
    },
    {
      externLink: true,
      link: PSTAKE_FORUM_URL,
      text: "Community Forum",
    },
  ];
  return (
    <>
      <div className={`aos-init aos-animate ${router.pathname}`}>
        <div className="container py-[80px] md:py-[40px]">
          <div>
            <div className="max-w-[1240px] mx-auto flex items-center">
              <div className="flex flex-wrap justify-between w-full">
                <div className={"w-[500px]"}>
                  <img
                    src={"/images/logo.svg"}
                    alt={"logo"}
                    className="w-[172px] md:w-[160px] mb-2"
                  />
                  <p className={"text-[12px] text-[#D5D5D5B0] mb-4"}>
                    Managed by Persistence Labs
                  </p>
                  <p
                    className={
                      "font-semibold text-[#FCFCFC] flex items-center mb-8"
                    }
                  >
                    Download Media Kit
                    <Icon
                      viewClass="socialIcon ml-2 !w-[16px] !h-[16px]"
                      icon={"right-arrow2"}
                    />
                  </p>
                  <div className={"flex items-center justify-start"}>
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
                <div className={"flex-1 flex justify-end"}>
                  <div className={"mr-[80px]"}>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      Live Networks
                    </p>
                    {liveNetworks.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={"text-[#D5D5D5B0] mb-[6px]"}
                        >
                          <Link href={item.link} className="nav-link" passHref>
                            {item.text}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className={"mr-[80px]"}>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      Learn
                    </p>
                    {learnList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            "text-[#D5D5D5B0]  mb-[6px] flex items-center"
                          }
                        >
                          <Link
                            href={item.link}
                            className="nav-link"
                            passHref
                            target={item.externLink ? "_blank" : "_self"}
                          >
                            {item.text}
                          </Link>
                          {item.externLink ? (
                            <Icon
                              viewClass="fill-transparent stroke-[#fff] !w-[16px] !h-[16px] ml-2"
                              icon="external-link"
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <p
                      className={
                        "font-semibold text-[#FCFCFCE3] text-[20px] mb-4"
                      }
                    >
                      Community
                    </p>
                    {communityList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            "text-[#D5D5D5B0]  mb-[6px] flex items-center"
                          }
                        >
                          <Link
                            href={item.link}
                            className="nav-link"
                            passHref
                            target={item.externLink ? "_blank" : "_self"}
                          >
                            {item.text}
                          </Link>
                          {item.externLink ? (
                            <Icon
                              viewClass="fill-transparent stroke-[#fff] !w-[16px] !h-[16px] ml-2"
                              icon="external-link"
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-[1240px] mx-auto flex items-center justify-between flex-wrap sm:block sm:text-center
        pb-[60px] pt-[20px] border-t border-[#D5D5D533]"
        >
          <p className="text-[#70747c] text-[12px] sm:mb-4">
            © Copyright
            {new Date().getFullYear()} PSTAKE Finance. All rights reserved.
          </p>
          <div className={"flex items-center"}>
            <Link
              href="/terms"
              target="_blank"
              className="text-[#70747c] text-[12px] mx-4 sm:mb-4 block"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              target="_blank"
              className="text-[#70747c] text-[12px] sm:mb-4 block"
            >
              {t("PRIVACY_POLICY")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
