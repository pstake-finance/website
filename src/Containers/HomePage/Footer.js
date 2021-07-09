import React from 'react';
import ReactGa from 'react-ga';
import Icon from "../../components/Icon";
import {Link} from 'react-router-dom';

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
                                <a href="https://twitter.com/pStakeFinance" target="_blank" rel="noopener noreferrer" onClick={clickOnTwitter}><Icon viewClass="social_icon_img" icon="twitter-logo"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://t.me/PersistenceOneChat" target="_blank" rel="noopener noreferrer" onClick={clickOnTelegram}><Icon viewClass="social_icon_ig" icon="telegram-plane"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://pstake.medium.com/" target="_blank" rel="noopener noreferrer" onClick={clickOnMedium}> <Icon viewClass="social_icon_img" icon="medium-m"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured" target="_blank" rel="noopener noreferrer" onClick={clickOnYoutube}> <Icon viewClass="social_icon_img" icon="youtube"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://www.reddit.com/r/PersistenceOne/" target="_blank" rel="noopener noreferrer" onClick={clickOnReddit}> <Icon viewClass="social_icon_img" icon="reddit-round"/></a>
                            </div>
                        </div>
                    <p className="terms">{new Date().getFullYear()} | Built with  <Icon viewClass="social_icon_ig heart" icon="footerheart"/> by <a href="https://persistence.one/" target="_blank" rel="noopener noreferrer">Persistence.</a></p>
                    <div className="privacy-terms">
                        <Link to='/terms' target='_blank'>Terms of Service </Link> <Link to='/privacy' target='_blank'>Privacy Policy</Link>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;
