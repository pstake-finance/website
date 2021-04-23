import React from 'react';
import Icon from "../../components/Icon";
const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer-section">
                <div className="container">
                        <div className="icon-list">
                            <div className="icon-box">
                                <a href="https://twitter.com/pStakeFinance" target="_blank" rel="noopener noreferrer" ><Icon viewClass="social_icon_img" icon="twitter-logo"/></a>
                            </div>
                            <div className="icon-box">
                                <Icon viewClass="social_icon_ig" icon="telegram-plane"/>
                            </div>
                            <div className="icon-box">
                                <Icon viewClass="social_icon_img" icon="medium-m"/>
                            </div>
                            <div className="icon-box">
                                <Icon viewClass="social_icon_img" icon="youtube"/>
                            </div>
                            <div className="icon-box">
                                <Icon viewClass="social_icon_img" icon="reddit-round"/>
                            </div>
                        </div>
                    <p className="terms">2021 © Persistence | Terms of Use.</p>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;