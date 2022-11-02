import React from 'react';
import ReactGa from 'react-ga4';
import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_TWITTER_URL,
    PSTAKE_TELEGRAM_URL,
    PSTAKE_YOUTUBE_URL,
    PERSISTENCE_ONE_URL,
    PSTAKE_MEDIUM_URL,
    STK_BNB_TWITTER_URL,
    STK_ATOM_TWITTER_URL,
    STK_ATOM_SUBSCRIBE_URL,
} from '../constants/config';

const onClick = (name) => {
    ReactGa.event({
        category: name,
        action: `Clicked on ${name}`
    })
}

let twitterUrl;

if (window.location.pathname === "/"){
    twitterUrl = PSTAKE_TWITTER_URL;
}else if (window.location.pathname === "/bnb"){
    twitterUrl = STK_BNB_TWITTER_URL;
}else if (window.location.pathname === "/atom"){
    twitterUrl = STK_ATOM_TWITTER_URL
}

const list = [
    {
        name:"Telegram",
        url:PSTAKE_TELEGRAM_URL,
        icon:<Icon viewClass="social_icon_img" icon="telegram-plane"/>,
        text:'Chat with the community'
    },
    {
        name:"Twitter",
        url: twitterUrl,
        icon:<Icon viewClass="social_icon_img" icon="twitter-logo"/>,
        text:'Stay updated'
    },
    {
        name:"Blogs",
        url:PSTAKE_MEDIUM_URL,
        icon:<Icon viewClass="social_icon_img" icon="medium-m"/>,
        text:'Learn about pSTAKE'
    },
    {
        name:"Youtube",
        url:PSTAKE_YOUTUBE_URL,
        icon:<Icon viewClass="social_icon_img" icon="youtube"/>,
        text:'Learn about pSTAKE'
    },
]

const Footer = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="footer-section">
                <h3 className="section-title">{t("Explore the Community")}</h3>
                <p className="section-sub-title">
                {window.location.pathname === "/atom" ? "Join the discussion on liquid staking ATOM. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard." 
                : "Join the discussion on one of our many fronts. Learn about the pSTAKE Liquid Staking Ecosystem, meet others like you & make your voice heard." }
                </p>
                <div className="container">
                    <div className="icon-list d-flex align-items-center justify-content-center m-auto">
                        <div className="row justify-content-center">
                            {
                                list.map((item, index) => (
                                    <div className="item col-md-6" key={index}>
                                        <a href={item.url}
                                           target="_blank"
                                           className="item-body d-flex align-items-center"
                                           rel="noopener noreferrer"
                                           onClick={()=>onClick(item.name)}>
                                            <div className="icon-box d-flex align-items-center justify-content-center">
                                                {item.icon}
                                            </div>
                                            <div className="content">
                                                <p className="name">{item.name}</p>
                                                <p className="link">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                            {window.location.pathname === "/atom" ?
                                <div className="col-md-12 subscribe buttons m-0">
                                    <div className="item-body">
                                        <p className="heading">Subscribe here for our stkATOM newsletter</p>
                                        <a rel="noopener noreferrer" target="_blank" href={STK_ATOM_SUBSCRIBE_URL}
                                           className="button-link primary">
                                        <span className="button xprt">
                                            <span className="hideone">{t("Subscribe")}&nbsp;</span>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                                : ""
                            }
                        </div>

                    </div>
                    <div className="privacy-terms d-flex align-items-center">
                        <Link to='/privacy' target='_blank'>{t("PRIVACY_POLICY")}</Link>
                        <p className="terms text-center">{new Date().getFullYear()} | Developed by
                            <a href={PERSISTENCE_ONE_URL} target="_blank" rel="noopener noreferrer"> Persistence</a>
                        </p>
                        <Link to='/terms' target='_blank'>{t("TERMS_OF_SERVICE")} </Link>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;
