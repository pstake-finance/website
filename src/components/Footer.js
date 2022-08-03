import React from 'react';
import ReactGa from 'react-ga';
import Icon from "./Icon";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {
    PSTAKE_TWITTER_URL,
PSTAKE_TELEGRAM_URL,
PSTAKE_YOUTUBE_URL,
PSTAKE_REDDIT_URL,
PERSISTENCE_ONE_URL,
}  from '../constants/config';
const clickOnTwitter = () => {
    ReactGa.event({
        category: 'Twitter',
        action: 'Clicked on Twitter'
    })

}

const clickOnMedium = () => {
    ReactGa.event({
        category: 'Medium',
        action: 'Clicked on Medium'
    })

}
const clickOnYoutube = () => {
    ReactGa.event({
        category: 'Youtube',
        action: 'Clicked on Youtube'
    })

}
const clickOnReddit = () => {
    ReactGa.event({
        category: 'Reddit',
        action: 'Clicked on Reddit'
    })

}
const Footer = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <section className="footer-section">
                <h3 className="section-title">{t("JOIN_OUR_COMMUNITY")}</h3>
                <div className="container">
                    <div className="icon-list">
                        <div className="row">
                            <div className="item">
                                <div className="item-body">
                                    <div className="icon-box">
                                        <Icon viewClass="social_icon_img" icon="twitter-logo"/>
                                    </div>
                                    <div className="content">
                                        <p className="name">Telegram</p>
                                        <a href={PSTAKE_TELEGRAM_URL} className="link" target="_blank" rel="noopener noreferrer" onClick={clickOnTwitter}>
                                            Join the Community
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-body">
                                    <div className="icon-box">
                                        <Icon viewClass="social_icon_img" icon="medium-m"/>
                                    </div>
                                    <div className="content">
                                        <p className="name">Twitter</p>
                                        <a href={PSTAKE_TWITTER_URL} className="link" target="_blank" rel="noopener noreferrer" onClick={clickOnMedium}>
                                            Join the Community
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <div className="item-body">
                                    <div className="icon-box">
                                        <Icon viewClass="social_icon_img" icon="youtube"/>
                                    </div>
                                    <div className="content">
                                        <p className="name">Youtube</p>
                                        <a href={PSTAKE_YOUTUBE_URL} className="link" target="_blank" rel="noopener noreferrer" onClick={clickOnYoutube}>
                                            Join the Community
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-body">
                                    <div className="icon-box">
                                        <Icon viewClass="social_icon_img" icon="reddit-round"/>
                                    </div>
                                    <div className="content">
                                        <p className="name">Reddit</p>
                                        <a href={PSTAKE_REDDIT_URL} className="link" target="_blank" rel="noopener noreferrer" onClick={clickOnReddit}>
                                            Join the Community
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="privacy-terms">
                        <Link to='/privacy' target='_blank'>{t("PRIVACY_POLICY")}</Link>
                        <p className="terms">{new Date().getFullYear()} | Built with
                            &nbsp;
                            <Icon viewClass="social_icon_ig heart" icon="footerheart"/>
                            &nbsp;
                            by &nbsp;
                            <a href={PERSISTENCE_ONE_URL} target="_blank" rel="noopener noreferrer">Persistence.</a>
                        </p>
                        <Link to='/terms' target='_blank'>{t("TERMS_OF_SERVICE")} </Link>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;
