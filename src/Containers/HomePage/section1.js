import React from 'react';
import heroimg from '../../assets/hero.svg';
const sectionOne = () => {
    return (
        <React.Fragment>
            <section className="banner-section aos-init aos-animate" data-image-src="assets/bg.svg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3 className="banner-heading">Unlocking liquidity of Staked Assets</h3>
                            <p className="caption">Stake PoS tokens through pSTAKE to earn staking rewards and receive 1:1 pegged stkToken which can be used in DeFi to generate additional yield</p>
                            <div className="banner-buttons">
                                <a rel="noopener noreferrer" target="_blank" className="button xprt" href="https://demo.pstake.persistence.one/">

                                    Go to App
                                </a>
                                <a rel="noopener noreferrer" target="_blank" className="button white-paper" href="https://discord.com/invite/SaBKpjbnhH">Join Discord</a>
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