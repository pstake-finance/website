import React from 'react';
import ReactGa from 'react-ga';
import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_TWITTER_URL,
    PSTAKE_TELEGRAM_URL,
    PSTAKE_YOUTUBE_URL,
    PERSISTENCE_ONE_URL, PSTAKE_MEDIUM_URL,
} from '../constants/config';

const onClick = (name) => {
    ReactGa.event({
        category: name,
        action: `Clicked on ${name}`
    })
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
        url:PSTAKE_TWITTER_URL,
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
                <p className="section-sub-title">Join the discussion on one of our many fronts. Learn about the pSTAKE Liquid Staking Ecosystem,
                    meet others like you & make your voice heard.</p>
                <div className="container">
                    <div className="icon-list">
                        <div className="row">
                            {
                                list.map((item, index) => (
                                    <div className="item cold-md-6" key={index}>
                                        <a href={item.url}
                                           target="_blank"
                                           className="item-body"
                                           rel="noopener noreferrer"
                                           onClick={()=>onClick(item.name)}>
                                            <div className="icon-box">
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
                        </div>
                    </div>
                    <div className="privacy-terms">
                        <Link to='/privacy' target='_blank'>{t("PRIVACY_POLICY")}</Link>
                        <p className="terms">{new Date().getFullYear()} | Developed by
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
