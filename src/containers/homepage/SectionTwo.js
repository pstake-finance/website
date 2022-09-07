import React from 'react';
import feacturegradient2 from '../../assets/feacture-gradent2.svg';
import usecase1 from "../../assets/usecase/usecase1.svg";
import usecase2 from "../../assets/usecase/usecase2.svg";
import usecase3 from "../../assets/usecase/usecase3.svg";

const SectionTwo = () => {
    return (
        <React.Fragment>
            <section className="second-section aos-init aos-animate">
                <div className="container">
                    <h3 className="section-title">Why liquid stake with pSTAKE?</h3>
                    <p className="section-sub-title">Why choose between Staking or DeFi yield when you can do both with liquid staking?</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="homecard feactures-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase1} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Say goodbye to illiquidity</h5>
                                <p>Receive stkAssets to maintain liquidity of otherwise locked PoS Asset when you stake</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className="homecard feactures-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase2} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Maximise your capital efficiency</h5>
                                <p>Generate the highest yields with staking rewards & various stkAsset DeFi opportunities, all while securing the underlying PoS chain</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <img src={feacturegradient2} className="feacturegradient2" alt="feacture" />
                            <div className="homecard feactures-card">
                                <div className="icon-box">
                                    <img className="pt-4 pb-4" src={usecase3} title="Asset" alt="Asset"/>
                                </div>
                                <h5>Redemption time?</h5>
                                <p>Skip unstaking and unbonding process of your Pos Asset by directly swapping stkAsset from a liquidity pool</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default SectionTwo;