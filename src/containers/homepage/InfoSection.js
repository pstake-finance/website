import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import ModalVideo from 'react-modal-video'

import heroimg from '../../assets/info-image.png';
import ellipsegraident from '../../assets/Ellipse-graidentone.png';
import bglane from '../../assets/bglane.png';
import {
    VIDEO_URL
} from '../../constants/config';
const InfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true)
  }
    return (
        <React.Fragment>
            <section className="info-section">
                <img src={bglane} alt="pStake" className="bglane-gradient" />
                <div className="container">
                    <div className="row">
                        <div className="image-section">
                        <Link to="#" onClick={openModal} className="play-btn video-play-icon"> <img src={heroimg} alt="pStake" /></Link>

                                <ModalVideo channel='youtube' isOpen={isOpen} videoId={VIDEO_URL} onClose={() => setIsOpen(false)} />

                            <img src={ellipsegraident} alt="pStake" className="ellipse-gradient" />
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    );
}


export default InfoSection;