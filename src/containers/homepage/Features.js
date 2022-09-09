import React from 'react';
import featureGradient from '../../assets/bg_images/feature-gradent2.svg';
import liquidity from "../../assets/liquidity.svg";
import redemption from "../../assets/redemption.svg";
import cash from "../../assets/cash.svg";

const Features = () => {
    return (
        <React.Fragment>
            <section className="features-section aos-init aos-animate">
                <div className="container">
                    <h3 className="section-title">Why liquid stake with pSTAKE?</h3>
                    <p className="section-sub-title">Why choose between Staking or DeFi yield when you can do both with liquid staking?</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={liquidity} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Say goodbye to illiquidity</h5>
                                <p className='text-left'>Receive stkAssets to maintain liquidity of otherwise locked PoS Asset when you stake</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={cash} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Maximise your capital efficiency</h5>
                                <p className='text-left'>Generate the highest yields with staking rewards & various stkAsset DeFi opportunities, all while securing the underlying PoS chain</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <img src={featureGradient} className="feature-gradient" alt="featureGradient" />
                            <div className="feature-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={redemption} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Redemption time?</h5>
                                <p className='text-left'>Skip unstaking and unbonding process of your Pos Asset by directly swapping stkAsset from a liquidity pool</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default Features;