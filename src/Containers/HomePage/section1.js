import React from 'react';
import heroimg from '../../assets/hero.png';
import Icon from "../../components/Icon";
const sectionOne = () => {
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate" data-image-src="assets/bg.svg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3 className="banner-heading">Unlocking liquidity of <span>Staked Assets</span></h3>
                            <p className="caption">Earn staking rewards and receive liquid staked representative tokens <span>to be used in DeFi to generate additional yield</span></p>
                            <div className="banner-buttons">
                                <span rel="noopener noreferrer" target="_blank" className="button xprt" href="/">

                                   <span className="hideone">Go to App</span> 
                                   <span className="hidetwo">Coming Soon!</span> 
                                </span>
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
                            <img src={heroimg} alt="pStake"/>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default sectionOne;