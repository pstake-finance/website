import React from 'react';
import heroimg from '../../assets/info-image.png';
import ellipsegraident from '../../assets/Ellipse-graidentone.png';
const InfoSection = () => {
    return (
        <React.Fragment>
            <section className="info-section">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h3 className="heading" align="center">What is pSTAKE?</h3>
                            <br/>
                            <p className="caption">pSTAKE allows holders of PoS tokens to securely stake their network tokens to earn staking rewards while receiving 1:1 pegged ERC-20 pTOKENs that represent staked tokens which can then be used in Ethereum’s vast DeFi ecosystem</p>
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