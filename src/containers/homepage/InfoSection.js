import React from 'react';

import ellipsegraident from '../../assets/Ellipse-graidentone.png';
import bglane from '../../assets/bglane.png';
import {
    VIDEO_URL
} from '../../constants/config';
const InfoSection = () => {
    
    return (
        <React.Fragment>
            <section className="info-section">
                <img src={bglane} alt="pStake" className="bglane-gradient" />
                <div className="container">
                    <div className="row">
                        <div className="image-section">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe
                                title="Introducing pSTAKE | Multi-chain Liquid Staking"
                                class="embed-responsive-item" src={VIDEO_URL}></iframe>
                            </div>
                          

                            <img src={ellipsegraident} alt="pStake" className="ellipse-gradient" />
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default InfoSection;