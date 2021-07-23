import React from 'react';
import heroimg from '../../assets/info-image.svg';
import ellipsegraident from '../../assets/Ellipse-graidentone.png';
import bglane from '../../assets/bglane.png';
const InfoSection = () => {
    return (
        <React.Fragment>
            <section className="info-section">
                <img src={bglane} alt="pStake" className="bglane-gradient" />
                <div className="container">
                    <div className="row">
                        <div className="image-section">
                            <img src={heroimg} alt="pStake" />
                            <img src={ellipsegraident} alt="pStake" className="ellipse-gradient" />
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default InfoSection;