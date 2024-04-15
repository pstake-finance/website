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
  PSTAKE_APP_URL,
} from "../../utils/config";
import FooterBottom from "./FooterBottom";
import ButtonLink from "../atoms/buttonLink/ButtonLink";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/social_icons/${logoName}.svg`;
};

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  let twitterUrl;

  if (router.pathname === "/") {
    twitterUrl = PSTAKE_TWITTER_URL;
  } else if (router.pathname === "/bnb") {
    twitterUrl = STK_BNB_TWITTER_URL;
  } else if (router.pathname === "/atom") {
    twitterUrl = STK_ATOM_TWITTER_URL;
  } else if (router.pathname === "/osmo") {
    twitterUrl = pstake_cosmos_twitter_url;
  } else if (router.pathname === "/dydx") {
    twitterUrl = pstake_cosmos_twitter_url;
  } else {
    twitterUrl = STK_ETH_TWITTER;
  }

  const iconFooterList = [
    {
      name: "Telegram",
      url: PSTAKE_TELEGRAM_URL,
      icon: "telegram-plane",
      text: "Chat with the community",
    },
    {
      name: "X (Formerly Twitter)",
      url: twitterUrl,
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
      name: "YouTube",
      url: PSTAKE_YOUTUBE_URL,
      icon: "youtube",
      text: "Subscribe for tutorials",
    },
  ];

  const list = [
    {
      name: "X (Formerly Twitter)",
      url: twitterUrl,
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

  return (
    <>
      {!router.pathname.includes("/validators") ? (
        <div className={`aos-init aos-animate ${router.pathname}`}>
          <div className="sectionContainer py-[80px] md:py-[40px]">
            <p className="text-[40px] md:text-[20px] text-center font-bold mb-0 text-[#FEFEFE]">
              Explore the Community
            </p>
            <p
              className={
                "text-[20px] md:text-[16px] text-center max-w-[700px] mx-auto text-[#D5D5D5] mb-8"
              }
            >
              Learn more about pSTAKE Finance, chat with fellow pStakers, and
              have your say in the future of liquid staking everything.
            </p>
            <div>
              <div className="max-w-[1000px] flex items-center justify-center mx-auto mb-12">
                <div className="flex items-center justify-center m-auto flex-wrap">
                  {list.map((item, index) => (
                    <div
                      className="item sm:w-auto sm:p-0 -lg:basis-[50%] -lg:max-w-[440px] md:max-w-full w-full px-4"
                      key={index}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        className={`bg-[#1B1B1B] flex items-center md:m-2 md:p-4 m-4 p-6 rounded-xl group`}
                        rel="noopener noreferrer"
                      >
                        <div
                          className={`w-[46px] h-[46px] bg-[#3f3f45] flex 
                        items-center justify-center rounded-full mx-2.5`}
                        >
                          <img
                            src={getLogoUrl(item.image)}
                            title={item.image}
                            alt={item.image}
                            className="w-[207px] md:w-[160px] mx-2"
                          />
                        </div>
                        <div className="sm:hidden">
                          <p className="font-semibold text-base leading-normal text-light-full">
                            {item.name}
                          </p>
                          <p className="font-medium text-sm leading-normal text-[#D1D1D1]">
                            {item.text}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={"py-[60px] bg-[#1B1B1B]"}>
            <p
              className={
                "text-[30px] md:text-[18px] text-[#FCFCFC] font-semibold max-w-[1140px] px-[20px] mx-auto text-center mb-6"
              }
            >
              pSTAKE Finance provides a secure and decentralized liquid staking
              solution for the $170B+ market across BNB Chain, Solana, and
              Cosmos.{" "}
            </p>
            <ButtonLink
              className={`dropDownButton py-3" md:text-sm !w-[293px] md:!w-[200px] md:!h-[40px] font-semibold !h-[48px] mx-auto`}
              variant={"outline"}
              href={PSTAKE_APP_URL}
              scale="lg"
              target={"_blank"}
              isDisabled={false}
            >
              <span className="nav-link pophover tooltip-multiline app-btn">
                Liquid Stake Now
              </span>
            </ButtonLink>
          </div>
          <FooterBottom />
        </div>
      ) : (
        <div className={"bg-[#030303] py-[30px]"}>
          <div className="flex items-center justify-center flex-wrap sm:block sm:text-center">
            <div>
              <div className={`socialLinks flex py-3 px-8 justify-between`}>
                {iconFooterList.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    rel="noopener noreferrer"
                    className="mx-3"
                    target="_blank"
                  >
                    <Icon
                      viewClass="socialIcon fill-[#787878] !w-[16px] !h-[16px]"
                      icon={item.icon}
                    />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center flex-wrap sm:block sm:text-center">
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  {t("PRIVACY_POLICY")}
                </Link>
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
