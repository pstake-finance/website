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
      icon: <Icon viewClass="social_icon_img" icon="telegram-plane" />,
      text: "Chat with the community",
    },
    {
      name: "Twitter",
      url: twitterUrl,
      icon: <Icon viewClass="social_icon_img" icon="twitter-logo" />,
      text: "Stay updated",
    },
    {
      name: "Blogs",
      url: PSTAKE_MEDIUM_URL,
      icon: <Icon viewClass="social_icon_img" icon="medium-m" />,
      text: "Learn about pSTAKE",
    },
    {
      name: "YouTube",
      url: PSTAKE_YOUTUBE_URL,
      icon: <Icon viewClass="social_icon_img" icon="youtube" />,
      text: "Subscribe for tutorials",
    },
    {
      name: "Discord",
      url: DISCORD_URL,
      icon: <Icon viewClass="social_icon_img" icon="discord" />,
      text: "Ask Questions",
    },
    {
      name: "Reddit",
      url: PSTAKE_REDDIT_URL,
      icon: <Icon viewClass="social_icon_img" icon="reddit" />,
      text: "Interact with community",
    },
  ];

  return (
    <React.Fragment>
      <section className="footer-section">
        <h3 className="section-title">{t("Explore the Community")}</h3>
        <p className="section-sub-title">
          {router.pathname === "/atom"
            ? "Join the discussion on liquid staking ATOM. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."
            : "Join the discussion on one of our many fronts. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard."}
        </p>
        <div className="container">
          <div className="icon-list d-flex align-items-center justify-content-center m-auto">
            <div className="row justify-content-center">
              {list.map((item, index) => (
                <div className="item col-md-6" key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    className="item-body d-flex align-items-center"
                    rel="noopener noreferrer"
                    onClick={() => onClick(item.name)}
                  >
                    <div className="icon-box d-flex align-items-center justify-content-center">
                      {item.icon}
                    </div>
                    <div className="content">
                      <p className="name">{item.name}</p>
                      <p className="link">{item.text}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="privacy-terms d-flex align-items-center">
            <Link href="/privacy" target="_blank">
              {t("PRIVACY_POLICY")}
            </Link>
            <p className="terms text-center">
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
            <Link href="/terms" target="_blank">
              {t("TERMS_OF_SERVICE")}{" "}
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
