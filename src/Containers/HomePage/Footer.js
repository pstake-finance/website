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
                            <a href="https://t.me/PersistenceOneChat" target="_blank" rel="noopener noreferrer" ><Icon viewClass="social_icon_ig" icon="telegram-plane"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://medium.com/persistence-blog" target="_blank" rel="noopener noreferrer" > <Icon viewClass="social_icon_img" icon="medium-m"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured" target="_blank" rel="noopener noreferrer" > <Icon viewClass="social_icon_img" icon="youtube"/></a>
                            </div>
                            <div className="icon-box">
                            <a href="https://www.reddit.com/r/PersistenceOne/" target="_blank" rel="noopener noreferrer" > <Icon viewClass="social_icon_img" icon="reddit-round"/></a>
                            </div>
                        </div>
                    <p className="terms">{new Date().getFullYear()} | Built with  <Icon viewClass="social_icon_ig" icon="footerheart"/> by Persistence.</p>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Footer;