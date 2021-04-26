import React from 'react';
import heroimg from '../../assets/info-image.svg';
import ellipsegraident from '../../assets/Ellipse-graidentone.svg';
const InfoSection = () => {
    return (
        <React.Fragment>
            <section className="info-section">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h3 className="heading">What is pSTAKE?</h3>
                            <p className="caption">pSTAKE allows holders of PoS tokens to securely stake their network tokens via the pSTAKE application to earn staking rewards while receiving 1:1 pegged stkTokens that represent staked tokens on the Ethereum network which can be used in the ever growing DeFi ecosystem</p>
                            <div className="image-section">
                                <img src={heroimg} alt="pStake" className="pt-5"/>
                                <img src={ellipsegraident} alt="pStake" className="ellipse-gradient"/>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default InfoSection;