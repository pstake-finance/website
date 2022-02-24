import React from "react";
import CT from "../../assets/featured/cointelegraph.png";

import coindesk from "../../assets/featured/coindeskb.png";

import decrypt from "../../assets/featured/decrypt.svg";
import theblock from "../../assets/featured/theblock.svg";
import yf from "../../assets/featured/YF.svg";
import {useTranslation} from "react-i18next";
import {
    
    AS_SEEN_ON4_URL,
    AS_SEEN_ON5_URL,
    AS_SEEN_ON9_URL,
    AS_SEEN_ON10_URL,
    AS_SEEN_ON11_URL,
  
} from "../../constants/config";



const Featured = () => {
    const {t} = useTranslation();
    return (
        <section className="featured-on">
            <h3 className="section-title">{t("FEATURED_ON_SECTION_TITLE")}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logos">
                        <a href={AS_SEEN_ON9_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img" src={theblock} alt="TheBlock"/>
                            </a>
                            <a href={AS_SEEN_ON4_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={coindesk}
                                     alt="Coindesk"/>
                            </a>
                            <a href={AS_SEEN_ON10_URL} target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={decrypt}
                                     alt="Decrypt"/>
                            </a>
                            <a href={AS_SEEN_ON5_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={CT}
                                         alt="Cointelegraph"/>
                                </a>
                                <a href={AS_SEEN_ON11_URL}
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={yf}
                                         alt="yahoo finance"/>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Featured;