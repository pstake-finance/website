import React from "react";
import ReactGa from "react-ga4";
import Icon from "./Icon";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import {
  PSTAKE_TWITTER_URL,
  PSTAKE_TELEGRAM_URL,
  PSTAKE_YOUTUBE_URL,
  PERSISTENCE_ONE_URL,
  PSTAKE_MEDIUM_URL,
  STK_BNB_TWITTER_URL,
  STK_ATOM_TWITTER_URL,
  DISCORD_URL,
  PSTAKE_REDDIT_URL,
} from "../constants/config";

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const onClick = (name) => {
    ReactGa.event({
      category: name,
      action: `Clicked on ${name}`,
    });
  };

  let twitterUrl;

  if (router.pathname === "/") {
    twitterUrl = PSTAKE_TWITTER_URL;
  } else if (router.pathname === "/bnb") {
    twitterUrl = STK_BNB_TWITTER_URL;
  } else if (router.pathname === "/atom") {
    twitterUrl = STK_ATOM_TWITTER_URL;
  }

  const list = [
    {
      name: "Telegram",
      url: PSTAKE_TELEGRAM_URL,
      icon: "telegram-plane",
      text: "Chat with the community",
    },
    {
      name: "Twitter",
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
    {
      name: "Discord",
      url: DISCORD_URL,
      icon: "discord",
      text: "Ask Questions",
    },
    {
      name: "Reddit",
      url: PSTAKE_REDDIT_URL,
      icon: "reddit",
      text: "Interact with community",
    },
  ];

  console.log(router.pathname, "router.pathname");
  return (
    <div
      className={`bg-homePageBg3 bg-cover bg-no-repeat aos-init aos-animate ${router.pathname}`}
    >
      <div className="sectionContainer py-[100px] md:py-[40px]">
        <h3 className="sectionTitle mb-4">{t("Explore the Community")}</h3>
        <p className="sectionSubTitle max-w-[700px] mx-auto mb-8">
          {router.pathname === "/atom"
            ? "Join the discussion on liquid staking ATOM. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."
            : "Join the discussion on one of our many fronts. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."}
        </p>
        <div>
          <div className="max-w-[1000px] flex items-center justify-center mx-auto mb-12">
            <div className="flex items-center justify-center m-auto flex-wrap">
              {list.map((item, index) => (
                <div
                  className="item -lg:basis-[50%] -lg:max-w-[440px] md:max-w-full w-full px-4"
                  key={index}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    className="bg-[#25252a] flex items-center md:m-2 md:p-4 m-4 p-6 rounded-xl group"
                    rel="noopener noreferrer"
                    onClick={() => onClick(item.name)}
                  >
                    <div
                      className={`w-[46px] h-[46px] bg-[#3f3f45] flex 
                        items-center justify-center rounded-full mx-2.5  ${
                          router.pathname === "/bnb"
                            ? "group-hover:bg-[#f0b90b]"
                            : router.pathname === "/atom"
                            ? "group-hover:bg-[#595d7b]"
                            : "group-hover:bg-[#e50913]"
                        }`}
                    >
                      <Icon
                        viewClass={`social_icon_img w-[22px] fill-[#70747c] group-hover:fill-[#fff]`}
                        icon={item.icon}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-base leading-normal text-light-full">
                        {item.name}
                      </p>
                      <p className="font-medium text-sm leading-normal text-light-low">
                        {item.text}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-evenly flex-wrap sm:block sm:text-center">
            <Link
              href="/privacy"
              target="_blank"
              className="text-[#70747c] text-[12px] mx-4 sm:mb-4 block"
            >
              {t("PRIVACY_POLICY")}
            </Link>
            <p className="text-[#70747c] text-[12px] mx-4 sm:mb-4">
              {new Date().getFullYear()} | Developed by
              <a
                href={PERSISTENCE_ONE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Persistence
              </a>
            </p>
            <Link
              href="/terms"
              target="_blank"
              className="text-[#70747c] text-[12px] mx-4 sm:mb-4 block"
            >
              {t("TERMS_OF_SERVICE")}{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
