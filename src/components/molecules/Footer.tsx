import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  PSTAKE_YOUTUBE_URL,
  PSTAKE_MEDIUM_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  pstake_cosmos_twitter_url,
  PSTAKE_DISCORD,
  GITHUB_URL,
  PSTAKE_FORUM_URL,
} from "../../utils/config";
import FooterBottom from "./FooterBottom";
import { useTranslation } from "next-export-i18n";

const getLogoUrl = (logoName: string) => {
  return `https://raw.githubusercontent.com/persistenceOne/frontend-images/main/pstake-website/social_icons/${logoName}.svg`;
};

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation();
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
    twitterUrl = PSTAKE_TWITTER_URL;
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
      name: "X (Twitter)",
      url: twitterUrl,
      image: "twitter_full",
      text: "Follow @pStakeFinance",
    },
    {
      name: "Telegram",
      url: PSTAKE_TELEGRAM_URL,
      image: "telegram_full",
      text: t("FOOTER_ITEM_TEXT_2"),
    },
    {
      name: "Discord",
      url: PSTAKE_DISCORD,
      image: "discord_full",
      text: t("FOOTER_ITEM_TEXT_3"),
    },
    {
      name: "Blogs",
      url: PSTAKE_MEDIUM_URL,
      image: "medium_full",
      text: t("FOOTER_ITEM_TEXT_4"),
    },
    {
      name: "Github",
      url: GITHUB_URL,
      image: "github_full",
      text: t("FOOTER_ITEM_TEXT_5"),
    },
    {
      name: "Governance Forum",
      url: PSTAKE_FORUM_URL,
      image: "forum_full",
      text: t("FOOTER_ITEM_TEXT_6"),
    },
  ];

  return (
    <>
      {!router.pathname.includes("/validators") ? (
        <div className={`aos-init aos-animate pt-[40px] ${router.pathname}`}>
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
                  href="/src/pages/privacy"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  {t("PRIVACY_POLICY")}
                </Link>
                <Link
                  href="/src/pages/terms"
                  target="_blank"
                  className="text-[#787878] text-[11px] mx-4 sm:mb-4 block"
                >
                  {t("TERMS_OF_SERVICE")}
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
