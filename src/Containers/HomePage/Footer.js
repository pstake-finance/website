import React from 'react';
import ReactGa from 'react-ga';
import Icon from "../../components/Icon";
import {Link} from 'react-router-dom';
import {
    PSTAKE_TWITTER_URL,
PSTAKE_TELEGRAM_URL,
PSTAKE_YOUTUBE_URL,
PSTAKE_REDDIT_URL,
PERSISTENCE_ONE_URL,
PSTAKE_MEDIUM_URL
}  from '../../constants/config';
const clickOnTwitter = () => {
    ReactGa.event({
        category: 'Twitter',
        action: 'Clicked on Twitter'
    })

}
const clickOnTelegram = () => {
    ReactGa.event({
        category: 'Telegram',
        action: 'Clicked on Telegram'
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
    return (
        <React.Fragment>
            <section className="footer-section">
                <div className="container">
                        <div className="icon-list">
                            <div className="icon-box">
                                <a href={PSTAKE_TWITTER_URL} target="_blank" rel="noopener noreferrer" onClick={clickOnTwitter}><Icon viewClass="social_icon_img" icon="twitter-logo"/></a>
                            </div>
                            <div className="icon-box">
                            <a href={PSTAKE_TELEGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={clickOnTelegram}><Icon viewClass="social_icon_ig" icon="telegram-plane"/></a>
                            </div>
                            <div className="icon-box">
                            <a href={PSTAKE_MEDIUM_URL} target="_blank" rel="noopener noreferrer" onClick={clickOnMedium}> <Icon viewClass="social_icon_img" icon="medium-m"/></a>
                            </div>
                            <div className="icon-box">
                            <a href={PSTAKE_YOUTUBE_URL} target="_blank" rel="noopener noreferrer" onClick={clickOnYoutube}> <Icon viewClass="social_icon_img" icon="youtube"/></a>
                            </div>
                            <div className="icon-box">
                            <a href={PSTAKE_REDDIT_URL} target="_blank" rel="noopener noreferrer" onClick={clickOnReddit}> <Icon viewClass="social_icon_img" icon="reddit-round"/></a>
                            </div>
                        </div>
                    <p className="terms">{new Date().getFullYear()} | Built with  <Icon viewClass="social_icon_ig heart" icon="footerheart"/> by <a href={PERSISTENCE_ONE_URL} target="_blank" rel="noopener noreferrer">Persistence.</a></p>
                    <div className="privacy-terms">
                        <Link to='/terms' target='_blank'>Terms of Service </Link> <Link to='/privacy' target='_blank'>Privacy Policy</Link>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;
