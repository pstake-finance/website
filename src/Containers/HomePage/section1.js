import React from 'react';
import Icon from "../../components/Icon";
import pStake from "../../assets/pstake.mp4";
const sectionOne = () => {
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate" data-image-src="assets/bg.svg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 banner-main-section">
                            <h3 className="banner-heading ">Unlocking liquidity of <span>Staked Assets</span></h3>
                            <p className="caption">Securely stake your assets to earn staking rewards and receive 1:1 pegged staked representative tokens which can be used in DeFi to generate additional yield</p>
                            <div className="banner-buttons">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/"><span className="button xprt">

                                  Launch pSTake
                                  
                                </span></a>
                                <a rel="noopener noreferrer" target="_blank" className="button white-paper" href="https://discord.com/invite/SaBKpjbnhH"><Icon viewClass="social_icon_imgg" icon="discord"/>&nbsp;Join Discord</a>
                            </div>
                            <div className="social-icons">
                            <ul className="list-unstyled first-section-social-icons">
                                <a href="https://twitter.com/pStakeFinance" rel="noopener noreferrer" target="_blank"
                                   title="Twitter"> 
                                    <li><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></li>
                                </a>
                               
                                <a href="https://t.me/PersistenceOneChat" rel="noopener noreferrer" target="_blank"
                                   title="Community Chat">
                                    <li><Icon viewClass="social_icon_imgg" icon="telegram-plane"/></li>
                                </a>
                                <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank"
                                   title="Youtube">
                                    <Icon viewClass="social_icon_img" icon="medium-m"/>
                                </a>
                            </ul>
                        </div>

                        </div>
                        <div className="col-md-6 text-center aside-section">
                            {/* <img src={heroimg} alt="pStake"/> */}
                            <video className="banner-video" autoPlay="autoplay" preload="true" loop="loop"
                               muted src={pStake}>
                            <source type="video/webm" src={pStake}/>
                            <source type="video/mp4" src={pStake}/>
                            <source type="video/ogg" src={pStake}/>
                        </video>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default sectionOne;