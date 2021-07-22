import React from 'react';
import rightarrow from '../../assets/right-arrow.svg';
import InfoSection from "../../Containers/HomePage/InfoSection";

const sectionOne = () => {
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate">
                <div className="background-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 banner-main-section">
                            <h3 className="banner-heading "> Unlocking Liquidity for <span>Staked Assets</span></h3>
                            <p className="caption">Securely stake your assets to earn staking rewards and receive 1:1 pegged staked <span>representative tokens which can be used in DeFi to generate additional yield</span></p>
                            <div className="banner-buttons">
                                <a rel="noopener noreferrer" target="_blank" href="https://app.pstake.finance/">
                                    <span className="button xprt">
                                        <span className="hideone">Get Started&nbsp;</span> 
                                        <img src={rightarrow} alt="arrow"/>
                                    </span>
                               </a>
                              </div>
                        
                        </div>
                      
                    </div>
                </div>
                <InfoSection/>
                </div>
               
            </section>
        </React.Fragment >
    );
}


export default sectionOne;