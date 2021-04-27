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
                            <h3 className="heading">What is pSTAKE?</h3>
                            <p className="caption">1:1 pegged stkTOKENs (where TOKEN represents the PoS token, eg, staked representative for ATOM is referred to as stkATOM)*</p>
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